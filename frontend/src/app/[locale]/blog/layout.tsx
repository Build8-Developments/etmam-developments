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
    ar: "المدونة",
    en: "Blog ",
  };

  const descriptions: Record<Locale, string> = {
    ar: "اقرأ أحدث المقالات والنصائح حول تأسيس الشركات والخدمات القانونية والإدارية في المملكة العربية السعودية.",
    en: "Read the latest articles and tips about company formation and legal and administrative services in Saudi Arabia.",
  };

  return {
    title: titles[validLocale],
    description: descriptions[validLocale],
    alternates: {
      canonical: `${baseUrl}/${validLocale}/blog`,
      languages: {
        ar: `${baseUrl}/ar/blog`,
        en: `${baseUrl}/en/blog`,
        "x-default": `${baseUrl}/${defaultLocale}/blog`,
      },
    },
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: `${baseUrl}/${validLocale}/blog`,
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
