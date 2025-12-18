import {
  BlogDetailSkeleton,
  SectionSkeleton,
  BlogCardSkeleton,
} from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function BlogDetailLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Blog Detail Content */}
      <article className="pt-28 md:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <BlogDetailSkeleton />

            {/* Tags Skeleton */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-gray-200 h-8 w-20 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Share Section Skeleton */}
            <div className="mt-8 flex items-center gap-4">
              <div className="animate-pulse bg-gray-200 h-5 w-16 rounded" />
              <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-gray-200 h-10 w-10 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Comments Section Skeleton */}
            <div className="mt-12 pt-8 border-t border-gray-200 space-y-8">
              <div className="animate-pulse bg-gray-200 h-8 w-48 rounded" />

              {/* Comment Form Skeleton */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="animate-pulse bg-gray-200 h-12 rounded-lg" />
                  <div className="animate-pulse bg-gray-200 h-12 rounded-lg" />
                </div>
                <div className="animate-pulse bg-gray-200 h-24 rounded-lg" />
                <div className="animate-pulse bg-gray-200 h-12 w-32 rounded-lg" />
              </div>

              {/* Comments List Skeleton */}
              <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="animate-pulse bg-gray-200 h-12 w-12 rounded-full flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="animate-pulse bg-gray-200 h-5 w-24 rounded" />
                        <div className="animate-pulse bg-gray-200 h-4 w-20 rounded" />
                      </div>
                      <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
                      <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      </SectionSkeleton>

      <Footer />
    </div>
  );
}
