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
    ar: "الباقات والأسعار",
    en: "Packages & Pricing",
  };

  const descriptions: Record<Locale, string> = {
    ar: "اختر الباقة المناسبة لاحتياجات عملك. باقات متنوعة تشمل خدمات تأسيس الشركات والاستشارات بأسعار تنافسية.",
    en: "Choose the right package for your business needs. Various packages including company formation and consulting services at competitive prices.",
  };

  return {
    title: titles[validLocale],
    description: descriptions[validLocale],
    alternates: {
      canonical: `${baseUrl}/${validLocale}/packages`,
      languages: {
        ar: `${baseUrl}/ar/packages`,
        en: `${baseUrl}/en/packages`,
        "x-default": `${baseUrl}/${defaultLocale}/packages`,
      },
    },
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: `${baseUrl}/${validLocale}/packages`,
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
