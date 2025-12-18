import { ServiceDetailSkeleton } from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function ConsultingServiceLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Service Detail Skeleton */}
      <div className="pt-20">
        {/* Hero Section */}
        <div
          className="relative py-20 lg:py-32 min-h-[400px]"
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
                  <div className="animate-pulse bg-gray-300 h-4 w-24 rounded" />
                  <div className="animate-pulse bg-gray-300 h-4 w-4 rounded" />
                  <div className="animate-pulse bg-gray-300 h-4 w-32 rounded" />
                </div>
                <div className="animate-pulse bg-gray-300 h-12 w-3/4 rounded" />
                <div className="animate-pulse bg-gray-300 h-5 w-full rounded" />
                <div className="animate-pulse bg-gray-300 h-5 w-2/3 rounded" />
                <div className="flex gap-4 pt-4">
                  <div className="animate-pulse bg-gray-300 h-12 w-36 rounded-lg" />
                  <div className="animate-pulse bg-gray-300 h-12 w-36 rounded-lg" />
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="animate-pulse bg-gray-300 h-64 w-64 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description Section */}
              <div className="space-y-6">
                <div className="animate-pulse bg-gray-200 h-8 w-48 rounded" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-xl p-6 space-y-4"
                    >
                      <div className="animate-pulse bg-gray-200 h-12 w-12 rounded-full" />
                      <div className="animate-pulse bg-gray-200 h-5 w-3/4 rounded" />
                      <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                      <div className="animate-pulse bg-gray-200 h-4 w-2/3 rounded" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps Section */}
              <div className="space-y-6">
                <div className="animate-pulse bg-gray-200 h-8 w-40 rounded" />
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="animate-pulse bg-gray-200 h-10 w-10 rounded-full flex-shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="animate-pulse bg-gray-200 h-5 w-1/2 rounded" />
                        <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements Section */}
              <div className="space-y-6">
                <div className="animate-pulse bg-gray-200 h-8 w-56 rounded" />
                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="animate-pulse bg-gray-200 h-5 w-5 rounded-full flex-shrink-0" />
                      <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-6 sticky top-24">
                <div className="text-center space-y-2">
                  <div className="animate-pulse bg-gray-200 h-6 w-32 mx-auto rounded" />
                  <div className="animate-pulse bg-gray-200 h-10 w-48 mx-auto rounded" />
                  <div className="animate-pulse bg-gray-200 h-4 w-40 mx-auto rounded" />
                </div>
                <div className="space-y-3 py-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="animate-pulse bg-gray-200 h-5 w-5 rounded flex-shrink-0" />
                    <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="animate-pulse bg-gray-200 h-5 w-5 rounded flex-shrink-0" />
                    <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                  </div>
                </div>
                <div className="animate-pulse bg-gray-200 h-14 w-full rounded-lg" />
                <div className="animate-pulse bg-gray-200 h-12 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
