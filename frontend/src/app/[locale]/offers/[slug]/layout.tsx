import type { Metadata } from "next";
import { Locale, locales, defaultLocale } from "@/i18n/config";
import { fetchWithLocale } from "@/lib/graphql/utils/fetchGraphQL";
import { GET_OFFER_DETAIL_BY_SLUG } from "@/lib/graphql/queries/content/offer-detail";
import { APP_CONFIG } from "@/constants/config";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

async function getOffer(slug: string, locale: string) {
  const { data, success } = await fetchWithLocale({
    query: GET_OFFER_DETAIL_BY_SLUG,
    locale,
    variables: { slug, locale },
  });

  if (success && data?.offerDetails?.[0]) {
    return data.offerDetails[0];
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const validLocale = (locale as Locale) || defaultLocale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";

  // Fetch offer data
  const offer = await getOffer(slug, validLocale);

  // Default fallback metadata
  const defaultTitles: Record<Locale, string> = {
    ar: "عرض خاص",
    en: "Special Offer",
  };

  const defaultDescriptions: Record<Locale, string> = {
    ar: "استفد من عروضنا الحصرية على خدمات تأسيس الشركات والاستشارات",
    en: "Take advantage of our exclusive offers on company formation and consulting services",
  };

  if (!offer) {
    return {
      title: defaultTitles[validLocale],
      description: defaultDescriptions[validLocale],
    };
  }

  const title = offer.title || defaultTitles[validLocale];
  const description =
    offer.subtitle ||
    offer.description?.blocks?.[0]?.children?.[0]?.text ||
    defaultDescriptions[validLocale];
  const imageUrl = offer.image?.url
    ? offer.image.url.startsWith("http")
      ? offer.image.url
      : `${APP_CONFIG.apiUrl}${offer.image.url}`
    : `${baseUrl}/images/offers/default-og.jpg`;

  // Add price info to description if available
  const priceInfo = offer.discountedPrice
    ? validLocale === "ar"
      ? ` - السعر: ${offer.discountedPrice} ${offer.currency || "SAR"}`
      : ` - Price: ${offer.discountedPrice} ${offer.currency || "SAR"}`
    : "";

  return {
    title: `${title} - ${validLocale === "ar" ? "إتمام" : "Etmam"}`,
    description: description + priceInfo,
    alternates: {
      canonical: `${baseUrl}/${validLocale}/offers/${slug}`,
      languages: {
        ar: `${baseUrl}/ar/offers/${slug}`,
        en: `${baseUrl}/en/offers/${slug}`,
        "x-default": `${baseUrl}/${defaultLocale}/offers/${slug}`,
      },
    },
    openGraph: {
      title,
      description: description + priceInfo,
      url: `${baseUrl}/${validLocale}/offers/${slug}`,
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

export default function OfferDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
