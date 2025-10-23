'use client';

import { 
  Header, 
  Footer,
  HeroSection,
  AboutSection,
  CTASection,
  StatisticsSection,
  PartnersSection,
  ReviewsSection,
  ServicesSection,
  ServicesCarouselSection,
  HowItWorksSection,
  BlogSection,
  FAQSection
} from '@/components';

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <StatisticsSection />
      <ServicesCarouselSection />
      <ReviewsSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
