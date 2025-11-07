'use client';

import { 
  Header, 
  Footer,
  CTASection,
  FAQSection,
  PartnersSection,
  ConsultationSection
} from '@/components';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLegalServiceCategories } from '@/hooks/graphql/useGraphQL';
import { useState, useMemo } from 'react';
import LegalServicesClient from '@/components/legalservices/LegalServicesClient';

interface LegalCompany {
  id: string;
  name: string;
  description: string;
  logo: string;
  servicesCount: number;
  isHighlighted: boolean;
}

export default function LegalServicesPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Fetch legal service categories from Strapi
  const { data: legalData } = useLegalServiceCategories();

  // Transform GraphQL categories to companies format and apply search filter
  const companies = useMemo(() => {
    let companiesList: LegalCompany[] = [];
    
    if (legalData && legalData.length > 0) {
      // Use Strapi data
      companiesList = legalData.map((category: any) => ({
        id: category.slug || category.documentId,
        name: category.name || '',
        description: category.description || '',
        logo: category.icon?.url || '/images/logos/logo.png',
        servicesCount: 0, // TODO: Count from subservices relation
        isHighlighted: false
      }));
    } else {
      // Fallback to mock data
      console.log('Using mock data fallback for legal services categories');
      companiesList = [
      {
        id: 'ministry-industry',
        name: language === 'ar' ? 'وزارة الصناعة والثروة المعدنية' : 'Ministry of Industry',
        description: language === 'ar' 
          ? 'خدمات تأسيس الشركات والتراخيص الصناعية'
          : 'Company formation and industrial licensing services',
        logo: '/images/logos/logo.png',
        servicesCount: 11,
        isHighlighted: true
      },
      {
        id: 'ministry-hr',
        name: language === 'ar' ? 'وزارة الموارد البشرية' : 'Ministry of Human Resources',
        description: language === 'ar'
          ? 'خدمات الموارد البشرية والتوظيف'
          : 'Human resources and employment services',
        logo: '/images/logos/logo.png',
        servicesCount: 8,
        isHighlighted: false
      },
      {
        id: 'ministry-interior',
        name: language === 'ar' ? 'وزارة الداخلية' : 'Ministry of Interior',
        description: language === 'ar'
          ? 'خدمات التأشيرات والإقامات'
          : 'Visa and residency services',
        logo: '/images/logos/logo.png',
        servicesCount: 6,
        isHighlighted: false
      },
      {
        id: 'ministry-health',
        name: language === 'ar' ? 'وزارة الصحة' : 'Ministry of Health',
        description: language === 'ar'
          ? 'التراخيص الصحية والشهادات الطبية'
          : 'Health licenses and medical certificates',
        logo: '/images/logos/logo.png',
        servicesCount: 5,
        isHighlighted: false
      },
      {
        id: 'ministry-education',
        name: language === 'ar' ? 'وزارة التعليم' : 'Ministry of Education',
        description: language === 'ar'
          ? 'التراخيص التعليمية ومعادلة الشهادات'
          : 'Educational licenses and certificate equivalency',
        logo: '/images/logos/logo.png',
        servicesCount: 4,
        isHighlighted: false
      }
    ];
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      const searchTerms = searchLower.split(' ').filter(term => term.length > 0);
      
      companiesList = companiesList.filter((company) =>
        searchTerms.every(term =>
          company.name.toLowerCase().includes(term) ||
          company.description.toLowerCase().includes(term)
        )
      );
    }

    return companiesList;
  }, [legalData, searchTerm, language]);

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
              pointerEvents: 'none',
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
                pointerEvents: 'none',
              }}
            />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ pointerEvents: "auto" }}>
              <div className="text-center text-white">
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'الخدمات القانونية' : 'Legal Services'}
                </h1>
                
                <p 
                  className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-4xl mx-auto"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' 
                    ? 'خدمات قانونية شاملة لتأسيس وتراخيص جميع أنواع الشركات في المملكة العربية السعودية'
                    : 'Comprehensive legal services for establishing and licensing all types of companies in Saudi Arabia'
                  }
                </p>

                {/* Enhanced Search Bar */}
                <div className="max-w-2xl mx-auto mb-8" style={{ pointerEvents: "auto" }}>
                  <div className="relative">
                    <div className={`absolute inset-y-0 flex items-center pointer-events-none ${language === 'ar' ? 'right-0 pr-4' : 'left-0 pl-4'}`}>
                      <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder={language === 'ar' ? 'ابحث عن الجهة أو الخدمة...' : 'Search for entity or service...'}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                      className={`w-full py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 ${language === 'ar' ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'} ${isSearchFocused ? 'bg-white/20 border-white/40' : ''}`}
                      style={{ fontFamily: 'var(--font-almarai)', pointerEvents: "auto", touchAction: "manipulation" }}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className={`absolute inset-y-0 flex items-center text-white/70 hover:text-white transition-colors ${language === 'ar' ? 'left-0 pl-4' : 'right-0 pr-4'}`}
                        style={{ pointerEvents: "auto" }}
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
                          ? `تم العثور على ${companies.length} جهة` 
                          : `Found ${companies.length} entities`
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

      {/* Companies Client Component (with Search & Filtering) */}
      <LegalServicesClient companies={companies} />

      {/* FAQ Section */}
      <AnimatedSection animation="slideInUp" delay={150}>
        <FAQSection />
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
