/**
 * Structured Data (JSON-LD) components for SEO
 * Implements Schema.org markup for rich search results
 */

import type { Locale } from "@/i18n/config";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";

// Types for structured data
interface OrganizationData {
  locale: Locale;
}

interface WebSiteData {
  locale: Locale;
}

interface ArticleData {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  locale: Locale;
}

interface ServiceData {
  name: string;
  description: string;
  url: string;
  image?: string;
  price?: number;
  currency?: string;
  locale: Locale;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  items: FAQItem[];
  locale: Locale;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbData {
  items: BreadcrumbItem[];
}

/**
 * Organization Schema - for company pages
 */
export function OrganizationSchema({ locale }: OrganizationData) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: locale === "ar" ? "إتمام" : "Etmam",
    alternateName: locale === "ar" ? "Etmam" : "إتمام",
    url: baseUrl,
    logo: `${baseUrl}/images/logos/logo-large.png`,
    description:
      locale === "ar"
        ? "منصة إتمام للخدمات التجارية والإدارية - تأسيس الشركات وإدارة الأعمال في المملكة العربية السعودية"
        : "Etmam platform for commercial and administrative services - company formation and business management in Saudi Arabia",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressLocality: locale === "ar" ? "الرياض" : "Riyadh",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      // Add social media URLs here when available
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite Schema - for homepage with search functionality
 */
export function WebSiteSchema({ locale }: WebSiteData) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: locale === "ar" ? "إتمام" : "Etmam",
    alternateName: locale === "ar" ? "Etmam" : "إتمام",
    url: `${baseUrl}/${locale}`,
    description:
      locale === "ar"
        ? "خدماتك التجارية والإدارية - منصة إتمام"
        : "Your Commercial and Administrative Services - Etmam",
    inLanguage: locale === "ar" ? "ar-SA" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/${locale}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Article Schema - for blog posts
 */
export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  locale,
}: ArticleData) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": authorName ? "Person" : "Organization",
      name: authorName || (locale === "ar" ? "إتمام" : "Etmam"),
    },
    publisher: {
      "@type": "Organization",
      name: locale === "ar" ? "إتمام" : "Etmam",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logos/logo-large.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: locale === "ar" ? "ar-SA" : "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service Schema - for service pages
 */
export function ServiceSchema({
  name,
  description,
  url,
  image,
  price,
  currency = "SAR",
  locale,
}: ServiceData) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    url: url,
    provider: {
      "@type": "Organization",
      name: locale === "ar" ? "إتمام" : "Etmam",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: locale === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia",
    },
  };

  if (image) {
    schema.image = image;
  }

  if (price) {
    schema.offers = {
      "@type": "Offer",
      price: price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQ Schema - for FAQ sections
 */
export function FAQSchema({ items, locale }: FAQData) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    inLanguage: locale === "ar" ? "ar-SA" : "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList Schema - for navigation
 */
export function BreadcrumbSchema({ items }: BreadcrumbData) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * LocalBusiness Schema - for local SEO
 */
export function LocalBusinessSchema({ locale }: { locale: Locale }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name:
      locale === "ar" ? "إتمام للخدمات التجارية" : "Etmam Business Services",
    image: `${baseUrl}/images/logos/logo-large.png`,
    "@id": baseUrl,
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressLocality: locale === "ar" ? "الرياض" : "Riyadh",
      addressRegion: locale === "ar" ? "منطقة الرياض" : "Riyadh Region",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.7136,
      longitude: 46.6753,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
