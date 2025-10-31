'use client';

import { 
  Header, 
  Footer,
  CTASection,
  ConsultationSection,
  FAQSection,
  PartnersSection
} from '@/components';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useLanguage } from "@/contexts/LanguageContext";
import { useOffersPage } from '@/hooks/graphql';
import Link from 'next/link';
import { offers, offersPageContent } from '@/mockData/pages';

export default function OffersPage() {
  const { language } = useLanguage();
  const { data: offersPageData } = useOffersPage();
  const content = offersPageContent;

  // Helper function to get string value from Strapi i18n field
  const getLocalizedValue = (value: any): string => {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object' && value !== null) {
      return value[language] || value.ar || value.en || '';
    }
    return String(value);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Custom Hero Section */}
      <AnimatedSection animation="fadeIn" delay={0}>
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
                  {getLocalizedValue(offersPageData?.Hero?.title) || content.hero.title[language]}
                </h1>
                
                <p 
                  className="text-lg md:text-xl mb-8 leading-relaxed opacity-90"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {getLocalizedValue(offersPageData?.Hero?.subtitle) || content.hero.description[language]}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {offersPageData?.Hero?.primaryButton && (
                    <Link 
                      href={offersPageData.Hero.primaryButton.href || "/contact"}
                      className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {getLocalizedValue(offersPageData.Hero.primaryButton.label) || content.hero.buttons.primary[language]}
                    </Link>
                  )}
                  {offersPageData?.Hero?.secondaryButton && (
                    <Link 
                      href={offersPageData.Hero.secondaryButton.href || "/packages"}
                      className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transition-colors"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {getLocalizedValue(offersPageData.Hero.secondaryButton.label) || content.hero.buttons.secondary[language]}
                    </Link>
                  )}
                </div>
              </div>
              
              {/* Right Side - Visual Elements */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Offers Stats Cards */}
                  {offersPageData?.Hero?.stats?.map((stat: any, index: number) => (
                    <div key={stat.id || index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                        <div 
                          className="text-sm text-white/80"
                          style={{ fontFamily: 'var(--font-almarai)' }}
                        >
                          {getLocalizedValue(stat.label)}
                        </div>
                      </div>
                    </div>
                  )) || (
                    <>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">50%</div>
                          <div 
                            className="text-sm text-white/80"
                            style={{ fontFamily: 'var(--font-almarai)' }}
                          >
                            {content.hero.stats.maxDiscount[language]}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">3</div>
                          <div 
                            className="text-sm text-white/80"
                            style={{ fontFamily: 'var(--font-almarai)' }}
                          >
                            {content.hero.stats.exclusiveOffers[language]}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">30</div>
                          <div 
                            className="text-sm text-white/80"
                            style={{ fontFamily: 'var(--font-almarai)' }}
                          >
                            {content.hero.stats.daysLeft[language]}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">100%</div>
                          <div 
                            className="text-sm text-white/80"
                            style={{ fontFamily: 'var(--font-almarai)' }}
                          >
                            {content.hero.stats.qualityGuarantee[language]}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AnimatedSection>

      {/* Offers Section */}
      <AnimatedSection animation="fadeInUp" delay={100}>
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {content.offers.sectionTitle[language]}
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {content.offers.sectionDescription[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(offersPageData?.Available_Offers && offersPageData.Available_Offers.length > 0 
              ? offersPageData.Available_Offers 
              : offers).map((offer: any, index: number) => (
              <div 
                key={offer.id || index} 
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow mx-auto w-full"
                style={{
                  height: '592px',
                  maxWidth: '569px'
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${offer.image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${offer.image.url}` : offer.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  
                  {/* Bottom Section */}
                  <div 
                    className="bg-white p-4 absolute bottom-0 left-0 right-0"
                    style={{ 
                      height: '128px',
                      width: '569px',
                      borderBottomRightRadius: '20px',
                      borderBottomLeftRadius: '20px',
                      borderWidth: '1px',
                      borderColor: '#e5e7eb',
                      opacity: 1
                    }}
                  >
                    <h4 
                      className="text-base font-bold text-gray-800 mb-2 leading-tight"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {getLocalizedValue(offer.title)}
                    </h4>
                    <p 
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {getLocalizedValue(offer.subtitle) || (offer.offerText && typeof offer.offerText === 'object' ? offer.offerText[language] : offer.offerText)}
                    </p>
                    
                    {/* Warranty Badge for Luxury Type */}
                    {offer.type === 'luxury' && offer.warranty && (
                      <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold mt-2">
                        {offer.warranty[language]}
                      </div>
                    )}
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Consultation Section */}
      <AnimatedSection animation="fadeInUp" delay={200}>
        <ConsultationSection />
      </AnimatedSection>
      
      {/* FAQ Section */}
      <AnimatedSection animation="slideInUp" delay={150}>
        <FAQSection 
          title={getLocalizedValue(offersPageData?.Faq?.string)}
          faqs={offersPageData?.Faq?.faqs}
        />
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection animation="scaleIn" delay={100}>
        <CTASection 
          title={getLocalizedValue(offersPageData?.cta?.title)}
          buttonText={getLocalizedValue(offersPageData?.cta?.buttonText)}
          buttonLink={typeof offersPageData?.cta?.buttonLink === 'string' ? offersPageData.cta.buttonLink : getLocalizedValue(offersPageData?.cta?.buttonLink)}
          backgroundImage={offersPageData?.cta?.backgroundImage}
        />
      </AnimatedSection>
      
      {/* Partners Section */}
      <AnimatedSection animation="fadeIn" delay={150}>
        <PartnersSection 
          partners={offersPageData?.partners?.partners}
        />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}
