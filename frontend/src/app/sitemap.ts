import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";
import { fetchWithLocale } from "@/lib/graphql/utils/fetchGraphQL";
import { GET_BLOG_POSTS } from "@/lib/graphql/queries/content/blog";
import { GET_SHORT_CONSULTING_SERVICES } from "@/lib/graphql/queries/content/services/consulting";
import { GET_OFFER_DETAILS } from "@/lib/graphql/queries/content/offer-detail";
import {
  GET_LEGAL_SERVICE_CATEGORIES,
  GET_LEGAL_SERVICE_CATEGORY_SUBSERVICES,
} from "@/lib/graphql/queries/content/services/legal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";
const baseUrl = siteUrl.replace(/\/$/, "");

// Helper to create sitemap entry with alternates
function createSitemapEntry(
  path: string,
  changeFrequency: "daily" | "weekly" | "monthly" = "weekly",
  priority: number = 0.8
): MetadataRoute.Sitemap {
  return locales.map((locale) => {
    const url = `${baseUrl}/${locale}${path}`;
    const languages: Record<string, string> = {};
    locales.forEach((altLocale) => {
      languages[altLocale] = `${baseUrl}/${altLocale}${path}`;
    });
    languages["x-default"] = `${baseUrl}/${defaultLocale}${path}`;

    return {
      url,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages },
    };
  });
}

// Fetch blog posts for sitemap
async function getBlogPosts(): Promise<{ slug: string }[]> {
  try {
    const { data, success } = await fetchWithLocale({
      query: GET_BLOG_POSTS,
      locale: defaultLocale,
      variables: { locale: defaultLocale },
    });
    if (success && data?.blogs) {
      return data.blogs.map((blog: { slug: string }) => ({ slug: blog.slug }));
    }
    return [];
  } catch {
    return [];
  }
}

// Fetch consulting services for sitemap
async function getConsultingServices(): Promise<{ order: number }[]> {
  try {
    const { data, success } = await fetchWithLocale({
      query: GET_SHORT_CONSULTING_SERVICES,
      locale: defaultLocale,
      variables: { locale: defaultLocale },
    });
    if (success && data?.consultingServices) {
      return data.consultingServices.map((service: { order: number }) => ({
        order: service.order,
      }));
    }
    return [];
  } catch {
    return [];
  }
}

// Fetch offers for sitemap
async function getOffers(): Promise<{ slug: string }[]> {
  try {
    const { data, success } = await fetchWithLocale({
      query: GET_OFFER_DETAILS,
      locale: defaultLocale,
      variables: { locale: defaultLocale },
    });
    if (success && data?.offerDetails) {
      return data.offerDetails.map((offer: { slug: string }) => ({
        slug: offer.slug,
      }));
    }
    return [];
  } catch {
    return [];
  }
}

// Fetch legal service categories for sitemap
async function getLegalCategories(): Promise<{ slug: string }[]> {
  try {
    const { data, success } = await fetchWithLocale({
      query: GET_LEGAL_SERVICE_CATEGORIES,
      locale: defaultLocale,
      variables: { locale: defaultLocale },
    });
    if (success && data?.legalServiceCategories) {
      return data.legalServiceCategories.map((cat: { slug: string }) => ({
        slug: cat.slug,
      }));
    }
    return [];
  } catch {
    return [];
  }
}

// Fetch legal subservices for sitemap
async function getLegalSubServices(): Promise<
  { slug: string; categorySlug: string }[]
> {
  try {
    const { data, success } = await fetchWithLocale({
      query: GET_LEGAL_SERVICE_CATEGORY_SUBSERVICES,
      locale: defaultLocale,
      variables: { locale: defaultLocale },
    });
    if (success && data?.legalSubServices) {
      return data.legalSubServices.map(
        (service: {
          slug: string;
          legal_service_category: { slug: string };
        }) => ({
          slug: service.slug,
          categorySlug: service.legal_service_category?.slug || "",
        })
      );
    }
    return [];
  } catch {
    return [];
  }
}

/**
 * Multi-locale sitemap with hreflang alternate links for SEO.
 * Includes both static pages and dynamically fetched content.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define all static pages
  const staticPages = [
    { path: "", changeFrequency: "daily" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    {
      path: "/legalservices",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    { path: "/consulting", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/offers", changeFrequency: "daily" as const, priority: 0.9 },
    { path: "/blog", changeFrequency: "daily" as const, priority: 0.8 },
    { path: "/packages", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
    {
      path: "/privacy-policy",
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      path: "/terms-conditions",
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  // Generate static page entries
  const staticEntries = staticPages.flatMap((page) =>
    createSitemapEntry(page.path, page.changeFrequency, page.priority)
  );

  // Fetch dynamic content in parallel
  const [
    blogPosts,
    consultingServices,
    offers,
    legalCategories,
    legalSubServices,
  ] = await Promise.all([
    getBlogPosts(),
    getConsultingServices(),
    getOffers(),
    getLegalCategories(),
    getLegalSubServices(),
  ]);

  // Generate blog post entries
  const blogEntries = blogPosts.flatMap((post) =>
    createSitemapEntry(`/blog/${post.slug}`, "weekly", 0.7)
  );

  // Generate consulting service entries
  const consultingEntries = consultingServices.flatMap((service) =>
    createSitemapEntry(`/consulting/${service.order}`, "weekly", 0.7)
  );

  // Generate offer entries
  const offerEntries = offers.flatMap((offer) =>
    createSitemapEntry(`/offers/${offer.slug}`, "daily", 0.8)
  );

  // Generate legal category entries
  const legalCategoryEntries = legalCategories.flatMap((category) =>
    createSitemapEntry(`/legalservices/${category.slug}`, "weekly", 0.8)
  );

  // Generate legal subservice entries
  const legalSubServiceEntries = legalSubServices
    .filter((service) => service.categorySlug)
    .flatMap((service) =>
      createSitemapEntry(
        `/legalservices/${service.categorySlug}/${service.slug}`,
        "weekly",
        0.7
      )
    );

  return [
    ...staticEntries,
    ...blogEntries,
    ...consultingEntries,
    ...offerEntries,
    ...legalCategoryEntries,
    ...legalSubServiceEntries,
  ];
}
