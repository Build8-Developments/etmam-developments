const path = require("path");
const { transform } = require("./transform-data");
const { uploadMedia } = require("./upload-media");
const { importCategoriesWithLocalizations } = require("./import-categories-v2");
const { importSubServices } = require("./import-sub-services");

/**
 * Main orchestrator for legal services migration
 */

async function migrate() {
  console.log("╔════════════════════════════════════════════════════════════╗");
  console.log("║     Legal Services Migration to Strapi v5                 ║");
  console.log(
    "╚════════════════════════════════════════════════════════════╝\n"
  );

  // Configuration
  const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
  const API_TOKEN =
    "34b14bff9910e6c8c6ab16fcfc59dd8176d705716475563998178b0647ddcb3ec943948ead23351bcb83e75b9ab4233e6a55270b1bcc5d6c295c2b1518057020aa0b2414c0d8ddef6efffb8384619616594f80d8d8dbfbdd0f99619a0836ec8de2d77735602b1f948a80d98947a7afe4bf2c5180be993f110d165515a675b9a7";

  if (!API_TOKEN) {
    console.error("❌ Error: Strapi API token is required");
    console.error("Usage: node migrate.js <api-token>");
    console.error("Or set STRAPI_API_TOKEN environment variable");
    process.exit(1);
  }

  const OUTPUT_DIR = path.join(__dirname, "output");

  // Input files for categories (with descriptions and icons)
  const AR_CATEGORIES_FILE = path.join(
    __dirname,
    "../../Services-Data/Legal Services/Categories/administration_categories_with_services_count_ar.json"
  );
  const EN_CATEGORIES_FILE = path.join(
    __dirname,
    "../../Services-Data/Legal Services/Categories/administration_categories_with_services_count_en.json"
  );

  // Input files for services (for transforming sub-services)
  const AR_INPUT_FILE = path.join(
    __dirname,
    "../../Services-Data/Legal Services/Services/administration_categories_with_full_services_ar.json"
  );

  try {
    // ═══════════════════════════════════════════════════════════
    // Step 1: Transform Arabic Data
    // ═══════════════════════════════════════════════════════════
    console.log(
      "\n┌─────────────────────────────────────────────────────────┐"
    );
    console.log("│ Step 1: Transform Arabic Data                          │");
    console.log("└─────────────────────────────────────────────────────────┘");

    const arTransform = transform(AR_INPUT_FILE, OUTPUT_DIR);
    console.log(`✓ Arabic transformation complete`);
    console.log(`  Categories: ${arTransform.categoriesCount}`);
    console.log(`  Services: ${arTransform.servicesCount}`);

    // ═══════════════════════════════════════════════════════════
    // Step 2: Import Categories (AR + EN with descriptions and icons)
    // ═══════════════════════════════════════════════════════════
    console.log(
      "\n┌─────────────────────────────────────────────────────────┐"
    );
    console.log("│ Step 2: Import Categories (AR + EN)                    │");
    console.log("└─────────────────────────────────────────────────────────┘");

    const categories = await importCategoriesWithLocalizations(
      AR_CATEGORIES_FILE,
      EN_CATEGORIES_FILE,
      STRAPI_URL,
      API_TOKEN,
      OUTPUT_DIR
    );
    console.log(`\n✓ Categories imported`);
    console.log(`  Created: ${categories.createdCount}`);
    console.log(`  Skipped: ${categories.skippedCount}`);
    console.log(`  Failed: ${categories.failedCount}`);

    // ═══════════════════════════════════════════════════════════
    // Step 3: Import Arabic Sub-Services
    // ═══════════════════════════════════════════════════════════
    console.log(
      "\n┌─────────────────────────────────────────────────────────┐"
    );
    console.log("│ Step 3: Import Arabic Sub-Services                     │");
    console.log("└─────────────────────────────────────────────────────────┘");

    const arServices = await importSubServices(
      arTransform.servicesPath,
      categories.mappingFile,
      "ar",
      STRAPI_URL,
      API_TOKEN,
      OUTPUT_DIR
    );
    console.log(`✓ Arabic sub-services imported`);
    console.log(`  Created: ${arServices.createdCount}`);
    console.log(`  Skipped: ${arServices.skippedCount}`);
    console.log(`  Failed: ${arServices.failedCount}`);

    // ═══════════════════════════════════════════════════════════
    // Final Summary
    // ═══════════════════════════════════════════════════════════
    console.log(
      "\n╔════════════════════════════════════════════════════════════╗"
    );
    console.log(
      "║                   Migration Complete!                      ║"
    );
    console.log(
      "╚════════════════════════════════════════════════════════════╝\n"
    );

    console.log("📊 Final Summary:");
    console.log(
      "─────────────────────────────────────────────────────────────"
    );
    console.log(
      `Categories:       ${categories.createdCount} created, ${categories.skippedCount} skipped, ${categories.failedCount} failed`
    );
    console.log(
      `Services (AR):    ${arServices.createdCount} created, ${arServices.skippedCount} skipped, ${arServices.failedCount} failed`
    );
    console.log(
      "─────────────────────────────────────────────────────────────"
    );

    console.log("\n📝 Next Steps:");
    console.log("  1. ✅ Categories imported with AR + EN localizations");
    console.log("  2. ✅ Descriptions and icons attached");
    console.log(
      "  3. ⏳ Add English translations for sub-services via Strapi admin"
    );
    console.log(
      "  4. ✅ Test routes: /legalservices/{categoryOrder}/{serviceOrder}"
    );
    console.log("  5. 🔍 Verify data integrity in Strapi admin");

    console.log("\n✅ All done!\n");
  } catch (error) {
    console.error(
      "\n╔════════════════════════════════════════════════════════════╗"
    );
    console.error(
      "║                  Migration Failed!                         ║"
    );
    console.error(
      "╚════════════════════════════════════════════════════════════╝\n"
    );
    console.error("Error:", error.message);
    console.error("\nStack trace:");
    console.error(error.stack);
    process.exit(1);
  }
}

// Run migration
if (require.main === module) {
  migrate();
}

module.exports = { migrate };
