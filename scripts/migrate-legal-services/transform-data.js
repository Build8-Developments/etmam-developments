const fs = require("fs");
const path = require("path");

/**
 * Transform legal services data from JSON to Strapi-compatible format
 * Handles both categories and sub-services with locale detection
 */

/**
 * Helper to transliterate Arabic to Latin for slug generation
 */
function generateSlug(text) {
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

  let slug = text.toLowerCase();
  for (const [arabic, latin] of Object.entries(arabicToLatin)) {
    slug = slug.replace(new RegExp(arabic, "g"), latin);
  }

  slug = slug
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return slug;
}

/**
 * Truncate text to maxLength with ellipsis
 */
function truncate(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
}

/**
 * Extract order number from categoryId (e.g., "admin_category_82" -> 82)
 */
function extractCategoryOrder(categoryId) {
  const match = categoryId.match(/admin_category_(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

/**
 * Deduplicate services by serviceId (keep first occurrence)
 */
function deduplicateServices(services) {
  const seen = new Set();
  return services.filter((service) => {
    if (seen.has(service.serviceId)) {
      return false;
    }
    seen.add(service.serviceId);
    return true;
  });
}

/**
 * Transform categories from JSON
 */
function transformCategories(data, locale) {
  const categories = data.map((category, index) => ({
    categoryId: category.categoryId,
    name: category.categoryName,
    slug: generateSlug(category.categoryName),
    order: category.category_id
      ? parseInt(category.category_id, 10)
      : extractCategoryOrder(category.categoryId),
    servicesCount: category.servicesCount,
    // Description can be added if available in data
    // icon will be uploaded separately
  }));

  console.log(
    `Transformed ${categories.length} categories for locale: ${locale}`
  );
  return categories;
}

/**
 * Transform sub-services from JSON
 */
function transformSubServices(data, locale) {
  let allServices = [];

  data.forEach((category) => {
    const categoryOrder = extractCategoryOrder(category.categoryId);

    // Deduplicate services within this category
    const uniqueServices = deduplicateServices(category.services);

    const transformedServices = uniqueServices.map((service) => {
      const details = service.serviceDetails || {};

      return {
        // Original IDs for reference
        originalServiceId: service.serviceId,
        originalCategoryId: category.categoryId,
        categoryOrder: categoryOrder,

        // Basic info
        name: service.name,
        slug: generateSlug(service.name),
        shortDescription: truncate(service.shortDescription || "", 200),
        order: parseInt(service.serviceId, 10), // Use serviceId as order

        // Pricing & duration
        startFromPrice: details.serviceFee || 0,
        currency: details.currency || "SAR",
        finishPeriodMin: details.durationDays || 1,
        finishPeriodMax: details.durationMax || details.durationDays || 1,

        // Button label (can be customized)
        button_label: locale === "ar" ? "احصل على الخدمة" : "Get Service",

        // Description component
        description: details.serviceDescription
          ? [
              {
                title: locale === "ar" ? "وصف الخدمة" : "Service Description",
                description: details.serviceDescription,
              },
            ]
          : [],

        // Documents component
        documents: (details.requiredDocuments || []).map((doc) => ({
          document: doc,
        })),

        // Conditions component
        conditions: (details.serviceConditions || []).map((cond) => ({
          condition: cond,
        })),

        // Requirements component (if steps or other requirements exist)
        requirements: [],

        // Steps component (can be populated if data available)
        steps: [],
      };
    });

    allServices = allServices.concat(transformedServices);
  });

  console.log(
    `Transformed ${allServices.length} sub-services for locale: ${locale}`
  );
  return allServices;
}

/**
 * Main transformation function
 */
function transform(inputFile, outputDir) {
  console.log(`\n📝 Transforming Legal Services Data`);
  console.log(`Input: ${inputFile}`);
  console.log(`Output Directory: ${outputDir}\n`);

  // Read input JSON
  const rawData = fs.readFileSync(inputFile, "utf8");
  const data = JSON.parse(rawData);

  // Detect locale from filename
  const locale = inputFile.includes("_ar.json") ? "ar" : "en";
  console.log(`Detected locale: ${locale}`);

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Transform categories
  const categories = transformCategories(data, locale);
  const categoriesOutputFile = path.join(
    outputDir,
    `transformed-categories-${locale}.json`
  );
  fs.writeFileSync(categoriesOutputFile, JSON.stringify(categories, null, 2));
  console.log(`✓ Saved categories to: ${categoriesOutputFile}`);

  // Transform sub-services
  const subServices = transformSubServices(data, locale);
  const servicesOutputFile = path.join(
    outputDir,
    `transformed-services-${locale}.json`
  );
  fs.writeFileSync(servicesOutputFile, JSON.stringify(subServices, null, 2));
  console.log(`✓ Saved sub-services to: ${servicesOutputFile}`);

  // Summary
  console.log(`\n📊 Transformation Summary:`);
  console.log(`  Categories: ${categories.length}`);
  console.log(`  Sub-services: ${subServices.length}`);
  console.log(`  Locale: ${locale}`);

  return {
    locale,
    categoriesPath: categoriesOutputFile,
    servicesPath: servicesOutputFile,
    categoriesCount: categories.length,
    servicesCount: subServices.length,
  };
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error(
      "Usage: node transform-data.js <input-json-file> <output-directory>"
    );
    process.exit(1);
  }

  const [inputFile, outputDir] = args;

  if (!fs.existsSync(inputFile)) {
    console.error(`Error: Input file not found: ${inputFile}`);
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    transform(inputFile, outputDir);
    console.log("\n✅ Transformation completed successfully!");
  } catch (error) {
    console.error("\n❌ Transformation failed:", error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

module.exports = { transform, generateSlug, truncate };
