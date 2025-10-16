export interface OffersPageContent {
  hero: {
    title: {
      ar: string;
      en: string;
    };
    description: {
      ar: string;
      en: string;
    };
    buttons: {
      primary: {
        ar: string;
        en: string;
      };
      secondary: {
        ar: string;
        en: string;
      };
    };
    stats: {
      maxDiscount: {
        ar: string;
        en: string;
      };
      exclusiveOffers: {
        ar: string;
        en: string;
      };
      daysLeft: {
        ar: string;
        en: string;
      };
      qualityGuarantee: {
        ar: string;
        en: string;
      };
    };
  };
  offers: {
    sectionTitle: {
      ar: string;
      en: string;
    };
    sectionDescription: {
      ar: string;
      en: string;
    };
  };
}

export const offersPageContent: OffersPageContent = {
  hero: {
    title: {
      ar: 'العروض الحصرية',
      en: 'Exclusive Offers'
    },
    description: {
      ar: 'استفد من عروضنا الحصرية وخصوماتنا المميزة على جميع خدماتنا التجارية والإدارية.',
      en: 'Take advantage of our exclusive offers and special discounts on all our commercial and administrative services.'
    },
    buttons: {
      primary: {
        ar: 'استفد من العرض',
        en: 'Get the Offer'
      },
      secondary: {
        ar: 'عرض جميع العروض',
        en: 'View All Offers'
      }
    },
    stats: {
      maxDiscount: {
        ar: 'أقصى خصم',
        en: 'Maximum Discount'
      },
      exclusiveOffers: {
        ar: 'عروض حصرية',
        en: 'Exclusive Offers'
      },
      daysLeft: {
        ar: 'يوم متبقي',
        en: 'Days Left'
      },
      qualityGuarantee: {
        ar: 'ضمان الجودة',
        en: 'Quality Guarantee'
      }
    }
  },
  offers: {
    sectionTitle: {
      ar: 'العروض المتاحة الآن',
      en: 'Available Offers Now'
    },
    sectionDescription: {
      ar: 'اختر العرض المناسب لك واستفد من أفضل الأسعار والخدمات',
      en: 'Choose the offer that suits you and benefit from the best prices and services'
    }
  }
};
