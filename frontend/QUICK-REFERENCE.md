# 🚀 GraphQL Quick Reference Card

## ⚡ Quick Start (Copy & Paste)

### Basic Page

```typescript
import { fetchWithLocale, GET_HOME_PAGE } from "@/lib/graphql";

export default async function Page() {
  const { data, success } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: "ar",
  });

  if (!success) return <div>Error</div>;

  return <div>{/* use data */}</div>;
}
```

### With Error Handling

```typescript
const { data, error, success } = await fetchWithLocale({
  query: GET_HOME_PAGE,
  locale: "ar",
});

if (!success) {
  return <ErrorPage message={error} />;
}
```

### With Search Params

```typescript
export default async function Page({
  searchParams,
}: {
  searchParams: { locale?: string };
}) {
  const locale = searchParams.locale || "ar";

  const { data } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale,
  });
}
```

### Multiple Queries

```typescript
import { fetchMultiple, GET_HEADER, GET_FOOTER } from "@/lib/graphql";

const [header, footer] = await fetchMultiple([
  { query: GET_HEADER, variables: { locale: "ar" } },
  { query: GET_FOOTER, variables: { locale: "ar" } },
]);
```

---

## 📦 Import Cheat Sheet

```typescript
import {
  // Queries
  GET_HOME_PAGE,

  // Utilities
  fetchWithLocale,
  fetchGraphQL,
  fetchMultiple,
  fetchOrThrow,
} from "@/lib/graphql";
```

---

## 🎯 Function Comparison

| Function            | Use When               | Returns                           |
| ------------------- | ---------------------- | --------------------------------- |
| `fetchWithLocale()` | Most pages             | `{ data, error, success }`        |
| `fetchGraphQL()`    | Need full control      | `{ data, error, success }`        |
| `fetchMultiple()`   | Parallel queries       | `Array<{ data, error, success }>` |
| `fetchOrThrow()`    | Using error boundaries | `data` (throws on error)          |

---

## 🔑 Common Patterns

### Pattern 1: Simple Fetch

```typescript
const { data, success } = await fetchWithLocale({
  query: GET_HOME_PAGE,
  locale: "ar",
});
```

### Pattern 2: With Variables

```typescript
const { data } = await fetchWithLocale({
  query: GET_BLOG_POSTS,
  locale: "ar",
  variables: { page: 1, pageSize: 10 },
});
```

### Pattern 3: Fresh Data

```typescript
const { data } = await fetchWithLocale({
  query: GET_HOME_PAGE,
  locale: "ar",
  fetchPolicy: "network-only", // No cache
});
```

### Pattern 4: Multiple Queries

```typescript
const results = await fetchMultiple([
  { query: GET_HEADER, variables: { locale } },
  { query: GET_FOOTER, variables: { locale } },
]);
```

---

## ⚙️ Fetch Policies

| Policy         | Behavior                         |
| -------------- | -------------------------------- |
| `cache-first`  | Use cache if available (default) |
| `network-only` | Always fetch fresh               |
| `cache-only`   | Only use cache                   |
| `no-cache`     | Fetch but don't cache            |

---

## 📁 File Locations

- **Utilities:** `lib/graphql/utils/fetchGraphQL.ts`
- **Queries:** `lib/graphql/queries/pages/*.ts`
- **Docs:** `lib/graphql/utils/README.md`
- **Examples:** `lib/graphql/utils/examples.ts`

---

## 🐛 Debug Page

Visit: `/debug/home?locale=ar`

Switch locales: `/debug/home?locale=en`

---

## ✅ Checklist for New Pages

- [ ] Create query in `lib/graphql/queries/pages/`
- [ ] Export from `lib/graphql/queries/pages/index.ts`
- [ ] Use `fetchWithLocale()` in page component
- [ ] Handle success/error states
- [ ] Test with debug page (optional)

---

## 📚 Learn More

- Full docs: `lib/graphql/utils/README.md`
- Examples: `lib/graphql/utils/examples.ts`
- Summary: `lib/graphql/utils/SUMMARY.md`
