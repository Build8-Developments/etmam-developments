import {
  SectionSkeleton,
  OfferCardSkeleton,
} from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function OfferDetailLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Offer Image */}
      <div
        className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[500px]"
        style={{
          background:
            "linear-gradient(86.9deg, rgba(200, 200, 200, 0.5) -14.86%, rgba(150, 150, 150, 0.5) 94%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2">
                <div className="animate-pulse bg-gray-300 h-4 w-16 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-4 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-20 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-4 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-32 rounded" />
              </div>

              {/* Discount Badge */}
              <div className="animate-pulse bg-gray-300 h-8 w-24 rounded-full" />

              {/* Title */}
              <div className="animate-pulse bg-gray-300 h-12 w-full rounded" />
              <div className="animate-pulse bg-gray-300 h-12 w-3/4 rounded" />

              {/* Subtitle */}
              <div className="animate-pulse bg-gray-300 h-5 w-full rounded" />
              <div className="animate-pulse bg-gray-300 h-5 w-2/3 rounded" />

              {/* Price */}
              <div className="flex items-center gap-4 pt-4">
                <div className="animate-pulse bg-gray-300 h-6 w-24 rounded" />
                <div className="animate-pulse bg-gray-300 h-10 w-32 rounded" />
              </div>

              {/* Valid Until */}
              <div className="animate-pulse bg-gray-300 h-5 w-48 rounded" />

              {/* CTA Button */}
              <div className="animate-pulse bg-gray-300 h-14 w-48 rounded-lg" />
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <div className="animate-pulse bg-gray-300 h-96 w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Offer Details Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div className="space-y-6">
              <div className="animate-pulse bg-gray-200 h-8 w-48 rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded" />
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="animate-pulse bg-gray-200 h-8 w-40 rounded" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6 space-y-3">
                    <div className="animate-pulse bg-gray-200 h-12 w-12 rounded-full" />
                    <div className="animate-pulse bg-gray-200 h-5 w-3/4 rounded" />
                    <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="animate-pulse bg-gray-200 h-8 w-32 rounded" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="animate-pulse bg-gray-200 h-6 w-6 rounded-full flex-shrink-0" />
                    <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="space-y-6">
              <div className="animate-pulse bg-gray-200 h-8 w-56 rounded" />
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    className="animate-pulse bg-gray-200 h-4 w-full rounded"
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 space-y-6 sticky top-24">
              <div className="text-center space-y-4">
                <div className="animate-pulse bg-gray-200 h-8 w-20 mx-auto rounded-full" />
                <div className="animate-pulse bg-gray-200 h-6 w-28 mx-auto rounded" />
                <div className="animate-pulse bg-gray-200 h-10 w-36 mx-auto rounded" />
                <div className="animate-pulse bg-gray-200 h-4 w-32 mx-auto rounded" />
              </div>
              <div className="animate-pulse bg-gray-200 h-14 w-full rounded-lg" />
              <div className="animate-pulse bg-gray-200 h-12 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Related Offers Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <OfferCardSkeleton key={i} />
          ))}
        </div>
      </SectionSkeleton>

      <Footer />
    </div>
  );
}
