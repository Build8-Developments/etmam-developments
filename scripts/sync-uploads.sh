#!/bin/bash

# Strapi Uploads Sync Script
# Syncs local uploads folder to production server

set -e

# Configuration
SERVER_IP="72.60.135.197"
SERVER_USER="root"
LOCAL_UPLOADS_PATH="./strapi/public/uploads"
REMOTE_UPLOADS_PATH="/var/www/strapi/public/uploads"

echo "======================================"
echo "📤 Strapi Uploads Sync"
echo "======================================"
echo ""
echo "💡 You will be prompted for SSH password during the process"
echo ""

# Check if local uploads folder exists
if [ ! -d "$LOCAL_UPLOADS_PATH" ]; then
    echo "❌ Local uploads folder not found at: $LOCAL_UPLOADS_PATH"
    echo "   Make sure you're running this from the project root"
    exit 1
fi

echo "📦 Local uploads folder found: $LOCAL_UPLOADS_PATH"
echo "📊 Folder size: $(du -sh $LOCAL_UPLOADS_PATH | cut -f1)"
echo ""

# Count files
FILE_COUNT=$(find "$LOCAL_UPLOADS_PATH" -type f | wc -l)
echo "📁 Total files to sync: $FILE_COUNT"
echo ""

# Confirm action
echo "⚠️  WARNING: This will upload all local files to production!"
echo "📍 Target: ${SERVER_USER}@${SERVER_IP}:${REMOTE_UPLOADS_PATH}"
echo ""
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "❌ Sync cancelled"
    exit 0
fi

echo ""
echo "🚀 Starting uploads sync..."
echo ""

# Create remote directory if it doesn't exist
echo "📁 Ensuring remote directory exists..."
ssh ${SERVER_USER}@${SERVER_IP} "mkdir -p ${REMOTE_UPLOADS_PATH}"

# Use scp with recursive flag to copy all files
echo "📤 Uploading files..."
scp -r ${LOCAL_UPLOADS_PATH}/* ${SERVER_USER}@${SERVER_IP}:${REMOTE_UPLOADS_PATH}/

echo ""
echo "✅ Uploads sync completed successfully!"
echo ""
echo "📊 Summary:"
echo "   - Synced from: $LOCAL_UPLOADS_PATH"
echo "   - Synced to: ${SERVER_USER}@${SERVER_IP}:${REMOTE_UPLOADS_PATH}"
echo "   - Total files: $FILE_COUNT"
echo ""
echo "💡 Next steps:"
echo "   1. Verify images are displaying on: https://etmam.alkelany.com"
echo "   2. Check image URLs in browser console if issues persist"
echo ""
