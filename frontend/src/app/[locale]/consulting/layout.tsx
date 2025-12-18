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
    ar: "الخدمات الاستشارية - إتمام",
    en: "Consulting Services - Etmam",
  };

  const descriptions: Record<Locale, string> = {
    ar: "استكشف خدماتنا الاستشارية المتكاملة - من الاستشارات التجارية والمالية إلى التسويقية والإدارية. نساعدك في تحقيق أهداف عملك.",
    en: "Explore our comprehensive consulting services - from business and financial to marketing and administrative consulting. We help you achieve your business goals.",
  };

  return {
    title: titles[validLocale],
    description: descriptions[validLocale],
    alternates: {
      canonical: `${baseUrl}/${validLocale}/consulting`,
      languages: {
        ar: `${baseUrl}/ar/consulting`,
        en: `${baseUrl}/en/consulting`,
        "x-default": `${baseUrl}/${defaultLocale}/consulting`,
      },
    },
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: `${baseUrl}/${validLocale}/consulting`,
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
