import type { Metadata } from "next";
import { Locale, locales, defaultLocale } from "@/i18n/config";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (locale as Locale) || defaultLocale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";

  const titles: Record<Locale, string> = {
    ar: "العروض والخصومات - إتمام",
    en: "Offers & Discounts - Etmam",
  };

  const descriptions: Record<Locale, string> = {
    ar: "استفد من أفضل العروض والخصومات على خدمات تأسيس الشركات والاستشارات القانونية والإدارية. عروض حصرية لفترة محدودة.",
    en: "Take advantage of the best offers and discounts on company formation and legal and administrative consulting services. Exclusive limited-time offers.",
  };

  return {
    title: titles[validLocale],
    description: descriptions[validLocale],
    alternates: {
      canonical: `${baseUrl}/${validLocale}/offers`,
      languages: {
        ar: `${baseUrl}/ar/offers`,
        en: `${baseUrl}/en/offers`,
        "x-default": `${baseUrl}/${defaultLocale}/offers`,
      },
    },
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: `${baseUrl}/${validLocale}/offers`,
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}

export default function OffersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
