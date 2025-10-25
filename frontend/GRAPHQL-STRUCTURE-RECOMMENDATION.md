# GraphQL Queries Folder Structure Recommendation

## 📊 Analysis Summary

Based on your Strapi content structure analysis:

### **Strapi Content Organization:**

- **9 Reusable Components** (shared, ui, content categories)
- **10 Section Components** (sections category)
- **1 Single Type** (Home Page with all sections nested)
- **Future Collection Types** (Blog Posts, Services, etc.)
- **i18n Support** (Arabic & English)

### **Current Frontend Structure:**

- ✅ Apollo Client configured (`apollo-client-enhanced.ts`)
- ✅ Single `queries.ts` file (586 lines - already getting large!)
- ✅ SSR-ready Next.js App Router
- ✅ TypeScript support

---

## 🎯 Recommended Folder Structure

### **Simplified Feature-Based Organization (RECOMMENDED)**

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
└── types/                            # TypeScript types (optional - can be generated)
    ├── index.ts
    ├── home.types.ts                 # Home page types
    ├── blog.types.ts                 # Blog types
    └── common.types.ts               # Common types

```

**Why no fragments?**

- Your queries are already clean and readable
- Nested objects are inline and easy to understand
- Less complexity, easier to maintain
- You can always add fragments later if needed

---

## 📝 Implementation Details

### **1. Fragments (`fragments/`)**

Fragments reduce duplication and ensure consistency.

**Example: `fragments/seo.fragments.ts`**

```typescript
import { gql } from "@apollo/client";

export const SEO_FRAGMENT = gql`
  fragment SEOFields on ComponentSharedSeo {
    metaTitle
    metaDescription
    keywords
    canonicalURL
    metaRobots
    metaImage {
      data {
        attributes {
          url
          alternativeText
          width
          height
        }
      }
    }
  }
`;
```

**Example: `fragments/media.fragments.ts`**

```typescript
import { gql } from "@apollo/client";

export const MEDIA_FRAGMENT = gql`
  fragment MediaFields on UploadFileEntityResponse {
    data {
      attributes {
        url
        alternativeText
        width
        height
        formats
      }
    }
  }
`;

export const MEDIA_MULTIPLE_FRAGMENT = gql`
  fragment MediaMultipleFields on UploadFileRelationResponseCollection {
    data {
      attributes {
        url
        alternativeText
        width
        height
        formats
      }
    }
  }
`;
```

**Example: `fragments/button.fragments.ts`**

```typescript
import { gql } from "@apollo/client";

export const BUTTON_FRAGMENT = gql`
  fragment ButtonFields on ComponentUiButton {
    label
    href
    variant
    icon
  }
`;
```

---

### **2. Page Queries (`queries/pages/`)**

Each page gets its own query file.

**Example: `queries/pages/home.queries.ts`**

```typescript
import { gql } from "@apollo/client";
import { SEO_FRAGMENT } from "@/lib/graphql/fragments/seo.fragments";
import { MEDIA_FRAGMENT } from "@/lib/graphql/fragments/media.fragments";
import { BUTTON_FRAGMENT } from "@/lib/graphql/fragments/button.fragments";

export const GET_HOME_PAGE = gql`
  ${SEO_FRAGMENT}
  ${MEDIA_FRAGMENT}
  ${BUTTON_FRAGMENT}

  query GetHomePage($locale: I18NLocaleCode!) {
    homePage(locale: $locale) {
      data {
        attributes {
          seo {
            ...SEOFields
          }

          heroSection {
            title
            subtitle
            description
            primaryButton {
              ...ButtonFields
            }
            secondaryButton {
              ...ButtonFields
            }
            backgroundImage {
              ...MediaFields
            }
            personImage {
              ...MediaFields
            }
          }

          aboutSection {
            title
            heading
            description
            mainImage {
              ...MediaFields
            }
            overlayImage {
              ...MediaFields
            }
            statisticNumber
            statisticLabel
            features {
              icon
              title
              description
            }
            ctaButton {
              ...ButtonFields
            }
          }

          servicesSection {
            title
            description
            services {
              icon
              title
              description
              isActive
            }
            ctaButton {
              ...ButtonFields
            }
          }

          howItWorksSection {
            title
            description
            personImage {
              ...MediaFields
            }
            bannerText
            steps {
              number
              title
              description
            }
          }

          statisticsSection {
            title
            backgroundImage {
              ...MediaFields
            }
            stats {
              number
              label
            }
          }

          servicesCarouselSection {
            title
            description
            services {
              image {
                ...MediaFields
              }
              icon
              title
              description
            }
          }

          blogSection {
            title
            description
            ctaButton {
              ...ButtonFields
            }
            # Relation to blog posts
            featuredPosts {
              data {
                id
                attributes {
                  title
                  excerpt
                  slug
                  publishedAt
                  featuredImage {
                    ...MediaFields
                  }
                  author {
                    data {
                      attributes {
                        name
                        avatar {
                          ...MediaFields
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          faqSection {
            title
            description
            faqs {
              question
              answer
              category
            }
          }

          ctaSection {
            title
            description
            backgroundImage {
              ...MediaFields
            }
            ctaButton {
              ...ButtonFields
            }
          }

          partnersSection {
            title
            description
            partners {
              name
              logo {
                ...MediaFields
              }
              website
            }
          }
        }
      }
    }
  }
`;

// If you need individual section queries for reuse
export const GET_HERO_SECTION = gql`
  ${MEDIA_FRAGMENT}
  ${BUTTON_FRAGMENT}

  query GetHeroSection($locale: I18NLocaleCode!) {
    homePage(locale: $locale) {
      data {
        attributes {
          heroSection {
            title
            subtitle
            description
            primaryButton {
              ...ButtonFields
            }
            secondaryButton {
              ...ButtonFields
            }
            backgroundImage {
              ...MediaFields
            }
            personImage {
              ...MediaFields
            }
          }
        }
      }
    }
  }
`;
```

**Example: `queries/pages/blog.queries.ts`**

```typescript
import { gql } from "@apollo/client";
import { SEO_FRAGMENT } from "@/lib/graphql/fragments/seo.fragments";
import { MEDIA_FRAGMENT } from "@/lib/graphql/fragments/media.fragments";

export const GET_BLOG_POSTS = gql`
  ${MEDIA_FRAGMENT}

  query GetBlogPosts(
    $locale: I18NLocaleCode!
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
            ...MediaFields
          }
          author {
            data {
              attributes {
                name
                avatar {
                  ...MediaFields
                }
              }
            }
          }
          category {
            data {
              attributes {
                name
                slug
              }
            }
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

export const GET_BLOG_POST = gql`
  ${SEO_FRAGMENT}
  ${MEDIA_FRAGMENT}

  query GetBlogPost($slug: String!, $locale: I18NLocaleCode!) {
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
            ...SEOFields
          }
          featuredImage {
            ...MediaFields
          }
          author {
            data {
              attributes {
                name
                bio
                avatar {
                  ...MediaFields
                }
              }
            }
          }
          category {
            data {
              attributes {
                name
                slug
              }
            }
          }
          tags {
            data {
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;
```

---

### **3. Layout Queries (`queries/layout/`)**

**Example: `queries/layout/header.queries.ts`**

```typescript
import { gql } from "@apollo/client";
import { MEDIA_FRAGMENT } from "@/lib/graphql/fragments/media.fragments";

export const GET_HEADER = gql`
  ${MEDIA_FRAGMENT}

  query GetHeader($locale: I18NLocaleCode!) {
    header(locale: $locale) {
      data {
        attributes {
          logo {
            ...MediaFields
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
    }
  }
`;
```

---

### **4. Mutations (`mutations/`)**

**Example: `mutations/contact.mutations.ts`**

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
          message
          submittedAt
        }
      }
    }
  }
`;
```

---

### **5. Index Files for Easy Imports**

**Example: `lib/graphql/index.ts`**

```typescript
// Fragments
export * from "./fragments";

// Queries
export * from "./queries";

// Mutations
export * from "./mutations";

// Types
export * from "./types";
```

**Example: `lib/graphql/queries/index.ts`**

```typescript
export * from "./layout";
export * from "./pages";
export * from "./sections";
export * from "./common";
```

**Example: `lib/graphql/queries/pages/index.ts`**

```typescript
export * from "./home.queries";
export * from "./about.queries";
export * from "./services.queries";
export * from "./blog.queries";
export * from "./contact.queries";
```

---

## 🚀 Usage in Next.js App Router (SSR)

### **Server Components (SSR)**

```typescript
// app/page.tsx (Home Page)
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

  const homeData = data.homePage.data.attributes;

  return (
    <div>
      <HeroSection data={homeData.heroSection} />
      <AboutSection data={homeData.aboutSection} />
      <ServicesSection data={homeData.servicesSection} />
      {/* ... other sections */}
    </div>
  );
}
```

### **Client Components (with hooks)**

```typescript
// For client-side data fetching or mutations
"use client";

import { useMutation } from "@apollo/client";
import { SUBMIT_CONTACT_FORM } from "@/lib/graphql";

export function ContactForm() {
  const [submitForm, { loading, error }] = useMutation(SUBMIT_CONTACT_FORM);

  const handleSubmit = async (formData) => {
    await submitForm({
      variables: { data: formData },
    });
  };

  return <form onSubmit={handleSubmit}>{/* form fields */}</form>;
}
```

---

## 🎨 Alternative Option 2: Type-Based Organization

If you prefer organizing by data type:

```
frontend/src/lib/graphql/
│
├── fragments/
├── queries/
│   ├── single-types/                # Single types (home-page, etc.)
│   ├── collections/                 # Collection types (blog-posts, etc.)
│   └── components/                  # Component queries
├── mutations/
└── types/
```

---

## ✅ Benefits of This Structure

### **1. Scalability**

- ✅ Easy to add new pages/features
- ✅ Clear organization as project grows
- ✅ No more 1000+ line query files

### **2. Maintainability**

- ✅ Easy to find specific queries
- ✅ Fragments reduce duplication
- ✅ Clear naming conventions

### **3. SSR Optimization**

- ✅ Import only needed queries per page
- ✅ Tree-shaking friendly
- ✅ Smaller bundle sizes

### **4. Team Collaboration**

- ✅ Multiple devs can work on different query files
- ✅ Merge conflicts reduced
- ✅ Clear ownership of files

### **5. Type Safety**

- ✅ TypeScript types co-located with queries
- ✅ Easy to generate types from schema
- ✅ Better IDE autocomplete

---

## 🔧 Migration Plan

### **Phase 1: Setup Structure**

1. Create folder structure
2. Move existing queries to appropriate files
3. Create fragment files

### **Phase 2: Update Imports**

1. Update page components to use new imports
2. Test all pages work correctly

### **Phase 3: Add New Queries**

1. Create home page query based on Strapi structure
2. Add other page queries as needed

### **Phase 4: Optimize**

1. Extract common fragments
2. Add TypeScript types
3. Add query caching strategies

---

## 📌 Best Practices

1. **One Query Per File Rule**: Each query gets its own named export
2. **Use Fragments**: DRY principle for repeated fields
3. **Naming Convention**:
   - Queries: `GET_*` or `FETCH_*`
   - Mutations: `CREATE_*`, `UPDATE_*`, `DELETE_*`
   - Fragments: `*_FRAGMENT`
4. **Locale Handling**: Always include locale parameter
5. **Error Handling**: Use apollo error boundaries
6. **Caching**: Configure cache policies per query

---

## 🎯 Next Steps

1. **Review this structure** - Does it fit your needs?
2. **Create folder structure** - Set up the directories
3. **Create fragments** - Start with common fragments
4. **Migrate home page query** - Based on your Strapi structure
5. **Update home page component** - Use new query
6. **Repeat for other pages** - As you build them

---

## 📚 Additional Resources

- [Apollo Client Best Practices](https://www.apollographql.com/docs/react/data/queries/)
- [Next.js SSR with Apollo](https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/)
- [Strapi GraphQL Documentation](https://docs.strapi.io/dev-docs/plugins/graphql)
- [GraphQL Fragments Guide](https://www.apollographql.com/docs/react/data/fragments/)

---

**Would you like me to start implementing this structure for your home page?**
