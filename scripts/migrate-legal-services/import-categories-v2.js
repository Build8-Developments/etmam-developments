const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const FormData = require("form-data");
const https = require("https");

/**
 * Import legal service categories with full support for:
 * - Both AR and EN localizations
 * - Descriptions
 * - Icon uploads and attachments
 */

const { generateSlug } = require("./transform-data");

// HTTPS agent to handle expired SSL certificates
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

/**
 * Download and upload icon to Strapi
 */
async function uploadIcon(iconUrl, iconName, strapiUrl, apiToken) {
  try {
    // Download the icon
    const response = await fetch(iconUrl, { agent: httpsAgent });
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`);
    }

    const buffer = await response.buffer();
    const fileName = iconName.replace(/[^a-zA-Z0-9.-]/g, "_") + ".png";

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
 * Build GraphQL mutation for creating a category
 */
function buildCreateMutation() {
  return `
    mutation CreateCategory($data: LegalServiceCategoryInput!, $locale: I18NLocaleCode) {
      createLegalServiceCategory(data: $data, locale: $locale) {
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
 * Build GraphQL mutation for updating a category (for adding English translation)
 */
function buildUpdateMutation() {
  return `
    mutation UpdateCategory($documentId: ID!, $data: LegalServiceCategoryInput!, $locale: I18NLocaleCode) {
      updateLegalServiceCategory(documentId: $documentId, data: $data, locale: $locale) {
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
 * Check if category exists by order
 */
async function categoryExists(order, locale, strapiUrl, apiToken) {
  const query = `
    query CheckCategory($order: Int!, $locale: I18NLocaleCode) {
      legalServiceCategories(filters: { order: { eq: $order } }, locale: $locale) {
        documentId
        name
        order
        locale
      }
    }
  `;

  const response = await fetch(`${strapiUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
    body: JSON.stringify({
      query,
      variables: { order, locale },
    }),
  });

  const result = await response.json();

  if (result.errors) {
    console.error(
      "Error checking category existence:",
      result.errors[0]?.message
    );
    return null;
  }

  const categories = result.data?.legalServiceCategories || [];
  return categories.length > 0 ? categories[0] : null;
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
 * Import categories with full localization support
 */
async function importCategoriesWithLocalizations(
  arCategoriesFile,
  enCategoriesFile,
  strapiUrl,
  apiToken,
  outputDir
) {
  console.log("\n🏛️  Importing Legal Service Categories (AR + EN)");
  console.log(`AR File: ${arCategoriesFile}`);
  console.log(`EN File: ${enCategoriesFile}`);
  console.log(`Strapi URL: ${strapiUrl}\n`);

  // Read category files
  const arCategories = JSON.parse(
    fs.readFileSync(arCategoriesFile, "utf8")
  ).categories;
  const enCategories = JSON.parse(
    fs.readFileSync(enCategoriesFile, "utf8")
  ).categories;

  // Create category_id-to-category maps for easy lookup
  const arMap = new Map(arCategories.map((cat) => [cat.category_id, cat]));
  const enMap = new Map(enCategories.map((cat) => [cat.category_id, cat]));

  const createMutation = buildCreateMutation();
  const updateMutation = buildUpdateMutation();

  let createdCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  const results = [];
  const categoryIdToDocumentIdMap = {};

  // Get all unique category IDs
  const allCategoryIds = new Set([...arMap.keys(), ...enMap.keys()]);
  const sortedCategoryIds = Array.from(allCategoryIds).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );

  for (let i = 0; i < sortedCategoryIds.length; i++) {
    const categoryId = sortedCategoryIds[i];
    const arCategory = arMap.get(categoryId);
    const enCategory = enMap.get(categoryId);

    console.log(
      `[${i + 1}/${
        sortedCategoryIds.length
      }] Processing category_id: ${categoryId}`
    );

    if (!arCategory) {
      console.log(
        `  ⚠ No Arabic category found for category_id ${categoryId}, skipping`
      );
      failedCount++;
      continue;
    }

    try {
      // Upload icon (shared between AR and EN)
      let iconId = null;
      if (arCategory.icon?.url) {
        console.log(`  ↳ Uploading icon: ${arCategory.icon.name}`);
        iconId = await uploadIcon(
          arCategory.icon.url,
          arCategory.icon.name,
          strapiUrl,
          apiToken
        );
        if (iconId) {
          console.log(`    ✓ Icon uploaded (ID: ${iconId})`);
        }
      }

      // Check if Arabic version exists
      console.log(`  ↳ Checking for Arabic version...`);
      const existingAr = await categoryExists(
        parseInt(categoryId, 10),
        "ar",
        strapiUrl,
        apiToken
      );

      let documentId;

      if (existingAr) {
        console.log(
          `    ⊙ Arabic version exists (documentId: ${existingAr.documentId})`
        );
        documentId = existingAr.documentId;
        skippedCount++;
      } else {
        // Create Arabic version
        console.log(`  ↳ Creating Arabic version...`);
        const categoryIdNum = parseInt(arCategory.category_id, 10);
        const arData = {
          name: arCategory.name,
          slug: categoryIdNum.toString(),
          order: categoryIdNum,
          description: arCategory.description || null,
          icon: iconId,
          publishedAt: new Date().toISOString(),
        };

        const arResult = await executeMutation(
          createMutation,
          { data: arData, locale: "ar" },
          strapiUrl,
          apiToken
        );

        documentId = arResult.createLegalServiceCategory.documentId;
        console.log(`    ✓ Arabic created (documentId: ${documentId})`);
        createdCount++;
      }

      // Handle English version
      if (enCategory) {
        console.log(`  ↳ Checking for English version...`);
        const existingEn = await categoryExists(
          parseInt(categoryId, 10),
          "en",
          strapiUrl,
          apiToken
        );

        if (existingEn) {
          console.log(`    ⊙ English version already exists`);
        } else {
          console.log(`  ↳ Creating English version...`);
          const categoryIdNum = parseInt(enCategory.category_id, 10);
          const enData = {
            name: enCategory.name,
            slug: categoryIdNum.toString(),
            order: categoryIdNum,
            description: enCategory.description || null,
            icon: iconId,
            publishedAt: new Date().toISOString(),
          };

          await executeMutation(
            updateMutation,
            { documentId, data: enData, locale: "en" },
            strapiUrl,
            apiToken
          );

          console.log(`    ✓ English created`);
        }
      } else {
        console.log(
          `  ⚠ No English category found for category_id ${categoryId}`
        );
      }

      categoryIdToDocumentIdMap[categoryId] = documentId;

      results.push({
        category: arCategory.name,
        category_id: categoryId,
        order: arCategory.order,
        status: "created",
        documentId: documentId,
        hasEnglish: !!enCategory,
        hasIcon: !!iconId,
      });

      console.log("");
    } catch (error) {
      console.log(`  ✗ Failed: ${error.message}\n`);
      failedCount++;
      results.push({
        category: arCategory.name,
        category_id: categoryId,
        order: arCategory.order,
        status: "failed",
        error: error.message,
      });
    }
  }

  // Save results
  const resultsFile = path.join(outputDir, "category-import-results.json");
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
  console.log(`📄 Results saved to: ${resultsFile}`);

  const mappingFile = path.join(outputDir, "category-id-to-documentid.json");
  fs.writeFileSync(
    mappingFile,
    JSON.stringify(categoryIdToDocumentIdMap, null, 2)
  );
  console.log(`📄 Mapping saved to: ${mappingFile}`);

  return {
    createdCount,
    skippedCount,
    failedCount,
    mappingFile,
    resultsFile,
  };
}

module.exports = { importCategoriesWithLocalizations };
