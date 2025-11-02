'use client';

import { 
  Header, 
  Footer,
  CTASection,
  ServicesGrid,
  PartnersSection,
  ConsultationSection
} from '@/components';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useMemo } from 'react';
import { useConsultingServices } from '@/hooks/graphql/useGraphQL';
import { consultingServices as mockConsultingServices } from '@/mockData/services';

export default function ConsultingServicesPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { data: consultingServices } = useConsultingServices();

  // Transform GraphQL data to Service type and filter by search
  // Falls back to mock data if GraphQL data is not available
  const transformedServices = useMemo(() => {
    // Use GraphQL data if available, otherwise fall back to mock data
    const servicesToUse = (consultingServices && consultingServices.length > 0) 
      ? consultingServices 
      : mockConsultingServices;

    // If using mock data, transform it differently
    if (servicesToUse === mockConsultingServices) {
      let services = mockConsultingServices.map((service) => ({
        id: service.id,
        title: service.title[language],
        description: service.description[language],
        price: service.price[language],
        duration: service.duration[language],
        icon: service.icon
      }));

      // Apply search filter for mock data
      if (searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase();
        const searchTerms = searchLower.split(' ').filter(term => term.length > 0);
        
        services = services.filter((service: any) =>
          searchTerms.every(term =>
            service.title.toLowerCase().includes(term) ||
            service.description.toLowerCase().includes(term) ||
            service.price.toLowerCase().includes(term) ||
            service.duration.toLowerCase().includes(term)
          )
        );
      }

      return services;
    }

    // Transform GraphQL data to expected format
    let services = consultingServices.map((service: any) => {
      const periodText = language === 'ar' 
        ? `من ${service.finishPeriodMin} إلى ${service.finishPeriodMax} أيام عمل`
        : `${service.finishPeriodMin} to ${service.finishPeriodMax} business days`;
      
      const priceText = language === 'ar'
        ? `يبدأ من ${service.startFromPrice} ${service.currency}`
        : `Starting from ${service.startFromPrice} ${service.currency}`;

      return {
        id: service.slug || service.documentId || '',
        title: service.name || '',
        description: service.shortDescription || '',
        price: priceText,
        duration: periodText,
        icon: service.icon?.name || 'consulting'
      };
    });

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      const searchTerms = searchLower.split(' ').filter(term => term.length > 0);
      
      services = services.filter((service: any) =>
        searchTerms.every(term =>
          service.title.toLowerCase().includes(term) ||
          service.description.toLowerCase().includes(term) ||
          service.price.toLowerCase().includes(term) ||
          service.duration.toLowerCase().includes(term)
        )
      );
    }

    return services;
  }, [consultingServices, searchTerm, language]);

  // Note: We use mock data as fallback, so we don't show loading/error states
  // GraphQL queries are integrated but mock data is used until Strapi content is ready

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <AnimatedSection animation="fadeIn" delay={0}>
        <div className="relative overflow-hidden">
        <div 
          className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[500px]"
          style={{
            background: 'linear-gradient(86.9deg, rgba(27, 128, 54, 0.47) -14.86%, rgba(2, 6, 3, 0.47) 94%)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/bgabout.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center text-white">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' ? 'الاستشارات المتخصصة' : 'Specialized Consulting'}
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-4xl mx-auto"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' 
                  ? 'استشارات متخصصة في مختلف المجالات التجارية والإدارية لمساعدتك في اتخاذ القرارات الصحيحة وتحقيق أهدافك'
                  : 'Specialized consulting in various business and administrative fields to help you make the right decisions and achieve your goals'
                }
              </p>

              {/* Search Bar */}
              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <div className={`absolute inset-y-0 flex items-center pointer-events-none ${language === 'ar' ? 'right-0 pr-4' : 'left-0 pl-4'}`}>
                    <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder={language === 'ar' ? 'ابحث عن الخدمة التي تحتاجها...' : 'Search for the service you need...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className={`w-full py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 ${language === 'ar' ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'} ${isSearchFocused ? 'bg-white/20 border-white/40' : ''}`}
                    style={{ fontFamily: 'var(--font-almarai)' }}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className={`absolute inset-y-0 flex items-center text-white/70 hover:text-white transition-colors ${language === 'ar' ? 'left-0 pl-4' : 'right-0 pr-4'}`}
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Search Results Info */}
                {searchTerm && (
                  <div className="mt-4 text-center">
                    <p className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-almarai)' }}>
                      {language === 'ar' 
                        ? `تم العثور على ${transformedServices.length} خدمة` 
                        : `Found ${transformedServices.length} services`
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection animation="fadeInUp" delay={100}>
        <ServicesGrid
        services={transformedServices}
        baseHref="/consulting"
        title={language === 'ar' ? 'خدماتنا الاستشارية' : 'Our Consulting Services'}
        description={language === 'ar' 
          ? 'اختر الخدمة الاستشارية المناسبة واحصل على الدعم المتخصص الذي تحتاجه'
          : 'Choose the appropriate consulting service and get the specialized support you need'
        }
      />
      </AnimatedSection>

      {/* Consultation Section */}
      <AnimatedSection animation="fadeInUp" delay={200}>
        <ConsultationSection />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="scaleIn" delay={100}>
        <CTASection />
      </AnimatedSection>
      
      {/* Partners Section */}
      <AnimatedSection animation="fadeIn" delay={150}>
        <PartnersSection />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}
