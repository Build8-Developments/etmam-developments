'use client';

import { use } from 'react';
import { 
  Header, 
  Footer,
  CTASection,
  ConsultationSection
} from '@/components';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useLanguage } from "@/contexts/LanguageContext";
import { useOfferDetailBySlug } from '@/hooks/graphql';
import { offerDetails } from '@/mockData/offers/offerDetails';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

export default function OfferDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { language } = useLanguage();
  const { slug } = use(params);
  const { data: strapiOfferData } = useOfferDetailBySlug(slug);

  // Find mock offer by slug
  const mockOfferData = useMemo(() => {
    return offerDetails.find(offer => offer.slug === slug);
  }, [slug]);

  // Use Strapi data if available, otherwise use mock data
  const offerData = useMemo(() => {
    if (strapiOfferData) {
      return strapiOfferData;
    }
    
    if (mockOfferData) {
      // Transform mock data to match Strapi format
      return {
        documentId: mockOfferData.documentId || mockOfferData.slug,
        slug: mockOfferData.slug,
        title: mockOfferData.title[language] || mockOfferData.title.ar || mockOfferData.title.en,
        subtitle: mockOfferData.subtitle[language] || mockOfferData.subtitle.ar || mockOfferData.subtitle.en,
        description: mockOfferData.description[language] || mockOfferData.description.ar || mockOfferData.description.en,
        image: mockOfferData.image,
        discount: mockOfferData.discount,
        originalPrice: mockOfferData.originalPrice,
        discountedPrice: mockOfferData.discountedPrice,
        currency: mockOfferData.currency || 'SAR',
        features: mockOfferData.features?.map(feature => ({
          title: feature.title[language] || feature.title.ar || feature.title.en,
          description: feature.description[language] || feature.description.ar || feature.description.en,
          icon: feature.icon
        })),
        benefits: mockOfferData.benefits?.map(benefit => ({
          title: benefit.title[language] || benefit.title.ar || benefit.title.en,
          description: benefit.description[language] || benefit.description.ar || benefit.description.en,
          icon: benefit.icon
        })),
        validUntil: mockOfferData.validUntil,
        termsAndConditions: mockOfferData.termsAndConditions?.[language] || mockOfferData.termsAndConditions?.ar || mockOfferData.termsAndConditions?.en,
        callToAction: mockOfferData.callToAction ? {
          label: mockOfferData.callToAction.label[language] || mockOfferData.callToAction.label.ar || mockOfferData.callToAction.label.en,
          href: mockOfferData.callToAction.href
        } : undefined
      };
    }
    
    return null;
  }, [strapiOfferData, mockOfferData, language]);

  // Helper function to get string value from Strapi i18n field
  const getLocalizedValue = (value: any): string => {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object' && value !== null) {
      return value[language] || value.ar || value.en || '';
    }
    return String(value);
  };

  // Helper function to convert Strapi richText blocks to HTML
  const richTextToHTML = (richText: any): string => {
    if (!richText) return '';
    if (typeof richText === 'string') return richText;
    if (richText.blocks && Array.isArray(richText.blocks)) {
      return richText.blocks.map((block: any) => {
        if (block.type === 'paragraph') {
          const text = block.children?.map((child: any) => child.text || '').join('') || '';
          return `<p>${text}</p>`;
        }
        if (block.type === 'heading') {
          const text = block.children?.map((child: any) => child.text || '').join('') || '';
          const level = block.level || 2;
          return `<h${level}>${text}</h${level}>`;
        }
        if (block.type === 'list') {
          const items = block.children?.map((child: any) => {
            const itemText = child.children?.map((c: any) => c.text || '').join('') || '';
            return `<li>${itemText}</li>`;
          }).join('') || '';
          return block.format === 'ordered' ? `<ol>${items}</ol>` : `<ul>${items}</ul>`;
        }
        return '';
      }).join('');
    }
    return '';
  };

  if (!offerData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 
            className="text-2xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            {language === 'ar' ? 'العرض غير موجود' : 'Offer Not Found'}
          </h1>
          <Link 
            href="/offers" 
            className="text-green-600 hover:text-green-700"
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            {language === 'ar' ? 'العودة إلى العروض' : 'Back to Offers'}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const offer = offerData;
  const imageUrl = offer.image?.url 
    ? (offer.image.url.startsWith('http') || offer.image.url.startsWith('/') 
        ? offer.image.url 
        : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${offer.image.url}`)
    : '/offer.jpg';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <AnimatedSection animation="fadeIn" delay={0}>
        <div className="relative overflow-hidden pt-28 md:pt-32">
          <div 
            className="relative py-20 lg:py-32 min-h-[400px]"
            style={{
              background: 'linear-gradient(86.9deg, rgba(27, 128, 54, 0.47) -14.86%, rgba(2, 6, 3, 0.47) 94%)',
              backdropFilter: 'blur(4px)',
              pointerEvents: 'none',
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                pointerEvents: 'none',
              }}
            />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ pointerEvents: "auto" }}>
              <div className="max-w-4xl mx-auto text-center text-white">
                {/* Back Button */}
                <div className="mb-8 flex justify-start">
                  <Link
                    href="/offers"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
                    style={{ fontFamily: 'var(--font-almarai)', pointerEvents: "auto" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {language === 'ar' ? 'العودة' : 'Back'}
                  </Link>
                </div>

                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {getLocalizedValue(offer.title)}
                </h1>
                
                {offer.subtitle && (
                  <p 
                    className="text-lg md:text-xl mb-8 leading-relaxed opacity-90"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {getLocalizedValue(offer.subtitle)}
                  </p>
                )}

                {/* Price Section */}
                {(offer.discountedPrice || offer.originalPrice) && (
                  <div className="flex items-center justify-center gap-4 mb-8">
                    {offer.discountedPrice && (
                      <div className="text-4xl font-bold">
                        {offer.discountedPrice} {offer.currency || 'SAR'}
                      </div>
                    )}
                    {offer.originalPrice && offer.discountedPrice && (
                      <div className="text-2xl line-through opacity-60">
                        {offer.originalPrice} {offer.currency || 'SAR'}
                      </div>
                    )}
                    {offer.discount && (
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                        -{offer.discount}%
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <AnimatedSection animation="fadeInUp" delay={100}>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Description */}
              {offer.description && (
                <div 
                  className="prose prose-lg max-w-none mb-12"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                  dangerouslySetInnerHTML={{ __html: richTextToHTML(offer.description) || getLocalizedValue(offer.description) }}
                />
              )}

              {/* Features */}
              {offer.features && offer.features.length > 0 && (
                <div className="mb-12">
                  <h2 
                    className="text-3xl font-bold text-gray-900 mb-8"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'المميزات' : 'Features'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {offer.features.map((feature: any, index: number) => (
                      <div 
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                      >
                        {feature.icon?.url && (
                          <Image
                            src={feature.icon.url.startsWith('http') || feature.icon.url.startsWith('/') 
                              ? feature.icon.url 
                              : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${feature.icon.url}`}
                            alt={getLocalizedValue(feature.title)}
                            width={48}
                            height={48}
                            className="mb-4"
                          />
                        )}
                        <h3 
                          className="text-xl font-bold text-gray-900 mb-2"
                          style={{ fontFamily: 'var(--font-almarai)' }}
                        >
                          {getLocalizedValue(feature.title)}
                        </h3>
                        <p 
                          className="text-gray-600"
                          style={{ fontFamily: 'var(--font-almarai)' }}
                        >
                          {getLocalizedValue(feature.description)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {offer.benefits && offer.benefits.length > 0 && (
                <div className="mb-12">
                  <h2 
                    className="text-3xl font-bold text-gray-900 mb-8"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'الفوائد' : 'Benefits'}
                  </h2>
                  <div className="space-y-4">
                    {offer.benefits.map((benefit: any, index: number) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 bg-green-50 rounded-xl p-6 border border-green-200"
                      >
                        {benefit.icon?.url ? (
                          <Image
                            src={benefit.icon.url.startsWith('http') || benefit.icon.url.startsWith('/') 
                              ? benefit.icon.url 
                              : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${benefit.icon.url}`}
                            alt={getLocalizedValue(benefit.title)}
                            width={32}
                            height={32}
                            className="flex-shrink-0"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        <div>
                          <h3 
                            className="text-lg font-bold text-gray-900 mb-1"
                            style={{ fontFamily: 'var(--font-almarai)' }}
                          >
                            {getLocalizedValue(benefit.title)}
                          </h3>
                          <p 
                            className="text-gray-600"
                            style={{ fontFamily: 'var(--font-almarai)' }}
                          >
                            {getLocalizedValue(benefit.description)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Terms and Conditions */}
              {offer.termsAndConditions && (
                <div className="mb-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}
                  </h3>
                  <p 
                    className="text-gray-700"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {getLocalizedValue(offer.termsAndConditions)}
                  </p>
                </div>
              )}

              {/* Valid Until */}
              {offer.validUntil && (
                <div className="mb-8 text-center">
                  <p 
                    className="text-lg text-gray-600 mb-2"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'صالح حتى:' : 'Valid Until:'}
                  </p>
                  <p 
                    className="text-2xl font-bold text-green-600"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {new Date(offer.validUntil).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
                  </p>
                </div>
              )}

              {/* Call to Action */}
              {offer.callToAction && (
                <div className="text-center">
                  <Link
                    href={offer.callToAction.href || '/contact'}
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {getLocalizedValue(offer.callToAction.label) || (language === 'ar' ? 'احصل على العرض الآن' : 'Get Offer Now')}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Consultation Section */}
      <AnimatedSection animation="fadeInUp" delay={200}>
        <ConsultationSection />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="scaleIn" delay={100}>
        <CTASection />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}

