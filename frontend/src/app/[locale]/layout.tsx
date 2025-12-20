import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Rubik } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ToastProvider } from "@/contexts/ToastContext";
import ApolloWrapper from "@/components/providers/ApolloWrapper";
import { WhatsAppFloat } from "@/components/common";
import { WHATSAPP_CONFIG } from "@/constants";
import {
  Locale,
  locales,
  localeDirection,
  generateAlternateUrls,
  getCanonicalUrl,
} from "@/i18n/config";
import { notFound } from "next/navigation";
import {
  OrganizationSchema,
  WebSiteSchema,
  LocalBusinessSchema,
} from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const almarai = Rubik({
  variable: "--font-almarai",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Generate static params for all supported locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Dynamic metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";
  const alternates = generateAlternateUrls("/", baseUrl);

  const titles: Record<Locale, string> = {
    ar: "إتمام | خدماتك التجارية والإدارية",
    en: "Etmam | Your Commercial and Administrative Services",
  };

  const descriptions: Record<Locale, string> = {
    ar: "من تأسيس الشركات إلى استخراج الرخص وإدارة أعمالك - منصة إتمام للخدمات التجارية والإدارية",
    en: "From company formation to license extraction and business management - Etmam platform for commercial and administrative services",
  };

  const validLocale = (locale as Locale) || "ar";

  return {
    title: {
      default: titles[validLocale],
      template: `%s | ${validLocale === "ar" ? "إتمام" : "Etmam"}`,
    },
    description: descriptions[validLocale],
    manifest: "/site.webmanifest",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: getCanonicalUrl(validLocale, "/", baseUrl),
      languages: alternates,
    },
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: getCanonicalUrl(validLocale, "/", baseUrl),
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      ],
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const dir = localeDirection[validLocale];

  // Determine staging/preview environment for noindex meta tag
  const isStaging =
    process.env.DEPLOY_ENV === "staging" ||
    process.env.NEXT_PUBLIC_DEPLOY_ENV === "staging" ||
    process.env.VERCEL_ENV === "preview";

  return (
    <html lang={validLocale} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {isStaging && <meta name="robots" content="noindex,nofollow" />}
        {/* Structured Data for SEO */}
        <OrganizationSchema locale={validLocale} />
        <WebSiteSchema locale={validLocale} />
        <LocalBusinessSchema locale={validLocale} />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${almarai.variable} ${outfit.variable} ${rubik.variable} antialiased`}
      >
        <ApolloWrapper>
          <LanguageProvider locale={validLocale}>
            <ToastProvider>
              {children}
              <WhatsAppFloat phoneNumber={WHATSAPP_CONFIG.phoneNumber} />
            </ToastProvider>
          </LanguageProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
