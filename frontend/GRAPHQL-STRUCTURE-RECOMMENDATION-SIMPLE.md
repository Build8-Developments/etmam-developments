# GraphQL Queries Folder Structure - Simplified Approach

## 📊 Analysis Summary

Based on your Strapi content structure and query style:

### **Strapi Content Organization:**

- **9 Reusable Components** (shared, ui, content categories)
- **10 Section Components** (sections category)
- **1 Single Type** (Home Page with all sections nested)
- **Future Collection Types** (Blog Posts, Services, etc.)
- **i18n Support** (Arabic & English)

### **Your Query Style:**

- ✅ Clean inline queries (no fragments)
- ✅ Simple nested object structure
- ✅ Easy to read and maintain
- ✅ All sections in one query

---

## 🎯 Recommended Folder Structure

### **Simplified Feature-Based Organization**

```
frontend/src/lib/graphql/
│
├── index.ts                          # Export all queries/mutations
│
├── queries/                          # All GraphQL queries
│   ├── index.ts                      # Export all queries
│   │
│   ├── layout/                       # Layout-related queries
│   │   ├── header.ts                 # Header query
│   │   ├── footer.ts                 # Footer query
│   │   └── index.ts
│   │
│   ├── pages/                        # Page-specific queries
│   │   ├── home.ts                   # Home page (all sections)
│   │   ├── about.ts                  # About page
│   │   ├── services.ts               # Services page
│   │   ├── blog.ts                   # Blog listing & detail
│   │   ├── contact.ts                # Contact page
│   │   └── index.ts
│   │
│   └── common/                       # Common/shared queries
│       ├── seo.ts                    # SEO query
│       ├── settings.ts               # Global settings
│       └── index.ts
│
├── mutations/                        # All GraphQL mutations
│   ├── index.ts
│   ├── contact.ts                    # Contact form submission
│   ├── newsletter.ts                 # Newsletter subscription
│   └── consultation.ts               # Consultation request
│
└── types/                            # TypeScript types (optional)
    ├── index.ts
    ├── home.types.ts                 # Home page types
    ├── blog.types.ts                 # Blog types
    └── common.types.ts               # Common types

```

**Key Principles:**

- ✅ **No fragments** - Keep queries simple and inline
- ✅ **One file per page** - Easy to find and maintain
- ✅ **Feature-based organization** - Group by functionality
- ✅ **Export via index files** - Clean imports

---

## 📝 Implementation Examples

### **1. Home Page Query**

**File: `queries/pages/home.ts`**

```typescript
import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
  query Home($locale: I18NLocaleCode) {
    home(locale: $locale) {
      Hero {
        backgroundImage {
          name
          url
        }
        description
        personImage {
          name
          url
        }
        primaryButton {
          href
          icon {
            url
            name
          }
          label
          openInNewTab
          variant
        }
        secondaryButton {
          href
          icon {
            url
            name
          }
          label
          openInNewTab
          variant
        }
        subtitle
        title
      }

      About {
        title
        statLabel
        statNumber
        heading
        description
        ctaButton {
          href
          label
          openInNewTab
          variant
        }
        features {
          description
          title
        }
        mainImage {
          url
          name
        }
        secondaryImage {
          url
          name
        }
      }

      Services {
        title
        description
        services {
          icon
          title
          description
          isActive
        }
        ctaButton {
          href
          label
          openInNewTab
          variant
        }
      }

      HowItWorks {
        title
        description
        personImage {
          url
          name
        }
        bannerText
        steps {
          number
          title
          description
        }
      }

      Statistics {
        title
        backgroundImage {
          url
          name
        }
        stats {
          number
          label
        }
      }

      ServicesCarousel {
        title
        description
        services {
          image {
            url
            name
          }
          icon
          title
          description
        }
      }

      Blog {
        title
        description
        ctaButton {
          href
          label
          openInNewTab
          variant
        }
        featuredPosts {
          id
          title
          excerpt
          slug
          publishedAt
          featuredImage {
            url
            name
          }
          author {
            name
            avatar {
              url
              name
            }
          }
        }
      }

      FAQ {
        title
        description
        faqs {
          question
          answer
          category
        }
      }

      CTA {
        title
        description
        backgroundImage {
          url
          name
        }
        ctaButton {
          href
          label
          openInNewTab
          variant
        }
      }

      Partners {
        title
        description
        partners {
          name
          logo {
            url
            name
          }
          website
        }
      }
    }
  }
`;
```

---

### **2. Blog Page Queries**

**File: `queries/pages/blog.ts`**

```typescript
import { gql } from "@apollo/client";

// Blog listing page
export const GET_BLOG_POSTS = gql`
  query BlogPosts(
    $locale: I18NLocaleCode
    $page: Int = 1
    $pageSize: Int = 9
    $sort: [String] = ["publishedAt:desc"]
  ) {
    blogPosts(
      locale: $locale
      pagination: { page: $page, pageSize: $pageSize }
      sort: $sort
    ) {
      data {
        id
        attributes {
          title
          excerpt
          slug
          publishedAt
          featuredImage {
            url
            name
          }
          author {
            name
            avatar {
              url
              name
            }
          }
          category {
            name
            slug
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

// Single blog post
export const GET_BLOG_POST = gql`
  query BlogPost($slug: String!, $locale: I18NLocaleCode) {
    blogPosts(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        id
        attributes {
          title
          content
          excerpt
          slug
          publishedAt
          seo {
            metaTitle
            metaDescription
            keywords
            canonicalURL
            metaImage {
              url
              name
            }
          }
          featuredImage {
            url
            name
          }
          author {
            name
            bio
            avatar {
              url
              name
            }
          }
          category {
            name
            slug
          }
          tags {
            name
            slug
          }
        }
      }
    }
  }
`;

// Blog categories
export const GET_BLOG_CATEGORIES = gql`
  query BlogCategories($locale: I18NLocaleCode) {
    blogCategories(locale: $locale) {
      data {
        id
        attributes {
          name
          slug
          description
        }
      }
    }
  }
`;
```

---

### **3. Layout Queries**

**File: `queries/layout/header.ts`**

```typescript
import { gql } from "@apollo/client";

export const GET_HEADER = gql`
  query Header($locale: I18NLocaleCode) {
    header(locale: $locale) {
      logo {
        url
        name
      }
      navigationItems {
        label
        href
        children {
          label
          href
        }
      }
      contactButton {
        label
        href
        variant
      }
    }
  }
`;
```

**File: `queries/layout/footer.ts`**

```typescript
import { gql } from "@apollo/client";

export const GET_FOOTER = gql`
  query Footer($locale: I18NLocaleCode) {
    footer(locale: $locale) {
      logo {
        url
        name
      }
      description
      quickLinks {
        label
        href
      }
      services {
        label
        href
      }
      contactInfo {
        address
        phone
        email
      }
      socialLinks {
        platform
        url
        icon
      }
      copyright
    }
  }
`;
```

---

### **4. Mutations**

**File: `mutations/contact.ts`**

```typescript
import { gql } from "@apollo/client";

export const SUBMIT_CONTACT_FORM = gql`
  mutation SubmitContactForm($data: ContactFormInput!) {
    createContactSubmission(data: $data) {
      data {
        id
        attributes {
          name
          email
          phone
          subject
          message
          submittedAt
        }
      }
    }
  }
`;
```

**File: `mutations/newsletter.ts`**

```typescript
import { gql } from "@apollo/client";

export const SUBSCRIBE_NEWSLETTER = gql`
  mutation SubscribeNewsletter($email: String!) {
    createNewsletterSubscription(data: { email: $email }) {
      data {
        id
        attributes {
          email
          subscribedAt
        }
      }
    }
  }
`;
```

---

### **5. Index Files for Clean Imports**

**File: `lib/graphql/index.ts`**

```typescript
// Queries
export * from "./queries";

// Mutations
export * from "./mutations";

// Types (optional)
export * from "./types";
```

**File: `lib/graphql/queries/index.ts`**

```typescript
export * from "./layout";
export * from "./pages";
export * from "./common";
```

**File: `lib/graphql/queries/pages/index.ts`**

```typescript
export * from "./home";
export * from "./about";
export * from "./services";
export * from "./blog";
export * from "./contact";
```

**File: `lib/graphql/queries/layout/index.ts`**

```typescript
export * from "./header";
export * from "./footer";
```

**File: `lib/graphql/mutations/index.ts`**

```typescript
export * from "./contact";
export * from "./newsletter";
export * from "./consultation";
```

---

## 🚀 Usage in Next.js App Router (SSR)

### **Server Components (Recommended for SSR)**

```typescript
// app/page.tsx (Home Page)
import { GET_HOME_PAGE } from "@/lib/graphql";
import { createEnhancedApolloClient } from "@/lib/apollo-client-enhanced";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  HowItWorksSection,
  StatisticsSection,
  ServicesCarouselSection,
  BlogSection,
  FAQSection,
  CTASection,
  PartnersSection,
} from "@/components";

export default async function HomePage() {
  const client = createEnhancedApolloClient(
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL!
  );

  const { data } = await client.query({
    query: GET_HOME_PAGE,
    variables: {
      locale: "ar", // or get from params/cookies
    },
  });

  const homeData = data.home;

  return (
    <div className="min-h-screen bg-white">
      <HeroSection data={homeData.Hero} />
      <AboutSection data={homeData.About} />
      <ServicesSection data={homeData.Services} />
      <HowItWorksSection data={homeData.HowItWorks} />
      <StatisticsSection data={homeData.Statistics} />
      <ServicesCarouselSection data={homeData.ServicesCarousel} />
      <BlogSection data={homeData.Blog} />
      <FAQSection data={homeData.FAQ} />
      <CTASection data={homeData.CTA} />
      <PartnersSection data={homeData.Partners} />
    </div>
  );
}
```

### **With Locale from Params**

```typescript
// app/[locale]/page.tsx
import { GET_HOME_PAGE } from "@/lib/graphql";
import { createEnhancedApolloClient } from "@/lib/apollo-client-enhanced";

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const client = createEnhancedApolloClient(
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL!
  );

  const { data } = await client.query({
    query: GET_HOME_PAGE,
    variables: {
      locale: params.locale || "ar",
    },
  });

  const homeData = data.home;

  return <div>{/* render sections */}</div>;
}
```

### **Blog Listing with Pagination**

```typescript
// app/blog/page.tsx
import { GET_BLOG_POSTS } from "@/lib/graphql";
import { createEnhancedApolloClient } from "@/lib/apollo-client-enhanced";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const client = createEnhancedApolloClient(
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL!
  );

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { data } = await client.query({
    query: GET_BLOG_POSTS,
    variables: {
      locale: "ar",
      page,
      pageSize: 9,
    },
  });

  const posts = data.blogPosts.data;
  const pagination = data.blogPosts.meta.pagination;

  return <div>{/* render blog posts and pagination */}</div>;
}
```

### **Client Components (for mutations)**

```typescript
// components/ContactForm.tsx
"use client";

import { useMutation } from "@apollo/client";
import { SUBMIT_CONTACT_FORM } from "@/lib/graphql";

export function ContactForm() {
  const [submitForm, { loading, error, data }] =
    useMutation(SUBMIT_CONTACT_FORM);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await submitForm({
      variables: {
        data: {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && <p>Thank you for your message!</p>}
    </form>
  );
}
```

---

## ✅ Benefits of This Structure

### **1. Simplicity**

- ✅ No fragments to manage
- ✅ Easy to understand at a glance
- ✅ Less boilerplate code
- ✅ Faster development

### **2. Scalability**

- ✅ One file per page/feature
- ✅ Clear organization as project grows
- ✅ No more 1000+ line query files
- ✅ Easy to add new pages

### **3. Maintainability**

- ✅ Easy to find specific queries
- ✅ Clear naming conventions
- ✅ Self-documenting structure
- ✅ Less cognitive overhead

### **4. SSR Optimization**

- ✅ Import only needed queries per page
- ✅ Tree-shaking friendly
- ✅ Smaller bundle sizes
- ✅ Better performance

### **5. Team Collaboration**

- ✅ Multiple devs can work on different query files
- ✅ Merge conflicts reduced
- ✅ Clear ownership of files
- ✅ Easy code reviews

---

## 🔧 Migration Plan

### **Phase 1: Setup Structure (30 min)**

1. Create folder structure in `src/lib/graphql/`
2. Create index files for exports
3. Set up empty files for each page

### **Phase 2: Migrate Home Page (1 hour)**

1. Create `queries/pages/home.ts` with your full home query
2. Create `queries/layout/header.ts` and `footer.ts`
3. Update index files to export new queries
4. Test imports in components

### **Phase 3: Update Components (1 hour)**

1. Update `app/page.tsx` to use new query structure
2. Update layout components (Header, Footer)
3. Test SSR rendering
4. Verify data is fetched correctly

### **Phase 4: Add Other Pages (as needed)**

1. Create blog queries when building blog pages
2. Create service queries when building service pages
3. Follow the same pattern for consistency

### **Phase 5: Cleanup**

1. Archive old `queries.ts` file (don't delete yet)
2. Update all imports across the app
3. Test all pages work correctly
4. Remove old file after verification

---

## 📌 Best Practices

### **1. Naming Conventions**

- Queries: `GET_*` (e.g., `GET_HOME_PAGE`, `GET_BLOG_POSTS`)
- Mutations: `ACTION_*` (e.g., `SUBMIT_CONTACT_FORM`, `SUBSCRIBE_NEWSLETTER`)
- Files: lowercase with extension (e.g., `home.ts`, `blog.ts`)

### **2. Query Organization**

- One main query per page
- Multiple related queries in same file OK (e.g., blog list + detail)
- Keep related functionality together

### **3. Locale Handling**

- Always include `$locale` parameter
- Set default in component if not provided
- Consider creating a locale hook

### **4. Error Handling**

```typescript
const { data, error, loading } = await client.query({
  query: GET_HOME_PAGE,
  variables: { locale: "ar" },
  errorPolicy: "all", // Return partial data on error
});

if (error) {
  console.error("GraphQL Error:", error);
  // Handle error appropriately
}
```

### **5. Caching Strategy**

```typescript
const { data } = await client.query({
  query: GET_HOME_PAGE,
  variables: { locale: "ar" },
  fetchPolicy: "cache-first", // Use cache if available
  // or 'network-only' for always fresh data
});
```

---

## 🎯 File Structure Example

```
frontend/src/lib/graphql/
│
├── index.ts                    # Main export
│
├── queries/
│   ├── index.ts                # Export all queries
│   ├── layout/
│   │   ├── index.ts
│   │   ├── header.ts           # 15-30 lines
│   │   └── footer.ts           # 15-30 lines
│   ├── pages/
│   │   ├── index.ts
│   │   ├── home.ts             # 150-200 lines (all sections)
│   │   ├── about.ts            # 50-100 lines
│   │   ├── services.ts         # 50-100 lines
│   │   ├── blog.ts             # 80-120 lines (list + detail)
│   │   └── contact.ts          # 30-50 lines
│   └── common/
│       ├── index.ts
│       └── seo.ts              # 20-30 lines
│
└── mutations/
    ├── index.ts
    ├── contact.ts              # 15-25 lines
    └── newsletter.ts           # 15-25 lines
```

**Total: ~15 files instead of 1 giant file!**

---

## 🚀 Next Steps

1. **Review this structure** - Confirm it fits your needs
2. **Start with home page** - Create the graphql folder structure
3. **Migrate home query** - Move your home query to new location
4. **Update imports** - Update page.tsx to use new structure
5. **Test thoroughly** - Ensure SSR works correctly
6. **Expand gradually** - Add other pages as you build them

---

## 💡 Quick Start Commands

```bash
# Create the folder structure
mkdir -p frontend/src/lib/graphql/queries/{pages,layout,common}
mkdir -p frontend/src/lib/graphql/mutations
mkdir -p frontend/src/lib/graphql/types

# Create index files
touch frontend/src/lib/graphql/index.ts
touch frontend/src/lib/graphql/queries/index.ts
touch frontend/src/lib/graphql/queries/pages/index.ts
touch frontend/src/lib/graphql/queries/layout/index.ts
touch frontend/src/lib/graphql/queries/common/index.ts
touch frontend/src/lib/graphql/mutations/index.ts

# Create query files
touch frontend/src/lib/graphql/queries/pages/home.ts
touch frontend/src/lib/graphql/queries/layout/header.ts
touch frontend/src/lib/graphql/queries/layout/footer.ts
```

---

**Ready to implement? Let me know and I'll create the actual files for you!**
