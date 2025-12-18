import {
  HeroSkeleton,
  SectionSkeleton,
  StatsSkeleton,
  TeamMemberSkeleton,
  FAQSkeleton,
  PartnersSkeleton,
} from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Skeleton */}
      <HeroSkeleton />

      {/* About Section Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-pulse bg-gray-200 h-8 w-3/4 rounded" />
            <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
            <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
            <div className="animate-pulse bg-gray-200 h-4 w-2/3 rounded" />
          </div>
          <div className="animate-pulse bg-gray-200 h-80 rounded-2xl" />
        </div>
      </SectionSkeleton>

      {/* Statistics Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <StatsSkeleton />
        </div>
      </section>

      {/* Leadership Section Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <TeamMemberSkeleton key={i} />
          ))}
        </div>
      </SectionSkeleton>

      {/* Why Choose Us Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg space-y-4"
            >
              <div className="animate-pulse bg-gray-200 h-12 w-12 rounded-full" />
              <div className="animate-pulse bg-gray-200 h-6 w-3/4 rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-2/3 rounded" />
            </div>
          ))}
        </div>
      </SectionSkeleton>

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
