/**
 * Media upload utility for Strapi
 * Downloads images from URLs and uploads them to Strapi media library
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const FormData = require("form-data");

/**
 * Download file from URL
 */
async function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;

    const file = fs.createWriteStream(outputPath);

    protocol
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          // Handle redirects
          file.close();
          fs.unlinkSync(outputPath);
          return downloadFile(response.headers.location, outputPath)
            .then(resolve)
            .catch(reject);
        }

        if (response.statusCode !== 200) {
          file.close();
          fs.unlinkSync(outputPath);
          return reject(
            new Error(`Failed to download: ${response.statusCode}`)
          );
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          resolve(outputPath);
        });
      })
      .on("error", (err) => {
        file.close();
        fs.unlinkSync(outputPath);
        reject(err);
      });
  });
}

/**
 * Upload file to Strapi
 */
async function uploadToStrapi(filePath, fileName, strapiUrl, apiToken) {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append("files", fs.createReadStream(filePath), fileName);

    const uploadUrl = `${strapiUrl}/api/upload`;

    form.submit(
      {
        host: new URL(strapiUrl).hostname,
        port:
          new URL(strapiUrl).port || (strapiUrl.startsWith("https") ? 443 : 80),
        path: "/api/upload",
        protocol: new URL(strapiUrl).protocol,
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      },
      (err, res) => {
        if (err) return reject(err);

        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          if (res.statusCode === 200 || res.statusCode === 201) {
            try {
              const uploadedFiles = JSON.parse(data);
              resolve(uploadedFiles[0]); // Return first uploaded file
            } catch (e) {
              reject(new Error("Failed to parse upload response"));
            }
          } else {
            reject(new Error(`Upload failed: ${res.statusCode} - ${data}`));
          }
        });
      }
    );
  });
}

/**
 * Process icon URLs and upload to Strapi
 */
async function processIconUploads(
  iconUrlsFile,
  strapiUrl,
  apiToken,
  downloadDir
) {
  console.log("Reading icon URLs...");
  const iconUrls = JSON.parse(fs.readFileSync(iconUrlsFile, "utf-8"));

  // Ensure download directory exists
  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
  }

  const urlToMediaIdMap = {};
  const errors = [];

  console.log(`Processing ${iconUrls.length} icons...\n`);

  for (let i = 0; i < iconUrls.length; i++) {
    const { url, name } = iconUrls[i];

    try {
      console.log(`[${i + 1}/${iconUrls.length}] Processing: ${name}`);

      // Skip placeholder URLs
      if (
        url.includes("placeholder.com") ||
        url.includes("placehold.co") ||
        url.includes("via.placeholder")
      ) {
        console.log(`  ↳ Skipped (placeholder URL)\n`);
        continue;
      }

      // Skip if already processed
      if (urlToMediaIdMap[url]) {
        console.log(
          `  ↳ Already uploaded (documentId: ${urlToMediaIdMap[url]})`
        );
        continue;
      }

      // Determine file extension
      const urlPath = new URL(url).pathname;
      const ext = path.extname(urlPath) || ".png";
      const fileName = `${name.replace(/[^a-zA-Z0-9-_]/g, "_")}${ext}`;
      const localPath = path.join(downloadDir, fileName);

      // Download file
      console.log(`  ↳ Downloading...`);
      await downloadFile(url, localPath);

      // Upload to Strapi
      console.log(`  ↳ Uploading to Strapi...`);
      const uploadedFile = await uploadToStrapi(
        localPath,
        fileName,
        strapiUrl,
        apiToken
      );

      // Map URL to media documentId (Strapi v5)
      urlToMediaIdMap[url] = uploadedFile.documentId;
      console.log(
        `  ✓ Uploaded successfully (documentId: ${uploadedFile.documentId})\n`
      );

      // Clean up local file
      fs.unlinkSync(localPath);
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}\n`);
      errors.push({ url, name, error: error.message });
    }
  }

  // Save mapping
  const mappingPath = path.join(
    path.dirname(iconUrlsFile),
    "url-to-media-id-map.json"
  );
  fs.writeFileSync(mappingPath, JSON.stringify(urlToMediaIdMap, null, 2));
  console.log(`\n📦 Mapping saved to: ${mappingPath}`);

  // Save errors if any
  if (errors.length > 0) {
    const errorsPath = path.join(
      path.dirname(iconUrlsFile),
      "upload-errors.json"
    );
    fs.writeFileSync(errorsPath, JSON.stringify(errors, null, 2));
    console.log(
      `\n⚠️  ${errors.length} errors occurred. Details saved to: ${errorsPath}`
    );
  }

  console.log(
    `\n✅ Successfully uploaded ${Object.keys(urlToMediaIdMap).length}/${
      iconUrls.length
    } icons`
  );

  return { urlToMediaIdMap, errors };
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error(
      "Usage: node upload-media.js <icon-urls-file> <strapi-url> <api-token> [download-dir]"
    );
    console.error(
      "Example: node upload-media.js ./output/icon-urls.json http://localhost:1337 your-api-token ./temp"
    );
    process.exit(1);
  }

  const iconUrlsFile = path.resolve(args[0]);
  const strapiUrl = args[1];
  const apiToken = args[2];
  const downloadDir = args[3] ? path.resolve(args[3]) : path.resolve("./temp");

  if (!fs.existsSync(iconUrlsFile)) {
    console.error(`Icon URLs file not found: ${iconUrlsFile}`);
    process.exit(1);
  }

  processIconUploads(iconUrlsFile, strapiUrl, apiToken, downloadDir)
    .then(() => {
      console.log("\n🎉 Media upload process completed!");
    })
    .catch((error) => {
      console.error("\n❌ Media upload failed:", error.message);
      process.exit(1);
    });
}

module.exports = { processIconUploads, downloadFile, uploadToStrapi };
