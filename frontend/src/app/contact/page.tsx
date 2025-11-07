'use client';

import { 
  Header, 
  Footer,
  PartnersSection,
  ConsultationSection
} from '@/components';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useContactPage, useContactsInfo } from '@/hooks/graphql';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function ContactPage() {
  const { data: contactData } = useContactPage();
  const { data: contactsData } = useContactsInfo();
  const { language } = useLanguage();

  const contactPageData = contactData;
  const contactInfoData = contactsData;

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
            pointerEvents: 'none',
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
              pointerEvents: 'none',
            }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ pointerEvents: "auto" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Content */}
              <div className="text-white">
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {contactPageData?.Hero?.title || (language === 'ar' ? 'تواصل معنا' : 'Contact Us')}
                </h1>
                
                <p 
                  className="text-lg md:text-xl mb-8 leading-relaxed opacity-90"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {contactPageData?.Hero?.subtitle || (language === 'ar' 
                    ? 'نحن هنا لمساعدتك في جميع احتياجاتك التجارية والإدارية. تواصل معنا اليوم واحصل على استشارة مجانية.'
                    : 'We are here to help you with all your business and administrative needs. Contact us today and get a free consultation.')
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {contactPageData?.Hero?.primaryButton && (
                    <Link 
                      href={contactPageData.Hero.primaryButton.href || "/consulting"}
                      className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {contactPageData.Hero.primaryButton.label || (language === 'ar' ? 'استشارة مجانية' : 'Free Consultation')}
                    </Link>
                  )}
                  {contactPageData?.Hero?.secondaryButton && (
                    <Link 
                      href={contactPageData.Hero.secondaryButton.href || "tel:+012000000000"}
                      className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transition-colors"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {contactPageData.Hero.secondaryButton.label || (language === 'ar' ? 'اتصل بنا' : 'Call Us')}
                    </Link>
                  )}
                </div>
              </div>
              
              {/* Right Side - Visual Elements */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Contact Stats Cards */}
                  {contactPageData?.Hero?.stats?.map((stat: any, index: number) => (
                    <div key={stat.id || index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                        <div 
                          className="text-sm text-white/80"
                          style={{ fontFamily: 'var(--font-almarai)' }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  )) || (
                    <>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">24/7</div>
                          <div 
                            className="text-sm text-white/80"
                            style={{ fontFamily: 'var(--font-almarai)' }}
                          >
                            {language === 'ar' ? 'دعم متواصل' : 'Continuous Support'}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">1h</div>
                          <div 
                            className="text-sm text-white/80"
                            style={{ fontFamily: 'var(--font-almarai)' }}
                          >
                            {language === 'ar' ? 'استجابة سريعة' : 'Quick Response'}
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
                            {language === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">5</div>
                          <div 
                            className="text-sm text-white/80"
                            style={{ fontFamily: 'var(--font-almarai)' }}
                          >
                            {language === 'ar' ? 'قنوات تواصل' : 'Contact Channels'}
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

      {/* Contact Section */}
      <AnimatedSection animation="fadeInUp" delay={100}>
        <section className="py-16 lg:py-24 relative bg-gray-50">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48">
          <div className="w-full h-full flex flex-col gap-2">
            <div className="w-full h-8 bg-green-400 rounded-full opacity-60"></div>
            <div className="w-3/4 h-6 bg-green-500 rounded-full opacity-40"></div>
            <div className="w-1/2 h-4 bg-green-600 rounded-full opacity-20"></div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-24 h-24 lg:w-32 lg:h-32">
          <div className="w-full h-full grid grid-cols-4 gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-red-400 rounded-full opacity-30"
                style={{ 
                  opacity: Math.max(0.1, 0.3 - (i * 0.02))
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Large Circle Background */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 border border-gray-200 rounded-full opacity-20"></div>

        {/* Blue Borders */}
        <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-blue-500"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side - Contact Information Cards */}
            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl lg:max-w-none">
                {/* Mobile Number Card */}
                <div 
                  className="bg-green-600 text-white p-6 cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center text-center mx-auto"
                  style={{
                    width: '281px',
                    height: '237px',
                    borderTopLeftRadius: '40px',
                    borderTopRightRadius: '40px',
                    borderBottomRightRadius: '40px',
                    borderBottomLeftRadius: '40px',
                    borderWidth: '1px',
                    opacity: 1
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(164.42deg, #026838 -88.26%, #026838 425.49%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#026838';
                  }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <h3 
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {contactPageData?.Contact_Info_Cards?.[0]?.label || (language === 'ar' ? 'رقم الجوال' : 'Mobile Number')}
                  </h3>
                  <p 
                    className="text-base"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {contactInfoData?.phone_number || contactPageData?.Contact_Info_Cards?.[0]?.data || '+012000000000'}
                  </p>
                </div>

                {/* WhatsApp Card */}
                <div 
                  className="bg-white border-2 border-green-600 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center text-center mx-auto"
                  style={{
                    width: '281px',
                    height: '237px',
                    borderTopLeftRadius: '40px',
                    borderTopRightRadius: '40px',
                    borderBottomRightRadius: '40px',
                    borderBottomLeftRadius: '40px',
                    borderWidth: '1px',
                    opacity: 1
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(164.42deg, #026838 -88.26%, #026838 425.49%)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'transparent';
                    const textElements = e.currentTarget.querySelectorAll('h3, p');
                    textElements.forEach(el => {
                      (el as HTMLElement).style.color = 'white';
                    });
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) {
                      icon.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'inherit';
                    e.currentTarget.style.borderColor = '#026838';
                    const textElements = e.currentTarget.querySelectorAll('h3, p');
                    textElements.forEach(el => {
                      (el as HTMLElement).style.color = '#026838';
                    });
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) {
                      icon.style.color = '#026838';
                    }
                  }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                  </div>
                  <h3 
                    className="text-lg font-bold text-green-600 mb-3"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {contactPageData?.Contact_Info_Cards?.[1]?.label || (language === 'ar' ? 'واتساب' : 'WhatsApp')}
                  </h3>
                  <p 
                    className="text-base text-green-600"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {contactInfoData?.whatsapp_number || contactPageData?.Contact_Info_Cards?.[1]?.data || '+012000000000'}
                  </p>
                </div>

                {/* Email Card */}
                <div 
                  className="bg-white border-2 border-green-600 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center text-center mx-auto"
                  style={{
                    width: '281px',
                    height: '237px',
                    borderTopLeftRadius: '40px',
                    borderTopRightRadius: '40px',
                    borderBottomRightRadius: '40px',
                    borderBottomLeftRadius: '40px',
                    borderWidth: '1px',
                    opacity: 1
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(164.42deg, #026838 -88.26%, #026838 425.49%)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'transparent';
                    const textElements = e.currentTarget.querySelectorAll('h3, p');
                    textElements.forEach(el => {
                      (el as HTMLElement).style.color = 'white';
                    });
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) {
                      icon.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'inherit';
                    e.currentTarget.style.borderColor = '#026838';
                    const textElements = e.currentTarget.querySelectorAll('h3, p');
                    textElements.forEach(el => {
                      (el as HTMLElement).style.color = '#026838';
                    });
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) {
                      icon.style.color = '#026838';
                    }
                  }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 
                    className="text-lg font-bold text-green-600 mb-3"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {contactPageData?.Contact_Info_Cards?.[2]?.label || (language === 'ar' ? 'البريد الإلكتروني' : 'Email')}
                  </h3>
                  <p 
                    className="text-base text-green-600"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {contactInfoData?.email || contactPageData?.Contact_Info_Cards?.[2]?.data || 'Etmam@gmail.com'}
                  </p>
                </div>

                {/* Location Card */}
                <div 
                  className="bg-green-600 text-white p-6 cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center text-center mx-auto"
                  style={{
                    width: '281px',
                    height: '237px',
                    borderTopLeftRadius: '40px',
                    borderTopRightRadius: '40px',
                    borderBottomRightRadius: '40px',
                    borderBottomLeftRadius: '40px',
                    borderWidth: '1px',
                    opacity: 1
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(164.42deg, #026838 -88.26%, #026838 425.49%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#026838';
                  }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {contactPageData?.Contact_Info_Cards?.[3]?.label || (language === 'ar' ? 'الموقع' : 'Location')}
                  </h3>
                  <a
                    href={contactInfoData?.location_link || contactPageData?.location_link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:underline"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {contactPageData?.Contact_Info_Cards?.[3]?.data || (language === 'ar' ? 'السعودية، الرياض' : 'Saudi Arabia, Riyadh')}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Consultation Form Section */}
            <div>
              <ConsultationSection compact={true} />
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection animation="scaleIn" delay={150}>
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-almarai)', color: '#026838' }}
            >
              {language === 'ar' ? 'موقعنا على الخريطة' : 'Our Location on Map'}
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' 
                ? 'يمكنك العثور على موقعنا بسهولة باستخدام الخريطة التفاعلية أدناه'
                : 'You can easily find our location using the interactive map below'
              }
            </p>
          </div>

          {/* Map Container */}
          <div className="relative">
            <div 
              className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
              style={{
                border: '2px solid #e5e7eb'
              }}
            >
              {/* Real Map using OpenStreetMap */}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=46.6%2C24.6%2C46.8%2C24.8&layer=mapnik&marker=24.7136%2C46.6753"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Etmam Office Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button 
                className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=24.7136,46.6753', '_blank')}
                title={language === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps'}
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              <button 
                className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                onClick={() => window.open('https://www.openstreetmap.org/?mlat=24.7136&mlon=46.6753&zoom=15', '_blank')}
                title={language === 'ar' ? 'فتح في OpenStreetMap' : 'Open in OpenStreetMap'}
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </button>
            </div>

            {/* Location Info Overlay */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 
                    className="text-sm font-semibold text-gray-800"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'مكتب إتمام' : 'Etmam Office'}
                  </h3>
                  <p 
                    className="text-xs text-gray-600"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      </AnimatedSection>
      
      {/* Partners Section */}
      <AnimatedSection animation="fadeIn" delay={200}>
        <PartnersSection />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}
