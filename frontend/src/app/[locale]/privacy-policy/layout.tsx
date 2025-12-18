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
    ar: "سياسة الخصوصية",
    en: "Privacy Policy",
  };

  const descriptions: Record<Locale, string> = {
    ar: "سياسة الخصوصية لموقع إتمام. تعرف على كيفية جمعنا واستخدامنا وحمايتنا لبياناتك الشخصية.",
    en: "Privacy Policy for Etmam. Learn how we collect, use, and protect your personal data.",
  };

  return {
    title: titles[validLocale],
    description: descriptions[validLocale],
    alternates: {
      canonical: `${baseUrl}/${validLocale}/privacy-policy`,
      languages: {
        ar: `${baseUrl}/ar/privacy-policy`,
        en: `${baseUrl}/en/privacy-policy`,
        "x-default": `${baseUrl}/${defaultLocale}/privacy-policy`,
      },
    },
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: `${baseUrl}/${validLocale}/privacy-policy`,
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

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
