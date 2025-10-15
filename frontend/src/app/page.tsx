'use client';

import { 
  Header, 
  Footer,
  HeroSection,
  AboutSection,
  CTASection,
  StatisticsSection,
  PartnersSection,
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
      <BlogSection />
      <FAQSection />
      <CTASection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
