import { Header, Footer } from "@/components";

export default function LegalServiceDetailLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
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
              <div className="flex items-center gap-2 flex-wrap">
                <div className="animate-pulse bg-gray-300 h-4 w-16 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-4 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-32 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-4 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-40 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-4 rounded" />
                <div className="animate-pulse bg-gray-300 h-4 w-36 rounded" />
              </div>

              {/* Service Icon */}
              <div className="animate-pulse bg-gray-300 h-16 w-16 rounded-xl" />

              {/* Title */}
              <div className="animate-pulse bg-gray-300 h-12 w-full rounded" />
              <div className="animate-pulse bg-gray-300 h-12 w-2/3 rounded" />

              {/* Short Description */}
              <div className="animate-pulse bg-gray-300 h-5 w-full rounded" />
              <div className="animate-pulse bg-gray-300 h-5 w-3/4 rounded" />

              {/* Price & Duration */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="bg-gray-300/30 rounded-lg px-4 py-2 space-y-1">
                  <div className="animate-pulse bg-gray-300 h-4 w-16 rounded" />
                  <div className="animate-pulse bg-gray-300 h-6 w-24 rounded" />
                </div>
                <div className="bg-gray-300/30 rounded-lg px-4 py-2 space-y-1">
                  <div className="animate-pulse bg-gray-300 h-4 w-20 rounded" />
                  <div className="animate-pulse bg-gray-300 h-6 w-28 rounded" />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <div className="animate-pulse bg-gray-300 h-12 w-40 rounded-lg" />
                <div className="animate-pulse bg-gray-300 h-12 w-40 rounded-lg" />
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
                  <div key={i} className="bg-gray-50 rounded-xl p-6 space-y-4">
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
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-col items-center">
                      <div className="animate-pulse bg-gray-200 h-10 w-10 rounded-full" />
                      {i < 4 && (
                        <div className="animate-pulse bg-gray-200 h-12 w-0.5 mt-2" />
                      )}
                    </div>
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
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="animate-pulse bg-gray-200 h-5 w-5 rounded flex-shrink-0 mt-0.5" />
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
              <div className="text-center space-y-4">
                <div className="animate-pulse bg-gray-200 h-16 w-16 rounded-xl mx-auto" />
                <div className="animate-pulse bg-gray-200 h-6 w-40 mx-auto rounded" />
              </div>

              <div className="space-y-4 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="animate-pulse bg-gray-200 h-4 w-24 rounded" />
                  <div className="animate-pulse bg-gray-200 h-6 w-28 rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="animate-pulse bg-gray-200 h-4 w-28 rounded" />
                  <div className="animate-pulse bg-gray-200 h-6 w-24 rounded" />
                </div>
              </div>

              <div className="animate-pulse bg-gray-200 h-14 w-full rounded-lg" />
              <div className="animate-pulse bg-gray-200 h-12 w-full rounded-lg" />

              {/* Support Info */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="animate-pulse bg-gray-200 h-8 w-8 rounded-full" />
                  <div className="animate-pulse bg-gray-200 h-4 w-32 rounded" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="animate-pulse bg-gray-200 h-8 w-8 rounded-full" />
                  <div className="animate-pulse bg-gray-200 h-4 w-28 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
