export interface ContactInfo {
  title: string;
  description: string;
  contactMethods: {
    type: 'phone' | 'email' | 'address' | 'whatsapp';
    label: string;
    value: string;
    icon: string;
  }[];
  officeHours: {
    days: string;
    hours: string;
  };
  mapLocation: {
    lat: number;
    lng: number;
    address: string;
  };
}

export const contactMockData: ContactInfo = {
  title: 'تواصل معنا',
  description: 'نحن هنا لمساعدتك في جميع احتياجاتك التجارية والإدارية. تواصل معنا اليوم واحصل على استشارة مجانية.',
  contactMethods: [
    {
      type: 'phone',
      label: 'الهاتف',
      value: '+966 11 123 4567',
      icon: 'phone'
    },
    {
      type: 'email',
      label: 'البريد الإلكتروني',
      value: 'info@etmam.com',
      icon: 'email'
    },
    {
      type: 'whatsapp',
      label: 'واتساب',
      value: '+966 50 123 4567',
      icon: 'whatsapp'
    },
    {
      type: 'address',
      label: 'العنوان',
      value: 'الرياض، المملكة العربية السعودية',
      icon: 'location'
    }
  ],
  officeHours: {
    days: 'الأحد - الخميس',
    hours: '8:00 ص - 6:00 م'
  },
  mapLocation: {
    lat: 24.7136,
    lng: 46.6753,
    address: 'الرياض، المملكة العربية السعودية'
  }
};

export const contactMockDataEn: ContactInfo = {
  title: 'Contact Us',
  description: 'We are here to help you with all your commercial and administrative needs. Contact us today and get a free consultation.',
  contactMethods: [
    {
      type: 'phone',
      label: 'Phone',
      value: '+966 11 123 4567',
      icon: 'phone'
    },
    {
      type: 'email',
      label: 'Email',
      value: 'info@etmam.com',
      icon: 'email'
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: '+966 50 123 4567',
      icon: 'whatsapp'
    },
    {
      type: 'address',
      label: 'Address',
      value: 'Riyadh, Saudi Arabia',
      icon: 'location'
    }
  ],
  officeHours: {
    days: 'Sunday - Thursday',
    hours: '8:00 AM - 6:00 PM'
  },
  mapLocation: {
    lat: 24.7136,
    lng: 46.6753,
    address: 'Riyadh, Saudi Arabia'
  }
};
