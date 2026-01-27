import { Metadata } from "next";
import { Locale, generateAlternateUrls, getCanonicalUrl } from "@/i18n/config";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: readonly string[];
  image?: string;
  path?: string;
  type?: "website" | "article";
  locale?: Locale;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";

/**
 * Generate SEO metadata for pages
 * @param config - SEO configuration object
 * @returns Metadata object for Next.js
 */
export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = "/images/logos/logo-large.png",
    path = "/",
    type = "website",
    locale = "ar",
    publishedTime,
    modifiedTime,
    author,
    section,
  } = config;

  const keywordsArray = Array.from(keywords);
  const fullTitle =
    title.includes("إتمام") || title.includes("Etmam")
      ? title
      : `${title} | ${locale === "ar" ? "إتمام" : "Etmam"}`;
  const fullDescription =
    description ||
    (locale === "ar"
      ? "منصة إتمام للخدمات التجارية والإدارية - تأسيس الشركات وإدارة الأعمال"
      : "Etmam platform for commercial and administrative services - company formation and business management");

  const alternates = generateAlternateUrls(path, baseUrl);
  const canonical = getCanonicalUrl(locale, path, baseUrl);
  const fullImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      "إتمام",
      "تأسيس الشركات",
      "الخدمات التجارية",
      "إدارة الأعمال",
      "الرخص التجارية",
      "etmam",
      "business services",
      "company formation",
      ...keywordsArray,
    ],
    authors: author ? [{ name: author }] : [{ name: "إتمام - Etmam" }],
    creator: "إتمام - Etmam",
    publisher: "إتمام - Etmam",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
      languages: alternates,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonical,
      siteName: locale === "ar" ? "إتمام" : "Etmam",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: "@etmam",
      site: "@etmam",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
    },
  };

  // Add article-specific metadata
  if (type === "article" && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: author ? [author] : undefined,
      section: section || "General",
    };
  }

  return metadata;
}

/**
 * Predefined SEO configurations for common pages (bilingual)
 * Use with generateSEOMetadata and pass locale parameter
 */
export const SEO_CONFIGS = {
  HOME: {
    ar: {
      title: "إتمام - خدماتك التجارية والإدارية",
      description:
        "منصة إتمام الرائدة في تأسيس الشركات والخدمات الإدارية. نقدم حلول متكاملة لتأسيس وإدارة أعمالك بكفاءة عالية.",
      keywords: [
        "تأسيس شركات",
        "خدمات إدارية",
        "رخص تجارية",
        "استشارات أعمال",
      ] as const,
    },
    en: {
      title: "Etmam - Your Commercial and Administrative Services",
      description:
        "Leading Etmam platform for company formation and administrative services. We provide integrated solutions for establishing and managing your business efficiently.",
      keywords: [
        "company formation",
        "administrative services",
        "business licenses",
        "business consulting",
      ] as const,
    },
    path: "/",
  },

  ABOUT: {
    ar: {
      title: "من نحن - إتمام",
      description:
        "تعرف على فريق إتمام وخبرتنا في مجال تأسيس الشركات والخدمات الإدارية. نحن شريكك الموثوق لنجاح أعمالك.",
      keywords: ["فريق إتمام", "خبرة", "شركة تأسيس", "خدمات مهنية"] as const,
    },
    en: {
      title: "About Us - Etmam",
      description:
        "Learn about Etmam team and our expertise in company formation and administrative services. We are your trusted partner for business success.",
      keywords: [
        "Etmam team",
        "expertise",
        "formation company",
        "professional services",
      ] as const,
    },
    path: "/about",
  },

  SERVICES: {
    ar: {
      title: "خدماتنا - إتمام",
      description:
        "اكتشف مجموعة خدمات إتمام الشاملة لتأسيس الشركات وإدارة الأعمال. حلول مخصصة لاحتياجاتك التجارية.",
      keywords: [
        "خدمات تأسيس",
        "إدارة أعمال",
        "استشارات",
        "حلول تجارية",
      ] as const,
    },
    en: {
      title: "Our Services - Etmam",
      description:
        "Discover Etmam comprehensive services for company formation and business management. Customized solutions for your business needs.",
      keywords: [
        "formation services",
        "business management",
        "consulting",
        "business solutions",
      ] as const,
    },
    path: "/services",
  },

  CONTACT: {
    ar: {
      title: "تواصل معنا - إتمام",
      description:
        "تواصل مع فريق إتمام للحصول على استشارة مجانية حول تأسيس شركتك أو إدارة أعمالك. نحن هنا لمساعدتك.",
      keywords: [
        "تواصل",
        "استشارة مجانية",
        "دعم العملاء",
        "خدمة العملاء",
      ] as const,
    },
    en: {
      title: "Contact Us - Etmam",
      description:
        "Contact Etmam team for a free consultation about forming your company or managing your business. We are here to help you.",
      keywords: [
        "contact",
        "free consultation",
        "customer support",
        "customer service",
      ] as const,
    },
    path: "/contact",
  },
} as const;
