# 🔄 Strapi Webhook Setup for Next.js Revalidation

This guide explains how to set up Strapi webhooks to automatically revalidate Next.js cache when content is updated.

## 🎯 Problem

When you update content in Strapi, Next.js doesn't immediately show the changes because of its cache. You need to manually trigger revalidation or restart the frontend.

## ✅ Solution

Set up Strapi webhooks to automatically call Next.js revalidation API whenever content changes.

---

## 📋 Step-by-Step Setup

### 1. **Get Your Revalidation Secret**

From your frontend `.env.production` on the server:

```bash
ssh root@72.60.135.197
cat /var/www/etmam-frontend/.env.production | grep REVALIDATION_SECRET
```

You should see:

```
REVALIDATION_SECRET=z5TrTiBeFT4nG/HHmVoOmnQUCyxPIvn1+70Bp4Kyd/I=
```

### 2. **Login to Strapi Admin**

Go to: `https://etmam-admin.alkelany.com/admin`

### 3. **Navigate to Webhooks**

1. Click **Settings** (⚙️ gear icon in sidebar)
2. Click **GLOBAL SETTINGS → Webhooks**
3. Click **Create new webhook**

### 4. **Configure Webhook**

**Name:**

```
Next.js Revalidation - Homepage
```

**URL:**

```
https://etmam.alkelany.com/api/revalidate?secret=z5TrTiBeFT4nG/HHmVoOmnQUCyxPIvn1+70Bp4Kyd/I=&path=/
```

**Triggered events:**

- ✅ `entry.create`
- ✅ `entry.update`
- ✅ `entry.delete`
- ✅ `entry.publish`
- ✅ `entry.unpublish`

**Headers:** (Optional, leave empty)

Click **Save**

### 5. **Create Additional Webhooks** (Optional)

For better performance, create specific webhooks for different pages:

#### **About Page Webhook**

- **Name:** `Next.js Revalidation - About`
- **URL:** `https://etmam.alkelany.com/api/revalidate?secret=YOUR_SECRET&path=/about`
- **Events:** Same as above

#### **Blog Webhook**

- **Name:** `Next.js Revalidation - Blog`
- **URL:** `https://etmam.alkelany.com/api/revalidate?secret=YOUR_SECRET&path=/blog`
- **Events:** Same as above

#### **All Pages Webhook** (Aggressive - revalidates everything)

- **Name:** `Next.js Revalidation - All Pages`
- **URL:** `https://etmam.alkelany.com/api/revalidate?secret=YOUR_SECRET&path=/`
- **Events:** Same as above

---

## 🧪 Test the Webhook

### Method 1: Test from Strapi Admin

1. Go to **Settings → Webhooks**
2. Click on your webhook
3. Click **Trigger** button
4. Check the **Response** - should see `200` status

### Method 2: Update Content

1. Edit any content in Strapi
2. Click **Save** or **Publish**
3. Check your frontend - changes should appear immediately
4. Check Strapi webhook logs for success/failure

### Method 3: Manual API Test

```bash
# Test the revalidation endpoint
curl -X POST "https://etmam.alkelany.com/api/revalidate?secret=z5TrTiBeFT4nG/HHmVoOmnQUCyxPIvn1+70Bp4Kyd/I=&path=/"

# Should return:
# {"revalidated":true,"type":"path","value":"/","timestamp":"2025-11-08T..."}
```

---

## 📊 Webhook Configuration Examples

### **Single Page Revalidation**

Best for specific pages that change independently:

```
URL: https://etmam.alkelany.com/api/revalidate?secret=YOUR_SECRET&path=/about
```

### **Tag-Based Revalidation**

If you use Next.js cache tags:

```
URL: https://etmam.alkelany.com/api/revalidate?secret=YOUR_SECRET&tag=home-page
```

### **Full Site Revalidation**

Revalidates all pages (slower but safest):

```
URL: https://etmam.alkelany.com/api/revalidate?secret=YOUR_SECRET&path=/
```

---

## 🔍 Troubleshooting

### Webhook Returns 401 Unauthorized

**Cause:** Wrong or missing revalidation secret

**Fix:**

1. Check the secret in `/var/www/etmam-frontend/.env.production`
2. Make sure it matches in webhook URL
3. URL encode special characters if needed

### Webhook Returns 500 Internal Server Error

**Cause:** Error in Next.js revalidation code

**Fix:**

1. Check Next.js logs: `ssh root@72.60.135.197 "pm2 logs etmam-frontend"`
2. Verify the path exists
3. Check if Next.js is running

### Changes Still Don't Appear

**Possible causes:**

1. **Browser cache** - Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
2. **CDN cache** - If using Cloudflare/CDN, purge cache
3. **Wrong path** - Verify the path in webhook URL matches your route
4. **Webhook not triggered** - Check Strapi webhook logs

### Check Webhook Logs in Strapi

1. Go to **Settings → Webhooks**
2. Click on webhook name
3. Scroll to **Webhook Logs** section
4. Check for errors

---

## 🚀 Recommended Setup

For optimal performance, set up these webhooks:

| Content Type     | Webhook Path      | Description                   |
| ---------------- | ----------------- | ----------------------------- |
| Homepage content | `path=/`          | Revalidates homepage          |
| About page       | `path=/about`     | Revalidates about page        |
| Blog posts       | `path=/blog`      | Revalidates blog listing      |
| Services         | `path=/services`  | Revalidates services          |
| **All content**  | `path=/` (layout) | Catches everything (fallback) |

---

## 📝 Environment Variables Reference

### Frontend (.env.production)

```env
REVALIDATION_SECRET=z5TrTiBeFT4nG/HHmVoOmnQUCyxPIvn1+70Bp4Kyd/I=
```

### Webhook URL Format

```
https://etmam.alkelany.com/api/revalidate?secret={REVALIDATION_SECRET}&path={PAGE_PATH}
```

---

## 🔐 Security Notes

- ✅ Revalidation secret is required to prevent unauthorized revalidation
- ✅ Only accept requests from Strapi server
- ✅ Use HTTPS for webhook URLs
- ⚠️ Don't expose the secret in public code
- ⚠️ Rotate the secret periodically

---

## 📚 Additional Resources

- [Next.js Revalidation Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)
- [Strapi Webhooks Docs](https://docs.strapi.io/dev-docs/configurations/webhooks)
- Project: `DEPLOYMENT.md` for full deployment guide

---

**Last Updated:** November 8, 2025  
**Maintained by:** Build8 Developments
