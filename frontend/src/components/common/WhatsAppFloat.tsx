'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { WHATSAPP_CONFIG, getWhatsAppMessage, createWhatsAppUrl } from '@/constants';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

const WhatsAppFloat = ({ 
  phoneNumber = WHATSAPP_CONFIG.phoneNumber,
  message,
  className = ''
}: WhatsAppFloatProps) => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  // إظهار الأيقونة بعد تحميل الصفحة
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, WHATSAPP_CONFIG.display.delay);

    return () => clearTimeout(timer);
  }, []);

  // رسالة حسب اللغة والإعدادات
  const finalMessage = message || getWhatsAppMessage(language);

  const handleWhatsAppClick = () => {
    const whatsappUrl = createWhatsAppUrl(phoneNumber, finalMessage);
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`whatsapp-float ${className}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Tooltip */}
      {WHATSAPP_CONFIG.styling.tooltip && (
        <div className="whatsapp-tooltip">
          {language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-button group relative focus:outline-none"
        aria-label={language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
        title={language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
      >
        {/* Pulse Animation */}
        {WHATSAPP_CONFIG.styling.pulse && (
          <div className="whatsapp-pulse" data-decorative="true" style={{ pointerEvents: 'none' }}></div>
        )}
        
        {/* WhatsApp Icon */}
        <svg 
          className="whatsapp-icon w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>

        {/* Hover Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-5" data-decorative="true" style={{ pointerEvents: 'none' }}></div>
        
        {/* Ripple Effect on Click */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150 z-5" data-decorative="true" style={{ pointerEvents: 'none' }}></div>
      </button>

      {/* Notification Badge */}
      {WHATSAPP_CONFIG.display.showBadge && (
        <div 
          className={`whatsapp-badge ${
            language === 'ar' ? '-top-1 -left-1' : '-top-1 -right-1'
          }`}
        >
          <span>
            {WHATSAPP_CONFIG.display.badgeCount}
          </span>
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloat;
