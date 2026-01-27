'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { BreadcrumbSchema } from '@/lib/structured-data';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function Breadcrumb() {
  const pathname = usePathname();
  const { language } = useLanguage();
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://etmam.com';
  
  // Parse pathname to create breadcrumb items
  const pathSegments = pathname.split('/').filter(Boolean);
  const locale = pathSegments[0];
  
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      name: language === 'ar' ? 'الرئيسية' : 'Home',
      url: `${baseUrl}/${locale}`,
    },
  ];
  
  // Build breadcrumb trail
  let currentPath = `/${locale}`;
  for (let i = 1; i < pathSegments.length; i++) {
    currentPath += `/${pathSegments[i]}`;
    
    // Map segment to readable name
    const segmentName = getSegmentName(pathSegments[i], language);
    
    breadcrumbItems.push({
      name: segmentName,
      url: `${baseUrl}${currentPath}`,
    });
  }
  
  // Don't show breadcrumb on homepage
  if (breadcrumbItems.length <= 1) {
    return null;
  }
  
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbItems.map((item, index) => (
            <li
              key={item.url}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              {index < breadcrumbItems.length - 1 ? (
                <>
                  <Link
                    href={item.url}
                    itemProp="item"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 1)} />
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={language === 'ar' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span 
                    itemProp="name" 
                    className="text-green-600 font-medium"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {item.name}
                  </span>
                  <meta itemProp="position" content={String(index + 1)} />
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

function getSegmentName(segment: string, language: string): string {
  const nameMap: Record<string, { ar: string; en: string }> = {
    blog: { ar: 'المدونة', en: 'Blog' },
    about: { ar: 'من نحن', en: 'About' },
    contact: { ar: 'تواصل معنا', en: 'Contact' },
    consulting: { ar: 'الاستشارات', en: 'Consulting' },
    legalservices: { ar: 'الخدمات القانونية', en: 'Legal Services' },
    offers: { ar: 'العروض', en: 'Offers' },
    packages: { ar: 'الباقات', en: 'Packages' },
    'privacy-policy': { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
    'terms-conditions': { ar: 'الشروط والأحكام', en: 'Terms & Conditions' },
  };
  
  return nameMap[segment]?.[language as 'ar' | 'en'] || segment;
}
