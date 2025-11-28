const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

/**
 * Delete all consulting services
 * Use this to clean up before re-running migration
 */

async function cleanup() {
  const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
  const API_TOKEN =
    "34b14bff9910e6c8c6ab16fcfc59dd8176d705716475563998178b0647ddcb3ec943948ead23351bcb83e75b9ab4233e6a55270b1bcc5d6c295c2b1518057020aa0b2414c0d8ddef6efffb8384619616594f80d8d8dbfbdd0f99619a0836ec8de2d77735602b1f948a80d98947a7afe4bf2c5180be993f110d165515a675b9a7";

  if (!API_TOKEN) {
    console.error("❌ Error: Strapi API token is required");
    console.error("Usage: node cleanup.js <api-token>");
    process.exit(1);
  }

  console.log("🧹 Cleaning up consulting services data...\n");

  try {
    // Get all consulting services
    const servicesQuery = `
      query GetAllServices {
        consultingServices(pagination: { limit: 1000 }) {
          documentId
          name
        }
      }
    `;

    const servicesResponse = await fetch(`${STRAPI_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({ query: servicesQuery }),
    });

    const servicesResult = await servicesResponse.json();
    const services = servicesResult.data?.consultingServices || [];

    console.log(`Found ${services.length} consulting services to delete`);

    // Delete services
    const deleteServiceMutation = `
      mutation DeleteService($documentId: ID!) {
        deleteConsultingService(documentId: $documentId) {
          documentId
        }
      }
    `;

    let deletedServices = 0;
    for (const service of services) {
      try {
        await fetch(`${STRAPI_URL}/graphql`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: JSON.stringify({
            query: deleteServiceMutation,
            variables: { documentId: service.documentId },
          }),
        });
        deletedServices++;
        process.stdout.write(
          `\r  Deleted services: ${deletedServices}/${services.length}`
        );
      } catch (error) {
        console.error(`\n  ✗ Failed to delete service: ${service.name}`);
      }
    }
    console.log("\n");

    // Clean up output files
    const outputDir = path.join(__dirname, "output");
    if (fs.existsSync(outputDir)) {
      console.log("Deleting output files...");
      fs.rmSync(outputDir, { recursive: true, force: true });
      console.log("  ✓ Output directory deleted\n");
    }

    console.log("✅ Cleanup complete!");
    console.log(`   Services deleted: ${deletedServices}`);
    console.log(`   Output files: cleaned`);
  } catch (error) {
    console.error("❌ Cleanup failed:", error.message);
    process.exit(1);
  }
}

cleanup();
