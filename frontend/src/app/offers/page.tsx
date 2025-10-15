'use client';

import { 
  Header, 
  Footer,
  CTASection,
  ConsultationSection,
  FAQSection,
  PartnersSection
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import Image from 'next/image';

export default function OffersPage() {
  const { language } = useLanguage();

  const offers = [
    {
      id: 1,
      title: { ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة', en: 'Establish a Human Resources Management Company with full currency' },
      subtitle: { ar: 'يوم بدينا', en: 'The day we started' },
      description: { ar: 'نفتخر بجذورنا', en: 'We are proud of our roots' },
      offerText: { ar: 'الحد الأدنى ساري حتى 30 سبتمبر', en: 'Minimum valid until September 30' },
      backgroundImage: '/offer1.jpg',
      type: 'heritage',
      number: '93'
    },
    {
      id: 2,
      title: { ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة', en: 'Establish a Human Resources Management Company with full currency' },
      subtitle: { ar: 'صناعة فاخرة', en: 'Luxury Industry' },
      description: { ar: 'بألوان تليق كل بكل مناسباتك!', en: 'With colors suitable for all your occasions!' },
      offerText: { ar: 'الحد الأدنى ساري حتى 30 سبتمبر', en: 'Minimum valid until September 30' },
      backgroundImage: '/offer2.jpg',
      type: 'luxury',
      warranty: { ar: 'ضمان سنتين', en: 'Two-year warranty' },
      number: '269'
    },
    {
      id: 3,
      title: { ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة', en: 'Establish a Human Resources Management Company with full currency' },
      subtitle: { ar: 'يوم بدينا', en: 'The day we started' },
      description: { ar: 'نفتخر بجذورنا', en: 'We are proud of our roots' },
      offerText: { ar: 'الحد الأدنى ساري حتى 30 سبتمبر', en: 'Minimum valid until September 30' },
      backgroundImage: '/offer.jpg',
      type: 'heritage',
      number: '93'
    },
    {
      id: 4,
      title: { ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة', en: 'Establish a Human Resources Management Company with full currency' },
      subtitle: { ar: 'صناعة فاخرة', en: 'Luxury Industry' },
      description: { ar: 'بألوان تليق كل بكل مناسباتك!', en: 'With colors suitable for all your occasions!' },
      offerText: { ar: 'الحد الأدنى ساري حتى 30 سبتمبر', en: 'Minimum valid until September 30' },
      backgroundImage: '/offer1.jpg',
      type: 'luxury',
      warranty: { ar: 'ضمان سنتين', en: 'Two-year warranty' },
      number: '269'
    },
    {
      id: 5,
      title: { ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة', en: 'Establish a Human Resources Management Company with full currency' },
      subtitle: { ar: 'يوم بدينا', en: 'The day we started' },
      description: { ar: 'نفتخر بجذورنا', en: 'We are proud of our roots' },
      offerText: { ar: 'الحد الأدنى ساري حتى 30 سبتمبر', en: 'Minimum valid until September 30' },
      backgroundImage: '/offer2.jpg',
      type: 'heritage',
      number: '93'
    },
    {
      id: 6,
      title: { ar: 'تأسيس شركة إدارة موارد بشرية بعملة كاملة', en: 'Establish a Human Resources Management Company with full currency' },
      subtitle: { ar: 'صناعة فاخرة', en: 'Luxury Industry' },
      description: { ar: 'بألوان تليق كل بكل مناسباتك!', en: 'With colors suitable for all your occasions!' },
      offerText: { ar: 'الحد الأدنى ساري حتى 30 سبتمبر', en: 'Minimum valid until September 30' },
      backgroundImage: '/offer.jpg',
      type: 'luxury',
      warranty: { ar: 'ضمان سنتين', en: 'Two-year warranty' },
      number: '269'
    }
  ];

  return (
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
                  {language === 'ar' ? 'العروض الحصرية' : 'Exclusive Offers'}
                </h1>
                
                <p 
                  className="text-lg md:text-xl mb-8 leading-relaxed opacity-90"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' 
                    ? 'استفد من عروضنا الحصرية وخصوماتنا المميزة على جميع خدماتنا التجارية والإدارية.'
                    : 'Take advantage of our exclusive offers and special discounts on all our commercial and administrative services.'
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'استفد من العرض' : 'Get the Offer'}
                  </button>
                  <button 
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'عرض جميع العروض' : 'View All Offers'}
                  </button>
                </div>
              </div>
              
              {/* Right Side - Visual Elements */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Offers Stats Cards */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">50%</div>
                      <div 
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {language === 'ar' ? 'أقصى خصم' : 'Maximum Discount'}
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
                        {language === 'ar' ? 'عروض حصرية' : 'Exclusive Offers'}
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
                        {language === 'ar' ? 'يوم متبقي' : 'Days Left'}
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
                        {language === 'ar' ? 'ضمان الجودة' : 'Quality Guarantee'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' ? 'العروض المتاحة الآن' : 'Available Offers Now'}
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' 
                ? 'اختر العرض المناسب لك واستفد من أفضل الأسعار والخدمات'
                : 'Choose the offer that suits you and benefit from the best prices and services'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <div 
                key={offer.id} 
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
                    backgroundImage: `url(${offer.backgroundImage})`,
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
                      {offer.title[language]}
                    </h4>
                    <p 
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {offer.offerText[language]}
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
  );
}
