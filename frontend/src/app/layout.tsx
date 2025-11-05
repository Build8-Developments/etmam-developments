import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Rubik } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ToastProvider } from "@/contexts/ToastContext";
import ApolloWrapper from "@/components/providers/ApolloWrapper";
import { WhatsAppFloat } from "@/components/common";
import { WHATSAPP_CONFIG } from "@/constants";

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

export const metadata: Metadata = {
  title: "Etmam - إتمام | خدماتك التجارية والإدارية",
  description:
    "من تأسيس الشركات إلى استخراج الرخص وإدارة أعمالك - Your Commercial and Administrative Services",
  manifest: "/site.webmanifest",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
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
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${almarai.variable} ${outfit.variable} ${rubik.variable} antialiased`}
      >
        <ApolloWrapper>
          <LanguageProvider>
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
