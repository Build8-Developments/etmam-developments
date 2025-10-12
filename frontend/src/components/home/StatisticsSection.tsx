'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

interface StatisticsSectionProps {
  title?: string;
  stats?: Array<{
    number: string;
    label: string;
  }>;
  backgroundImage?: {
    url: string;
    alternativeText: string;
  };
}

export default function StatisticsSection({
  title,
  stats,
  backgroundImage,
}: StatisticsSectionProps) {
  const { language, isRTL } = useLanguage();

  // Default content based on the image description
  const defaultTitle = language === 'ar' 
    ? 'ابدأ رحلة عملك نحو مستقبل أكثر استدامة وأمانا'
    : 'Start your business journey towards a more sustainable and secure future';

  const defaultStats = [
    {
      number: language === 'ar' ? '+١٥' : '+15',
      label: language === 'ar' ? 'المواد البلاستيكية المدرجة' : 'Listed plastic materials'
    },
    {
      number: language === 'ar' ? '+٣٥٠' : '+350k',
      label: language === 'ar' ? 'المورد والمشتري الموثوق به' : 'Trusted supplier and buyer'
    },
    {
      number: language === 'ar' ? '+١٥' : '+15k',
      label: language === 'ar' ? 'مدينة تدعم التوصيل' : 'City supporting delivery'
    },
    {
      number: language === 'ar' ? '+١٥' : '+15',
      label: language === 'ar' ? 'معدل رضا المستخدمين' : 'User satisfaction rate'
    }
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="relative overflow-hidden" style={{ height: 'clamp(500px, 600px, 700px)' }}>
      {/* Background Image - Upper 2/3 */}
      <div className="absolute inset-0 z-0" style={{ height: 'clamp(300px, 400px, 500px)' }}>
        <Image 
          src={backgroundImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${backgroundImage.url}` : '/bg.jpg'} 
          alt={backgroundImage?.alternativeText || 'Statistics Background'} 
          fill 
          className="object-cover" 
        />
        {/* Green overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/30 to-green-800/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Main Title - Centered in upper 2/3 */}
        <div className="flex-1 flex items-center justify-center px-2 sm:px-4">
          <h2 
            className="text-white font-bold leading-tight text-center"
            style={{
              fontFamily: 'var(--font-almarai)',
              fontWeight: 700,
              fontSize: 'clamp(20px, 3.5vw, 48px)',
              lineHeight: 'clamp(28px, 4.5vw, 64px)',
              letterSpacing: 0,
              textAlign: 'center',
              textShadow: '0 4px 8px rgba(0,0,0,0.6)',
              maxWidth: 'clamp(300px, 90vw, 800px)',
              padding: '0 8px',
            }}
          >
            {title || defaultTitle}
          </h2>
        </div>

        {/* Statistics Box - Positioned to overlap both background and white sections */}
        <div className="flex justify-center px-2 sm:px-4" style={{ marginTop: '0px', paddingBottom: 'clamp(60px, 120px, 160px)' }}>
          <div 
            className="rounded-[20px] sm:rounded-[30px] overflow-hidden"
            style={{
              width: 'min(100%, 1064px)',
              height: 'clamp(120px, 160px, 200px)',
              background: 'linear-gradient(90deg, #90C054 0%, #11613A 100%)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 h-full gap-1 sm:gap-0">
              {displayStats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col justify-center items-center text-center px-1 sm:px-2 md:px-4 ${
                    index < displayStats.length - 1 
                      ? (isRTL 
                          ? (index % 2 === 1 ? 'border-l border-l-white/30' : 'sm:border-l sm:border-l-white/30')
                          : (index % 2 === 1 ? 'border-r border-r-white/30' : 'sm:border-r sm:border-r-white/30')
                        ) 
                      : ''
                  }`}
                >
                  {/* Number */}
                  <div 
                    className="text-white font-bold mb-1 sm:mb-2"
                    style={{
                      fontFamily: 'Cairo',
                      fontWeight: 600,
                      fontSize: 'clamp(20px, 3.5vw, 60px)',
                      lineHeight: '100%',
                      letterSpacing: 0,
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div 
                    className="text-white font-bold text-center"
                    style={{
                      fontFamily: 'Almarai',
                      fontWeight: 700,
                      fontSize: 'clamp(10px, 1.5vw, 18px)',
                      lineHeight: '140%',
                      letterSpacing: 0,
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                      maxWidth: 'clamp(120px, 90%, 200px)',
                      padding: '0 4px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
