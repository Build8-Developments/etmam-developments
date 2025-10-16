export interface LegalPageSection {
  title: {
    ar: string;
    en: string;
  };
  content: {
    ar: string;
    en: string;
  };
}

export interface LegalPageContent {
  title: {
    ar: string;
    en: string;
  };
  lastUpdated: {
    ar: string;
    en: string;
  };
  sections: LegalPageSection[];
}

export const termsAndConditionsContent: LegalPageContent = {
  title: {
    ar: 'الشروط والأحكام',
    en: 'Terms and Conditions'
  },
  lastUpdated: {
    ar: 'آخر تحديث: ديسمبر 2024',
    en: 'Last Updated: December 2024'
  },
  sections: [
    {
      title: {
        ar: 'قبول الشروط',
        en: 'Acceptance of Terms'
      },
      content: {
        ar: 'باستخدام خدمات إتمام، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، فيجب عليك عدم استخدام خدماتنا.',
        en: 'By using Etmam services, you agree to be bound by these terms and conditions. If you do not agree to any part of these terms, you must not use our services.'
      }
    },
    {
      title: {
        ar: 'وصف الخدمات',
        en: 'Description of Services'
      },
      content: {
        ar: 'إتمام تقدم خدمات تجارية وإدارية تشمل:\n\n• تأسيس الشركات\n• استخراج التراخيص\n• الاستشارات القانونية والاستشارية\n• خدمات إدارية أخرى\n\nنحتفظ بالحق في تعديل أو إيقاف أي خدمة في أي وقت.',
        en: 'Etmam provides commercial and administrative services including:\n\n• Company formation\n• License extraction\n• Legal and consulting services\n• Other administrative services\n\nWe reserve the right to modify or discontinue any service at any time.'
      }
    },
    {
      title: {
        ar: 'استخدام الخدمات',
        en: 'Use of Services'
      },
      content: {
        ar: 'عند استخدام خدماتنا، يجب عليك:\n\n• تقديم معلومات صحيحة ودقيقة\n• الالتزام بجميع القوانين واللوائح\n• عدم استخدام الخدمات لأغراض غير قانونية\n• احترام حقوق الملكية الفكرية\n• عدم التدخل في عمل الخدمات',
        en: 'When using our services, you must:\n\n• Provide accurate and truthful information\n• Comply with all laws and regulations\n• Not use services for illegal purposes\n• Respect intellectual property rights\n• Not interfere with service operations'
      }
    },
    {
      title: {
        ar: 'المدفوعات والرسوم',
        en: 'Payments and Fees'
      },
      content: {
        ar: '• جميع الأسعار بالريال السعودي\n• المدفوعات مطلوبة مقدماً\n• لا توجد استردادات بعد بدء الخدمة\n• قد تكون هناك رسوم إضافية للخدمات الإضافية\n• نحتفظ بالحق في تغيير الأسعار مع إشعار مسبق',
        en: '• All prices are in Saudi Riyals\n• Payments are required in advance\n• No refunds after service commencement\n• Additional fees may apply for extra services\n• We reserve the right to change prices with prior notice'
      }
    },
    {
      title: {
        ar: 'المسؤولية والضمانات',
        en: 'Liability and Warranties'
      },
      content: {
        ar: '• نقدم خدماتنا بأفضل جودة ممكنة\n• لا نضمن النتائج المحددة\n• مسؤوليتنا محدودة بقيمة الخدمة المدفوعة\n• لا نتحمل المسؤولية عن الأضرار غير المباشرة\n• العميل مسؤول عن دقة المعلومات المقدمة',
        en: '• We provide our services with the best possible quality\n• We do not guarantee specific results\n• Our liability is limited to the value of the paid service\n• We are not liable for indirect damages\n• Client is responsible for accuracy of provided information'
      }
    },
    {
      title: {
        ar: 'الملكية الفكرية',
        en: 'Intellectual Property'
      },
      content: {
        ar: '• جميع المحتويات محمية بحقوق الطبع والنشر\n• لا يجوز نسخ أو توزيع المحتوى دون إذن\n• العلامات التجارية مملوكة لإتمام\n• المحتوى المقدم من العملاء يبقى ملكيتهم',
        en: '• All content is protected by copyright\n• Content may not be copied or distributed without permission\n• Trademarks are owned by Etmam\n• Content provided by clients remains their property'
      }
    },
    {
      title: {
        ar: 'الخصوصية',
        en: 'Privacy'
      },
      content: {
        ar: 'نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية وفقاً لسياسة الخصوصية الخاصة بنا.',
        en: 'We respect your privacy and are committed to protecting your personal information in accordance with our privacy policy.'
      }
    },
    {
      title: {
        ar: 'إيقاف الخدمة',
        en: 'Service Suspension'
      },
      content: {
        ar: 'نحتفظ بالحق في إيقاف أو تعليق خدماتك في الحالات التالية:\n\n• انتهاك هذه الشروط\n• عدم دفع الرسوم\n• استخدام غير قانوني\n• إساءة استخدام الخدمات',
        en: 'We reserve the right to suspend or terminate your services in the following cases:\n\n• Violation of these terms\n• Non-payment of fees\n• Illegal use\n• Misuse of services'
      }
    },
    {
      title: {
        ar: 'القوة القاهرة',
        en: 'Force Majeure'
      },
      content: {
        ar: 'لن نتحمل المسؤولية عن أي تأخير أو فشل في الأداء بسبب ظروف خارجة عن سيطرتنا، بما في ذلك الكوارث الطبيعية والحروب والإضرابات.',
        en: 'We will not be liable for any delay or failure in performance due to circumstances beyond our control, including natural disasters, wars, and strikes.'
      }
    },
    {
      title: {
        ar: 'القانون الحاكم',
        en: 'Governing Law'
      },
      content: {
        ar: 'هذه الشروط تحكمها قوانين المملكة العربية السعودية. أي نزاعات تخضع لاختصاص محاكم الرياض.',
        en: 'These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes are subject to the jurisdiction of Riyadh courts.'
      }
    },
    {
      title: {
        ar: 'التعديلات',
        en: 'Modifications'
      },
      content: {
        ar: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. التعديلات ستصبح فعالة فور نشرها على موقعنا.',
        en: 'We reserve the right to modify these terms at any time. Modifications will become effective immediately upon posting on our website.'
      }
    },
    {
      title: {
        ar: 'التواصل معنا',
        en: 'Contact Us'
      },
      content: {
        ar: 'إذا كان لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا عبر:\n\nالبريد الإلكتروني: legal@etmam.com\nالهاتف: +966 11 123 4567\nالعنوان: الرياض، المملكة العربية السعودية',
        en: 'If you have any questions about these terms, please contact us at:\n\nEmail: legal@etmam.com\nPhone: +966 11 123 4567\nAddress: Riyadh, Saudi Arabia'
      }
    }
  ]
};

export const privacyPolicyContent: LegalPageContent = {
  title: {
    ar: 'سياسة الخصوصية',
    en: 'Privacy Policy'
  },
  lastUpdated: {
    ar: 'آخر تحديث: ديسمبر 2024',
    en: 'Last Updated: December 2024'
  },
  sections: [
    {
      title: {
        ar: 'مقدمة',
        en: 'Introduction'
      },
      content: {
        ar: 'نحن في إتمام نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. تشرح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند استخدام خدماتنا.',
        en: 'At Etmam, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and protect your information when you use our services.'
      }
    },
    {
      title: {
        ar: 'المعلومات التي نجمعها',
        en: 'Information We Collect'
      },
      content: {
        ar: 'نجمع المعلومات التالية:\n\n• المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف، العنوان\n• معلومات الدفع: تفاصيل البطاقة الائتمانية (مشفرة)\n• معلومات الاستخدام: كيفية استخدامك لموقعنا وخدماتنا\n• ملفات تعريف الارتباط: لتحسين تجربتك على الموقع',
        en: 'We collect the following information:\n\n• Personal Information: Name, email, phone number, address\n• Payment Information: Credit card details (encrypted)\n• Usage Information: How you use our website and services\n• Cookies: To improve your experience on our site'
      }
    },
    {
      title: {
        ar: 'كيفية استخدام معلوماتك',
        en: 'How We Use Your Information'
      },
      content: {
        ar: 'نستخدم معلوماتك لـ:\n\n• تقديم خدماتنا لك\n• معالجة طلباتك والمدفوعات\n• التواصل معك حول خدماتنا\n• تحسين موقعنا وخدماتنا\n• الامتثال للقوانين واللوائح',
        en: 'We use your information to:\n\n• Provide our services to you\n• Process your orders and payments\n• Communicate with you about our services\n• Improve our website and services\n• Comply with laws and regulations'
      }
    },
    {
      title: {
        ar: 'مشاركة المعلومات',
        en: 'Information Sharing'
      },
      content: {
        ar: 'نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:\n\n• مع مقدمي الخدمات الموثوقين\n• عند الحاجة القانونية\n• لحماية حقوقنا أو حقوق الآخرين\n• مع موافقتك الصريحة',
        en: 'We do not sell or rent your personal information to third parties. We may only share your information in the following cases:\n\n• With trusted service providers\n• When legally required\n• To protect our rights or the rights of others\n• With your explicit consent'
      }
    },
    {
      title: {
        ar: 'حماية المعلومات',
        en: 'Information Protection'
      },
      content: {
        ar: 'نحن نستخدم تدابير أمنية متقدمة لحماية معلوماتك:\n\n• تشفير SSL/TLS\n• خوادم آمنة\n• وصول محدود للمعلومات\n• مراجعة أمنية منتظمة',
        en: 'We use advanced security measures to protect your information:\n\n• SSL/TLS encryption\n• Secure servers\n• Limited access to information\n• Regular security reviews'
      }
    },
    {
      title: {
        ar: 'ملفات تعريف الارتباط',
        en: 'Cookies'
      },
      content: {
        ar: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. يمكنك إدارة إعدادات ملفات تعريف الارتباط من خلال متصفحك.',
        en: 'We use cookies to improve your experience. You can manage your cookie settings through your browser.'
      }
    },
    {
      title: {
        ar: 'حقوقك',
        en: 'Your Rights'
      },
      content: {
        ar: 'لديك الحق في:\n\n• الوصول إلى معلوماتك الشخصية\n• تصحيح المعلومات غير الصحيحة\n• حذف معلوماتك\n• تقييد معالجة معلوماتك\n• نقل بياناتك\n• الاعتراض على معالجة معلوماتك',
        en: 'You have the right to:\n\n• Access your personal information\n• Correct inaccurate information\n• Delete your information\n• Restrict processing of your information\n• Transfer your data\n• Object to processing of your information'
      }
    },
    {
      title: {
        ar: 'الاحتفاظ بالبيانات',
        en: 'Data Retention'
      },
      content: {
        ar: 'نحتفظ بمعلوماتك الشخصية طالما كانت ضرورية لتقديم خدماتنا أو كما هو مطلوب قانونياً.',
        en: 'We retain your personal information for as long as necessary to provide our services or as required by law.'
      }
    },
    {
      title: {
        ar: 'التغييرات على السياسة',
        en: 'Policy Changes'
      },
      content: {
        ar: 'قد نحدث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر البريد الإلكتروني أو عبر موقعنا.',
        en: 'We may update this policy from time to time. We will notify you of any significant changes via email or through our website.'
      }
    },
    {
      title: {
        ar: 'التواصل معنا',
        en: 'Contact Us'
      },
      content: {
        ar: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر:\n\nالبريد الإلكتروني: privacy@etmam.com\nالهاتف: +966 11 123 4567\nالعنوان: الرياض، المملكة العربية السعودية',
        en: 'If you have any questions about this privacy policy, please contact us at:\n\nEmail: privacy@etmam.com\nPhone: +966 11 123 4567\nAddress: Riyadh, Saudi Arabia'
      }
    }
  ]
};
