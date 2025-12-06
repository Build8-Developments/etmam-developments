# Legal Services Migration Scripts

This directory contains scripts to migrate legal services data from JSON files to Strapi v5 CMS with full i18n support (Arabic and English).

## 📋 Overview

The migration process handles:

- **Legal Service Categories** with AR/EN localizations, descriptions, and icons
- **Legal Sub-Services** with pricing, duration, descriptions, documents, and conditions
- **Deduplication** of services with the same serviceId
- **Component mapping** for single-service-description, single-service-document, and single-service-condition

## 🏗️ Data Structure

### Input Files (Located in `Services-Data/Legal Services1/`)

#### Categories

- `Categories/administration_categories_with_services_count.json` (Arabic)
- `Categories/administration_categories_with_services_count_en.json` (English)

#### Services (Full Data)

- `Services/administration_categories_with_full_services_ar.json` (Arabic)
- `Services/administration_categories_with_full_services_en.json` (English)

### JSON Structure

**Category Example:**

```json
{
  "categoryId": "admin_category_82",
  "categoryName": "الإقامة المميزة",
  "categorySlug": "الإقامة-المميزة",
  "servicesCount": 14,
  "services": [...]
}
```

**Service Example:**

```json
{
  "documentId": "admin_service_82_1228",
  "serviceId": "1228",
  "name": "إقامة كفاءة استثنائية (الباحثين)",
  "slug": "إقامة-كفاءة-استثنائية-الباحثين",
  "shortDescription": "...",
  "link": "https://...",
  "serviceDetails": {
    "serviceFee": 9320,
    "currency": "SAR",
    "durationDays": 90,
    "durationMax": 100,
    "ministryInfo": "Premium Residency",
    "ministryIcon": "https://...",
    "serviceDescription": "...",
    "requiredDocuments": ["...", "..."],
    "serviceConditions": ["...", "..."]
  }
}
```

## 🔧 Scripts

### 1. `transform-data.js`

Transforms raw JSON data into Strapi-compatible format.

**Features:**

- Deduplicates services by `serviceId`
- Extracts category order from `categoryId` (e.g., `admin_category_82` → order: 82)
- Maps service details to Strapi schema fields
- Creates component arrays for descriptions, documents, and conditions
- Handles both Arabic and English locales

**Usage:**

```bash
node transform-data.js <input-json-file> <output-directory>
```

**Output:**

- `transformed-categories-{locale}.json`
- `transformed-services-{locale}.json`

### 2. `import-categories-v2.js`

Imports categories with full i18n support and icon uploads.

**Features:**

- Creates categories in Arabic (default locale)
- Adds English localizations
- Downloads and uploads category icons from URLs
- Attaches descriptions to categories
- Maintains category order

**Usage:**

```bash
node import-categories-v2.js <ar-categories-file> <en-categories-file> <strapi-url> <api-token> <output-dir>
```

**Output:**

- `category-import-results.json` - Import results
- `category-id-to-documentid.json` - Mapping file for service imports

### 3. `import-sub-services.js`

Imports sub-services with all components and relations.

**Features:**

- Links services to categories via documentId
- Creates services with pricing and duration info
- Imports description components (title, description, icon, icon_color_code)
- Imports document components (required documents list)
- Imports condition components (service conditions/eligibility)
- Handles both Arabic and English locales
- Deduplication check by order and locale

**Usage:**

```bash
node import-sub-services.js <services-json> <category-mapping-json> <locale> <strapi-url> <api-token> <output-dir>
```

**Output:**

- `service-import-results-{locale}.json` - Import results

### 4. `migrate.js` (Main Orchestrator)

Runs the complete migration workflow.

**Workflow:**

1. Transform Arabic service data
2. Transform English service data
3. Import categories (AR + EN localizations)
4. Import Arabic sub-services
5. Import English sub-services

**Usage:**

```bash
node migrate.js
```

**Environment Variables:**

- `STRAPI_URL` - Strapi server URL (default: `http://localhost:1337`)
- `STRAPI_API_TOKEN` - Your Strapi API token (hardcoded in script, consider using env var)

## 📦 Dependencies

Install dependencies before running:

```bash
npm install
```

**Required:**

- `node-fetch@^2.7.0` - For HTTP requests and icon downloads
- `form-data@^4.0.5` - For file uploads

## 🚀 Quick Start

### Prerequisites

1. Ensure Strapi is running on `http://localhost:1337`
2. Create an API token in Strapi admin (Settings → API Tokens)
3. Verify the Strapi schema matches (legal-service-category, legal-sub-service)

### Run Migration

```bash
cd scripts/migrate-legal-services
npm install
node migrate.js
```

### Monitor Progress

The script provides detailed logging:

- ✓ Success indicators
- ⊙ Skipped items (already exist)
- ✗ Failed items with error messages
- Progress counters for large datasets

## 📊 Schema Mapping

### Legal Service Category

```
Strapi Field          → JSON Source
─────────────────────────────────────
name                  → categoryName
slug                  → categorySlug (or generated)
order                 → extracted from categoryId
description           → (from categories file)
icon                  → uploaded from icon URL
legal_sub_services    → relation
```

### Legal Sub-Service

```
Strapi Field          → JSON Source
─────────────────────────────────────
name                  → name
slug                  → slug (or order as string)
shortDescription      → shortDescription (truncated to 200 chars)
order                 → serviceId (as integer)
startFromPrice        → serviceDetails.serviceFee
currency              → serviceDetails.currency
finishPeriodMin       → serviceDetails.durationDays
finishPeriodMax       → serviceDetails.durationMax
button_label          → "احصل على الخدمة" / "Get Service"
legal_service_category → relation via category order mapping

Components:
description[]         → serviceDetails.serviceDescription
  - title
  - description
  - icon
  - icon_color_code

documents[]           → serviceDetails.requiredDocuments
  - document

conditions[]          → serviceDetails.serviceConditions
  - condition

requirements[]        → (empty - not in current data)
steps[]               → (empty - not in current data)
```

## 🔍 Data Validation

### Pre-Migration Checks

Run these scripts for validation:

```bash
node check-data.js      # Check data structure and consistency
node check-categories.js # Verify category data
```

### Post-Migration Verification

1. Check Strapi admin panel
2. Verify category count matches input data
3. Verify service count (accounting for deduplication)
4. Test GraphQL queries:
   ```graphql
   query {
     legalServiceCategories(locale: "ar") {
       name
       slug
       order
       legal_sub_services {
         name
         order
       }
     }
   }
   ```

## 🧹 Cleanup

Remove imported data if needed:

```bash
node cleanup.js
```

**Warning:** This will delete all legal service categories and sub-services from Strapi!

## ⚠️ Important Notes

1. **Deduplication**: Services with the same `serviceId` are deduplicated (first occurrence kept)
2. **Icon Uploads**: Icons are downloaded from URLs and uploaded to Strapi. SSL certificate validation is disabled for expired certificates.
3. **Slug Generation**: If slug is missing, it's auto-generated from the name
4. **Media GraphQL Bug**: Service icons are skipped in GraphQL imports due to known Strapi media upload issues. Add manually via admin panel if needed.
5. **Order Numbers**: Category order is extracted from `categoryId` (e.g., `admin_category_82` → 82). Service order uses `serviceId`.

## 📝 Output Files

All output files are saved to `output/` directory:

- `transformed-categories-ar.json` - Transformed Arabic categories
- `transformed-categories-en.json` - Transformed English categories
- `transformed-services-ar.json` - Transformed Arabic services
- `transformed-services-en.json` - Transformed English services
- `category-import-results.json` - Category import results
- `category-id-to-documentid.json` - Category ID mapping
- `service-import-results-ar.json` - Arabic service import results
- `service-import-results-en.json` - English service import results

## 🆘 Troubleshooting

### Issue: GraphQL errors during import

- Check Strapi logs for detailed error messages
- Verify schema matches the expected structure
- Ensure all required fields are provided

### Issue: Duplicate services

- This is expected due to data structure
- Script automatically deduplicates by `serviceId`

### Issue: Icon upload fails

- Check icon URL accessibility
- Verify Strapi upload permissions
- Check disk space and upload limits

### Issue: Missing localizations

- Ensure both AR and EN files exist
- Verify category mapping file was created
- Check locale parameter is correct ("ar" or "en")

## 📚 Related Scripts

- `../migrate-consulting-services/` - Similar migration for consulting services (different schema)
- Reference consulting migration for additional patterns and techniques

## 🔄 Migration Flow Diagram

```
JSON Files (Legal Services1/)
    ↓
transform-data.js → transformed-categories-*.json
                  → transformed-services-*.json
    ↓
import-categories-v2.js → Categories in Strapi (AR + EN)
                        → category-id-to-documentid.json
    ↓
import-sub-services.js → Sub-services in Strapi (AR)
                       → service-import-results-ar.json
    ↓
import-sub-services.js → Sub-services in Strapi (EN)
                       → service-import-results-en.json
```

## ✅ Success Criteria

Migration is successful when:

- [ ] All categories imported (AR + EN localizations)
- [ ] Category icons uploaded and attached
- [ ] All unique services imported (check deduplication worked)
- [ ] Both AR and EN service localizations created
- [ ] Service descriptions, documents, and conditions populated
- [ ] Category-service relations established
- [ ] No errors in final summary
- [ ] Data accessible via GraphQL and REST APIs
- [ ] Frontend can fetch and display services correctly
