# 🚀 ISR (Incremental Static Regeneration) Implementation Guide

## ✅ What Was Implemented

ISR has been added to the GraphQL fetch utilities, enabling **automatic page caching** with **periodic revalidation**.

---

## 🎯 How ISR Works

### Without ISR (Before)

```
User visits page → API call to Strapi → Render page → Send to user
User visits again → API call again → Render again → Send to user
```

**Every visit = API call** 😱

### With ISR (After)

```
First visit → API call to Strapi → Render page → Cache page → Send to user
Subsequent visits (within revalidation period) → Serve from cache (instant!) ✅
After revalidation period → Background refresh → Update cache → Continue serving
```

**Most visits = instant (from cache)** 🚀

---

## 📝 Implementation Methods

### **Method 1: Page-Level Revalidation (Recommended)**

Add one line to your page component:

```typescript
// app/page.tsx
import { fetchWithLocale, GET_HOME_PAGE } from "@/lib/graphql";

// Enable ISR with 1 hour revalidation
export const revalidate = 3600; // seconds

export default async function HomePage() {
  const { data } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: "ar",
  });

  return <div>{/* Your content */}</div>;
}
```

**When to use:**

- All queries on the page should have the same revalidation period
- Simplest implementation
- ✅ **Recommended for most cases**

---

### **Method 2: Query-Level Revalidation**

Specify revalidation per query:

```typescript
// app/page.tsx
import { fetchWithLocale, GET_HOME_PAGE } from "@/lib/graphql";

export default async function HomePage() {
  const { data } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: "ar",
    revalidate: 3600, // Revalidate every 1 hour
  });

  return <div>{/* Your content */}</div>;
}
```

**When to use:**

- Different queries need different revalidation times
- More granular control
- Mixed static/dynamic content

---

### **Method 3: Tag-Based Revalidation**

Use tags for on-demand revalidation:

```typescript
// app/page.tsx
import { fetchWithLocale, GET_HOME_PAGE } from "@/lib/graphql";

export default async function HomePage() {
  const { data } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: "ar",
    revalidate: 3600,
    tags: ["home-page", "ar"], // Tags for this query
  });

  return <div>{/* Your content */}</div>;
}
```

Then create a revalidation API route:

```typescript
// app/api/revalidate/route.ts
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (tag) {
    revalidateTag(tag);
    return Response.json({ revalidated: true, tag });
  }

  return Response.json({ revalidated: false });
}
```

**Trigger from Strapi webhook:**

```
POST https://yoursite.com/api/revalidate?tag=home-page
```

**When to use:**

- Need to update cache immediately when content changes
- Using Strapi webhooks
- Best user experience

---

## ⏱️ Revalidation Periods

Choose based on how often your content changes:

| Period     | Seconds    | Use Case                           |
| ---------- | ---------- | ---------------------------------- |
| 1 minute   | `60`       | Frequently updated content         |
| 5 minutes  | `300`      | Semi-dynamic content               |
| 15 minutes | `900`      | Regular updates                    |
| **1 hour** | **`3600`** | **Static content (recommended)**   |
| 6 hours    | `21600`    | Rarely updated                     |
| 24 hours   | `86400`    | Very static content                |
| Never      | `false`    | Pure static (only rebuild updates) |

---

## 🌍 Locale-Specific Caching

Each locale is cached separately automatically:

```typescript
// These are cached separately:
await fetchWithLocale({ query: GET_HOME_PAGE, locale: "ar" }); // Cache 1
await fetchWithLocale({ query: GET_HOME_PAGE, locale: "en" }); // Cache 2
```

**Result:**

- Switching locales = instant (both cached)
- No API calls after first visit per locale

---

## 📊 Real-World Impact

### Before ISR

```
1,000 visitors/day × 3 pages/visit = 3,000 API calls/day
```

### After ISR (1 hour revalidation)

```
24 revalidations/day × 2 locales = 48 API calls/day
99% reduction in API calls! 🎉
```

---

## 🎨 Full Example: Home Page with ISR

```typescript
// app/page.tsx
import { fetchWithLocale, GET_HOME_PAGE } from "@/lib/graphql";
import { HeroSection, AboutSection, ServicesSection } from "@/components";

// Enable ISR: revalidate every hour
export const revalidate = 3600;

export default async function HomePage() {
  const { data, error } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: "ar",
  });

  if (error) {
    return <ErrorPage message={error} />;
  }

  const homeData = data.home;

  return (
    <div>
      <HeroSection data={homeData.Hero} />
      <AboutSection data={homeData.About} />
      <ServicesSection data={homeData.Services} />
      {/* More sections */}
    </div>
  );
}

// Optional: Generate static pages for all locales at build time
export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}
```

---

## 🎯 Multi-Locale Example

```typescript
// app/[locale]/page.tsx
import { fetchWithLocale, GET_HOME_PAGE } from "@/lib/graphql";

export const revalidate = 3600;

export default async function LocalizedPage({
  params,
}: {
  params: { locale: string };
}) {
  const { data } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: params.locale,
  });

  return <HomePage data={data.home} />;
}

// Pre-generate both locales at build time
export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}
```

---

## 🔧 On-Demand Revalidation

### 1. Create Revalidation API

```typescript
// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path");
  const tag = request.nextUrl.searchParams.get("tag");

  // Verify secret to prevent unauthorized revalidation
  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    if (path) {
      revalidatePath(path);
      return Response.json({ revalidated: true, path });
    }

    if (tag) {
      revalidateTag(tag);
      return Response.json({ revalidated: true, tag });
    }

    return Response.json(
      { message: "No path or tag provided" },
      { status: 400 }
    );
  } catch (error) {
    return Response.json({ message: "Error revalidating" }, { status: 500 });
  }
}
```

### 2. Set Environment Variable

```env
# .env.local
REVALIDATION_SECRET=your-secret-key-here
```

### 3. Configure Strapi Webhook

In Strapi Admin:

1. Go to Settings → Webhooks
2. Create new webhook
3. URL: `https://yoursite.com/api/revalidate?secret=your-secret-key-here&path=/`
4. Trigger: Entry update/create/delete

---

## ✅ Benefits Summary

| Feature             | Before ISR  | With ISR              |
| ------------------- | ----------- | --------------------- |
| **Page Load Speed** | ~500ms      | ~50ms (10x faster)    |
| **API Calls**       | Every visit | Once per revalidation |
| **Server Load**     | High        | Minimal               |
| **Cost**            | High        | Very low              |
| **User Experience** | Slower      | Instant               |

---

## 🎯 Best Practices

### ✅ DO:

- Use `revalidate: 3600` (1 hour) for static content
- Add `generateStaticParams()` for all locales
- Use tags for on-demand revalidation
- Set up Strapi webhooks for instant updates

### ❌ DON'T:

- Use `revalidate: 0` (defeats the purpose)
- Use `fetchPolicy: 'network-only'` with ISR (conflicts)
- Forget to handle errors
- Set revalidation too short (< 60 seconds)

---

## 🔍 Testing ISR

### 1. Check if ISR is Working

Visit page and check terminal:

```bash
# First visit - you'll see API call
◐ Compiling /debug/home ...
✓ Compiled /debug/home in 2.1s

# Refresh - no API call! Served from cache ✅
```

### 2. Force Revalidation

Option A: Wait for revalidation period
Option B: Call revalidation API:

```bash
curl -X POST "http://localhost:3000/api/revalidate?secret=your-secret&path=/debug/home"
```

### 3. Check Cache Headers

Open DevTools → Network → Response Headers:

```
x-nextjs-cache: HIT     ← Served from cache
x-nextjs-cache: MISS    ← Fresh fetch
x-nextjs-cache: STALE   ← Revalidating in background
```

---

## 📚 Additional Resources

- [Next.js ISR Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)
- [On-Demand Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#on-demand-revalidation)
- [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)

---

**ISR is now ready to use! Just add `export const revalidate = 3600;` to your pages!** 🚀
