'use client';

import { 
  Header, 
  Footer
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: ديسمبر 2024',
      sections: [
        {
          title: 'مقدمة',
          content: 'نحن في إتمام نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. تشرح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند استخدام خدماتنا.'
        },
        {
          title: 'المعلومات التي نجمعها',
          content: 'نجمع المعلومات التالية:\n\n• المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف، العنوان\n• معلومات الدفع: تفاصيل البطاقة الائتمانية (مشفرة)\n• معلومات الاستخدام: كيفية استخدامك لموقعنا وخدماتنا\n• ملفات تعريف الارتباط: لتحسين تجربتك على الموقع'
        },
        {
          title: 'كيفية استخدام معلوماتك',
          content: 'نستخدم معلوماتك لـ:\n\n• تقديم خدماتنا لك\n• معالجة طلباتك والمدفوعات\n• التواصل معك حول خدماتنا\n• تحسين موقعنا وخدماتنا\n• الامتثال للقوانين واللوائح'
        },
        {
          title: 'مشاركة المعلومات',
          content: 'نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:\n\n• مع مقدمي الخدمات الموثوقين\n• عند الحاجة القانونية\n• لحماية حقوقنا أو حقوق الآخرين\n• مع موافقتك الصريحة'
        },
        {
          title: 'حماية المعلومات',
          content: 'نحن نستخدم تدابير أمنية متقدمة لحماية معلوماتك:\n\n• تشفير SSL/TLS\n• خوادم آمنة\n• وصول محدود للمعلومات\n• مراجعة أمنية منتظمة'
        },
        {
          title: 'ملفات تعريف الارتباط',
          content: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. يمكنك إدارة إعدادات ملفات تعريف الارتباط من خلال متصفحك.'
        },
        {
          title: 'حقوقك',
          content: 'لديك الحق في:\n\n• الوصول إلى معلوماتك الشخصية\n• تصحيح المعلومات غير الصحيحة\n• حذف معلوماتك\n• تقييد معالجة معلوماتك\n• نقل بياناتك\n• الاعتراض على معالجة معلوماتك'
        },
        {
          title: 'الاحتفاظ بالبيانات',
          content: 'نحتفظ بمعلوماتك الشخصية طالما كانت ضرورية لتقديم خدماتنا أو كما هو مطلوب قانونياً.'
        },
        {
          title: 'التغييرات على السياسة',
          content: 'قد نحدث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر البريد الإلكتروني أو عبر موقعنا.'
        },
        {
          title: 'التواصل معنا',
          content: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر:\n\nالبريد الإلكتروني: privacy@etmam.com\nالهاتف: +966 11 123 4567\nالعنوان: الرياض، المملكة العربية السعودية'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: December 2024',
      sections: [
        {
          title: '1. Introduction',
          content: 'At Etmam, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and protect your information when you use our services.'
        },
        {
          title: '2. Information We Collect',
          content: 'We collect the following information:\n\n• Personal Information: Name, email, phone number, address\n• Payment Information: Credit card details (encrypted)\n• Usage Information: How you use our website and services\n• Cookies: To improve your experience on our site'
        },
        {
          title: '3. How We Use Your Information',
          content: 'We use your information to:\n\n• Provide our services to you\n• Process your orders and payments\n• Communicate with you about our services\n• Improve our website and services\n• Comply with laws and regulations'
        },
        {
          title: '4. Information Sharing',
          content: 'We do not sell or rent your personal information to third parties. We may only share your information in the following cases:\n\n• With trusted service providers\n• When legally required\n• To protect our rights or the rights of others\n• With your explicit consent'
        },
        {
          title: '5. Information Protection',
          content: 'We use advanced security measures to protect your information:\n\n• SSL/TLS encryption\n• Secure servers\n• Limited access to information\n• Regular security reviews'
        },
        {
          title: '6. Cookies',
          content: 'We use cookies to improve your experience. You can manage your cookie settings through your browser.'
        },
        {
          title: '7. Your Rights',
          content: 'You have the right to:\n\n• Access your personal information\n• Correct inaccurate information\n• Delete your information\n• Restrict processing of your information\n• Transfer your data\n• Object to processing of your information'
        },
        {
          title: '8. Data Retention',
          content: 'We retain your personal information for as long as necessary to provide our services or as required by law.'
        },
        {
          title: '9. Policy Changes',
          content: 'We may update this policy from time to time. We will notify you of any significant changes via email or through our website.'
        },
        {
          title: '10. Contact Us',
          content: 'If you have any questions about this privacy policy, please contact us at:\n\nEmail: privacy@etmam.com\nPhone: +966 11 123 4567\nAddress: Riyadh, Saudi Arabia'
        }
      ]
    }
  };

  const currentContent = content[language];

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
                  className="text-3xl font-bold text-gray-800 mb-4"
                  style={{ fontFamily: 'var(--font-almarai)' }}
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
