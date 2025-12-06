# Legal Services Migration - Updates Summary

## 📅 Date: December 7, 2025

## 🎯 Purpose

Adapted the legal services migration scripts to work with the updated JSON data structure located in `Services-Data/Legal Services1/`.

## 🔄 Key Changes

### 1. **Data Source Updates**

#### Previous Location:

- `Services-Data/Legal Services/`

#### New Location:

- `Services-Data/Legal Services1/`

#### File Updates:

| Old File                                                           | New File                                                                |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `Categories/administration_categories_with_services_count_ar.json` | `Categories/administration_categories_with_services_count.json` (AR)    |
| `Categories/administration_categories_with_services_count_en.json` | `Categories/administration_categories_with_services_count_en.json` (EN) |
| `Services/administration_categories_with_full_services_ar.json`    | `Services/administration_categories_with_full_services_ar.json`         |
| N/A (was missing)                                                  | `Services/administration_categories_with_full_services_en.json` (NEW)   |

### 2. **JSON Structure Adaptations**

#### New Service Data Structure:

```json
{
  "documentId": "admin_service_82_1228",  // ← Now present in data
  "serviceId": "1228",
  "name": "Service Name",
  "slug": "service-slug",                  // ← Now present in data
  "shortDescription": "...",
  "link": "https://...",
  "serviceDetails": {                      // ← Nested details object
    "serviceFee": 9320,                    // ← Was: serviceFee (top level)
    "currency": "SAR",
    "durationDays": 90,
    "durationMax": 100,
    "ministryInfo": "Premium Residency",   // ← NEW field
    "ministryIcon": "https://...",         // ← NEW field
    "serviceDescription": "...",
    "requiredDocuments": [...],
    "serviceConditions": [...]
  }
}
```

#### Category Data Structure:

```json
{
  "categoryId": "admin_category_82",
  "categoryName": "Category Name",
  "categorySlug": "category-slug",         // ← Now present in data
  "servicesCount": 14,
  "services": [...]
}
```

### 3. **Script Modifications**

#### `transform-data.js`

**Changes:**

- ✅ Use `service.slug` directly (fallback to generation if missing)
- ✅ Use `category.categorySlug` directly (fallback to generation if missing)
- ✅ Access pricing/duration from `serviceDetails` object
- ✅ Parse `serviceFee` as float, `durationDays/Max` as integers
- ✅ Store `originalDocumentId` for reference
- ✅ Extract `ministryInfo` and `ministryIcon` fields
- ✅ Map description component with all fields: `title`, `description`, `icon`, `icon_color_code`

**Key Code Change:**

```javascript
// OLD: Direct access
startFromPrice: service.serviceFee || 0,

// NEW: Nested access with type conversion
startFromPrice: parseFloat(details.serviceFee) || 0,
```

#### `import-sub-services.js`

**Changes:**

- ✅ Enhanced description component mapping to include `icon` and `icon_color_code` fields
- ✅ Ensured all component fields are properly mapped

**Key Code Change:**

```javascript
// OLD: Simple mapping
if (service.description?.length > 0) {
  data.description = service.description;
}

// NEW: Explicit field mapping
if (service.description?.length > 0) {
  data.description = service.description.map((desc) => ({
    title: desc.title || null,
    description: desc.description || null,
    icon: desc.icon || null,
    icon_color_code: desc.icon_color_code || null,
  }));
}
```

#### `migrate.js`

**Changes:**

- ✅ Updated file paths to `Legal Services1` folder
- ✅ Added English service transformation step (Step 2)
- ✅ Added English service import step (Step 5)
- ✅ Updated final summary to include EN service counts
- ✅ Updated next steps to reflect full AR/EN support

**Migration Flow:**

```
Step 1: Transform Arabic Data
Step 2: Transform English Data        ← NEW
Step 3: Import Categories (AR + EN)
Step 4: Import Arabic Sub-Services
Step 5: Import English Sub-Services    ← NEW
```

### 4. **Schema Compatibility**

#### Strapi Components Used:

| Component                    | Fields                                            | Source Data                          |
| ---------------------------- | ------------------------------------------------- | ------------------------------------ |
| `single-service-description` | `title`, `description`, `icon`, `icon_color_code` | `serviceDetails.serviceDescription`  |
| `single-service-document`    | `document`                                        | `serviceDetails.requiredDocuments[]` |
| `single-service-condition`   | `condition`                                       | `serviceDetails.serviceConditions[]` |

#### NOT Used (empty arrays):

- `single-service-requirement` - No requirements data in JSON
- `single-service-step` - No steps data in JSON

### 5. **Deduplication Logic**

Services with the same `serviceId` within a category are deduplicated:

- **Keep:** First occurrence
- **Discard:** Subsequent duplicates

**Example:**

```javascript
// Input: 3 services with serviceId "1228"
// Output: 1 service with serviceId "1228"
```

This is handled in `deduplicateServices()` function in `transform-data.js`.

## 📊 Data Mapping Reference

### Category Order Extraction

```javascript
// categoryId: "admin_category_82" → order: 82
const order = extractCategoryOrder(category.categoryId);
// Regex: /admin_category_(\d+)/
```

### Service Order

```javascript
// serviceId: "1228" → order: 1228
const order = parseInt(service.serviceId, 10);
```

### Slug Handling

```javascript
// Priority: Use existing slug, fallback to generation
slug: service.slug || generateSlug(service.name);
```

## ✨ New Features

1. **Full English Support**: Both categories and services now import with English localizations
2. **Ministry Information**: Captures `ministryInfo` and `ministryIcon` from service details
3. **Complete Component Mapping**: All component fields properly mapped including icons and colors
4. **Better Type Safety**: Explicit type conversions for numbers (parseFloat, parseInt)

## 🧪 Testing Recommendations

1. **Verify Deduplication**:

   ```bash
   # Check for duplicate serviceIds in output
   node check-data.js
   ```

2. **Test Transformation**:

   ```bash
   cd scripts/migrate-legal-services
   node transform-data.js ../../Services-Data/Legal\ Services1/Services/administration_categories_with_full_services_ar.json ./output
   ```

3. **Check Output Files**:

   - Review `output/transformed-services-ar.json`
   - Verify no duplicate serviceIds
   - Check component structure

4. **Run Full Migration**:

   ```bash
   node migrate.js
   ```

5. **Verify in Strapi**:
   - Check category count
   - Check service count (should be less due to deduplication)
   - Verify both AR and EN localizations exist
   - Check component data is populated

## 📝 Migration Checklist

Before running migration:

- [ ] Strapi is running (`http://localhost:1337`)
- [ ] API token is configured in `migrate.js`
- [ ] Both AR and EN JSON files exist in `Legal Services1` folder
- [ ] `node_modules` installed (`npm install`)
- [ ] Output directory is writable

After migration:

- [ ] Check console for errors
- [ ] Review `output/service-import-results-*.json`
- [ ] Verify counts in final summary
- [ ] Test GraphQL queries
- [ ] Verify frontend can fetch data

## 🔗 Related Documentation

- `README.md` - Full migration guide
- `TROUBLESHOOTING.md` - Common issues (if exists)
- Consulting services migration: `../migrate-consulting-services/` (for reference)

## 👤 Author

Migration scripts adapted for new JSON structure - December 7, 2025
