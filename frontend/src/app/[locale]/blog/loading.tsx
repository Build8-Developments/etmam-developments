import {
  HeroSkeleton,
  SectionSkeleton,
  BlogCardSkeleton,
  FeaturedBlogSkeleton,
  SearchBarSkeleton,
  FilterPillsSkeleton,
  PartnersSkeleton,
} from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Skeleton */}
      <HeroSkeleton />

      {/* Search & Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 space-y-6">
          <SearchBarSkeleton />
          <FilterPillsSkeleton />
        </div>
      </section>

      {/* Featured Post Skeleton */}
      <SectionSkeleton showTitle={false}>
        <FeaturedBlogSkeleton />
      </SectionSkeleton>

      {/* Blog Posts Grid Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
        {/* Pagination Skeleton */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-200 h-10 w-10 rounded-lg"
            />
          ))}
        </div>
      </SectionSkeleton>

      {/* Partners Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <div className="animate-pulse bg-gray-200 h-10 w-64 mx-auto rounded" />
          </div>
          <PartnersSkeleton />
        </div>
      </section>

      <Footer />
    </div>
  );
}
