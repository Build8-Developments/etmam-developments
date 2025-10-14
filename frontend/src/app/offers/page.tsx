'use client';

import { 
  Header, 
  Footer,
  CTASection
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import Image from 'next/image';

export default function OffersPage() {
  const { language } = useLanguage();

  const offers = [
    {
      title: { ar: 'عرض تأسيس الشركات', en: 'Company Formation Offer' },
      description: { ar: 'تأسيس شركتك بأفضل الأسعار مع خدمات شاملة', en: 'Establish your company with the best prices and comprehensive services' },
      originalPrice: { ar: '2000 ريال', en: '2000 SAR' },
      offerPrice: { ar: '1500 ريال', en: '1500 SAR' },
      discount: '25%',
      features: [
        { ar: 'تأسيس الشركة', en: 'Company Formation' },
        { ar: 'استخراج السجل التجاري', en: 'Commercial Registration' },
        { ar: 'استخراج الرخص المطلوبة', en: 'Required Licenses' },
        { ar: 'دعم فني لمدة شهر', en: 'Technical Support for 1 Month' },
        { ar: 'استشارة قانونية مجانية', en: 'Free Legal Consultation' }
      ],
      image: '/images/icons/icon-4.png',
      popular: true
    },
    {
      title: { ar: 'عرض الخدمات القانونية', en: 'Legal Services Offer' },
      description: { ar: 'حزمة خدمات قانونية شاملة بخصم خاص', en: 'Comprehensive legal services package with special discount' },
      originalPrice: { ar: '3000 ريال', en: '3000 SAR' },
      offerPrice: { ar: '2200 ريال', en: '2200 SAR' },
      discount: '27%',
      features: [
        { ar: 'استشارات قانونية', en: 'Legal Consultations' },
        { ar: 'إعداد العقود', en: 'Contract Preparation' },
        { ar: 'المتابعة القانونية', en: 'Legal Follow-up' },
        { ar: 'دعم لمدة 3 أشهر', en: '3 Months Support' },
        { ar: 'خدمات إضافية مجانية', en: 'Additional Free Services' }
      ],
      image: '/images/icons/icon-11.png',
      popular: false
    },
    {
      title: { ar: 'عرض الاستشارات الإدارية', en: 'Administrative Consulting Offer' },
      description: { ar: 'استشارات إدارية متخصصة مع خصومات حصرية', en: 'Specialized administrative consulting with exclusive discounts' },
      originalPrice: { ar: '1500 ريال', en: '1500 SAR' },
      offerPrice: { ar: '1000 ريال', en: '1000 SAR' },
      discount: '33%',
      features: [
        { ar: 'استشارات إدارية', en: 'Administrative Consultations' },
        { ar: 'تطوير العمليات', en: 'Process Development' },
        { ar: 'إدارة الموارد البشرية', en: 'Human Resources Management' },
        { ar: 'تدريب الموظفين', en: 'Employee Training' },
        { ar: 'متابعة دورية', en: 'Regular Follow-up' }
      ],
      image: '/images/icons/network.png',
      popular: false
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
      <section className="py-16 lg:py-24">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  offer.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
                }`}
              >
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span 
                      className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <span 
                    className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    -{offer.discount}
                  </span>
                </div>

                {/* Offer Image */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Image
                      src={offer.image}
                      alt={offer.title[language]}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {offer.title[language]}
                  </h3>
                  <p 
                    className="text-gray-600 text-sm"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {offer.description[language]}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span 
                      className="text-2xl font-bold text-green-600"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {offer.offerPrice[language]}
                    </span>
                    <span 
                      className="text-lg text-gray-400 line-through"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {offer.originalPrice[language]}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span 
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {feature[language]}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    offer.popular 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'استفد من العرض' : 'Get This Offer'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}
