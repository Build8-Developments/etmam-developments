'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyChooseSection() {
  const { language } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center">
           {/* Main Title */}
          <h2 
            className="text-3xl font-normal mb-4"
            style={{ 
              fontFamily: 'var(--font-almarai)',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '32px',
              letterSpacing: '-1.9%',
              color: 'rgba(17, 97, 58, 1)',
            }}
          >
            {language === 'ar' ? 'لماذا تختار إتمام؟' : 'Why Choose Itmam?'}
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-lg mb-8"
            style={{ 
              fontFamily: 'var(--font-almarai)',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '29px',
              letterSpacing: '0%',
              color: 'rgba(0, 0, 0, 0.44)',
            }}
          >
            {language === 'ar' 
              ? 'تبسيط الإجراءات الإدارية والتجارية بخطوات واضحة وسهلة'
              : 'Simplifying administrative and commercial procedures with clear and easy steps'
            }
          </p>
          
          {/* Decorative Line */}
          <div 
            className="w-1 h-12 mx-auto mb-16"
            style={{
              background: 'linear-gradient(180deg, #11613A 0%, #000000 100%)',
              transform: 'rotate(-90.28deg)',
            }}
          ></div>
          
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Card 1 - Integrated Solutions */}
            <div 
              className="bg-white rounded-[60px] p-8 text-center cursor-pointer group"
              style={{
                width: '267px',
                height: '305px',
                margin: '0 auto',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(181.08deg, #1B8036 3.34%, #290505 219.68%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:bg-white"
                style={{
                  background: 'rgba(17, 97, 58, 1)',
                }}
              >
                <svg className="w-8 h-8 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 
                className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                }}
              >
                {language === 'ar' ? 'حلول متكاملة' : 'Integrated Solutions'}
              </h3>
              
              {/* Description */}
              <p 
                className="text-sm text-gray-600 group-hover:text-white leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                }}
              >
                {language === 'ar' 
                  ? 'من تأسيس الشركات والتراخيص إلى إدارة الأعمال. كل خدماتك في مكان واحد.'
                  : 'From company formation and licensing to business management. All your services in one place.'
                }
              </p>
            </div>

            {/* Card 2 - Continuous Support */}
            <div 
              className="bg-white rounded-[60px] p-8 text-center cursor-pointer group"
              style={{
                width: '267px',
                height: '305px',
                margin: '0 auto',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(181.08deg, #1B8036 3.34%, #290505 219.68%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:bg-white"
                style={{
                  background: 'rgba(17, 97, 58, 1)',
                }}
              >
                <svg className="w-8 h-8 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 
                className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                }}
              >
                {language === 'ar' ? 'دعم متواصل' : 'Continuous Support'}
              </h3>
              
              {/* Description */}
              <p 
                className="text-sm text-gray-600 group-hover:text-white leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                }}
              >
                {language === 'ar' 
                  ? 'فريقنا جاهز لمساعدتك والإجابة على استفساراتك في أي وقت.'
                  : 'Our team is ready to assist you and answer your inquiries at any time.'
                }
              </p>
            </div>

            {/* Card 3 - Smooth Electronic Procedures */}
            <div 
              className="bg-white rounded-[60px] p-8 text-center cursor-pointer group"
              style={{
                width: '267px',
                height: '305px',
                margin: '0 auto',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(181.08deg, #1B8036 3.34%, #290505 219.68%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:bg-white"
                style={{
                  background: 'rgba(17, 97, 58, 1)',
                }}
              >
                <svg className="w-8 h-8 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 
                className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                }}
              >
                {language === 'ar' ? 'إجراءات إلكترونية سلسة' : 'Smooth Electronic Procedures'}
              </h3>
              
              {/* Description */}
              <p 
                className="text-sm text-gray-600 group-hover:text-white leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                }}
              >
                {language === 'ar' 
                  ? 'قدم طلبك وأكمل معاملاتك عبر الموقع بسهولة.'
                  : 'Submit your request and complete your transactions easily through the website.'
                }
              </p>
            </div>

            {/* Card 4 - Reliable and Fast Services */}
            <div 
              className="bg-white rounded-[60px] p-8 text-center cursor-pointer group"
              style={{
                width: '267px',
                height: '305px',
                margin: '0 auto',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(181.08deg, #1B8036 3.34%, #290505 219.68%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:bg-white"
                style={{
                  background: 'rgba(17, 97, 58, 1)',
                }}
              >
                <svg className="w-8 h-8 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7H3v2h16V4zm0 4H3v2h16V8zm0 4H3v2h16v-2z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 
                className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                }}
              >
                {language === 'ar' ? 'خدمات موثوقة وسريعة' : 'Reliable and Fast Services'}
              </h3>
              
              {/* Description */}
              <p 
                className="text-sm text-gray-600 group-hover:text-white leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                }}
              >
                {language === 'ar' 
                  ? 'تنفيذ احترافي يوفر وقتك وجهدك.'
                  : 'Professional execution that saves your time and effort.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
