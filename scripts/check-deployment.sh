#!/bin/bash

# Quick Deployment Status Checker
# Run this script to check the status of your production deployment

echo "======================================"
echo "🚀 Etmam Production Status Checker"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Server details
SERVER_IP="72.60.135.197"
SERVER_USER="root"

echo "📡 Connecting to server: $SERVER_IP"
echo ""

# Check if sshpass is installed
if ! command -v sshpass &> /dev/null; then
    echo -e "${YELLOW}⚠️  sshpass not installed. You'll need to enter password manually.${NC}"
    SSH_CMD="ssh"
else
    echo "🔑 Using sshpass for authentication"
    read -sp "Enter SSH password: " SSH_PASS
    echo ""
    SSH_CMD="sshpass -p $SSH_PASS ssh"
fi

echo ""
echo "======================================"
echo "📊 PM2 Process Status"
echo "======================================"

$SSH_CMD -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
pm2 list
ENDSSH

echo ""
echo "======================================"
echo "📁 Deployment Directories"
echo "======================================"

$SSH_CMD -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
echo "Frontend:"
ls -lah /var/www/etmam-frontend/.next 2>/dev/null | head -5 || echo "❌ Build not found"
echo ""
echo "Strapi:"
ls -lah /var/www/strapi/dist 2>/dev/null | head -5 || echo "❌ Build not found"
ENDSSH

echo ""
echo "======================================"
echo "📦 Recent Backups"
echo "======================================"

$SSH_CMD -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
ls -lth /var/www/backups 2>/dev/null | head -6 || echo "❌ No backups found"
ENDSSH

echo ""
echo "======================================"
echo "💾 Disk Usage"
echo "======================================"

$SSH_CMD -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
df -h | grep -E "Filesystem|/var/www|/$"
ENDSSH

echo ""
echo "======================================"
echo "🧠 Memory Usage"
echo "======================================"

$SSH_CMD -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
free -h
ENDSSH

echo ""
echo "======================================"
echo "✅ Status Check Complete"
echo "======================================"
