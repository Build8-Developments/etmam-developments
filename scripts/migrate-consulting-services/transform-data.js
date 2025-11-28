/**
 * Transform consulting services JSON data to match Strapi schema
 * Removes ID fields from components and prepares data for GraphQL mutations
 */

const fs = require("fs");
const path = require("path");

/**
 * Remove id fields from component arrays
 */
function stripComponentIds(components) {
  if (!Array.isArray(components)) return components;

  return components.map(({ id, ...rest }) => rest);
}

/**
 * Transform a single service entry
 */
function transformService(service) {
  // Truncate shortDescription to 200 characters if needed
  let shortDescription = service.shortDescription || "";
  if (shortDescription.length > 200) {
    shortDescription = shortDescription.substring(0, 197) + "...";
  }

  const transformed = {
    documentId: service.documentId,
    slug: service.slug,
    name: service.name,
    shortDescription: shortDescription,
    button_label: service.button_label,
    currency: service.currency,
    startFromPrice: service.startFromPrice,
    finishPeriodMin: service.finishPeriodMin,
    finishPeriodMax: service.finishPeriodMax,
    order: service.order,

    // Icon URL - to be mapped to media ID later
    iconUrl: service.icon?.url || null,
    iconName: service.icon?.name || null,

    // Components - strip IDs
    description: stripComponentIds(service.description || []),
    requirements: stripComponentIds(service.requirements || []),
    steps: stripComponentIds(service.steps || []),
    benefits: stripComponentIds(service.benefits || []),
  };

  return transformed;
}

/**
 * Extract all unique icon URLs from services
 */
function extractIconUrls(services) {
  const iconUrls = new Set();

  services.forEach((service) => {
    // Main service icon
    if (service.icon?.url) {
      iconUrls.add(
        JSON.stringify({
          url: service.icon.url,
          name: service.icon.name || "icon",
        })
      );
    }

    // Description icons
    (service.description || []).forEach((desc) => {
      if (desc.icon?.url) {
        iconUrls.add(
          JSON.stringify({
            url: desc.icon.url,
            name: desc.icon.name || "description-icon",
          })
        );
      }
    });

    // Step icons
    (service.steps || []).forEach((step) => {
      if (step.icon?.url) {
        iconUrls.add(
          JSON.stringify({
            url: step.icon.url,
            name: step.icon.name || "step-icon",
          })
        );
      }
    });

    // Benefit icons
    (service.benefits || []).forEach((benefit) => {
      if (benefit.icon?.url) {
        iconUrls.add(
          JSON.stringify({
            url: benefit.icon.url,
            name: benefit.icon.name || "benefit-icon",
          })
        );
      }
    });
  });

  return Array.from(iconUrls).map((item) => JSON.parse(item));
}

/**
 * Main transformation function
 */
function transformConsultingServicesData(inputFilePath, outputDir) {
  console.log(`Reading data from: ${inputFilePath}`);

  // Read input file
  const rawData = fs.readFileSync(inputFilePath, "utf-8");
  const services = JSON.parse(rawData);

  console.log(`Found ${services.length} services`);

  // Infer locale from filename (consulting_services_ar.json or consulting_services_en.json)
  const filenameMatch = inputFilePath.match(
    /consulting_services_([a-z]{2})\.json/
  );
  const locale = filenameMatch ? filenameMatch[1] : "ar";
  console.log(`Detected locale: ${locale}`);

  // Transform services
  const transformedServices = services.map(transformService);

  // Extract icon URLs
  const iconUrls = extractIconUrls(services);
  console.log(`Extracted ${iconUrls.length} unique icon URLs`);

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write transformed data with locale suffix
  const transformedDataPath = path.join(
    outputDir,
    `transformed-services-${locale}.json`
  );
  fs.writeFileSync(
    transformedDataPath,
    JSON.stringify(transformedServices, null, 2)
  );
  console.log(`Transformed services written to: ${transformedDataPath}`);

  // Write icon URLs
  const iconUrlsPath = path.join(outputDir, "icon-urls.json");
  fs.writeFileSync(iconUrlsPath, JSON.stringify(iconUrls, null, 2));
  console.log(`Icon URLs written to: ${iconUrlsPath}`);

  return {
    transformedServices,
    iconUrls,
    transformedDataPath,
    iconUrlsPath,
  };
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.error("Usage: node transform-data.js <input-file> [output-dir]");
    console.error(
      "Example: node transform-data.js ../../Services-Data/Consulting/consulting_services_ar.json ./output"
    );
    process.exit(1);
  }

  const inputFile = path.resolve(args[0]);
  const outputDir = args[1] ? path.resolve(args[1]) : path.resolve("./output");

  if (!fs.existsSync(inputFile)) {
    console.error(`Input file not found: ${inputFile}`);
    process.exit(1);
  }

  try {
    transformConsultingServicesData(inputFile, outputDir);
    console.log("\n✅ Transformation completed successfully!");
  } catch (error) {
    console.error("❌ Transformation failed:", error.message);
    process.exit(1);
  }
}

module.exports = {
  transformConsultingServicesData,
  transformService,
  extractIconUrls,
};
