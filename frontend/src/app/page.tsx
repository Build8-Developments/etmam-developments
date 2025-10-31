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
  FAQSection,
  ConsultationSection
} from '@/components';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { GET_HOME_PAGE } from '@/lib/graphql/queries/pages/home';
import { fetchWithLocale } from '@/lib/graphql/utils/fetchGraphQL';
import { getLocale } from '@/lib/graphql/utils/locale';

export default async function Home() {
  // Get current locale
  const locale = await getLocale();
  
  // Fetch data from Strapi with fallback to default content
  const { data: strapiData } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale,
  });

  // Note: GraphQL queries are integrated but will use mock data fallback if Strapi is not available
  // The fetchWithLocale utility handles errors gracefully, so the page will still render with default content

  // Extract data from Strapi response
  const homeData = strapiData?.home;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Strapi data */}
      <HeroSection 
        title={homeData?.Hero?.title}
        subtitle={homeData?.Hero?.subtitle}
        description={homeData?.Hero?.description}
        primaryButton={homeData?.Hero?.primaryButton}
        secondaryButton={homeData?.Hero?.secondaryButton}
        backgroundImage={homeData?.Hero?.backgroundImage}
        personImage={homeData?.Hero?.personImage}
      />
      
      {/* About Section with Strapi data */}
      <AnimatedSection animation="fadeInUp" delay={100}>
        <AboutSection 
          title={homeData?.About?.title}
          heading={homeData?.About?.heading}
          description={homeData?.About?.description}
          mainImage={homeData?.About?.mainImage}
          secondaryImage={homeData?.About?.secondaryImage}
          statNumber={homeData?.About?.statNumber}
          statLabel={homeData?.About?.statLabel}
          features={homeData?.About?.features}
          ctaButton={homeData?.About?.ctaButton}
        />
      </AnimatedSection>
      
      {/* Services Section with Strapi data */}
      <AnimatedSection animation="fadeInUp" delay={200}>
        <ServicesSection 
          title={homeData?.Services?.title}
          description={homeData?.Services?.description}
          services={homeData?.Services?.services}
          ctaButton={homeData?.Services?.ctaButton}
        />
      </AnimatedSection>
      
      {/* How It Works Section with Strapi data */}
      <AnimatedSection animation="fadeInLeft" delay={100}>
        <HowItWorksSection 
          title={homeData?.HowItWorks?.title}
          description={homeData?.HowItWorks?.description}
          bannerText={homeData?.HowItWorks?.bannerText}
          personImage={homeData?.HowItWorks?.personImage}
          steps={homeData?.HowItWorks?.steps}
        />
      </AnimatedSection>
      
      {/* Statistics Section with Strapi data */}
      <AnimatedSection animation="scaleIn" delay={150}>
        <StatisticsSection 
          title={homeData?.Statistics?.title}
          backgroundImage={homeData?.Statistics?.backgroundImage}
          stats={homeData?.Statistics?.stats}
        />
      </AnimatedSection>
      
      {/* Services Carousel Section with Strapi data */}
      <AnimatedSection animation="fadeInUp" delay={200}>
        <ServicesCarouselSection 
          title={homeData?.ServicesCarousel?.title}
          description={homeData?.ServicesCarousel?.description}
          services={homeData?.ServicesCarousel?.services}
        />
      </AnimatedSection>
      
      {/* Reviews Section - keeping default for now */}
      <AnimatedSection animation="fadeInRight" delay={100}>
        <ReviewsSection />
      </AnimatedSection>
      
      {/* Blog Section with Strapi data */}
      <AnimatedSection animation="fadeInUp" delay={200}>
        <BlogSection />
      </AnimatedSection>
      
      {/* FAQ Section with Strapi data */}
      <AnimatedSection animation="slideInUp" delay={150}>
        <FAQSection 
          title={homeData?.Faq?.string}
          faqs={homeData?.Faq?.faqs}
        />
      </AnimatedSection>

      {/* Consultation Section */}
      <AnimatedSection animation="fadeInUp" delay={200}>
        <ConsultationSection />
      </AnimatedSection>
      
      {/* CTA Section with Strapi data */}
      <AnimatedSection animation="scaleIn" delay={100}>
        <CTASection 
          title={homeData?.CTA?.title}
          buttonText={homeData?.CTA?.buttonText}
          backgroundImage={homeData?.CTA?.backgroundImage}
        />
      </AnimatedSection>
      
      {/* Partners Section with Strapi data */}
      <AnimatedSection animation="fadeIn" delay={150}>
        <PartnersSection 
          partners={homeData?.PartnersLogos?.partners}
        />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}
