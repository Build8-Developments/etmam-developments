"use client";

import React from "react";

// Base skeleton component with pulse animation
export const Skeleton: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div
    className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded ${className}`}
    style={{ animation: "shimmer 1.5s ease-in-out infinite" }}
  />
);

// Hero section skeleton
export const HeroSkeleton: React.FC = () => (
  <div
    className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[400px]"
    style={{
      background:
        "linear-gradient(86.9deg, rgba(200, 200, 200, 0.5) -14.86%, rgba(150, 150, 150, 0.5) 94%)",
    }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-2/3" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-36 rounded-lg" />
            <Skeleton className="h-12 w-36 rounded-lg" />
          </div>
        </div>
        <div className="hidden lg:block">
          <Skeleton className="h-80 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  </div>
);

// Card skeleton for services, offers, blog posts, etc.
export const CardSkeleton: React.FC<{ showImage?: boolean }> = ({
  showImage = true,
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
    {showImage && <Skeleton className="h-48 w-full rounded-none" />}
    <div className="p-6 space-y-4">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex justify-between items-center pt-4">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-10 w-28 rounded-lg" />
      </div>
    </div>
  </div>
);

// Grid of card skeletons
export const CardsGridSkeleton: React.FC<{
  count?: number;
  columns?: 2 | 3 | 4;
  showImage?: boolean;
}> = ({ count = 6, columns = 3, showImage = true }) => {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} showImage={showImage} />
      ))}
    </div>
  );
};

// Blog post card skeleton
export const BlogCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
    <Skeleton className="h-48 w-full rounded-none" />
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  </div>
);

// Featured blog post skeleton (larger)
export const FeaturedBlogSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Skeleton className="h-64 lg:h-96 w-full rounded-none" />
      <div className="p-8 space-y-6 flex flex-col justify-center">
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex items-center gap-4 pt-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Blog detail page skeleton
export const BlogDetailSkeleton: React.FC = () => (
  <div className="space-y-8">
    {/* Hero Image */}
    <Skeleton className="h-[400px] w-full rounded-2xl" />

    {/* Meta info */}
    <div className="flex flex-wrap items-center gap-4">
      <Skeleton className="h-6 w-24 rounded-full" />
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-24" />
    </div>

    {/* Title */}
    <Skeleton className="h-12 w-full" />
    <Skeleton className="h-12 w-3/4" />

    {/* Author */}
    <div className="flex items-center gap-4 py-4 border-y border-gray-200">
      <Skeleton className="h-14 w-14 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-48" />
      </div>
    </div>

    {/* Content paragraphs */}
    <div className="space-y-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
      <Skeleton className="h-4 w-2/3" />
    </div>

    {/* More paragraphs */}
    <div className="space-y-4 pt-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </div>
  </div>
);

// Service detail skeleton
export const ServiceDetailSkeleton: React.FC = () => (
  <div className="space-y-12">
    {/* Hero with service info */}
    <HeroSkeleton />

    {/* Service details */}
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Steps/Features */}
          <div className="space-y-4">
            <Skeleton className="h-8 w-40" />
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Legal service category skeleton
export const LegalCategorySkeleton: React.FC = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-6">
    <div className="flex items-start gap-4">
      <Skeleton className="h-16 w-16 rounded-lg flex-shrink-0" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-8 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  </div>
);

// Package/Pricing card skeleton
export const PackageCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
    <div className="text-center space-y-4">
      <Skeleton className="h-14 w-14 rounded-full mx-auto" />
      <Skeleton className="h-8 w-32 mx-auto" />
      <Skeleton className="h-4 w-48 mx-auto" />
    </div>
    <div className="text-center space-y-2">
      <Skeleton className="h-12 w-40 mx-auto" />
      <Skeleton className="h-4 w-24 mx-auto" />
    </div>
    <div className="space-y-3 py-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
    <Skeleton className="h-12 w-full rounded-lg" />
  </div>
);

// Offer card skeleton
export const OfferCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
    <div className="relative">
      <Skeleton className="h-56 w-full rounded-none" />
      <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto">
        <Skeleton className="h-8 w-16 rounded-full" />
      </div>
    </div>
    <div className="p-6 space-y-4">
      <Skeleton className="h-7 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <div className="flex items-center gap-3 pt-2">
        <Skeleton className="h-5 w-20 line-through" />
        <Skeleton className="h-7 w-28" />
      </div>
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  </div>
);

// About page team member skeleton
export const TeamMemberSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
    <Skeleton className="h-64 w-full rounded-none" />
    <div className="p-6 text-center space-y-3">
      <Skeleton className="h-6 w-32 mx-auto" />
      <Skeleton className="h-4 w-24 mx-auto" />
      <div className="flex justify-center gap-2 pt-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  </div>
);

// Statistics skeleton
export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="text-center space-y-3 p-6">
        <Skeleton className="h-12 w-12 rounded-full mx-auto" />
        <Skeleton className="h-10 w-20 mx-auto" />
        <Skeleton className="h-4 w-28 mx-auto" />
      </div>
    ))}
  </div>
);

// Section with title skeleton
export const SectionSkeleton: React.FC<{
  children: React.ReactNode;
  showTitle?: boolean;
}> = ({ children, showTitle = true }) => (
  <section className="py-16 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {showTitle && (
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto max-w-full" />
        </div>
      )}
      {children}
    </div>
  </section>
);

// FAQ skeleton
export const FAQSkeleton: React.FC = () => (
  <div className="space-y-4 max-w-3xl mx-auto">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      </div>
    ))}
  </div>
);

// Partners section skeleton
export const PartnersSkeleton: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-8 items-center">
    {Array.from({ length: 6 }).map((_, i) => (
      <Skeleton key={i} className="h-16 w-32 rounded-lg" />
    ))}
  </div>
);

// Contact form skeleton
export const ContactFormSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    </div>
    <div className="space-y-2">
      <Skeleton className="h-5 w-28" />
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-5 w-32" />
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-5 w-20" />
      <Skeleton className="h-32 w-full rounded-lg" />
    </div>
    <Skeleton className="h-14 w-full rounded-lg" />
  </div>
);

// Contact info skeleton
export const ContactInfoSkeleton: React.FC = () => (
  <div className="space-y-6">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="flex items-start gap-4">
        <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    ))}
  </div>
);

// Search bar skeleton
export const SearchBarSkeleton: React.FC = () => (
  <div className="relative max-w-xl mx-auto">
    <Skeleton className="h-14 w-full rounded-xl" />
  </div>
);

// Filter pills skeleton
export const FilterPillsSkeleton: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <Skeleton key={i} className="h-10 w-24 rounded-full" />
    ))}
  </div>
);

// Add shimmer animation to globals.css
export const shimmerStyles = `
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
`;
