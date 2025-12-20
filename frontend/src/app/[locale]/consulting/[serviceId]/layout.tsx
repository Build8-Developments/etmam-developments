import type { Metadata } from "next";
import { Locale, locales, defaultLocale } from "@/i18n/config";
import { fetchWithLocale } from "@/lib/graphql/utils/fetchGraphQL";
import {
  GET_CONSULTING_SERVICE_BY_DOCUMENTID,
  GET_SHORT_CONSULTING_SERVICES,
} from "@/lib/graphql/queries/content/services/consulting";
import { APP_CONFIG } from "@/constants/config";
import { ServiceSchema, BreadcrumbSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ serviceId: string; locale: string }>;
  children: React.ReactNode;
};

async function getConsultingService(serviceId: string, locale: string) {
  // First, get all services to find the documentId by order
  const { data: allServicesData, success: allSuccess } = await fetchWithLocale({
    query: GET_SHORT_CONSULTING_SERVICES,
    locale,
    variables: { locale },
  });

  if (!allSuccess || !allServicesData?.consultingServices) {
    return null;
  }

  // Find the service by order (serviceId in URL is the order number)
  const orderNum = parseInt(serviceId, 10);
  const serviceByOrder = allServicesData.consultingServices.find(
    (service: any) => service.order === orderNum
  );

  if (!serviceByOrder) {
    return null;
  }

  // Get detailed service data
  const { data: serviceData, success } = await fetchWithLocale({
    query: GET_CONSULTING_SERVICE_BY_DOCUMENTID,
    locale,
    variables: { documentId: serviceByOrder.documentId, locale },
  });

  if (success && serviceData?.consultingService) {
    return {
      ...serviceData.consultingService,
      icon: serviceByOrder.icon, // Use icon from short query
    };
  }

  return serviceByOrder;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId, locale } = await params;
  const validLocale = (locale as Locale) || defaultLocale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";

  // Fetch service data
  const service = await getConsultingService(serviceId, validLocale);

  // Default fallback metadata
  const defaultTitles: Record<Locale, string> = {
    ar: "خدمة استشارية",
    en: "Consulting Service",
  };

  const defaultDescriptions: Record<Locale, string> = {
    ar: "تعرف على خدماتنا الاستشارية المتميزة",
    en: "Learn about our distinguished consulting services",
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

  return {
    title: `${title} - ${validLocale === "ar" ? "إتمام" : "Etmam"}`,
    description,
    alternates: {
      canonical: `${baseUrl}/${validLocale}/consulting/${serviceId}`,
      languages: {
        ar: `${baseUrl}/ar/consulting/${serviceId}`,
        en: `${baseUrl}/en/consulting/${serviceId}`,
        "x-default": `${baseUrl}/${defaultLocale}/consulting/${serviceId}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${validLocale}/consulting/${serviceId}`,
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
      description,
      images: [imageUrl],
    },
  };
}

export default async function ConsultingServiceLayout({
  children,
  params,
}: Props) {
  const { serviceId, locale } = await params;
  const validLocale = (locale as Locale) || defaultLocale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";

  // Fetch service data for structured data
  const service = await getConsultingService(serviceId, validLocale);

  const imageUrl = service?.icon?.url
    ? service.icon.url.startsWith("http")
      ? service.icon.url
      : `${APP_CONFIG.apiUrl}${service.icon.url}`
    : undefined;

  return (
    <>
      {service && (
        <>
          <ServiceSchema
            name={service.name || ""}
            description={service.shortDescription || ""}
            url={`${baseUrl}/${validLocale}/consulting/${serviceId}`}
            image={imageUrl}
            locale={validLocale}
          />
          <BreadcrumbSchema
            items={[
              {
                name: validLocale === "ar" ? "الرئيسية" : "Home",
                url: `${baseUrl}/${validLocale}`,
              },
              {
                name:
                  validLocale === "ar"
                    ? "الخدمات الاستشارية"
                    : "Consulting Services",
                url: `${baseUrl}/${validLocale}/consulting`,
              },
              {
                name: service.name || "",
                url: `${baseUrl}/${validLocale}/consulting/${serviceId}`,
              },
            ]}
          />
        </>
      )}
      {children}
    </>
  );
}
