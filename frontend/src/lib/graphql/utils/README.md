# GraphQL Fetch Utilities

Centralized utilities for fetching data from GraphQL API across your Next.js application.

## 📦 Available Functions

### 1. `fetchGraphQL` - Basic Fetch

General-purpose GraphQL fetch function.

```typescript
import { fetchGraphQL, GET_HOME_PAGE } from "@/lib/graphql";

const result = await fetchGraphQL({
  query: GET_HOME_PAGE,
  variables: { locale: "ar" },
});

if (result.success) {
  const homeData = result.data.home;
}
```

### 2. `fetchWithLocale` - Locale-Aware Fetch (Recommended)

Simplified version for locale-based queries.

```typescript
import { fetchWithLocale, GET_HOME_PAGE } from "@/lib/graphql";

const result = await fetchWithLocale({
  query: GET_HOME_PAGE,
  locale: "ar",
});

const homeData = result.data?.home;
```

### 3. `fetchMultiple` - Parallel Fetching

Fetch multiple queries in parallel for better performance.

```typescript
import {
  fetchMultiple,
  GET_HEADER,
  GET_FOOTER,
  GET_HOME_PAGE,
} from "@/lib/graphql";

const [headerResult, footerResult, homeResult] = await fetchMultiple([
  { query: GET_HEADER, variables: { locale: "ar" } },
  { query: GET_FOOTER, variables: { locale: "ar" } },
  { query: GET_HOME_PAGE, variables: { locale: "ar" } },
]);
```

### 4. `fetchOrThrow` - Error Throwing Variant

Use with error boundaries for cleaner code.

```typescript
import { fetchOrThrow, GET_HOME_PAGE } from "@/lib/graphql";

// Will throw error if fetch fails
const data = await fetchOrThrow({
  query: GET_HOME_PAGE,
  variables: { locale: "ar" },
});

// No need to check for errors
const homeData = data.home;
```

---

## 🎯 Usage Examples

### Example 1: Home Page (SSR)

```typescript
// app/page.tsx
import { fetchWithLocale, GET_HOME_PAGE } from "@/lib/graphql";

export default async function HomePage() {
  const result = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: "ar",
  });

  if (!result.success) {
    return <ErrorComponent message={result.error} />;
  }

  const homeData = result.data.home;

  return (
    <div>
      <HeroSection data={homeData.Hero} />
      <AboutSection data={homeData.About} />
      {/* ... */}
    </div>
  );
}
```

### Example 2: Blog Page with Pagination

```typescript
// app/blog/page.tsx
import { fetchWithLocale, GET_BLOG_POSTS } from "@/lib/graphql";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1");

  const result = await fetchWithLocale({
    query: GET_BLOG_POSTS,
    locale: "ar",
    variables: { page, pageSize: 9 },
  });

  if (!result.success) {
    return <ErrorPage />;
  }

  const posts = result.data.blogPosts.data;
  const pagination = result.data.blogPosts.meta.pagination;

  return (
    <div>
      <BlogGrid posts={posts} />
      <Pagination {...pagination} />
    </div>
  );
}
```

### Example 3: Dynamic Locale from Params

```typescript
// app/[locale]/page.tsx
import { fetchWithLocale, GET_HOME_PAGE } from "@/lib/graphql";

export default async function LocalizedHomePage({
  params,
}: {
  params: { locale: string };
}) {
  const result = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: params.locale,
  });

  if (!result.success) {
    return <div>Error: {result.error}</div>;
  }

  return <HomePage data={result.data.home} />;
}
```

### Example 4: Layout with Multiple Queries

```typescript
// app/layout.tsx
import { fetchMultiple, GET_HEADER, GET_FOOTER } from "@/lib/graphql";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerResult, footerResult] = await fetchMultiple([
    { query: GET_HEADER, variables: { locale: "ar" } },
    { query: GET_FOOTER, variables: { locale: "ar" } },
  ]);

  return (
    <html lang="ar">
      <body>
        {headerResult.success && <Header data={headerResult.data.header} />}
        <main>{children}</main>
        {footerResult.success && <Footer data={footerResult.data.footer} />}
      </body>
    </html>
  );
}
```

### Example 5: With Custom Fetch Policy

```typescript
// Force fresh data (no cache)
const result = await fetchWithLocale({
  query: GET_HOME_PAGE,
  locale: "ar",
  fetchPolicy: "network-only",
});

// Use cache if available (faster)
const result = await fetchWithLocale({
  query: GET_HOME_PAGE,
  locale: "ar",
  fetchPolicy: "cache-first", // Default
});
```

### Example 6: Error Handling

```typescript
const result = await fetchWithLocale({
  query: GET_HOME_PAGE,
  locale: "ar",
});

if (!result.success) {
  console.error("GraphQL Error:", result.error);
  // Handle error (show error page, fallback data, etc.)
  return <ErrorFallback />;
}

// Use data
const homeData = result.data.home;
```

---

## 📝 Response Structure

All fetch functions return a consistent response:

```typescript
interface GraphQLResponse<T = any> {
  data: T | null; // Response data (null if error)
  error: string | null; // Error message (null if success)
  success: boolean; // Whether the query was successful
}
```

---

## ⚙️ Configuration

### Environment Variables

Set your GraphQL endpoint in `.env.local`:

```env
NEXT_PUBLIC_STRAPI_GRAPHQL_URL=http://localhost:1337/graphql
```

### Fetch Policies

- `cache-first` (default) - Use cache if available, fetch if not
- `network-only` - Always fetch fresh data from network
- `cache-only` - Only use cached data (error if not cached)
- `no-cache` - Fetch from network and don't update cache

---

## 🎯 Best Practices

### ✅ DO

```typescript
// Use fetchWithLocale for locale-based queries
const result = await fetchWithLocale({
  query: GET_HOME_PAGE,
  locale: 'ar',
});

// Always check success before using data
if (result.success) {
  const data = result.data;
}

// Use fetchMultiple for parallel queries
const results = await fetchMultiple([...]);
```

### ❌ DON'T

```typescript
// Don't access data without checking success
const data = result.data.home; // May be null!

// Don't create Apollo Client manually
const client = createEnhancedApolloClient(...); // Use utilities instead

// Don't fetch sequentially when you can parallelize
const header = await fetchGraphQL(...);
const footer = await fetchGraphQL(...); // Use fetchMultiple!
```

---

## 🔄 Migration Guide

### Before (Old Way)

```typescript
import { createEnhancedApolloClient } from "@/lib/apollo-client-enhanced";
import { GET_HOME_PAGE } from "@/lib/graphql";

const client = createEnhancedApolloClient(
  process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL!
);

let data = null;
let error = null;

try {
  const response = await client.query({
    query: GET_HOME_PAGE,
    variables: { locale: "ar" },
  });
  data = response.data;
} catch (err) {
  error = err.message;
}
```

### After (New Way)

```typescript
import { fetchWithLocale, GET_HOME_PAGE } from "@/lib/graphql";

const { data, error, success } = await fetchWithLocale({
  query: GET_HOME_PAGE,
  locale: "ar",
});
```

**Much cleaner! 🎉**

---

## 📚 Additional Resources

- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [Next.js Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Strapi GraphQL](https://docs.strapi.io/dev-docs/plugins/graphql)
