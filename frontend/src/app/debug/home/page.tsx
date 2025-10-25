import { GET_HOME_PAGE, fetchWithLocale } from "@/lib/graphql";
import { CopyButton } from "./CopyButton";

// Enable ISR with 1 hour revalidation
export const revalidate = 3600; // Revalidate every 1 hour (3600 seconds)

interface PageProps {
  searchParams: {
    locale?: string;
  };
}

// Recursive component to render any data structure
function DataRenderer({ data }: { data: any }) {
  if (data === null || data === undefined) {
    return <span className="text-gray-400 italic">null</span>;
  }

  if (
    typeof data === "string" ||
    typeof data === "number" ||
    typeof data === "boolean"
  ) {
    return <span className="text-gray-900">{String(data)}</span>;
  }

  if (Array.isArray(data)) {
    if (data.length === 0) {
      return <span className="text-gray-400 italic">Empty array</span>;
    }
    return (
      <div className="space-y-2 mt-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded p-3 border-l-2 border-blue-400"
          >
            <div className="text-xs text-gray-500 mb-1">Item {index + 1}</div>
            <DataRenderer data={item} />
          </div>
        ))}
      </div>
    );
  }

  if (typeof data === "object") {
    const entries = Object.entries(data);
    if (entries.length === 0) {
      return <span className="text-gray-400 italic">Empty object</span>;
    }
    return (
      <div className="space-y-2">
        {entries.map(([key, value]) => (
          <div key={key}>
            <strong className="text-gray-700 text-sm">{key}:</strong>
            <div className="ml-4 mt-1 bg-gray-400 p-2 rounded">
              <DataRenderer data={value} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <span className="text-gray-400 italic">Unknown type</span>;
}

// Component to render a section card
function SectionCard({
  title,
  data,
  emoji,
}: {
  title: string;
  data: any;
  emoji?: string | undefined;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {emoji && `${emoji} `}
        {title}
      </h2>
      <div className="space-y-3 bg-gray-300 p-4 rounded">
        <DataRenderer data={data} />
      </div>
    </div>
  );
}

export default async function DebugHomePage({ searchParams }: PageProps) {
  const locale = searchParams.locale || "ar";

  // Fetch data using the centralized utility
  const result = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale,
    fetchPolicy: "network-only", // Always fetch fresh data for debugging
  });

  const { data, error } = result;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🐛 Debug: Home Page GraphQL Query
          </h1>
          <div className="flex gap-4 items-center">
            <div className="text-sm text-gray-600">
              <strong>Current Locale:</strong> {locale}
            </div>
            <div className="flex gap-2">
              <a
                href="/debug/home?locale=ar"
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  locale === "ar"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Arabic (ar)
              </a>
              <a
                href="/debug/home?locale=en"
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  locale === "en"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                English (en)
              </a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <strong>GraphQL Endpoint:</strong>{" "}
            {process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL ||
              "http://localhost:1337/graphql"}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-red-900 mb-2">❌ Error</h2>
            <pre className="text-sm text-red-700 overflow-auto">{error}</pre>
          </div>
        )}

        {/* Success Display */}
        {data && (
          <>
            {/* Summary */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-green-900 mb-2">
                ✅ Success
              </h2>
              <p className="text-sm text-green-700">
                Data fetched successfully using SSR (Server-Side Rendering)
              </p>
              {data.home && (
                <p className="text-sm text-green-700 mt-2">
                  Found {Object.keys(data.home).length} section(s) in home page
                  data
                </p>
              )}
            </div>

            {/* Dynamic Section Rendering */}
            {data.home &&
              Object.entries(data.home).map(([sectionName, sectionData]) => {
                // Emoji mapping for known sections
                const emojiMap: Record<string, string> = {
                  Hero: "🎯",
                  About: "ℹ️",
                  Services: "⚙️",
                  HowItWorks: "🔄",
                  Statistics: "📊",
                  ServicesCarousel: "🎠",
                  Blog: "📝",
                  FAQ: "❓",
                  CTA: "📢",
                  Partners: "🤝",
                };

                return (
                  <SectionCard
                    key={sectionName}
                    title={sectionName}
                    data={sectionData}
                    emoji={emojiMap[sectionName]}
                  />
                );
              })}

            {/* Raw JSON Response */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  📋 Raw JSON Response
                </h2>
                <CopyButton data={data} />
              </div>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto text-xs max-h-96">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </>
        )}

        {/* No Data */}
        {!data && !error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-yellow-900 mb-2">
              ⚠️ No Data
            </h2>
            <p className="text-sm text-yellow-700">
              No data returned from the API. Please check your Strapi
              configuration.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
