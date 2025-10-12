'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { language } = useLanguage();

  const partners = [
    { name: 'Paysafe', logo: '/Payment method icon.png' },
    { name: 'Klarna', logo: '/Payment method icon1.png' },
    { name: 'Affirm', logo: '/Payment method icon2.png' },
    { name: 'Google Pay', logo: '/4.png' },
  ];

  return (
     <section 
       className="py-8 sm:py-12 lg:py-16 bg-white overflow-hidden"
       dir={language === 'ar' ? 'rtl' : 'ltr'}
     >
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
               animation: 'scroll 15s linear infinite',
             }}
           >
            {/* Single set of logos */}
            {partners.map((partner, index) => (
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
      `}</style>
    </section>
  );
};

export default PartnersSection;
