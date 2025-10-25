/**
 * Real-world usage examples for the GraphQL fetch utilities
 * Copy and adapt these examples for your pages
 */

import {
  fetchWithLocale,
  fetchMultiple,
  fetchGraphQL,
  GET_HOME_PAGE,
} from "@/lib/graphql";

// ============================================================================
// Example 1: Simple Home Page
// ============================================================================
export async function Example1_SimplePage() {
  const result = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: "ar",
  });

  if (!result.success) {
    return { error: result.error };
  }

  return { homeData: result.data.home };
}

// ============================================================================
// Example 2: Page with Dynamic Locale
// ============================================================================
export async function Example2_DynamicLocale(locale: string) {
  const result = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: locale || "ar", // Fallback to Arabic
  });

  return result; // Return full result (includes success, error)
}

// ============================================================================
// Example 3: Page with Search Params
// ============================================================================
export async function Example3_WithSearchParams(searchParams: {
  locale?: string;
  page?: string;
}) {
  const locale = searchParams.locale || "ar";
  const page = parseInt(searchParams.page || "1");

  const result = await fetchWithLocale({
    query: GET_HOME_PAGE, // Replace with your query
    locale,
    variables: { page },
  });

  return result;
}

// ============================================================================
// Example 4: Multiple Queries (Layout)
// ============================================================================
export async function Example4_LayoutQueries(locale: string) {
  const results = await fetchMultiple([
    {
      query: GET_HOME_PAGE, // Replace with GET_HEADER
      variables: { locale },
    },
    {
      query: GET_HOME_PAGE, // Replace with GET_FOOTER
      variables: { locale },
    },
  ]);

  const [headerResult, footerResult] = results;

  return {
    header: headerResult.success ? headerResult.data : null,
    footer: footerResult.success ? footerResult.data : null,
  };
}

// ============================================================================
// Example 5: Force Fresh Data (No Cache)
// ============================================================================
export async function Example5_FreshData(locale: string) {
  const result = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale,
    fetchPolicy: "network-only", // Always fetch fresh
  });

  return result;
}

// ============================================================================
// Example 6: With Additional Variables
// ============================================================================
export async function Example6_WithVariables(locale: string) {
  const result = await fetchWithLocale({
    query: GET_HOME_PAGE, // Replace with your query
    locale,
    variables: {
      page: 1,
      pageSize: 10,
      sort: ["publishedAt:desc"],
      // Add any other variables your query needs
    },
  });

  return result;
}

// ============================================================================
// Example 7: Error Handling Patterns
// ============================================================================
export async function Example7_ErrorHandling(locale: string) {
  const result = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale,
  });

  // Pattern 1: Return error to component
  if (!result.success) {
    return { error: result.error, data: null };
  }

  // Pattern 2: Use fallback data
  if (!result.success) {
    return { data: getDefaultHomeData() };
  }

  // Pattern 3: Log and continue
  if (!result.success) {
    console.error("Failed to fetch home data:", result.error);
    return { data: null };
  }

  return { data: result.data };
}

// Helper function for fallback data
function getDefaultHomeData() {
  return {
    home: {
      Hero: { title: "Default Title" },
      About: { title: "Default About" },
    },
  };
}

// ============================================================================
// Example 8: Real Next.js Page Component
// ============================================================================

/*
// app/page.tsx
import { fetchWithLocale, GET_HOME_PAGE } from '@/lib/graphql';
import { HeroSection, AboutSection } from '@/components';

export default async function HomePage() {
  const result = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: 'ar',
  });

  if (!result.success) {
    return (
      <div className="error-page">
        <h1>Error loading page</h1>
        <p>{result.error}</p>
      </div>
    );
  }

  const homeData = result.data.home;

  return (
    <div>
      <HeroSection data={homeData.Hero} />
      <AboutSection data={homeData.About} />
    </div>
  );
}
*/

// ============================================================================
// Example 9: Real Next.js Page with Dynamic Locale
// ============================================================================

/*
// app/[locale]/page.tsx
import { fetchWithLocale, GET_HOME_PAGE } from '@/lib/graphql';

export default async function LocalizedPage({
  params,
}: {
  params: { locale: string };
}) {
  const result = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: params.locale,
  });

  if (!result.success) {
    return <ErrorComponent message={result.error} />;
  }

  return <HomePage data={result.data.home} />;
}

// Generate static params for all locales
export async function generateStaticParams() {
  return [
    { locale: 'ar' },
    { locale: 'en' },
  ];
}
*/

// ============================================================================
// Example 10: Real Next.js Layout
// ============================================================================

/*
// app/layout.tsx
import { fetchMultiple, GET_HEADER, GET_FOOTER } from '@/lib/graphql';
import { Header, Footer } from '@/components';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerResult, footerResult] = await fetchMultiple([
    { query: GET_HEADER, variables: { locale: 'ar' } },
    { query: GET_FOOTER, variables: { locale: 'ar' } },
  ]);

  return (
    <html lang="ar">
      <body>
        {headerResult.success && <Header data={headerResult.data.header} />}
        <main>{children}</main>
        {footerResult.success && <Footer data={footerResult.data.footer} />}
      </body>
    </html>
  );
}
*/
