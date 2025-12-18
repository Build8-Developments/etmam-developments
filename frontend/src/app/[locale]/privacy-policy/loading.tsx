import { HeroSkeleton, SectionSkeleton } from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function PrivacyPolicyLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Skeleton */}
      <div
        className="relative py-16 lg:py-24 pt-28 md:pt-32 min-h-[300px]"
        style={{
          background:
            "linear-gradient(86.9deg, rgba(200, 200, 200, 0.5) -14.86%, rgba(150, 150, 150, 0.5) 94%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse bg-gray-300 h-12 w-64 mx-auto rounded" />
          <div className="animate-pulse bg-gray-300 h-5 w-48 mx-auto mt-4 rounded" />
        </div>
      </div>

      {/* Content Skeleton */}
      <SectionSkeleton showTitle={false}>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            <div className="animate-pulse bg-gray-200 h-6 w-40 rounded" />
            <div className="space-y-2 pl-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-200 h-4 w-48 rounded"
                />
              ))}
            </div>
          </div>

          {/* Content Sections */}
          {Array.from({ length: 6 }).map((_, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <div className="animate-pulse bg-gray-200 h-8 w-64 rounded" />
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-gray-200 h-4 w-full rounded"
                  />
                ))}
                <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded" />
              </div>
              {sectionIndex % 2 === 0 && (
                <div className="pl-6 space-y-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="animate-pulse bg-gray-200 h-4 w-4 rounded-full flex-shrink-0 mt-0.5" />
                      <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionSkeleton>

      <Footer />
    </div>
  );
}
