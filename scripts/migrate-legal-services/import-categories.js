const fs = require("fs");
const fetch = require("node-fetch");

/**
 * Import legal service categories to Strapi via GraphQL
 */

const { generateSlug } = require("./transform-data");

/**
 * Build GraphQL mutation for creating a legal service category
 */
function buildCreateMutation() {
  return `
    mutation CreateLegalServiceCategory($data: LegalServiceCategoryInput!, $locale: I18NLocaleCode) {
      createLegalServiceCategory(data: $data, locale: $locale) {
        documentId
        name
        slug
        order
      }
    }
  `;
}

/**
 * Prepare category data for GraphQL mutation
 */
function prepareCategoryData(category) {
  const data = {
    name: category.name,
    slug: `${generateSlug(category.name)}-${category.order}`, // Append order for uniqueness
    order: category.order,
    publishedAt: new Date().toISOString(),
    // icon: Skip - will be added manually due to GraphQL media bug
    // description: Can be added if available
  };

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
 * Check if category already exists
 */
async function categoryExists(order, locale, strapiUrl, apiToken) {
  const query = `
    query CheckCategory($order: Int!, $locale: I18NLocaleCode) {
      legalServiceCategories(filters: { order: { eq: $order } }, locale: $locale) {
        documentId
        name
        order
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
    const categories = result.legalServiceCategories || [];
    return Array.isArray(categories) && categories.length > 0
      ? categories[0]
      : null;
  } catch (error) {
    console.error(`Error checking category existence: ${error.message}`);
    return null;
  }
}

/**
 * Import categories
 */
async function importCategories(
  categoriesFile,
  locale,
  strapiUrl,
  apiToken,
  outputDir
) {
  console.log(`\n🏛️  Importing Legal Service Categories`);
  console.log(`Categories file: ${categoriesFile}`);
  console.log(`Locale: ${locale}`);
  console.log(`Strapi URL: ${strapiUrl}\n`);

  const categories = JSON.parse(fs.readFileSync(categoriesFile, "utf8"));
  const mutation = buildCreateMutation();

  let createdCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  const results = [];
  const orderToDocumentIdMap = {};

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    console.log(`[${i + 1}/${categories.length}] Processing: ${category.name}`);

    try {
      // Check if already exists
      console.log(`  ↳ Checking if category exists...`);
      const existing = await categoryExists(
        category.order,
        locale,
        strapiUrl,
        apiToken
      );

      if (existing) {
        console.log(`  ⊙ Already exists (documentId: ${existing.documentId})`);
        skippedCount++;
        orderToDocumentIdMap[category.order] = existing.documentId;
        results.push({
          category: category.name,
          order: category.order,
          status: "skipped",
          documentId: existing.documentId,
        });
        console.log("");
        continue;
      }

      // Create new category
      console.log(`  ↳ Creating new category...`);
      const variables = {
        ...prepareCategoryData(category),
        locale: locale,
      };

      const data = await executeMutation(
        mutation,
        variables,
        strapiUrl,
        apiToken
      );
      const created = data.createLegalServiceCategory;

      orderToDocumentIdMap[category.order] = created.documentId;
      createdCount++;
      console.log(
        `  ✓ Created successfully (documentId: ${created.documentId})`
      );

      results.push({
        category: category.name,
        order: category.order,
        status: "created",
        documentId: created.documentId,
      });
    } catch (error) {
      failedCount++;
      console.error(`  ✗ Failed: ${error.message}`);
      results.push({
        category: category.name,
        order: category.order,
        status: "failed",
        error: error.message,
      });
    }

    console.log("");
  }

  // Save results
  const resultsFile = `${outputDir}/category-import-results-${locale}.json`;
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));

  // Save order mapping
  const mappingFile = `${outputDir}/category-order-to-documentid-${locale}.json`;
  fs.writeFileSync(mappingFile, JSON.stringify(orderToDocumentIdMap, null, 2));

  console.log(`\n📊 Import Summary:`);
  console.log(`  Created: ${createdCount}`);
  console.log(`  Skipped: ${skippedCount}`);
  console.log(`  Failed: ${failedCount}`);
  console.log(`\n💾 Results saved to: ${resultsFile}`);
  console.log(`💾 Mapping saved to: ${mappingFile}`);

  return {
    resultsFile,
    mappingFile,
    createdCount,
    skippedCount,
    failedCount,
    orderToDocumentIdMap,
  };
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 5) {
    console.error(
      "Usage: node import-categories.js <categories-json> <locale> <strapi-url> <api-token> <output-dir>"
    );
    process.exit(1);
  }

  const [categoriesFile, locale, strapiUrl, apiToken, outputDir] = args;

  if (!fs.existsSync(categoriesFile)) {
    console.error(`Error: Categories file not found: ${categoriesFile}`);
    process.exit(1);
  }

  importCategories(categoriesFile, locale, strapiUrl, apiToken, outputDir)
    .then(() => {
      console.log("\n✅ Category import completed!");
    })
    .catch((error) => {
      console.error("\n❌ Category import failed:", error.message);
      console.error(error.stack);
      process.exit(1);
    });
}

module.exports = { importCategories };
