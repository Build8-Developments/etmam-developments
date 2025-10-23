// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  // رقم واتساب الافتراضي - يمكن تغييره حسب الحاجة
  phoneNumber: '+966500000000',
  
  // الرسائل الافتراضية حسب اللغة
  messages: {
    ar: 'مرحباً، أريد الاستفسار عن خدماتكم',
    en: 'Hello, I would like to inquire about your services'
  },
  
  // إعدادات العرض
  display: {
    delay: 2000, // تأخير الإظهار بالميلي ثانية
    position: 'bottom-left', // موضع الأيقونة
    showBadge: true, // إظهار شارة الإشعار
    badgeCount: 1, // عدد الإشعارات
  },
  
  // إعدادات التصميم
  styling: {
    size: 'large', // 'small', 'medium', 'large'
    color: '#25D366', // لون واتساب الرسمي
    pulse: true, // تأثير النبض
    tooltip: true, // إظهار التلميح
  }
} as const;

// دالة للحصول على رسالة حسب اللغة
export const getWhatsAppMessage = (language: 'ar' | 'en', customMessage?: string): string => {
  return customMessage || WHATSAPP_CONFIG.messages[language];
};

// دالة لتنسيق رقم الهاتف
export const formatPhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/[^0-9]/g, '');
};

// دالة لإنشاء رابط واتساب
export const createWhatsAppUrl = (
  phoneNumber: string, 
  message: string
): string => {
  const formattedNumber = formatPhoneNumber(phoneNumber);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
};
