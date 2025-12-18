import type { Metadata } from "next";
import { Locale, locales, defaultLocale } from "@/i18n/config";
import { fetchWithLocale } from "@/lib/graphql/utils/fetchGraphQL";
import {
  GET_LEGAL_SERVICE_CATEGORY_SUBSERVICES,
  GET_LEGAL_SERVICE_SUBSERVICE_DETAILS_BY_DOCUMENTID,
} from "@/lib/graphql/queries/content/services/legal";
import { APP_CONFIG } from "@/constants/config";

type Props = {
  params: Promise<{ companyId: string; serviceId: string; locale: string }>;
};

async function getLegalService(serviceId: string, locale: string) {
  // First get all subservices to find the one matching the serviceId (slug or order)
  const { data: allServices, success: allSuccess } = await fetchWithLocale({
    query: GET_LEGAL_SERVICE_CATEGORY_SUBSERVICES,
    locale,
    variables: { locale },
  });

  if (!allSuccess || !allServices?.legalSubServices) {
    return null;
  }

  // Find service by slug or order
  const orderNum = parseInt(serviceId, 10);
  const service = allServices.legalSubServices.find(
    (s: any) => s.slug === serviceId || s.order === orderNum
  );

  if (!service) {
    return null;
  }

  // Get detailed service data
  const { data: detailData, success } = await fetchWithLocale({
    query: GET_LEGAL_SERVICE_SUBSERVICE_DETAILS_BY_DOCUMENTID,
    locale,
    variables: { documentId: service.documentId, locale },
  });

  if (success && detailData?.legalSubService) {
    return detailData.legalSubService;
  }

  return service;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { companyId, serviceId, locale } = await params;
  const validLocale = (locale as Locale) || defaultLocale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";

  // Fetch service data
  const service = await getLegalService(serviceId, validLocale);

  // Default fallback metadata
  const defaultTitles: Record<Locale, string> = {
    ar: "خدمة حكومية - إتمام",
    en: "Government Service - Etmam",
  };

  const defaultDescriptions: Record<Locale, string> = {
    ar: "تعرف على تفاصيل الخدمة الحكومية وكيف يمكننا مساعدتك",
    en: "Learn about government service details and how we can help you",
  };

  if (!service) {
    return {
      title: defaultTitles[validLocale],
      description: defaultDescriptions[validLocale],
    };
  }

  const title = service.name || defaultTitles[validLocale];
  const description =
    service.shortDescription || defaultDescriptions[validLocale];
  const imageUrl = service.icon?.url
    ? service.icon.url.startsWith("http")
      ? service.icon.url
      : `${APP_CONFIG.apiUrl}${service.icon.url}`
    : `${baseUrl}/images/services/default-og.jpg`;

  // Add price info if available
  const priceInfo = service.startFromPrice
    ? validLocale === "ar"
      ? ` - يبدأ من ${service.startFromPrice} ${service.currency || "SAR"}`
      : ` - Starting from ${service.startFromPrice} ${
          service.currency || "SAR"
        }`
    : "";

  return {
    title: `${title} - ${validLocale === "ar" ? "إتمام" : "Etmam"}`,
    description: description + priceInfo,
    alternates: {
      canonical: `${baseUrl}/${validLocale}/legalservices/${companyId}/${serviceId}`,
      languages: {
        ar: `${baseUrl}/ar/legalservices/${companyId}/${serviceId}`,
        en: `${baseUrl}/en/legalservices/${companyId}/${serviceId}`,
        "x-default": `${baseUrl}/${defaultLocale}/legalservices/${companyId}/${serviceId}`,
      },
    },
    openGraph: {
      title,
      description: description + priceInfo,
      url: `${baseUrl}/${validLocale}/legalservices/${companyId}/${serviceId}`,
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
    twitter: {
      card: "summary_large_image",
      title,
      description: description + priceInfo,
      images: [imageUrl],
    },
  };
}

export default function LegalServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
