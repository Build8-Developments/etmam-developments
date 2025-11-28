const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const FormData = require("form-data");
const https = require("https");

/**
 * Upload media files (category icons) to Strapi
 * Reuses logic from consulting services migration
 */

// Create HTTPS agent that ignores SSL certificate validation
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const PLACEHOLDER_PATTERNS = [
  "placeholder",
  "default",
  "example.com",
  "via.placeholder",
];

function isPlaceholderUrl(url) {
  if (!url || typeof url !== "string") return true;
  const lower = url.toLowerCase();
  return PLACEHOLDER_PATTERNS.some((pattern) => lower.includes(pattern));
}

async function downloadFile(url) {
  const response = await fetch(url, { agent: httpsAgent });
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.statusText}`);
  }
  return response.buffer();
}

function getFileNameFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const fileName = path.basename(pathname);
    return fileName || "icon.png";
  } catch {
    return "icon.png";
  }
}

async function uploadToStrapi(fileBuffer, fileName, strapiUrl, apiToken) {
  const formData = new FormData();
  formData.append("files", fileBuffer, fileName);

  const response = await fetch(`${strapiUrl}/api/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
    body: formData,
  });

  if (!response.ok && response.status !== 201) {
    const errorText = await response.text();
    throw new Error(`Upload failed (${response.status}): ${errorText}`);
  }

  const result = await response.json();

  // Strapi v5 returns array of uploaded files
  if (Array.isArray(result) && result.length > 0) {
    return result[0].documentId;
  }

  throw new Error("Unexpected upload response format");
}

async function uploadMedia(categoriesFile, strapiUrl, apiToken, outputDir) {
  console.log(`\n📤 Uploading Category Icons to Strapi`);
  console.log(`Categories file: ${categoriesFile}`);
  console.log(`Strapi URL: ${strapiUrl}`);
  console.log(`Output directory: ${outputDir}\n`);

  // Read original data to get icon URLs
  const rawData = fs.readFileSync(categoriesFile, "utf8");
  const categories = JSON.parse(rawData);

  // Extract unique icon URLs from serviceDetails.ministryIcon
  const iconUrls = new Set();
  categories.forEach((category) => {
    category.services?.forEach((service) => {
      const iconUrl = service.serviceDetails?.ministryIcon;
      if (iconUrl && !isPlaceholderUrl(iconUrl)) {
        iconUrls.add(iconUrl);
      }
    });
  });

  console.log(`Found ${iconUrls.size} unique icon URLs\n`);

  const urlToMediaIdMap = {};
  let successCount = 0;
  let skipCount = 0;
  let failCount = 0;

  for (const url of iconUrls) {
    try {
      console.log(`Processing: ${url}`);

      // Download file
      console.log(`  ↳ Downloading...`);
      const fileBuffer = await downloadFile(url);
      const fileName = getFileNameFromUrl(url);

      // Upload to Strapi
      console.log(`  ↳ Uploading to Strapi...`);
      const documentId = await uploadToStrapi(
        fileBuffer,
        fileName,
        strapiUrl,
        apiToken
      );

      urlToMediaIdMap[url] = documentId;
      successCount++;
      console.log(`  ✓ Success (documentId: ${documentId})\n`);
    } catch (error) {
      failCount++;
      console.error(`  ✗ Failed: ${error.message}\n`);
    }
  }

  // Save mapping to file
  const mappingFile = path.join(outputDir, "url-to-media-id-map.json");
  fs.writeFileSync(mappingFile, JSON.stringify(urlToMediaIdMap, null, 2));

  console.log(`\n📊 Upload Summary:`);
  console.log(`  Success: ${successCount}`);
  console.log(`  Failed: ${failCount}`);
  console.log(`  Skipped (placeholders): ${skipCount}`);
  console.log(`\n💾 Mapping saved to: ${mappingFile}`);

  return {
    mappingFile,
    successCount,
    failCount,
    skipCount,
  };
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 4) {
    console.error(
      "Usage: node upload-media.js <categories-json> <strapi-url> <api-token> <output-dir>"
    );
    process.exit(1);
  }

  const [categoriesFile, strapiUrl, apiToken, outputDir] = args;

  if (!fs.existsSync(categoriesFile)) {
    console.error(`Error: Categories file not found: ${categoriesFile}`);
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  uploadMedia(categoriesFile, strapiUrl, apiToken, outputDir)
    .then(() => {
      console.log("\n✅ Media upload completed!");
    })
    .catch((error) => {
      console.error("\n❌ Media upload failed:", error.message);
      console.error(error.stack);
      process.exit(1);
    });
}

module.exports = { uploadMedia };
