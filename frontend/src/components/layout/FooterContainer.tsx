"use client";

import { useFooter } from '@/hooks/graphql/useGraphQL';
import { useQuery } from '@apollo/client/react';
import { GET_CONTACTS_INFO } from '@/lib/graphql/queries/content/contact_info';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FooterContainer() {
  const { language } = useLanguage();
  const { data: footerData } = useFooter();
  const { data: contactsData } = useQuery(GET_CONTACTS_INFO);

  const footer = footerData || null;

  // Map Strapi consulting/legal services to Footer expected shape { ar, en, href }
  const mapServices = (items?: Array<{ label?: string; href?: string }>) => {
    if (!items || !Array.isArray(items)) return undefined;
    return items.map((item) => ({ ar: item.label || '', en: item.label || '', href: item.href || '#' }));
  };

  const consultingServices = mapServices(footer?.consultingServices);
  const legalServices = mapServices(footer?.legalServices);

  // Contact info: pick first contact record if exists
  const contactInfo = (contactsData as any)?.contactInfos?.[0] || undefined;

  const logo = footer?.logo ? { url: footer.logo.url as string, name: footer.logo.name as string } : undefined;

  const coerceLocalized = (val: any): string | undefined => {
    if (val == null) return undefined;
    if (typeof val === 'string') return val;
    if (typeof val === 'object') return val?.[language] ?? undefined;
    return String(val);
  };

  const companyName = coerceLocalized(footer?.companyName);
  const companyTagline = coerceLocalized(footer?.companyTagline);
  const slogan = coerceLocalized(footer?.slogan);

  return (
    <Footer
      contactInfo={contactInfo}
      consultingServices={consultingServices as any}
      legalServices={legalServices as any}
      {...(logo ? { logo } : {})}
      {...(companyName ? { companyName } : {})}
      {...(companyTagline ? { companyTagline } : {})}
      {...(slogan ? { slogan } : {})}
    />
  );
}
