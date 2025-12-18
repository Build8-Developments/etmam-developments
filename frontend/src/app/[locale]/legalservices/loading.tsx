import {
  HeroSkeleton,
  SectionSkeleton,
  LegalCategorySkeleton,
  SearchBarSkeleton,
  FAQSkeleton,
  PartnersSkeleton,
} from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function LegalServicesLoading() {
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

      {/* Categories Grid Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <LegalCategorySkeleton key={i} />
          ))}
        </div>
      </SectionSkeleton>

      {/* CTA Section Skeleton */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="animate-pulse bg-green-500 h-10 w-80 mx-auto rounded" />
          <div className="animate-pulse bg-green-500 h-5 w-[500px] max-w-full mx-auto rounded" />
          <div className="animate-pulse bg-white/20 h-14 w-48 mx-auto rounded-lg" />
        </div>
      </section>

      {/* FAQ Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <div className="animate-pulse bg-gray-200 h-10 w-64 mx-auto rounded" />
            <div className="animate-pulse bg-gray-200 h-5 w-96 max-w-full mx-auto rounded" />
          </div>
          <FAQSkeleton />
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
