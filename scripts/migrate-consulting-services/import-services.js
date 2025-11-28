/**
 * GraphQL mutation script for importing consulting services into Strapi
 */

const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const https = require("https");

// HTTPS agent to handle expired SSL certificates
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

/**
 * Download and upload icon to Strapi
 */
async function uploadIcon(iconUrl, iconName, strapiUrl, apiToken) {
  try {
    const fetch = (await import("node-fetch")).default;

    // Download the icon
    const response = await fetch(iconUrl, { agent: httpsAgent });
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`);
    }

    const buffer = await response.buffer();
    // Use original icon name, just ensure it has .png extension
    const fileName = iconName.endsWith(".png") ? iconName : `${iconName}.png`;

    // Upload to Strapi
    const formData = new FormData();
    formData.append("files", buffer, {
      filename: fileName,
      contentType: "image/png",
    });

    const uploadResponse = await fetch(`${strapiUrl}/api/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      body: formData,
    });

    if (!uploadResponse.ok) {
      const error = await uploadResponse.text();
      throw new Error(`Upload failed: ${error}`);
    }

    const uploadResult = await uploadResponse.json();
    return uploadResult[0]?.id || null;
  } catch (error) {
    console.error(`  ✗ Failed to upload icon: ${error.message}`);
    return null;
  }
}

/**
 * Execute GraphQL mutation
 */
async function executeGraphQL(query, variables, strapiUrl, apiToken) {
  const fetch = (await import("node-fetch")).default;

  const response = await fetch(`${strapiUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(JSON.stringify(result.errors, null, 2));
  }

  return result.data;
}

/**
 * Map icon URLs to media IDs in service data
 * This is now deprecated - we upload icons directly during import
 */
function mapMediaIds(service, urlToMediaIdMap, originalService) {
  const mapped = { ...service };

  // Icons are now handled during import, not via media map
  delete mapped.iconUrl;
  delete mapped.iconName;

  // Map description icons
  if (Array.isArray(mapped.description)) {
    mapped.description = mapped.description.map((desc, idx) => {
      const original = originalService.description?.[idx];
      if (original?.icon?.url && urlToMediaIdMap[original.icon.url]) {
        return { ...desc, icon: urlToMediaIdMap[original.icon.url] };
      }
      // Remove icon field if URL not in map (failed upload or placeholder)
      const { icon, ...descWithoutIcon } = desc;
      return descWithoutIcon;
    });
  }

  // Map step icons
  if (Array.isArray(mapped.steps)) {
    mapped.steps = mapped.steps.map((step, idx) => {
      const original = originalService.steps?.[idx];
      if (original?.icon?.url && urlToMediaIdMap[original.icon.url]) {
        return { ...step, icon: urlToMediaIdMap[original.icon.url] };
      }
      // Remove icon field if URL not in map (failed upload or placeholder)
      const { icon, ...stepWithoutIcon } = step;
      return stepWithoutIcon;
    });
  }

  // Map benefit icons
  if (Array.isArray(mapped.benefits)) {
    mapped.benefits = mapped.benefits.map((benefit, idx) => {
      const original = originalService.benefits?.[idx];
      if (original?.icon?.url && urlToMediaIdMap[original.icon.url]) {
        return { ...benefit, icon: urlToMediaIdMap[original.icon.url] };
      }
      // Remove icon field if URL not in map (failed upload or placeholder)
      const { icon, ...benefitWithoutIcon } = benefit;
      return benefitWithoutIcon;
    });
  }

  return mapped;
}

/**
 * Build GraphQL mutation for creating a consulting service
 */
function buildCreateMutation() {
  return `
    mutation CreateConsultingService($data: ConsultingServiceInput!, $locale: I18NLocaleCode) {
      createConsultingService(data: $data, locale: $locale) {
        documentId
        name
        slug
        order
      }
    }
  `;
}

/**
 * Build GraphQL mutation for updating a consulting service
 */
function buildUpdateMutation() {
  return `
    mutation UpdateConsultingService($documentId: ID!, $data: ConsultingServiceInput!, $locale: I18NLocaleCode) {
      updateConsultingService(documentId: $documentId, data: $data, locale: $locale) {
        documentId
        name
        slug
        locale
      }
    }
  `;
}

/**
 * Check if service already exists
 */
async function checkServiceExists(slug, locale, strapiUrl, apiToken) {
  const query = `
    query GetConsultingService($slug: String!, $locale: I18NLocaleCode) {
      consultingServices(filters: { slug: { eq: $slug } }, locale: $locale) {
        documentId
        name
        slug
      }
    }
  `;

  try {
    const result = await executeGraphQL(
      query,
      { slug, locale },
      strapiUrl,
      apiToken
    );
    const services = result.consultingServices || [];
    return Array.isArray(services) && services.length > 0 ? services[0] : null;
  } catch (error) {
    console.error(`Error checking service existence: ${error.message}`);
    return null;
  }
}

/**
 * Helper to transliterate Arabic to Latin for slug generation
 */
function generateSlug(text) {
  // Simple transliteration map for common Arabic characters
  const arabicToLatin = {
    أ: "a",
    إ: "i",
    آ: "a",
    ا: "a",
    ب: "b",
    ت: "t",
    ث: "th",
    ج: "j",
    ح: "h",
    خ: "kh",
    د: "d",
    ذ: "dh",
    ر: "r",
    ز: "z",
    س: "s",
    ش: "sh",
    ص: "s",
    ض: "d",
    ط: "t",
    ظ: "z",
    ع: "a",
    غ: "gh",
    ف: "f",
    ق: "q",
    ك: "k",
    ل: "l",
    م: "m",
    ن: "n",
    ه: "h",
    و: "w",
    ي: "y",
    ة: "a",
    ى: "a",
    ئ: "y",
    ء: "a",
    ؤ: "w",
  };

  // Convert to lowercase and transliterate
  let slug = text.toLowerCase();
  for (const [arabic, latin] of Object.entries(arabicToLatin)) {
    slug = slug.replace(new RegExp(arabic, "g"), latin);
  }

  // Remove special characters and replace spaces with hyphens
  slug = slug
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Collapse multiple hyphens
    .replace(/^-|-$/g, ""); // Trim hyphens from edges

  return slug;
}

/**
 * Prepare service data for GraphQL mutation
 */
function prepareServiceData(service, iconId = null) {
  const data = {
    name: service.name,
    slug: generateSlug(service.name), // Generate ASCII-safe slug from name
    shortDescription: service.shortDescription,
    button_label: service.button_label,
    currency: service.currency,
    startFromPrice: service.startFromPrice,
    finishPeriodMin: service.finishPeriodMin,
    finishPeriodMax: service.finishPeriodMax,
    order: service.order,
  };

  // Add icon if uploaded successfully
  if (iconId) {
    data.icon = iconId;
  }

  // Add components
  if (service.description?.length > 0) {
    data.description = service.description;
  }

  if (service.requirements?.length > 0) {
    data.requirements = service.requirements;
  }

  if (service.steps?.length > 0) {
    data.steps = service.steps;
  }

  if (service.benefits?.length > 0) {
    data.benefits = service.benefits;
  }

  return data;
}

/**
 * Import services into Strapi
 */
async function importServices(
  transformedServicesFile,
  originalServicesFile,
  mediaMapFile,
  strapiUrl,
  apiToken,
  locale
) {
  console.log(`\nImporting consulting services for locale: ${locale}`);
  console.log("=".repeat(60));

  // Read files
  const transformedServices = JSON.parse(
    fs.readFileSync(transformedServicesFile, "utf-8")
  );
  const originalServices = JSON.parse(
    fs.readFileSync(originalServicesFile, "utf-8")
  );
  const urlToMediaIdMap = JSON.parse(fs.readFileSync(mediaMapFile, "utf-8"));

  const results = {
    created: [],
    updated: [],
    failed: [],
    skipped: [],
  };

  for (let i = 0; i < transformedServices.length; i++) {
    const transformedService = transformedServices[i];
    const originalService = originalServices[i];

    console.log(
      `\n[${i + 1}/${transformedServices.length}] Processing: ${
        transformedService.name
      }`
    );

    try {
      // Upload icon if exists
      let iconId = null;
      if (originalService.icon?.url) {
        console.log(`  ↳ Uploading icon: ${originalService.icon.name}`);
        iconId = await uploadIcon(
          originalService.icon.url,
          originalService.icon.name,
          strapiUrl,
          apiToken
        );
        if (iconId) {
          console.log(`    ✓ Icon uploaded (ID: ${iconId})`);
        }
      }

      // Map media IDs for nested components
      const serviceWithMedia = mapMediaIds(
        transformedService,
        urlToMediaIdMap,
        originalService
      );

      // Prepare data with icon
      const data = prepareServiceData(serviceWithMedia, iconId);

      // Check if service exists
      console.log(`  ↳ Checking if service exists...`);
      const existingService = await checkServiceExists(
        data.slug,
        locale,
        strapiUrl,
        apiToken
      );

      if (existingService) {
        console.log(
          `  ↳ Service exists (documentId: ${existingService.documentId}), updating...`
        );

        const updateMutation = buildUpdateMutation();
        const result = await executeGraphQL(
          updateMutation,
          { documentId: existingService.documentId, data, locale },
          strapiUrl,
          apiToken
        );

        results.updated.push({
          slug: data.slug,
          documentId: result.updateConsultingService.documentId,
        });

        console.log(
          `  ✓ Updated successfully (documentId: ${result.updateConsultingService.documentId})`
        );
      } else {
        console.log(`  ↳ Creating new service...`);

        const createMutation = buildCreateMutation();
        const result = await executeGraphQL(
          createMutation,
          { data, locale },
          strapiUrl,
          apiToken
        );

        results.created.push({
          slug: data.slug,
          documentId: result.createConsultingService.documentId,
        });

        console.log(
          `  ✓ Created successfully (documentId: ${result.createConsultingService.documentId})`
        );
      }

      // Small delay to avoid overwhelming the server
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
      results.failed.push({
        slug: transformedService.slug,
        name: transformedService.name,
        error: error.message,
      });
    }
  }

  // Save results
  const resultsPath = path.join(
    path.dirname(transformedServicesFile),
    `import-results-${locale}.json`
  );
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));

  console.log("\n" + "=".repeat(60));
  console.log("📊 Import Summary:");
  console.log(`  Created: ${results.created.length}`);
  console.log(`  Updated: ${results.updated.length}`);
  console.log(`  Failed: ${results.failed.length}`);
  console.log(`  Skipped: ${results.skipped.length}`);
  console.log(`\n📄 Results saved to: ${resultsPath}`);

  if (results.failed.length > 0) {
    console.log(
      "\n⚠️  Some imports failed. Check the results file for details."
    );
  }

  return results;
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 5) {
    console.error(
      "Usage: node import-services.js <transformed-file> <original-file> <media-map-file> <strapi-url> <api-token> <locale>"
    );
    console.error(
      "Example: node import-services.js ./output/transformed-services.json ../../Services-Data/Consulting/consulting_services_ar.json ./output/url-to-media-id-map.json http://localhost:1337 your-token ar"
    );
    process.exit(1);
  }

  const transformedFile = path.resolve(args[0]);
  const originalFile = path.resolve(args[1]);
  const mediaMapFile = path.resolve(args[2]);
  const strapiUrl = args[3];
  const apiToken = args[4];
  const locale = args[5] || "ar";

  // Validate files
  if (!fs.existsSync(transformedFile)) {
    console.error(`Transformed services file not found: ${transformedFile}`);
    process.exit(1);
  }

  if (!fs.existsSync(originalFile)) {
    console.error(`Original services file not found: ${originalFile}`);
    process.exit(1);
  }

  if (!fs.existsSync(mediaMapFile)) {
    console.error(`Media map file not found: ${mediaMapFile}`);
    process.exit(1);
  }

  importServices(
    transformedFile,
    originalFile,
    mediaMapFile,
    strapiUrl,
    apiToken,
    locale
  )
    .then(() => {
      console.log("\n🎉 Import process completed!");
    })
    .catch((error) => {
      console.error("\n❌ Import failed:", error.message);
      console.error(error.stack);
      process.exit(1);
    });
}

module.exports = { importServices, checkServiceExists, prepareServiceData };
