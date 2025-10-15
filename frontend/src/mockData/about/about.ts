import { AboutSectionProps } from '@/types';

export const aboutMockData: AboutSectionProps = {
  title: 'من نحن',
  subtitle: 'إتمام - شريكك الموثوق في عالم الأعمال',
  description: 'نحن فريق من الخبراء المتخصصين في مجال الخدمات التجارية والإدارية، نسعى لتقديم أفضل الحلول لعملائنا ومساعدتهم على تحقيق أهدافهم التجارية.',
  features: [
    {
      id: '1',
      title: 'رؤيتنا',
      description: 'أن نكون الشركة الرائدة في تقديم الخدمات التجارية والإدارية في المنطقة',
      icon: 'vision'
    },
    {
      id: '2',
      title: 'مهمتنا',
      description: 'تقديم حلول متكاملة وخدمات متميزة تساعد عملائنا على النمو والتطور',
      icon: 'mission'
    },
    {
      id: '3',
      title: 'قيمنا',
      description: 'الشفافية، الجودة، الالتزام، والابتكار في كل ما نقدمه',
      icon: 'values'
    }
  ],
  image: {
    url: '/about/company-image.jpg',
    alternativeText: 'صورة الشركة'
  }
};

export const aboutMockDataEn: AboutSectionProps = {
  title: 'About Us',
  subtitle: 'Etmam - Your Trusted Partner in Business',
  description: 'We are a team of experts specialized in commercial and administrative services, striving to provide the best solutions to our clients and help them achieve their business goals.',
  features: [
    {
      id: '1',
      title: 'Our Vision',
      description: 'To be the leading company in providing commercial and administrative services in the region',
      icon: 'vision'
    },
    {
      id: '2',
      title: 'Our Mission',
      description: 'Providing integrated solutions and excellent services that help our clients grow and develop',
      icon: 'mission'
    },
    {
      id: '3',
      title: 'Our Values',
      description: 'Transparency, quality, commitment, and innovation in everything we offer',
      icon: 'values'
    }
  ],
  image: {
    url: '/about/company-image.jpg',
    alternativeText: 'Company image'
  }
};
