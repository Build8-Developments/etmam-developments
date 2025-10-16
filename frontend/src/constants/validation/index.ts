// Validation rules
export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: {
      ar: 'البريد الإلكتروني غير صحيح',
      en: 'Invalid email address'
    }
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: {
      ar: 'رقم الجوال غير صحيح',
      en: 'Invalid phone number'
    }
  },
  saudiPhone: {
    pattern: /^(966|0)?5[0-9]{8}$/,
    message: {
      ar: 'رقم الجوال السعودي غير صحيح',
      en: 'Invalid Saudi phone number'
    }
  },
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message: {
      ar: 'كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل مع أحرف كبيرة وصغيرة وأرقام ورموز',
      en: 'Password must be at least 8 characters with uppercase, lowercase, numbers and symbols'
    }
  },
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\u0600-\u06FF\s]+$/,
    message: {
      ar: 'الاسم يجب أن يحتوي على أحرف فقط',
      en: 'Name must contain only letters'
    }
  },
  companyName: {
    minLength: 2,
    maxLength: 100,
    message: {
      ar: 'اسم الشركة يجب أن يكون بين 2 و 100 حرف',
      en: 'Company name must be between 2 and 100 characters'
    }
  },
  url: {
    pattern: /^https?:\/\/.+/,
    message: {
      ar: 'الرابط غير صحيح',
      en: 'Invalid URL'
    }
  }
} as const;

// Form validation messages
export const VALIDATION_MESSAGES = {
  required: {
    ar: 'هذا الحقل مطلوب',
    en: 'This field is required'
  },
  minLength: {
    ar: 'يجب أن يكون النص أطول من {min} أحرف',
    en: 'Text must be longer than {min} characters'
  },
  maxLength: {
    ar: 'يجب أن يكون النص أقصر من {max} أحرف',
    en: 'Text must be shorter than {max} characters'
  },
  pattern: {
    ar: 'التنسيق غير صحيح',
    en: 'Invalid format'
  },
  email: {
    ar: 'البريد الإلكتروني غير صحيح',
    en: 'Invalid email address'
  },
  phone: {
    ar: 'رقم الجوال غير صحيح',
    en: 'Invalid phone number'
  },
  url: {
    ar: 'الرابط غير صحيح',
    en: 'Invalid URL'
  }
} as const;
