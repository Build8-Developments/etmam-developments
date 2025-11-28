#!/usr/bin/env node

/**
 * Main orchestrator script for migrating consulting services to Strapi
 *
 * This script orchestrates the entire migration process:
 * 1. Transform JSON data
 * 2. Upload media files
 * 3. Import services via GraphQL
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const { transformConsultingServicesData } = require("./transform-data");
const { processIconUploads } = require("./upload-media");
const { importServices } = require("./import-services");

// Configuration
const CONFIG = {
  strapiUrl: "http://localhost:1337",
  apiToken:
    process.env.STRAPI_API_TOKEN ||
    "34b14bff9910e6c8c6ab16fcfc59dd8176d705716475563998178b0647ddcb3ec943948ead23351bcb83e75b9ab4233e6a55270b1bcc5d6c295c2b1518057020aa0b2414c0d8ddef6efffb8384619616594f80d8d8dbfbdd0f99619a0836ec8de2d77735602b1f948a80d98947a7afe4bf2c5180be993f110d165515a675b9a7",
  servicesDataDir: path.resolve(__dirname, "../../Services-Data/Consulting"),
  outputDir: path.resolve(__dirname, "./output"),
  tempDir: path.resolve(__dirname, "./temp"),
};

/**
 * Create readline interface for user input
 */
function createReadline() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

/**
 * Ask user for confirmation
 */
function askConfirmation(question) {
  const rl = createReadline();

  return new Promise((resolve) => {
    rl.question(question + " (y/n): ", (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === "y" || answer.toLowerCase() === "yes");
    });
  });
}

/**
 * Ask user for input
 */
function askInput(question, defaultValue = "") {
  const rl = createReadline();

  return new Promise((resolve) => {
    const prompt = defaultValue
      ? `${question} (default: ${defaultValue}): `
      : `${question}: `;

    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer.trim() || defaultValue);
    });
  });
}

/**
 * Display configuration
 */
function displayConfig() {
  console.log("\n📋 Configuration:");
  console.log("=".repeat(60));
  console.log(`  Strapi URL: ${CONFIG.strapiUrl}`);
  console.log(
    `  API Token: ${
      CONFIG.apiToken ? "***" + CONFIG.apiToken.slice(-4) : "NOT SET"
    }`
  );
  console.log(`  Services Data Dir: ${CONFIG.servicesDataDir}`);
  console.log(`  Output Dir: ${CONFIG.outputDir}`);
  console.log(`  Temp Dir: ${CONFIG.tempDir}`);
  console.log("=".repeat(60) + "\n");
}

/**
 * Main migration workflow
 */
async function migrate() {
  console.log("\n🚀 Consulting Services Migration Tool");
  console.log("=".repeat(60));

  try {
    // Step 0: Setup and validation
    console.log("\n📦 Step 0: Setup and Validation");
    console.log("-".repeat(60));

    // Check if API token is set
    if (!CONFIG.apiToken) {
      console.log("⚠️  STRAPI_API_TOKEN environment variable is not set.");
      CONFIG.apiToken = await askInput("Please enter your Strapi API token");

      if (!CONFIG.apiToken) {
        throw new Error("API token is required for migration");
      }
    }

    // Check if Strapi URL is correct
    const urlConfirmed = await askConfirmation(
      `Is Strapi running at ${CONFIG.strapiUrl}?`
    );
    if (!urlConfirmed) {
      CONFIG.strapiUrl = await askInput(
        "Please enter the correct Strapi URL",
        CONFIG.strapiUrl
      );
    }

    displayConfig();

    // Check if services data exists
    const arFile = path.join(
      CONFIG.servicesDataDir,
      "consulting_services_ar.json"
    );
    const enFile = path.join(
      CONFIG.servicesDataDir,
      "consulting_services_en.json"
    );

    if (!fs.existsSync(arFile)) {
      throw new Error(`Arabic services file not found: ${arFile}`);
    }

    if (!fs.existsSync(enFile)) {
      throw new Error(`English services file not found: ${enFile}`);
    }

    console.log("✓ Services data files found");

    // Confirm to proceed
    const proceed = await askConfirmation("\nReady to start migration?");
    if (!proceed) {
      console.log("\n❌ Migration cancelled by user");
      return;
    }

    // Step 1: Transform data
    console.log("\n📝 Step 1: Transform Data");
    console.log("-".repeat(60));

    console.log("\nTransforming Arabic services...");
    const arTransform = transformConsultingServicesData(
      arFile,
      CONFIG.outputDir
    );

    console.log("\nTransforming English services...");
    const enTransform = transformConsultingServicesData(
      enFile,
      CONFIG.outputDir
    );

    console.log("\n✅ Data transformation completed");

    // Step 2: Upload media
    console.log("\n📤 Step 2: Upload Media Files");
    console.log("-".repeat(60));

    const uploadMedia = await askConfirmation("\nProceed with media upload?");
    if (!uploadMedia) {
      console.log(
        "⏭️  Skipping media upload. You can run it later with upload-media.js"
      );
    } else {
      console.log("\nUploading media files (this may take a while)...");

      // Use icon URLs from Arabic version (assuming same icons for both locales)
      const mediaResult = await processIconUploads(
        arTransform.iconUrlsPath,
        CONFIG.strapiUrl,
        CONFIG.apiToken,
        CONFIG.tempDir
      );

      if (mediaResult.errors.length > 0) {
        const continueWithErrors = await askConfirmation(
          `\n⚠️  ${mediaResult.errors.length} media files failed to upload. Continue with import?`
        );
        if (!continueWithErrors) {
          throw new Error("Migration stopped due to media upload errors");
        }
      }

      console.log("\n✅ Media upload completed");
    }

    // Check if media map exists
    const mediaMapPath = path.join(
      CONFIG.outputDir,
      "url-to-media-id-map.json"
    );
    if (!fs.existsSync(mediaMapPath)) {
      throw new Error(
        `Media map file not found: ${mediaMapPath}\nPlease run media upload first.`
      );
    }

    // Step 3: Import services
    console.log("\n📥 Step 3: Import Services");
    console.log("-".repeat(60));

    // Import Arabic services
    const importAr = await askConfirmation("\nImport Arabic services?");
    if (importAr) {
      await importServices(
        arTransform.transformedDataPath,
        arFile,
        mediaMapPath,
        CONFIG.strapiUrl,
        CONFIG.apiToken,
        "ar"
      );
      console.log("\n✅ Arabic services imported");
    }

    // Import English services
    const importEn = await askConfirmation("\nImport English services?");
    if (importEn) {
      await importServices(
        enTransform.transformedDataPath,
        enFile,
        mediaMapPath,
        CONFIG.strapiUrl,
        CONFIG.apiToken,
        "en"
      );
      console.log("\n✅ English services imported");
    }

    // Completion
    console.log("\n" + "=".repeat(60));
    console.log("🎉 Migration completed successfully!");
    console.log("=".repeat(60));
    console.log("\n📊 Summary:");
    console.log(`  Output directory: ${CONFIG.outputDir}`);
    console.log(
      `  Check import results in: ${CONFIG.outputDir}/import-results-*.json`
    );
    console.log("\n💡 Next steps:");
    console.log("  1. Review the imported data in Strapi admin panel");
    console.log("  2. Publish the services if they are in draft state");
    console.log("  3. Verify the data on your frontend application\n");
  } catch (error) {
    console.error("\n❌ Migration failed:", error.message);
    console.error("\n💡 Tips:");
    console.error("  - Make sure Strapi is running");
    console.error("  - Verify your API token has proper permissions");
    console.error("  - Check the error logs above for details\n");
    process.exit(1);
  }
}

/**
 * CLI menu for manual step execution
 */
async function interactiveMode() {
  console.log("\n🎛️  Interactive Mode");
  console.log("=".repeat(60));
  console.log("What would you like to do?\n");
  console.log("1. Run full migration (recommended)");
  console.log("2. Transform data only");
  console.log("3. Upload media only");
  console.log("4. Import services only");
  console.log("5. Exit\n");

  const choice = await askInput("Enter your choice (1-5)", "1");

  switch (choice) {
    case "1":
      await migrate();
      break;
    case "2":
      console.log("\n📝 Transforming data...");
      const arFile = path.join(
        CONFIG.servicesDataDir,
        "consulting_services_ar.json"
      );
      const enFile = path.join(
        CONFIG.servicesDataDir,
        "consulting_services_en.json"
      );
      transformConsultingServicesData(arFile, CONFIG.outputDir);
      transformConsultingServicesData(enFile, CONFIG.outputDir);
      console.log("\n✅ Data transformation completed");
      break;
    case "3":
      console.log("\n📤 Uploading media...");
      const iconUrlsPath = path.join(CONFIG.outputDir, "icon-urls.json");
      if (!fs.existsSync(iconUrlsPath)) {
        throw new Error(
          "Icon URLs file not found. Run data transformation first."
        );
      }
      await processIconUploads(
        iconUrlsPath,
        CONFIG.strapiUrl,
        CONFIG.apiToken,
        CONFIG.tempDir
      );
      console.log("\n✅ Media upload completed");
      break;
    case "4":
      console.log("\n📥 Importing services...");
      const locale = await askInput("Enter locale (ar/en)", "ar");
      const transformedPath = path.join(
        CONFIG.outputDir,
        "transformed-services.json"
      );
      const originalPath = path.join(
        CONFIG.servicesDataDir,
        `consulting_services_${locale}.json`
      );
      const mediaMapPath = path.join(
        CONFIG.outputDir,
        "url-to-media-id-map.json"
      );

      await importServices(
        transformedPath,
        originalPath,
        mediaMapPath,
        CONFIG.strapiUrl,
        CONFIG.apiToken,
        locale
      );
      console.log("\n✅ Services import completed");
      break;
    case "5":
      console.log("\n👋 Goodbye!\n");
      process.exit(0);
    default:
      console.log("\n❌ Invalid choice\n");
      process.exit(1);
  }
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
Consulting Services Migration Tool

Usage:
  node migrate.js [options]

Options:
  --auto          Run full migration without prompts (uses env vars)
  --interactive   Run in interactive mode (default)
  --help, -h      Show this help message

Environment Variables:
  STRAPI_URL           Strapi server URL (default: http://localhost:1337)
  STRAPI_API_TOKEN     Strapi API token (required)

Examples:
  # Interactive mode
  node migrate.js

  # Automated mode
  STRAPI_API_TOKEN=your-token node migrate.js --auto

  # Custom Strapi URL
  STRAPI_URL=https://api.example.com STRAPI_API_TOKEN=your-token node migrate.js --auto
`);
    process.exit(0);
  }

  if (args.includes("--auto")) {
    migrate();
  } else {
    interactiveMode();
  }
}

module.exports = { migrate, CONFIG };
