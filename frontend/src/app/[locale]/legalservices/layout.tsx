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
    ar: "الخدمات القانونية والحكومية - إتمام",
    en: "Legal & Government Services - Etmam",
  };

  const descriptions: Record<Locale, string> = {
    ar: "خدمات قانونية وحكومية شاملة - من وزارة التجارة إلى الهيئة العامة للزكاة والدخل. نساعدك في إنجاز جميع معاملاتك الحكومية.",
    en: "Comprehensive legal and government services - from the Ministry of Commerce to ZATCA. We help you complete all your government transactions.",
  };

  return {
    title: titles[validLocale],
    description: descriptions[validLocale],
    alternates: {
      canonical: `${baseUrl}/${validLocale}/legalservices`,
      languages: {
        ar: `${baseUrl}/ar/legalservices`,
        en: `${baseUrl}/en/legalservices`,
        "x-default": `${baseUrl}/${defaultLocale}/legalservices`,
      },
    },
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: `${baseUrl}/${validLocale}/legalservices`,
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}

export default function LegalServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
