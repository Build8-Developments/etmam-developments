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
import { useLanguage } from "@/contexts/LanguageContext";
import Link from 'next/link';

export default function ServicesPage() {
  const { language } = useLanguage();

  const serviceCategories = [
    {
      id: 'legal',
      title: language === 'ar' ? 'الخدمات القانونية' : 'Legal Services',
      description: language === 'ar' 
        ? 'خدمات قانونية متخصصة من تأسيس الشركات إلى استخراج التراخيص والتصاريح الحكومية'
        : 'Specialized legal services from company formation to government licenses and permits extraction',
      icon: 'legal',
      href: '/legalservices',
      servicesCount: 6,
      isHighlighted: true,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'consulting',
      title: language === 'ar' ? 'الخدمات الاستشارية' : 'Consulting Services',
      description: language === 'ar'
        ? 'استشارات متخصصة في مختلف المجالات التجارية والإدارية لمساعدتك في اتخاذ القرارات الصحيحة'
        : 'Specialized consulting in various business and administrative fields to help you make the right decisions',
      icon: 'consulting',
      href: '/consulting',
      servicesCount: 6,
      isHighlighted: false,
      color: 'from-green-500 to-green-600'
    }
  ];

  const features = [
    {
      icon: 'shield',
      title: language === 'ar' ? 'موثوقية عالية' : 'High Reliability',
      description: language === 'ar' ? 'نقدم خدمات موثوقة ومضمونة الجودة' : 'We provide reliable and quality-guaranteed services'
    },
    {
      icon: 'clock',
      title: language === 'ar' ? 'سرعة في التنفيذ' : 'Fast Execution',
      description: language === 'ar' ? 'ننفذ خدماتك في أسرع وقت ممكن' : 'We execute your services as quickly as possible'
    },
    {
      icon: 'support',
      title: language === 'ar' ? 'دعم مستمر' : 'Continuous Support',
      description: language === 'ar' ? 'نوفر دعم فني مستمر طوال فترة الخدمة' : 'We provide continuous technical support throughout the service period'
    },
    {
      icon: 'price',
      title: language === 'ar' ? 'أسعار تنافسية' : 'Competitive Prices',
      description: language === 'ar' ? 'نقدم أفضل الأسعار في السوق' : 'We offer the best prices in the market'
    }
  ];

  const getIconComponent = (iconType: string, size: number = 24) => {
    switch (iconType) {
      case 'legal':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10.5V11.5C15.4 11.5 16 12.4 16 13V16C16 16.6 15.6 17 15 17H9C8.4 17 8 16.6 8 16V13C8 12.4 8.4 11.5 9 11.5V10.5C9 8.6 10.6 7 12 7ZM12 8.5C11.2 8.5 10.5 9.2 10.5 10V11.5H13.5V10C13.5 9.2 12.8 8.5 12 8.5Z" fill="currentColor"/>
          </svg>
        );
      case 'consulting':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
          </svg>
        );
      case 'shield':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="currentColor"/>
          </svg>
        );
      case 'clock':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
          </svg>
        );
      case 'support':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
          </svg>
        );
      case 'price':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM7 6V19H17V6H7ZM9 8H15V10H9V8ZM9 12H15V14H9V12ZM9 16H15V18H9V16Z" fill="currentColor"/>
          </svg>
        );
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        );
    }
  };

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
                {language === 'ar' ? 'خدماتنا الشاملة' : 'Our Comprehensive Services'}
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-4xl mx-auto"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' 
                  ? 'في إتمام، نوفر لك مجموعة شاملة من الخدمات التجارية والإدارية، مصممة لتبسيط رحلتك وتحقيق أهدافك بكفاءة'
                  : 'At Etmam, we provide you with a comprehensive set of commercial and administrative services, designed to simplify your journey and achieve your goals efficiently'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      </AnimatedSection>

      {/* Service Categories */}
      <AnimatedSection animation="fadeInUp" delay={100}>
        <div>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' ? 'فئات خدماتنا' : 'Our Service Categories'}
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' 
                ? 'اختر الفئة المناسبة لاحتياجاتك واستكشف خدماتنا المتخصصة'
                : 'Choose the appropriate category for your needs and explore our specialized services'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group block"
              >
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                    category.isHighlighted ? 'ring-4 ring-green-500/20' : ''
                  }`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`} />
                  
                  {/* Content */}
                  <div className="relative p-8 text-white">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        {getIconComponent(category.icon, 32)}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl font-bold mb-4"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-white/90 mb-6 leading-relaxed"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {category.description}
                    </p>

                    {/* Services Count */}
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {category.servicesCount} {language === 'ar' ? 'خدمة' : 'Services'}
                      </span>
                      
                      <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                        <span 
                          className="text-sm font-semibold mr-2"
                          style={{ fontFamily: 'var(--font-almarai)' }}
                        >
                          {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                        </span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Etmam */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-almarai)', color: '#11613A' }}
            >
              {language === 'ar' ? 'لماذا تختار إتمام؟' : 'Why Choose Etmam?'}
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' 
                ? 'نحن نقدم خدمات متميزة تجعلنا الخيار الأول للعملاء'
                : 'We provide exceptional services that make us the first choice for customers'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">
                    {getIconComponent(feature.icon, 24)}
                  </div>
                </div>
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-almarai)', color: '#11613A' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
      </AnimatedSection>

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
