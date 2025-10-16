export interface AboutPageContent {
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
      companiesFounded: {
        ar: string;
        en: string;
      };
      yearsExperience: {
        ar: string;
        en: string;
      };
      satisfactionRate: {
        ar: string;
        en: string;
      };
      technicalSupport: {
        ar: string;
        en: string;
      };
    };
  };
}

export const aboutPageContent: AboutPageContent = {
  hero: {
    title: {
      ar: 'من نحن في إتمام؟',
      en: 'Who are we at Etmam?'
    },
    description: {
      ar: 'نحن شريكك الموثوق لتأسيس الشركات وتقديم حلول إدارية متكاملة تتيح لك التركيز على نمو أعمالك.',
      en: 'We are your trusted partner for company formation and providing integrated management solutions that allow you to focus on the growth of your business.'
    },
    buttons: {
      primary: {
        ar: 'اكتشف المزيد',
        en: 'Discover More'
      },
      secondary: {
        ar: 'تواصل معنا',
        en: 'Contact Us'
      }
    },
    stats: {
      companiesFounded: {
        ar: 'شركة تم تأسيسها',
        en: 'Companies Founded'
      },
      yearsExperience: {
        ar: 'سنة خبرة',
        en: 'Years Experience'
      },
      satisfactionRate: {
        ar: 'معدل الرضا',
        en: 'Satisfaction Rate'
      },
      technicalSupport: {
        ar: 'دعم فني',
        en: 'Technical Support'
      }
    }
  }
};
