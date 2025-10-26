'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface Partner {
  name: string;
  website?: string;
  logo: {
    url: string;
    name: string;
  };
}

interface PartnersSectionProps {
  partners?: Partner[];
}

const PartnersSection = ({ partners }: PartnersSectionProps) => {
  const { language } = useLanguage();

  // Default partners data
  const defaultPartners = [
    { name: 'Paysafe', logo: '/Payment method icon.png' },
    { name: 'Klarna', logo: '/Payment method icon1.png' },
    { name: 'Affirm', logo: '/Payment method icon2.png' },
    { name: 'Google Pay', logo: '/4.png' },
    { name: 'PayPal', logo: '/Payment method icon.png' },
    { name: 'Stripe', logo: '/Payment method icon1.png' },
    { name: 'Square', logo: '/Payment method icon2.png' },
    { name: 'Apple Pay', logo: '/4.png' },
  ];

  // Use Strapi data if available, otherwise use default data
  const partnersData = partners && partners.length > 0 
    ? partners.map(partner => ({
        name: partner.name,
        logo: partner.logo?.url ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${partner.logo.url}` : '/Payment method icon.png'
      }))
    : defaultPartners;

  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partnersData, ...partnersData];

  return (
     <section 
       className="py-8 sm:py-12 lg:py-16 bg-white overflow-hidden"
       dir={language === 'ar' ? 'rtl' : 'ltr'}
     >
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            {language === 'ar' ? 'شركاؤنا في النجاح' : 'Our Success Partners'}
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            {language === 'ar' 
              ? 'نفتخر بشراكتنا مع أفضل الشركات والمؤسسات الرائدة في مجال الخدمات المالية والتقنية'
              : 'We are proud to partner with the best companies and leading institutions in the field of financial and technical services'
            }
          </p>
        </div>
      </div>

      <div className="w-full">
        <div 
          className="flex"
          style={{
            width: '100%',
            height: '64px',
            overflow: 'hidden',
          }}
        >
           <div 
             className="flex animate-scroll"
             style={{
               animation: 'scroll 8s linear infinite',
             }}
           >
            {/* Duplicated logos for seamless infinite scroll */}
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: '120px',
                  height: '64px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  marginRight: '16px',
                }}
              >
                 <Image
                   src={partner.logo}
                   alt={partner.name}
                   width={80}
                   height={40}
                   className="object-contain"
                 />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
