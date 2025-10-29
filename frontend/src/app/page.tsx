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
import { GET_HOME_PAGE } from '@/lib/graphql/queries/pages/home';
import { fetchWithLocale } from '@/lib/graphql/utils/fetchGraphQL';
import { getLocale } from '@/lib/graphql/utils/locale';

export default async function Home() {
  // Get current locale
  const locale = await getLocale();
  
  // Fetch data from Strapi with fallback to default content
  const { data: strapiData, success, error } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale,
  });

  // Debug logging
  console.log('🔍 Debug Info:');
  console.log('Locale:', locale);
  console.log('Success:', success);
  console.log('Error:', error);
  console.log('Strapi Data:', strapiData);
  console.log('Home Data:', strapiData?.home);
  console.log('API Token:', process.env.STRAPI_API_TOKEN ? 'Present' : 'Missing');
  
  // Try different locales
  const { data: strapiDataEn } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: 'en',
  });
  
  console.log('🔍 English Data:', strapiDataEn?.home);
  
  // Try without locale
  const { data: strapiDataNoLocale } = await fetchWithLocale({
    query: GET_HOME_PAGE,
    locale: '',
  });
  
  // Test direct GraphQL query
  try {
    const directResponse = await fetch('http://localhost:1337/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            home {
              Hero {
                title
                subtitle
                description
              }
            }
          }
        `
      })
    });
    
    const directData = await directResponse.json();
    console.log('🔍 Direct GraphQL Response:', directData);
  } catch (err) {
    console.log('🔍 Direct GraphQL Error:', err);
  }

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
      
      {/* Services Section with Strapi data */}
      <ServicesSection 
        title={homeData?.Services?.title}
        description={homeData?.Services?.description}
        services={homeData?.Services?.services}
        ctaButton={homeData?.Services?.ctaButton}
      />
      
      {/* How It Works Section with Strapi data */}
      <HowItWorksSection 
        title={homeData?.HowItWorks?.title}
        description={homeData?.HowItWorks?.description}
        bannerText={homeData?.HowItWorks?.bannerText}
        personImage={homeData?.HowItWorks?.personImage}
        steps={homeData?.HowItWorks?.steps}
      />
      
      {/* Statistics Section with Strapi data */}
      <StatisticsSection 
        title={homeData?.Statistics?.title}
        backgroundImage={homeData?.Statistics?.backgroundImage}
        stats={homeData?.Statistics?.stats}
      />
      
      {/* Services Carousel Section with Strapi data */}
      <ServicesCarouselSection 
        title={homeData?.ServicesCarousel?.title}
        description={homeData?.ServicesCarousel?.description}
        services={homeData?.ServicesCarousel?.services}
      />
      
      {/* Reviews Section - keeping default for now */}
      <ReviewsSection />
      
      {/* Blog Section - keeping default for now */}
      <BlogSection />
      
      {/* FAQ Section with Strapi data */}
      <FAQSection 
        title={homeData?.Faq?.string}
        faqs={homeData?.Faq?.faqs}
      />
      
      {/* CTA Section with Strapi data */}
      <CTASection 
        title={homeData?.CTA?.title}
        buttonText={homeData?.CTA?.buttonText}
        backgroundImage={homeData?.CTA?.backgroundImage}
      />
      
      {/* Partners Section with Strapi data */}
      <PartnersSection 
        partners={homeData?.PartnersLogos?.partners}
      />
      
      <Footer />
    </div>
  );
}
