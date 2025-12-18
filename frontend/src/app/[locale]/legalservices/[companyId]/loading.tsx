import {
  SectionSkeleton,
  SearchBarSkeleton,
  PartnersSkeleton,
} from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function LegalCategoryLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Category Info */}
      <div
        className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[400px]"
        style={{
          background:
            "linear-gradient(86.9deg, rgba(200, 200, 200, 0.5) -14.86%, rgba(150, 150, 150, 0.5) 94%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2">
                <div className="animate-pulse bg-gray-300 h-4 w-16 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-4 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-32 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-4 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-40 rounded" />
              </div>

              {/* Category Icon */}
              <div className="animate-pulse bg-gray-300 h-20 w-20 rounded-2xl" />

              {/* Title */}
              <div className="animate-pulse bg-gray-300 h-12 w-3/4 rounded" />

              {/* Description */}
              <div className="animate-pulse bg-gray-300 h-5 w-full rounded" />
              <div className="animate-pulse bg-gray-300 h-5 w-2/3 rounded" />

              {/* Stats */}
              <div className="flex gap-6 pt-4">
                <div className="space-y-2">
                  <div className="animate-pulse bg-gray-300 h-8 w-16 rounded" />
                  <div className="animate-pulse bg-gray-300 h-4 w-20 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="animate-pulse bg-gray-300 h-8 w-16 rounded" />
                  <div className="animate-pulse bg-gray-300 h-4 w-24 rounded" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="animate-pulse bg-gray-300 h-80 w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <SearchBarSkeleton />
        </div>
      </section>

      {/* Services Grid Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="animate-pulse bg-gray-200 h-12 w-12 rounded-lg flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="animate-pulse bg-gray-200 h-6 w-3/4 rounded" />
                  <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                </div>
              </div>
              <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="space-y-1">
                  <div className="animate-pulse bg-gray-200 h-5 w-24 rounded" />
                  <div className="animate-pulse bg-gray-200 h-4 w-32 rounded" />
                </div>
                <div className="animate-pulse bg-gray-200 h-10 w-24 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </SectionSkeleton>

      {/* CTA Section Skeleton */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="animate-pulse bg-green-500 h-10 w-64 mx-auto rounded" />
          <div className="animate-pulse bg-green-500 h-5 w-96 max-w-full mx-auto rounded" />
          <div className="animate-pulse bg-white/20 h-14 w-48 mx-auto rounded-lg" />
        </div>
      </section>

      {/* Partners Section Skeleton */}
      <SectionSkeleton>
        <PartnersSkeleton />
      </SectionSkeleton>

      <Footer />
    </div>
  );
}
