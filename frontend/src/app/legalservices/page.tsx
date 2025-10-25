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
import { legalServicesPageContent, legalCompanies } from '@/mockData/pages';

export default function LegalServicesPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const content = legalServicesPageContent;

  // Enhanced search with multiple criteria
  const filteredCompanies = legalCompanies.filter(company => {
    if (!searchTerm.trim()) return true;
    
    const searchLower = searchTerm.toLowerCase();
    const searchTerms = searchLower.split(' ').filter(term => term.length > 0);
    
    return searchTerms.every(term => 
      company.name[language].toLowerCase().includes(term) || 
      company.description[language].toLowerCase().includes(term)
    );
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
                {content.hero.title[language]}
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-4xl mx-auto"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {content.hero.description[language]}
              </p>
              
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
                    placeholder={content.hero.searchPlaceholder[language]}
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
                        ? `تم العثور على ${filteredCompanies.length} نتيجة` 
                        : `Found ${filteredCompanies.length} results`
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCompanies.length > 0 ? (
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
                    alt={company.name[language]}
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
                  {company.name[language]}
                </h3>
              </div>

              {/* Company Description */}
              <div className="mb-6 flex-1 flex items-center">
                <p
                  className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {company.description[language]}
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
                    {content.companies.viewDetailsButton[language]}
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
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg" style={{ fontFamily: 'var(--font-almarai)' }}>
                {content.companies.noResultsMessage[language]}
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
