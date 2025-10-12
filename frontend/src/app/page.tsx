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
  BlogSection
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
// Uncomment when you want to fetch from Strapi
// import { useEffect, useState } from "react";
// import createApolloClient from "@/lib/apollo-client";
// import { GET_HEADER_QUERY, GET_HERO_QUERY } from "@/lib/queries";

export default function Home() {
  const { language } = useLanguage();

  // Uncomment to fetch data from Strapi
  // const [headerData, setHeaderData] = useState(null);
  // const [heroData, setHeroData] = useState(null);
  // const [aboutData, setAboutData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const client = createApolloClient();
  //     
  //     try {
  //       const { data: headerResponse } = await client.query({
  //         query: GET_HEADER_QUERY,
  //         variables: { locale: language },
  //       });
  //       
  //       const { data: heroResponse } = await client.query({
  //         query: GET_HERO_QUERY,
  //         variables: { locale: language },
  //       });
  //       
  //       setHeaderData(headerResponse.header?.data?.attributes);
  //       setHeroData(heroResponse.hero?.data?.attributes);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   
  //   fetchData();
  // }, [language]);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        // logo={headerData?.logo?.data?.attributes}
        // navigationItems={headerData?.navigationItems}
        // contactButton={headerData?.contactButton}
      />
      <HeroSection 
        // title={heroData?.title}
        // subtitle={heroData?.subtitle}
        // description={heroData?.description}
        // primaryButton={heroData?.primaryButton}
        // secondaryButton={heroData?.secondaryButton}
        // backgroundImage={heroData?.backgroundImage?.data?.attributes}
        // personImage={heroData?.personImage?.data?.attributes}
      />
      <AboutSection
        // title={aboutData?.title}
        // subtitle={aboutData?.subtitle}
        // description={aboutData?.description}
        // image={aboutData?.image?.data?.attributes}
        // stats={aboutData?.stats}
        // ctaButton={aboutData?.ctaButton}
      />
      <ServicesSection
        // title={servicesData?.title}
        // description={servicesData?.description}
        // services={servicesData?.services}
        // ctaButton={servicesData?.ctaButton}
      />
      <HowItWorksSection
        // title={howItWorksData?.title}
        // description={howItWorksData?.description}
        // personImage={howItWorksData?.personImage?.data?.attributes}
        // bannerText={howItWorksData?.bannerText}
        // steps={howItWorksData?.steps}
      />
      <StatisticsSection
        // title={statisticsData?.title}
        // stats={statisticsData?.stats}
        // backgroundImage={statisticsData?.backgroundImage?.data?.attributes}
      />
      <ServicesCarouselSection
        // title={carouselData?.title}
        // description={carouselData?.description}
        // services={carouselData?.services}
      />
      <BlogSection />
      <CTASection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
