import {
  HeroSkeleton,
  SectionSkeleton,
  ContactFormSkeleton,
  ContactInfoSkeleton,
  PartnersSkeleton,
} from "@/components/common/Skeletons";
import { Header, Footer } from "@/components";

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Skeleton */}
      <HeroSkeleton />

      {/* Contact Form & Info Section Skeleton */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Skeleton */}
          <ContactFormSkeleton />

          {/* Contact Info Skeleton */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="animate-pulse bg-gray-200 h-8 w-48 rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-2/3 rounded" />
            </div>
            <ContactInfoSkeleton />
            {/* Map placeholder */}
            <div className="animate-pulse bg-gray-200 h-64 rounded-xl" />
          </div>
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
