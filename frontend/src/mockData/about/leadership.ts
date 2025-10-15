export interface LeadershipMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: {
    url: string;
    alternativeText: string;
  };
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const leadershipMockData: LeadershipMember[] = [
  {
    id: '1',
    name: 'أحمد محمد العلي',
    position: 'الرئيس التنفيذي',
    bio: 'خبرة تزيد عن 15 عاماً في مجال الخدمات التجارية والإدارية، حاصل على ماجستير في إدارة الأعمال من جامعة الملك سعود.',
    image: {
      url: '/leadership/ahmed-ali.jpg',
      alternativeText: 'صورة أحمد محمد العلي'
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ahmed-ali',
      email: 'ahmed.ali@etmam.com'
    }
  },
  {
    id: '2',
    name: 'فاطمة عبدالله السعد',
    position: 'مديرة العمليات',
    bio: 'خبرة 12 عاماً في إدارة العمليات والخدمات الإدارية، متخصصة في تحسين العمليات وزيادة الكفاءة.',
    image: {
      url: '/leadership/fatima-saad.jpg',
      alternativeText: 'صورة فاطمة عبدالله السعد'
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/fatima-saad',
      email: 'fatima.saad@etmam.com'
    }
  },
  {
    id: '3',
    name: 'محمد خالد الرشيد',
    position: 'مدير الشؤون القانونية',
    bio: 'محامي متخصص في القانون التجاري والشركات، خبرة 10 أعوام في الاستشارات القانونية.',
    image: {
      url: '/leadership/mohammed-rashid.jpg',
      alternativeText: 'صورة محمد خالد الرشيد'
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/mohammed-rashid',
      email: 'mohammed.rashid@etmam.com'
    }
  }
];

export const leadershipMockDataEn: LeadershipMember[] = [
  {
    id: '1',
    name: 'Ahmed Mohammed Al-Ali',
    position: 'Chief Executive Officer',
    bio: 'Over 15 years of experience in commercial and administrative services, holds a Master\'s degree in Business Administration from King Saud University.',
    image: {
      url: '/leadership/ahmed-ali.jpg',
      alternativeText: 'Ahmed Mohammed Al-Ali photo'
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ahmed-ali',
      email: 'ahmed.ali@etmam.com'
    }
  },
  {
    id: '2',
    name: 'Fatima Abdullah Al-Saad',
    position: 'Operations Manager',
    bio: '12 years of experience in operations management and administrative services, specialized in process improvement and efficiency enhancement.',
    image: {
      url: '/leadership/fatima-saad.jpg',
      alternativeText: 'Fatima Abdullah Al-Saad photo'
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/fatima-saad',
      email: 'fatima.saad@etmam.com'
    }
  },
  {
    id: '3',
    name: 'Mohammed Khalid Al-Rashid',
    position: 'Legal Affairs Manager',
    bio: 'Lawyer specialized in commercial and corporate law, 10 years of experience in legal consultations.',
    image: {
      url: '/leadership/mohammed-rashid.jpg',
      alternativeText: 'Mohammed Khalid Al-Rashid photo'
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/mohammed-rashid',
      email: 'mohammed.rashid@etmam.com'
    }
  }
];
