# Migration Failed - Quick Fix Guide

## Issues Identified

Based on your output files:

### ❌ Issue 1: All Media Uploads Failed (401 Unauthorized)

- **Error:** `Missing or invalid credentials`
- **Impact:** No icons were uploaded, `url-to-media-id-map.json` is empty
- **Result:** 0/36 icons uploaded successfully

### ❌ Issue 2: All Service Imports Failed (Null Reference)

- **Error:** `Cannot read properties of null (reading 'createConsultingService')`
- **Impact:** 0 services created, 33 services failed
- **Result:** No data imported into Strapi

## Root Causes

Both issues stem from **API token problems**:

1. **Invalid API token** - Token doesn't exist or was revoked
2. **Insufficient permissions** - Token lacks required permissions
3. **Authentication not working** - Token not being sent correctly

## Quick Fix Steps

### Step 1: Verify Strapi is Running

```bash
cd strapi
npm run develop
```

Wait for the message: `Server started on: http://localhost:1337`

### Step 2: Create a Valid API Token

1. Open Strapi admin panel: http://localhost:1337/admin
2. Log in with your admin credentials
3. Navigate to: **Settings** → **Global Settings** → **API Tokens**
4. Click **"Create new API Token"**
5. Configure:
   - **Name:** Migration Token
   - **Description:** Token for data migration
   - **Token duration:** Unlimited
   - **Token type:** Select one of these options:

#### Option A: Full Access (Easiest)

- Select **"Full Access"**
- This gives access to everything

#### Option B: Custom (More Secure)

- Select **"Custom"**
- Enable these permissions:

  ```
  consulting-service
    ├── create ✓
    ├── update ✓
    ├── find ✓
    └── findOne ✓

  upload
    └── upload ✓
  ```

6. Click **"Save"**
7. **Copy the token immediately** (it won't be shown again)

### Step 3: Run Diagnostics

Before re-running the migration, test your token:

```bash
cd scripts/migrate-consulting-services
node diagnose.js
```

Enter your new API token when prompted. This will verify:

- ✅ Strapi connection
- ✅ GraphQL endpoint
- ✅ API permissions
- ✅ Schema availability

### Step 4: Re-run Migration

Once diagnostics pass:

```bash
# Set the API token
export STRAPI_API_TOKEN="your-new-token-here"

# Run migration
node migrate.js
```

Or on Windows:

```cmd
set STRAPI_API_TOKEN=your-new-token-here
node migrate.js
```

## Alternative: Manual Token Entry

If you prefer not to set environment variables:

```bash
node migrate.js
```

The script will prompt you to enter the token interactively.

## Verification After Fix

After successful migration, you should see:

### ✅ Media Upload Success

```
📦 Mapping saved to: ./output/url-to-media-id-map.json
✅ Successfully uploaded 36/36 icons
```

### ✅ Import Success

```
📊 Import Summary:
  Created: 33
  Updated: 0
  Failed: 0
  Skipped: 0
```

## Common Issues & Solutions

### Issue: "Cannot connect to Strapi"

**Solution:** Make sure Strapi is running on port 1337

```bash
cd strapi
npm run develop
```

### Issue: "GraphQL endpoint not accessible"

**Solution:** Verify GraphQL plugin is enabled in `strapi/config/plugins.ts`

### Issue: "Schema fields not found"

**Solution:** Restart Strapi after schema changes

```bash
# In strapi directory
# Press Ctrl+C to stop
npm run develop
```

### Issue: Still getting 401 errors

**Solution:**

1. Delete old token in Strapi admin
2. Create completely new token
3. Make sure you copy it correctly (no extra spaces)

## Need More Help?

Run the diagnostic tool for detailed analysis:

```bash
node diagnose.js
```

This will:

- Test each endpoint individually
- Show specific permission issues
- Provide targeted recommendations

## Clean Up & Retry

If you want to start fresh:

```bash
# Remove output files
rm -rf output/ temp/

# Run migration again
node migrate.js
```

The migration is idempotent - it's safe to run multiple times.
