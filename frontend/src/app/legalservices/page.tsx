'use client';

import { 
  Header, 
  Footer,
  CTASection,
  FAQSection,
  PartnersSection
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LegalServicesPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const companies = [
    {
      id: 'ministry-industry',
      name: language === 'ar' ? 'وزارة الصناعة والثروة المعدنية' : 'Ministry of Industry and Mineral Resources',
      description: language === 'ar' 
        ? 'استكشف 11 خدمة تقدمها وزارة الصناعة والثروة المعدنية، نحن نقدم دعمًا شاملاً لجميع احتياجاتك'
        : 'Explore 11 services offered by the Ministry of Industry and Mineral Resources, we provide comprehensive support for all your needs',
      logo: '/images/logos/logo.png',
      servicesCount: 11,
      isHighlighted: true
    },
    {
      id: 'ministry-commerce',
      name: language === 'ar' ? 'وزارة التجارة' : 'Ministry of Commerce',
      description: language === 'ar'
        ? 'استكشف 10 خدمات تقدمها وزارة التجارة، نحن نقدم دعمًا شاملاً لجميع احتياجاتك التجارية'
        : 'Explore 10 services offered by the Ministry of Commerce, we provide comprehensive support for all your commercial needs',
      logo: '/images/logos/logo.png',
      servicesCount: 10,
      isHighlighted: false
    },
    {
      id: 'ministry-finance',
      name: language === 'ar' ? 'وزارة المالية' : 'Ministry of Finance',
      description: language === 'ar'
        ? 'استكشف 8 خدمات تقدمها وزارة المالية، نحن نقدم دعمًا شاملاً لجميع احتياجاتك المالية'
        : 'Explore 8 services offered by the Ministry of Finance, we provide comprehensive support for all your financial needs',
      logo: '/images/logos/logo.png',
      servicesCount: 8,
      isHighlighted: false
    },
    {
      id: 'ministry-labor',
      name: language === 'ar' ? 'وزارة الموارد البشرية والتنمية الاجتماعية' : 'Ministry of Human Resources and Social Development',
      description: language === 'ar'
        ? 'استكشف 12 خدمة تقدمها وزارة الموارد البشرية، نحن نقدم دعمًا شاملاً لجميع احتياجاتك الإدارية'
        : 'Explore 12 services offered by the Ministry of Human Resources, we provide comprehensive support for all your administrative needs',
      logo: '/images/logos/logo.png',
      servicesCount: 12,
      isHighlighted: false
    },
    {
      id: 'ministry-health',
      name: language === 'ar' ? 'وزارة الصحة' : 'Ministry of Health',
      description: language === 'ar'
        ? 'استكشف 9 خدمات تقدمها وزارة الصحة، نحن نقدم دعمًا شاملاً لجميع احتياجاتك الصحية'
        : 'Explore 9 services offered by the Ministry of Health, we provide comprehensive support for all your health needs',
      logo: '/images/logos/logo.png',
      servicesCount: 9,
      isHighlighted: false
    },
    {
      id: 'ministry-education',
      name: language === 'ar' ? 'وزارة التعليم' : 'Ministry of Education',
      description: language === 'ar'
        ? 'استكشف 7 خدمات تقدمها وزارة التعليم، نحن نقدم دعمًا شاملاً لجميع احتياجاتك التعليمية'
        : 'Explore 7 services offered by the Ministry of Education, we provide comprehensive support for all your educational needs',
      logo: '/images/logos/logo.png',
      servicesCount: 7,
      isHighlighted: false
    }
  ];

  // Filter companies based on search term
  const filteredCompanies = companies.filter(company => {
    const searchLower = searchTerm.toLowerCase();
    return company.name.toLowerCase().includes(searchLower) || 
           company.description.toLowerCase().includes(searchLower);
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
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
                {language === 'ar' ? 'الخدمات القانونية المتخصصة' : 'Specialized Legal Services'}
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-4xl mx-auto"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' 
                  ? 'في إتمام، نوفر لك مجموعة شاملة من الخدمات القانونية، مصممة لتبسيط رحلتك وتحقيق أهدافك بكفاءة'
                  : 'At Etmam, we provide you with a comprehensive set of legal services, designed to simplify your journey and achieve your goals efficiently'
                }
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <div className={`absolute inset-y-0 flex items-center pointer-events-none ${language === 'ar' ? 'right-0 pr-4' : 'left-0 pl-4'}`}>
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder={language === 'ar' ? 'ابحث عن الخدمات القانونية...' : 'Search for legal services...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 ${language === 'ar' ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{
              maxWidth: '1147px',
              margin: '0 auto'
            }}
          >
        {filteredCompanies.map((company) => (
          <Link
            key={company.id}
            href={`/legalservices/${company.id}`}
            className="group block"
          >
            <div
              className="rounded-[15px] border bg-white text-gray-800 hover:bg-green-600 hover:text-white overflow-hidden flex flex-col items-center justify-center text-center"
              style={{
                width: '365px',
                height: '338px',
                borderWidth: '1px',
                borderColor: 'rgba(0, 0, 0, 0.09)',
                boxShadow: '0px 2px 1px 0px rgba(0, 0, 0, 0.25)',
                opacity: 1,
                margin: '0 auto',
                padding: '24px'
              }}
            >
              {/* Company Image */}
              <div className="mb-6">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 group-hover:bg-white/20">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="mb-4">
                <h3
                  className="text-lg font-bold leading-tight text-gray-800 group-hover:text-white"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {company.name}
                </h3>
              </div>

              {/* Company Description */}
              <div className="mb-6 flex-1 flex items-center">
                <p
                  className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {company.description}
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <div
                  className="inline-flex items-center justify-center rounded-[10px] px-6 py-3 gap-2 bg-green-600 text-white group-hover:bg-white group-hover:text-green-600"
                  style={{
                    width: '158px',
                    height: '46px',
                    padding: '10px',
                    gap: '10px'
                  }}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  </span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
          </div>
          
          {/* No Results */}
          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg" style={{ fontFamily: 'var(--font-almarai)' }}>
                {language === 'ar' ? 'لم يتم العثور على خدمات مطابقة' : 'No matching services found'}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      <Footer />
    </div>
  );
}
