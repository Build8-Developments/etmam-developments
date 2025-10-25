'use client';

import { SectionProps } from './types';
import { useLanguage } from '@/contexts/LanguageContext';

export function Section({ 
  title, 
  description, 
  id, 
  className = '',
  children 
}: SectionProps) {
  const { language, isRTL } = useLanguage();
  
  return (
    <section 
      id={id}
      className={`py-16 lg:py-24 ${className}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && (
              <h2 
                className="text-4xl lg:text-5xl font-bold mb-4 relative inline-block"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                  textAlign: isRTL ? 'right' : 'left',
                  color: '#11613A'
                }}
              >
                {title}
                {/* Green gradient background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-lg blur-sm -z-10"
                  style={{ transform: 'scale(1.1)' }}
                />
              </h2>
            )}
            
            {description && (
              <p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                style={{ 
                  fontFamily: 'var(--font-almarai)',
                  textAlign: isRTL ? 'right' : 'left'
                }}
              >
                {description}
              </p>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
}
