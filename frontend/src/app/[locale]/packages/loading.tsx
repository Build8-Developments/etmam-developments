import {
  HeroSkeleton,
  SectionSkeleton,
  PackageCardSkeleton,
  FAQSkeleton,
  PartnersSkeleton,
} from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function PackagesLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Skeleton */}
      <HeroSkeleton />

      {/* Packages Grid Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <PackageCardSkeleton key={i} />
          ))}
        </div>
      </SectionSkeleton>

      {/* Comparison Table Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <div className="animate-pulse bg-gray-200 h-10 w-64 mx-auto rounded" />
            <div className="animate-pulse bg-gray-200 h-5 w-96 max-w-full mx-auto rounded" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-4">
                      <div className="animate-pulse bg-gray-200 h-6 w-24 rounded" />
                    </th>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <th key={i} className="p-4">
                        <div className="animate-pulse bg-gray-200 h-6 w-20 mx-auto rounded" />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 8 }).map((_, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-gray-100">
                      <td className="p-4">
                        <div className="animate-pulse bg-gray-200 h-4 w-32 rounded" />
                      </td>
                      {Array.from({ length: 3 }).map((_, colIndex) => (
                        <td key={colIndex} className="p-4 text-center">
                          <div className="animate-pulse bg-gray-200 h-6 w-6 rounded-full mx-auto" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="animate-pulse bg-green-500 h-10 w-80 mx-auto rounded" />
          <div className="animate-pulse bg-green-500 h-5 w-[500px] max-w-full mx-auto rounded" />
          <div className="flex justify-center gap-4">
            <div className="animate-pulse bg-white/20 h-14 w-40 rounded-lg" />
            <div className="animate-pulse bg-white/20 h-14 w-40 rounded-lg" />
          </div>
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
