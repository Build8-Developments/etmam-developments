'use client';

import { 
  Header, 
  Footer
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import { privacyPolicyContent } from '@/mockData/pages';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const currentContent = privacyPolicyContent;

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
                  {currentContent.title[language]}
                </h1>
                
                <p 
                  className="text-lg md:text-xl mb-8 leading-relaxed opacity-90"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' 
                    ? 'نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. تعرف على كيفية جمعنا واستخدامنا وحمايتنا لبياناتك.'
                    : 'We are committed to protecting your privacy and ensuring the security of your personal information. Learn how we collect, use, and protect your data.'
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'اقرأ السياسة' : 'Read Policy'}
                  </button>
                  <button 
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  </button>
                </div>
              </div>
              
              {/* Right Side - Visual Elements */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Privacy Stats Cards */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">100%</div>
                      <div 
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {language === 'ar' ? 'تشفير البيانات' : 'Data Encryption'}
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
                        {language === 'ar' ? 'مراقبة أمنية' : 'Security Monitoring'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">0</div>
                      <div 
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {language === 'ar' ? 'تسريب بيانات' : 'Data Breaches'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">GDPR</div>
                      <div 
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'var(--font-almarai)' }}
                      >
                        {language === 'ar' ? 'متوافق' : 'Compliant'}
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-almarai)', color: '#11613A' }}
                >
                  {language === 'ar' ? 'التزامنا بحماية خصوصيتك' : 'Our Commitment to Your Privacy'}
                </h2>
                <p 
                  className="text-lg text-gray-600 max-w-3xl mx-auto"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' 
                    ? 'نحن في إتمام نؤمن بأن خصوصيتك هي حق أساسي. هذه السياسة توضح بالتفصيل كيف نتعامل مع معلوماتك الشخصية ونحميها.'
                    : 'At Etmam, we believe your privacy is a fundamental right. This policy details how we handle and protect your personal information.'
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
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <span className="text-green-600 font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold mb-4"
                        style={{ 
                          fontFamily: 'var(--font-almarai)',
                          textAlign: language === 'ar' ? 'right' : 'left',
                          color: '#11613A'
                        }}
                      >
                        {section.title[language]}
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
                        {section.content[language]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'هل لديك أسئلة حول الخصوصية؟' : 'Have Privacy Questions?'}
                </h3>
                
                <p 
                  className="text-lg opacity-90 max-w-2xl mx-auto"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' 
                    ? 'فريقنا متاح للإجابة على جميع استفساراتك حول الخصوصية وحماية البيانات. تواصل معنا في أي وقت.'
                    : 'Our team is available to answer all your privacy and data protection questions. Contact us anytime.'
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
                    href="mailto:privacy@etmam.com"
                    className="text-white/90 hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    privacy@etmam.com
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
