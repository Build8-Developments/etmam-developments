import {
  HeroSkeleton,
  SectionSkeleton,
  SearchBarSkeleton,
  PartnersSkeleton,
} from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function ConsultingLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Skeleton */}
      <HeroSkeleton />

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <SearchBarSkeleton />
        </div>
      </section>

      {/* Services Grid Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="animate-pulse bg-gray-200 h-14 w-14 rounded-xl flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="animate-pulse bg-gray-200 h-6 w-3/4 rounded" />
                  <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                </div>
              </div>
              <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-2/3 rounded" />
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="space-y-1">
                  <div className="animate-pulse bg-gray-200 h-5 w-24 rounded" />
                  <div className="animate-pulse bg-gray-200 h-4 w-32 rounded" />
                </div>
                <div className="animate-pulse bg-gray-200 h-10 w-28 rounded-lg" />
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
