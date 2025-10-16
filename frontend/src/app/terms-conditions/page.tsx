'use client';

import { 
  Header, 
  Footer
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import { termsAndConditionsContent } from '@/mockData/pages';

export default function TermsConditionsPage() {
  const { language } = useLanguage();
  const currentContent = termsAndConditionsContent;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
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
                  {currentContent.title}
                </h1>
                
                <p 
                  className="text-lg md:text-xl mb-8 leading-relaxed opacity-90"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' 
                    ? 'الشروط والأحكام التي تحكم استخدام خدمات إتمام. تعرف على حقوقك ومسؤولياتك عند استخدام خدماتنا.'
                    : 'Terms and conditions governing the use of Etmam services. Learn about your rights and responsibilities when using our services.'
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'اقرأ الشروط' : 'Read Terms'}
                  </button>
                  <button 
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'استشارة قانونية' : 'Legal Consultation'}
                  </button>
                </div>
              </div>
              
              {/* Right Side - Visual Elements */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Legal Stats Cards */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">15+</div>
                      <div 
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {language === 'ar' ? 'سنة خبرة قانونية' : 'Years Legal Experience'}
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
                        {language === 'ar' ? 'متوافق مع القانون' : 'Law Compliant'}
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
                        {language === 'ar' ? 'دعم قانوني' : 'Legal Support'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">500+</div>
                      <div 
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {language === 'ar' ? 'عقد محقق' : 'Contracts Executed'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Introduction Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 
                  className="text-3xl font-bold text-gray-800 mb-4"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'شروط استخدام خدمات إتمام' : 'Terms for Using Etmam Services'}
                </h2>
                <p 
                  className="text-lg text-gray-600 max-w-3xl mx-auto"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' 
                    ? 'هذه الشروط والأحكام تحدد حقوقك ومسؤولياتك عند استخدام خدمات إتمام. ننصحك بقراءتها بعناية قبل استخدام خدماتنا.'
                    : 'These terms and conditions define your rights and responsibilities when using Etmam services. We recommend reading them carefully before using our services.'
                  }
                </p>
              </div>
            </div>

            {/* Sections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {currentContent.sections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold text-gray-800 mb-4"
                        style={{ 
                          fontFamily: 'var(--font-almarai)',
                          textAlign: language === 'ar' ? 'right' : 'left'
                        }}
                      >
                        {section.title}
                      </h3>
                      
                      <div 
                        className="text-gray-600 leading-relaxed whitespace-pre-line"
                        style={{ 
                          fontFamily: 'var(--font-almarai)',
                          textAlign: language === 'ar' ? 'right' : 'left',
                          fontSize: '15px',
                          lineHeight: '1.7'
                        }}
                      >
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'هل تحتاج استشارة قانونية؟' : 'Need Legal Consultation?'}
                </h3>
                
                <p 
                  className="text-lg opacity-90 max-w-2xl mx-auto"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' 
                    ? 'فريقنا القانوني متاح لتوضيح أي نقطة في الشروط والأحكام وتقديم الاستشارات القانونية المطلوبة.'
                    : 'Our legal team is available to clarify any point in the terms and conditions and provide the necessary legal consultations.'
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </h4>
                  <a 
                    href="mailto:legal@etmam.com"
                    className="text-white/90 hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    legal@etmam.com
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'الهاتف' : 'Phone'}
                  </h4>
                  <a 
                    href="tel:+966111234567"
                    className="text-white/90 hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    +966 11 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
