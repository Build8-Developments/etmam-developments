# Consulting Services Migration

This directory contains scripts to migrate consulting services data from JSON files into Strapi via GraphQL mutations.

## Overview

The migration process consists of three main steps:

1. **Transform Data** - Clean and prepare JSON data to match Strapi schema
2. **Upload Media** - Download icons from URLs and upload to Strapi media library
3. **Import Services** - Create/update services in Strapi using GraphQL mutations

## Prerequisites

- Node.js 14+ installed
- Strapi server running (default: `http://localhost:1337`)
- Valid Strapi API token with appropriate permissions
- Source JSON files in `Services-Data/Consulting/` directory

## Quick Start

### Option 1: Interactive Mode (Recommended)

```bash
cd scripts/migrate-consulting-services
npm install
node migrate.js
```

Follow the interactive prompts to complete the migration.

### Option 2: Automated Mode

```bash
cd scripts/migrate-consulting-services
npm install
STRAPI_API_TOKEN=your-api-token node migrate.js --auto
```

### Option 3: Manual Step-by-Step

```bash
# 1. Transform data
node transform-data.js ../../Services-Data/Consulting/consulting_services_ar.json ./output

# 2. Upload media
node upload-media.js ./output/icon-urls.json http://localhost:1337 your-api-token ./temp

# 3. Import Arabic services
node import-services.js \
  ./output/transformed-services.json \
  ../../Services-Data/Consulting/consulting_services_ar.json \
  ./output/url-to-media-id-map.json \
  http://localhost:1337 \
  your-api-token \
  ar

# 4. Import English services
node import-services.js \
  ./output/transformed-services.json \
  ../../Services-Data/Consulting/consulting_services_en.json \
  ./output/url-to-media-id-map.json \
  http://localhost:1337 \
  your-api-token \
  en
```

## Scripts

### migrate.js

Main orchestrator script that runs the complete migration workflow.

**Usage:**

```bash
node migrate.js [--auto|--interactive]
```

**Environment Variables:**

- `STRAPI_URL` - Strapi server URL (default: `http://localhost:1337`)
- `STRAPI_API_TOKEN` - Your Strapi API token (required)

### transform-data.js

Transforms raw JSON data to match Strapi schema structure.

**Features:**

- Removes component ID fields
- Extracts icon URLs
- Prepares data for GraphQL mutations

**Usage:**

```bash
node transform-data.js <input-file> [output-dir]
```

**Output:**

- `transformed-services.json` - Cleaned service data
- `icon-urls.json` - All unique icon URLs

### upload-media.js

Downloads images from URLs and uploads them to Strapi media library.

**Features:**

- Parallel downloads
- Automatic retry on failure
- URL-to-media-ID mapping

**Usage:**

```bash
node upload-media.js <icon-urls-file> <strapi-url> <api-token> [download-dir]
```

**Output:**

- `url-to-media-id-map.json` - Maps icon URLs to Strapi media IDs
- `upload-errors.json` - Failed uploads (if any)

### import-services.js

Imports services into Strapi using GraphQL mutations.

**Features:**

- Checks for existing services
- Updates existing or creates new
- Handles both Arabic and English locales
- Automatic media ID mapping

**Usage:**

```bash
node import-services.js <transformed-file> <original-file> <media-map-file> <strapi-url> <api-token> <locale>
```

**Output:**

- `import-results-{locale}.json` - Import summary and errors

## Output Files

After running the migration, you'll find the following files in the `output/` directory:

- `transformed-services.json` - Transformed service data
- `icon-urls.json` - Extracted icon URLs
- `url-to-media-id-map.json` - URL to Strapi media ID mapping
- `import-results-ar.json` - Arabic import results
- `import-results-en.json` - English import results
- `upload-errors.json` - Media upload errors (if any)

## Schema Changes

The migration includes the following Strapi schema modifications:

### Added: benefits Component

A new component `services.single-service-benefit` has been added to support the benefits field:

```json
{
  "title": "string",
  "description": "text",
  "icon": "media",
  "icon_color_code": "string"
}
```

### Modified: startFromPrice Field

The `startFromPrice` field has been changed from `required: true` to `required: false` to accommodate null values in the source data.

## Troubleshooting

### API Token Permissions

Ensure your API token has the following permissions:

- `consulting-service.create`
- `consulting-service.update`
- `consulting-service.find`
- `upload.upload`

### Media Upload Failures

If media uploads fail:

1. Check the `upload-errors.json` file for details
2. Verify the URLs are accessible
3. Ensure Strapi upload plugin is configured correctly
4. Check file size limits in Strapi config

### GraphQL Errors

If imports fail with GraphQL errors:

1. Verify the schema changes have been applied (restart Strapi)
2. Check the `import-results-*.json` files for error details
3. Ensure the API token has proper permissions
4. Verify Strapi GraphQL plugin is enabled

### Duplicate Services

The import script checks for existing services by slug. If a service exists:

- It will be updated instead of creating a duplicate
- The update preserves the existing service ID

## Advanced Usage

### Import Specific Services

To import only specific services, modify the JSON files before transformation:

```bash
# Edit the JSON to include only the services you want
node transform-data.js custom-services.json ./output
# Continue with upload and import steps
```

### Dry Run

To test without actually importing:

```bash
# Transform and upload media first
node transform-data.js ...
node upload-media.js ...

# Then manually review the transformed data before importing
cat ./output/transformed-services.json
```

### Re-import After Errors

If some imports fail, you can re-run the import script:

```bash
# The script will skip successfully imported services
node import-services.js ... ar
```

## Notes

- Media files are temporarily downloaded to `temp/` directory during upload
- The migration preserves the `order` field from source data
- Component IDs are auto-generated by Strapi (source IDs are ignored)
- Both Arabic and English locales must be imported separately
- Services are created in draft state by default (publish manually in Strapi admin)

## Support

If you encounter issues:

1. Check the output JSON files for error details
2. Review Strapi server logs
3. Verify all prerequisites are met
4. Ensure schema changes have been applied (restart Strapi)
