export interface PackagesPageContent {
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
      packagesCount: {
        ar: string;
        en: string;
      };
      startingPrice: {
        ar: string;
        en: string;
      };
      qualityGuarantee: {
        ar: string;
        en: string;
      };
      warrantyDays: {
        ar: string;
        en: string;
      };
    };
  };
  packages: {
    popularBadge: {
      ar: string;
      en: string;
    };
    chooseButton: {
      ar: string;
      en: string;
    };
  };
}

export const packagesPageContent: PackagesPageContent = {
  hero: {
    title: {
      ar: 'الباقات والخطط',
      en: 'Packages & Plans'
    },
    description: {
      ar: 'اختر الباقة المناسبة لاحتياجاتك التجارية والإدارية مع أفضل الأسعار والخدمات المتميزة.',
      en: 'Choose the package that suits your business and administrative needs with the best prices and premium services.'
    },
    buttons: {
      primary: {
        ar: 'اختر باقة',
        en: 'Choose Package'
      },
      secondary: {
        ar: 'مقارنة الباقات',
        en: 'Compare Packages'
      }
    },
    stats: {
      packagesCount: {
        ar: 'باقات متاحة',
        en: 'Available Packages'
      },
      startingPrice: {
        ar: 'ريال بداية من',
        en: 'SAR Starting From'
      },
      qualityGuarantee: {
        ar: 'ضمان الجودة',
        en: 'Quality Guarantee'
      },
      warrantyDays: {
        ar: 'يوم ضمان',
        en: 'Days Guarantee'
      }
    }
  },
  packages: {
    popularBadge: {
      ar: 'الأكثر شعبية',
      en: 'Most Popular'
    },
    chooseButton: {
      ar: 'اختر الباقة',
      en: 'Choose Package'
    }
  }
};
