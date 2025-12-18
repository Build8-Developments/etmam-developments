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
    ar: "الشروط والأحكام - إتمام",
    en: "Terms & Conditions - Etmam",
  };

  const descriptions: Record<Locale, string> = {
    ar: "الشروط والأحكام لاستخدام خدمات إتمام. تعرف على حقوقك ومسؤولياتك عند استخدام منصتنا.",
    en: "Terms and Conditions for using Etmam services. Learn about your rights and responsibilities when using our platform.",
  };

  return {
    title: titles[validLocale],
    description: descriptions[validLocale],
    alternates: {
      canonical: `${baseUrl}/${validLocale}/terms-conditions`,
      languages: {
        ar: `${baseUrl}/ar/terms-conditions`,
        en: `${baseUrl}/en/terms-conditions`,
        "x-default": `${baseUrl}/${defaultLocale}/terms-conditions`,
      },
    },
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: `${baseUrl}/${validLocale}/terms-conditions`,
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
