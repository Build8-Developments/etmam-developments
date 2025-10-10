# Component Structure Documentation

This document explains the component hierarchy and structure.

## 📁 File Structure

```
frontend/src/
├── app/
│   ├── layout.tsx              # Root layout with LanguageProvider
│   ├── page.tsx                # Homepage (uses Header + HeroSection)
│   └── globals.css             # Global styles + color palette
├── components/
│   ├── Header.tsx              # Navigation header
│   └── HeroSection.tsx         # Hero section with background
├── contexts/
│   └── LanguageContext.tsx     # Language state management
└── lib/
    ├── apollo-client.ts        # GraphQL client setup
    └── queries.ts              # GraphQL queries
```

## 🏗️ Component Hierarchy

```
page.tsx
├── Header
│   ├── Logo
│   ├── Navigation Items (loop)
│   ├── Language Switcher Button
│   ├── Contact Button
│   └── Mobile Menu Button
└── HeroSection
    ├── Background Image
    ├── Left Column (Person Area)
    │   ├── Green Circle Background
    │   ├── Location Pin Icon
    │   ├── Person Image
    │   └── Small Images Card
    │       └── 3 Team Photos (loop)
    └── Right Column (Content)
        ├── Title
        ├── Subtitle
        ├── Heading ("أسهل وأسرع")
        ├── Description
        └── Buttons
            ├── Primary Button
            └── Secondary Button
```

## 📋 Component Details

### 1. Header Component

**File:** `src/components/Header.tsx`

**Props Interface:**
```typescript
interface HeaderProps {
  logo?: {
    url: string;
    alternativeText: string;
  };
  navigationItems?: NavigationItem[];
  contactButton?: {
    label: string;
    href: string;
  };
}
```

**Default Navigation Items (if not provided):**
- الرئيسية / Home
- من نحن / About
- خدمات قانونية / Legal Services
- خدمات استشارية / Consulting
- فريق العمل / Team
- المدونة / Blog
- الباقات / Packages

**Styling:**
- Background: White with 95% opacity and backdrop blur
- Shadow: Subtle shadow for depth
- Height: 80px (h-20)
- Position: Absolute, top of page (z-50)

**Responsive Behavior:**
- Desktop (lg+): Show full navigation
- Mobile: Hide navigation, show hamburger menu button

---

### 2. HeroSection Component

**File:** `src/components/HeroSection.tsx`

**Props Interface:**
```typescript
interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButton?: Button;
  secondaryButton?: Button;
  backgroundImage?: {
    url: string;
    alternativeText: string;
  };
  personImage?: {
    url: string;
    alternativeText: string;
  };
  smallImages?: Array<{
    url: string;
    alternativeText: string;
  }>;
}
```

**Default Content:**
- **Arabic:**
  - Title: "إتمام"
  - Subtitle: "خدماتك التجارية والإدارية"
  - Heading: "أسهل وأسرع"
  - Description: Full Arabic description
  - Buttons: "تصفح الخدمات" / "من نحن"

- **English:**
  - Title: "Etmam"
  - Subtitle: "Your Commercial and Administrative Services"
  - Heading: "Easier and Faster"
  - Description: Full English description
  - Buttons: "Browse Services" / "About Us"

**Layout:**
- Full viewport height (min-h-screen)
- Grid: 2 columns on lg+ screens
- Padding top to account for fixed header

**Left Column (Person Area):**
- Circular green background (green-300/40 with backdrop blur)
- Location pin icon centered
- Person image (85% of circle size)
- Small images card (absolute position, top-left)

**Right Column (Content):**
- Text alignment: Right for Arabic, Left for English
- All text in white (except heading in primary green)
- Two-button layout with different styles

**Styling Details:**
```css
Background: Full cover with overlay (black/20)
Green Circle: bg-green-300/40 + backdrop-blur-sm
Location Pin: White circle with green icon
Person Image: object-contain object-bottom
Small Images Card: White background, rounded-2xl, shadow-xl
Primary Button: bg-primary, white text, rounded-full
Secondary Button: Transparent bg, white border, rounded-full
```

---

### 3. LanguageContext

**File:** `src/contexts/LanguageContext.tsx`

**State:**
```typescript
{
  language: 'en' | 'ar',      // Current language
  setLanguage: Function,       // Change language
  isRTL: boolean              // Is current language RTL?
}
```

**Features:**
- Persists language choice in localStorage
- Automatically sets HTML `dir` attribute (rtl/ltr)
- Automatically sets HTML `lang` attribute
- Default language: Arabic ('ar')

**Usage in Components:**
```typescript
import { useLanguage } from '@/contexts/LanguageContext';

function MyComponent() {
  const { language, setLanguage, isRTL } = useLanguage();
  
  const text = language === 'ar' ? 'نص عربي' : 'English text';
  
  return (
    <div className={isRTL ? 'text-right' : 'text-left'}>
      {text}
    </div>
  );
}
```

---

## 🎨 Styling System

### Color Palette (from globals.css)

CSS Custom Properties:
```css
--color-green-100: #DAEDD5
--color-green-200: #8BD6B0
--color-green-300: #BCDBB4
--color-green-400: #79B669
--color-primary: #90C054
--color-green-600: #155A03
--color-green-700: #104502
--color-green-800: #0B2E02
```

Tailwind Usage:
```tsx
<div className="bg-primary">        {/* #90C054 */}
<div className="bg-green-700">      {/* #104502 */}
<div className="text-green-600">    {/* #155A03 */}
```

### Responsive Breakpoints

```
sm:  640px   - Small tablets
md:  768px   - Tablets
lg:  1024px  - Desktops (navigation shows)
xl:  1280px  - Large desktops
2xl: 1536px  - Extra large screens
```

### Typography

```tsx
// Headers
text-5xl md:text-6xl lg:text-7xl    // Title
text-3xl md:text-4xl lg:text-5xl    // Subtitle
text-4xl md:text-5xl                // Heading

// Body
text-lg md:text-xl                  // Description
text-sm                             // Navigation items
```

---

## 🔄 Data Flow

### Without Strapi (Default Behavior):
```
Component → useLanguage() → Default Text (AR/EN)
```

### With Strapi (When Uncommented):
```
1. User visits page
2. useLanguage() provides current language
3. useEffect() triggers
4. Apollo Client queries Strapi GraphQL
5. Query includes locale: language
6. Strapi returns localized content
7. setState updates component data
8. Component re-renders with Strapi data
```

**GraphQL Query Flow:**
```typescript
createApolloClient()
  → query({ query: GET_HEADER_QUERY, variables: { locale: 'ar' } })
  → Strapi GraphQL endpoint
  → Returns Arabic content
  → setHeaderData()
  → Header component receives props
  → Renders with Strapi content
```

---

## 🧩 Adding New Sections

To add a new section below the hero:

### 1. Create Component

```typescript
// src/components/AboutSection.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { language, isRTL } = useLanguage();
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Your content */}
      </div>
    </section>
  );
}
```

### 2. Add to Page

```typescript
// src/app/page.tsx
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />  {/* New section */}
    </div>
  );
}
```

### 3. Create Strapi Content Type (Optional)

```json
// strapi/src/api/about/content-types/about/schema.json
{
  "kind": "singleType",
  "collectionName": "abouts",
  "info": {
    "singularName": "about",
    "pluralName": "abouts",
    "displayName": "About Section"
  },
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    "heading": {
      "type": "string",
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "content": {
      "type": "richtext",
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    }
  }
}
```

### 4. Add GraphQL Query

```typescript
// src/lib/queries.ts
export const GET_ABOUT_QUERY = gql`
  query GetAbout($locale: String!) {
    about(locale: $locale) {
      data {
        attributes {
          heading
          content
        }
      }
    }
  }
`;
```

---

## 🎯 Key Concepts

### 1. Bilingual Without next-i18n
- Custom context manages language state
- Components receive language and render accordingly
- Strapi provides localized content via GraphQL
- No routing changes needed (/en/page or /ar/page)
- Single URL serves both languages

### 2. RTL/LTR Handling
- HTML dir attribute set by LanguageContext
- Tailwind classes: `rtl:space-x-reverse`
- Text alignment: `${isRTL ? 'text-right' : 'text-left'}`
- Flex direction auto-reverses in RTL mode

### 3. Default Content Pattern
- Components have default bilingual content
- Works without Strapi for development/testing
- Strapi content overrides defaults when available
- Graceful degradation if API fails

---

## 📝 Component Checklist

When creating new components:

- [ ] Import and use `useLanguage()` hook
- [ ] Provide default content for both languages
- [ ] Support props from Strapi (optional)
- [ ] Use `isRTL` for text alignment
- [ ] Use color palette variables
- [ ] Make responsive (mobile-first)
- [ ] Use Next.js Image component for images
- [ ] Add proper TypeScript interfaces
- [ ] Use 'use client' if using hooks/state

---

This structure ensures consistency, maintainability, and scalability as you add more sections to the website.

