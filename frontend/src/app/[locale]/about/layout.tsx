import type { Metadata } from "next";
import { Locale, locales, defaultLocale } from "@/i18n/config";

// Generate static params for all locales
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
    ar: "من نحن",
    en: "About Us",
  };

  const descriptions: Record<Locale, string> = {
    ar: "تعرف على إتمام - شريكك الموثوق في الخدمات التجارية والإدارية. نقدم خبرة تمتد لسنوات في تأسيس الشركات والاستشارات القانونية والإدارية.",
    en: "Learn about Etmam - Your trusted partner in commercial and administrative services. We offer years of experience in company formation and legal and administrative consulting.",
  };

  return {
    title: titles[validLocale],
    description: descriptions[validLocale],
    alternates: {
      canonical: `${baseUrl}/${validLocale}/about`,
      languages: {
        ar: `${baseUrl}/ar/about`,
        en: `${baseUrl}/en/about`,
        "x-default": `${baseUrl}/${defaultLocale}/about`,
      },
    },
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: `${baseUrl}/${validLocale}/about`,
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
