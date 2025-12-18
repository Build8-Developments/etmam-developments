import "./globals.css";

/**
 * Root layout - minimal wrapper
 * All locale-specific rendering is handled by [locale]/layout.tsx
 * This layout exists only to satisfy Next.js App Router requirements
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
