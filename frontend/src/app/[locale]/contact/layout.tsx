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
    ar: "تواصل معنا - إتمام",
    en: "Contact Us - Etmam",
  };

  const descriptions: Record<Locale, string> = {
    ar: "تواصل مع فريق إتمام للحصول على استشارة مجانية. نحن هنا لمساعدتك في جميع احتياجاتك التجارية والإدارية.",
    en: "Contact the Etmam team for a free consultation. We are here to help you with all your commercial and administrative needs.",
  };

  return {
    title: titles[validLocale],
    description: descriptions[validLocale],
    alternates: {
      canonical: `${baseUrl}/${validLocale}/contact`,
      languages: {
        ar: `${baseUrl}/ar/contact`,
        en: `${baseUrl}/en/contact`,
        "x-default": `${baseUrl}/${defaultLocale}/contact`,
      },
    },
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: `${baseUrl}/${validLocale}/contact`,
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
