import type { Metadata } from "next";
import { Locale, locales, defaultLocale } from "@/i18n/config";
import { fetchWithLocale } from "@/lib/graphql/utils/fetchGraphQL";
import { GET_LEGAL_SERVICE_CATEGORIES } from "@/lib/graphql/queries/content/services/legal";
import { APP_CONFIG } from "@/constants/config";

type Props = {
  params: Promise<{ companyId: string; locale: string }>;
};

async function getLegalCategory(slug: string, locale: string) {
  const { data, success } = await fetchWithLocale({
    query: GET_LEGAL_SERVICE_CATEGORIES,
    locale,
    variables: { locale },
  });

  if (success && data?.legalServiceCategories) {
    return data.legalServiceCategories.find(
      (cat: any) => cat.slug === slug || cat.documentId === slug
    );
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { companyId, locale } = await params;
  const validLocale = (locale as Locale) || defaultLocale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";

  // Fetch category data
  const category = await getLegalCategory(companyId, validLocale);

  // Default fallback metadata
  const defaultTitles: Record<Locale, string> = {
    ar: "الخدمات الحكومية",
    en: "Government Services",
  };

  const defaultDescriptions: Record<Locale, string> = {
    ar: "استكشف خدماتنا الحكومية والقانونية المتكاملة",
    en: "Explore our comprehensive government and legal services",
  };

  if (!category) {
    return {
      title: defaultTitles[validLocale],
      description: defaultDescriptions[validLocale],
    };
  }

  const title = category.name || defaultTitles[validLocale];
  const description = category.description || defaultDescriptions[validLocale];
  const imageUrl = category.icon?.url
    ? category.icon.url.startsWith("http")
      ? category.icon.url
      : `${APP_CONFIG.apiUrl}${category.icon.url}`
    : `${baseUrl}/images/services/default-og.jpg`;

  return {
    title: `${title} - ${validLocale === "ar" ? "إتمام" : "Etmam"}`,
    description,
    alternates: {
      canonical: `${baseUrl}/${validLocale}/legalservices/${companyId}`,
      languages: {
        ar: `${baseUrl}/ar/legalservices/${companyId}`,
        en: `${baseUrl}/en/legalservices/${companyId}`,
        "x-default": `${baseUrl}/${defaultLocale}/legalservices/${companyId}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${validLocale}/legalservices/${companyId}`,
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default function LegalServicesCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
