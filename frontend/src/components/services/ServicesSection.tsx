'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useServices } from '@/hooks';
import { servicesMockData, servicesMockDataEn } from '@/mockData/services/services';
import Link from 'next/link';

interface ServiceCard {
  id?: string;
  icon: string;
  title: string;
  description: string;
  isActive?: boolean;
}

interface ServicesProps {
  title?: string;
  description?: string;
  services?: ServiceCard[];
  ctaButton?: {
    label: string;
    href: string;
  };
}

export default function ServicesSection({
  title,
  description,
  ctaButton,
}: ServicesProps) {
  const { language } = useLanguage();
  
  // Fetch data from GraphQL
  const { data: graphqlServices } = useServices();
  
  // Default content
  const defaultTitle = language === 'ar' 
    ? 'خدماتنا التي تلبي احتياجاتك' 
    : 'Our Services That Meet Your Needs';
  
  const defaultDescription = language === 'ar'
    ? 'في إتمام نقدم مجموعة من الخدمات التجارية والإدارية المصممة لتسهيل رحلتك في تأسيس وإدارة أعمالك بكفاءة واحترافية.'
    : 'At Etmam, we offer a range of commercial and administrative services designed to facilitate your journey in establishing and managing your business efficiently and professionally.';

  // Use GraphQL data if available, otherwise fallback to mock data
  const mockServices = language === 'ar' ? servicesMockData : servicesMockDataEn;
  const displayServices = graphqlServices || mockServices;

  const defaultCTA = {
    label: language === 'ar' ? 'عرض المزيد' : 'Show More',
    href: '/services',
  };

  const displayCTA = ctaButton || defaultCTA;

  const getIconComponent = (iconType: string, isActive: boolean) => {
    const iconColor = isActive ? '#FFFFFF' : '#90C054';
    const iconSize = 'clamp(20px, 24px, 28px)';
    
    const iconPaths = {
      building: "M3 21H21V19L12 5L3 19V21ZM5 19H7V17H5V19ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM9 19H11V17H9V19ZM9 15H11V13H9V15ZM9 11H11V9H9V11ZM13 19H15V17H13V19ZM13 15H15V13H13V15ZM13 11H15V9H13V11ZM17 19H19V17H17V19ZM17 15H19V13H17V15ZM17 11H19V9H17V11Z",
      license: "M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z",
      consulting: "M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
      accounting: "M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM7 6V19H17V6H7ZM9 8H15V10H9V8ZM9 12H15V14H9V12ZM9 16H15V18H9V16Z",
      hr: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",
      marketing: "M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM12 4.5L11.5 7.5L8.5 8L11.5 8.5L12 11.5L12.5 8.5L15.5 8L12.5 7.5L12 4.5Z"
    };

    const path = iconPaths[iconType as keyof typeof iconPaths] || iconPaths.marketing;

    return (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d={path} fill={iconColor}/>
      </svg>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-almarai)' }}>
            {title || defaultTitle}
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-almarai)' }}>
            {description || defaultDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayServices.map((service: ServiceCard, index: number) => (
            <div
              key={service.id || index}
              className={`rounded-xl p-6 text-center transition-smooth hover-lift hover-glow animate-scale-in ${
                service.isActive 
                  ? 'bg-white/20 text-white border-2 border-white/40 animate-glow-pulse' 
                  : 'bg-white text-gray-800 shadow-lg hover:shadow-xl border border-gray-100'
              } transform`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className={`w-14 h-14 flex items-center justify-center rounded-full transition-smooth hover-scale ${
                  service.isActive ? 'bg-white/10' : 'bg-green-50'
                }`}>
                  <div className="animate-float">
                    {getIconComponent(service.icon, service.isActive || false)}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-bold mb-3 text-lg transition-slow" style={{ fontFamily: 'var(--font-almarai)' }}>
                {service.title}
              </h3>

              {/* Description */}
              <p 
                className={`leading-relaxed text-sm transition-slow ${
                  service.isActive ? 'text-white/90' : 'text-gray-600'
                }`}
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={displayCTA.href}
            className="inline-block bg-white text-green-600 font-semibold rounded-xl px-8 py-3 hover:bg-gray-50 transition-smooth hover-lift shadow-lg hover:shadow-xl transform"
            style={{
              fontFamily: 'var(--font-almarai)',
              textDecoration: 'none',
            }}
          >
            {displayCTA.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
