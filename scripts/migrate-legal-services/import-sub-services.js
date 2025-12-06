const fs = require("fs");
const fetch = require("node-fetch");

/**
 * Import legal sub-services to Strapi via GraphQL
 */

const { generateSlug } = require("./transform-data");

/**
 * Build GraphQL mutation for creating a legal sub-service
 */
function buildCreateMutation() {
  return `
    mutation CreateLegalSubService($data: LegalSubServiceInput!, $locale: I18NLocaleCode) {
      createLegalSubService(data: $data, locale: $locale) {
        documentId
        name
        slug
        order
      }
    }
  `;
}

/**
 * Build GraphQL mutation for updating a legal sub-service (for adding localization)
 */
function buildUpdateMutation() {
  return `
    mutation UpdateLegalSubService($documentId: ID!, $data: LegalSubServiceInput!, $locale: I18NLocaleCode) {
      updateLegalSubService(documentId: $documentId, data: $data, locale: $locale) {
        documentId
        name
        slug
        order
        locale
      }
    }
  `;
}

/**
 * Prepare sub-service data for GraphQL mutation
 */
function prepareSubServiceData(service, categoryDocumentId) {
  const data = {
    name: service.name,
    slug: service.order.toString(), // Use numeric order as slug
    shortDescription: service.shortDescription,
    button_label: service.button_label,
    currency: service.currency,
    startFromPrice: service.startFromPrice,
    finishPeriodMin: service.finishPeriodMin,
    finishPeriodMax: service.finishPeriodMax,
    order: service.order,
    legal_service_category: categoryDocumentId,
    publishedAt: new Date().toISOString(),
  };

  // Add description component (with title, description, icon, icon_color_code)
  if (service.description?.length > 0) {
    data.description = service.description.map((desc) => ({
      title: desc.title || null,
      description: desc.description || null,
      icon: desc.icon || null,
      icon_color_code: desc.icon_color_code || null,
    }));
  }

  // Add documents component (required documents array)
  if (service.documents?.length > 0) {
    data.documents = service.documents;
  }

  // Add conditions component (service conditions array)
  if (service.conditions?.length > 0) {
    data.conditions = service.conditions;
  }

  // Add requirements component if available (not commonly used)
  if (service.requirements?.length > 0) {
    data.requirements = service.requirements;
  }

  // Add steps component if available (not commonly used)
  if (service.steps?.length > 0) {
    data.steps = service.steps;
  }

  // Skip icon - will be added manually due to GraphQL media bug

  return { data };
}

/**
 * Execute GraphQL mutation
 */
async function executeMutation(mutation, variables, strapiUrl, apiToken) {
  const response = await fetch(`${strapiUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
    body: JSON.stringify({
      query: mutation,
      variables,
    }),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(JSON.stringify(result.errors, null, 2));
  }

  return result.data;
}

/**
 * Check if sub-service already exists in any locale
 */
async function subServiceExists(order, locale, strapiUrl, apiToken) {
  const query = `
    query CheckSubService($order: Int!, $locale: I18NLocaleCode) {
      legalSubServices(filters: { order: { eq: $order } }, locale: $locale) {
        documentId
        name
        order
        locale
      }
    }
  `;

  try {
    const result = await executeMutation(
      query,
      { order, locale },
      strapiUrl,
      apiToken
    );
    const services = result.legalSubServices || [];
    return Array.isArray(services) && services.length > 0 ? services[0] : null;
  } catch (error) {
    console.error(`Error checking sub-service existence: ${error.message}`);
    return null;
  }
}

/**
 * Get the base (Arabic) version of a service by order
 */
async function getBaseService(order, strapiUrl, apiToken) {
  return await subServiceExists(order, "ar", strapiUrl, apiToken);
}

/**
 * Import sub-services
 */
async function importSubServices(
  servicesFile,
  categoryMappingFile,
  locale,
  strapiUrl,
  apiToken,
  outputDir
) {
  console.log(`\n📋 Importing Legal Sub-Services`);
  console.log(`Services file: ${servicesFile}`);
  console.log(`Category mapping: ${categoryMappingFile}`);
  console.log(`Locale: ${locale}`);
  console.log(`Strapi URL: ${strapiUrl}\n`);

  const services = JSON.parse(fs.readFileSync(servicesFile, "utf8"));
  const categoryMapping = JSON.parse(
    fs.readFileSync(categoryMappingFile, "utf8")
  );
  const createMutation = buildCreateMutation();
  const updateMutation = buildUpdateMutation();

  let createdCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  const results = [];

  for (let i = 0; i < services.length; i++) {
    const service = services[i];

    // Progress logging every 25 items for large dataset
    if (i % 25 === 0 || i === services.length - 1) {
      console.log(`\n--- Progress: ${i + 1}/${services.length} ---`);
    }

    console.log(`[${i + 1}/${services.length}] Processing: ${service.name}`);

    try {
      // Get category documentId from mapping
      const categoryDocumentId = categoryMapping[service.categoryOrder];
      if (!categoryDocumentId) {
        throw new Error(
          `Category not found for order: ${service.categoryOrder}`
        );
      }

      // Check if service exists in current locale
      console.log(`  ↳ Checking if service exists in locale "${locale}"...`);
      const existingInLocale = await subServiceExists(
        service.order,
        locale,
        strapiUrl,
        apiToken
      );

      if (existingInLocale) {
        console.log(
          `  ⊙ Already exists in ${locale} (documentId: ${existingInLocale.documentId})`
        );
        skippedCount++;
        results.push({
          service: service.name,
          order: service.order,
          categoryOrder: service.categoryOrder,
          status: "skipped",
          documentId: existingInLocale.documentId,
        });
        continue;
      }

      // For non-Arabic locales, check if base (Arabic) version exists
      if (locale !== "ar") {
        console.log(`  ↳ Looking for base Arabic version...`);
        const baseService = await getBaseService(
          service.order,
          strapiUrl,
          apiToken
        );

        if (baseService) {
          // Add localization to existing service
          console.log(
            `  ↳ Adding ${locale} localization to existing service...`
          );
          const variables = {
            documentId: baseService.documentId,
            ...prepareSubServiceData(service, categoryDocumentId),
            locale: locale,
          };

          const data = await executeMutation(
            updateMutation,
            variables,
            strapiUrl,
            apiToken
          );
          const updated = data.updateLegalSubService;

          createdCount++;
          console.log(
            `  ✓ Localization added successfully (documentId: ${updated.documentId})`
          );

          results.push({
            service: service.name,
            order: service.order,
            categoryOrder: service.categoryOrder,
            status: "localized",
            documentId: updated.documentId,
          });
          continue;
        } else {
          throw new Error(
            `Base Arabic service not found for order ${service.order}. Arabic services must be imported first.`
          );
        }
      }

      // Create new sub-service (for Arabic locale)
      console.log(`  ↳ Creating new service...`);
      const variables = {
        ...prepareSubServiceData(service, categoryDocumentId),
        locale: locale,
      };

      const data = await executeMutation(
        createMutation,
        variables,
        strapiUrl,
        apiToken
      );
      const created = data.createLegalSubService;

      createdCount++;
      console.log(
        `  ✓ Created successfully (documentId: ${created.documentId})`
      );

      results.push({
        service: service.name,
        order: service.order,
        categoryOrder: service.categoryOrder,
        status: "created",
        documentId: created.documentId,
      });
    } catch (error) {
      failedCount++;
      console.error(`  ✗ Failed: ${error.message}`);
      results.push({
        service: service.name,
        order: service.order,
        categoryOrder: service.categoryOrder,
        status: "failed",
        error: error.message,
      });
    }
  }

  // Save results
  const resultsFile = `${outputDir}/service-import-results-${locale}.json`;
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));

  console.log(`\n\n📊 Import Summary:`);
  console.log(`  Created: ${createdCount}`);
  console.log(`  Skipped: ${skippedCount}`);
  console.log(`  Failed: ${failedCount}`);
  console.log(`\n💾 Results saved to: ${resultsFile}`);

  return {
    resultsFile,
    createdCount,
    skippedCount,
    failedCount,
  };
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 6) {
    console.error(
      "Usage: node import-sub-services.js <services-json> <category-mapping-json> <locale> <strapi-url> <api-token> <output-dir>"
    );
    process.exit(1);
  }

  const [
    servicesFile,
    categoryMappingFile,
    locale,
    strapiUrl,
    apiToken,
    outputDir,
  ] = args;

  if (!fs.existsSync(servicesFile)) {
    console.error(`Error: Services file not found: ${servicesFile}`);
    process.exit(1);
  }

  if (!fs.existsSync(categoryMappingFile)) {
    console.error(
      `Error: Category mapping file not found: ${categoryMappingFile}`
    );
    process.exit(1);
  }

  importSubServices(
    servicesFile,
    categoryMappingFile,
    locale,
    strapiUrl,
    apiToken,
    outputDir
  )
    .then(() => {
      console.log("\n✅ Sub-service import completed!");
    })
    .catch((error) => {
      console.error("\n❌ Sub-service import failed:", error.message);
      console.error(error.stack);
      process.exit(1);
    });
}

module.exports = { importSubServices };
