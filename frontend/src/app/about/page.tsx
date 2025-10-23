'use client';

import { 
  Header, 
  Footer,
  AboutSection,
  CTASection,
  ConsultationSection,
  FAQSection,
  PartnersSection,
  ErrorBoundary
} from '@/components';
import { SuccessFoundationSection, LeadershipSection, WhyChooseSection } from '@/components/about';
import { useLanguage } from "@/contexts/LanguageContext";
import Link from 'next/link';
import { aboutPageContent } from '@/mockData/pages';

export default function AboutPage() {
  const { language } = useLanguage();
  const content = aboutPageContent;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header />
      
      {/* Custom Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[400px]"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Content */}
              <div className="text-white">
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {content.hero.title[language]}
                </h1>
                
                <p 
                  className="text-lg md:text-xl mb-8 leading-relaxed opacity-90"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {content.hero.description[language]}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/services"
                    className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {content.hero.buttons.primary[language]}
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {content.hero.buttons.secondary[language]}
                  </Link>
                </div>
              </div>
              {/* Right Side - Visual Elements */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Data Visualization Cards */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">500+</div>
                      <div 
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {content.hero.stats.companiesFounded[language]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">15+</div>
                      <div 
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {content.hero.stats.yearsExperience[language]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">98%</div>
                      <div 
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {content.hero.stats.satisfactionRate[language]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">24/7</div>
                      <div 
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {content.hero.stats.technicalSupport[language]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />
      
      {/* Success Foundation Section */}
      <SuccessFoundationSection />
      
      {/* Leadership Section */}
      <LeadershipSection />
      
      {/* Why Choose Section */}
      <WhyChooseSection />
      
      {/* Statistics Section */}
     
      
      {/* Consultation Section */}
      <ConsultationSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Partners Section */}
      <PartnersSection />
      
        <Footer />
      </div>
    </ErrorBoundary>
  );
}