'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  overlays: {
    type: 'speech' | 'box';
    text: string;
    position: 'top-right' | 'top-left' | 'middle-right' | 'bottom-center';
  }[];
}

const BlogSection: React.FC = () => {
  const { language } = useLanguage();

  // Dictionary for Arabic and English content
  const DICT = {
    sectionTitle: { ar: 'المدونة', en: 'Blog' },
    post1Title: { ar: '3 حيل بسيطة تجذب عملائك', en: '3 Simple Tricks to Attract Your Customers' },
    post2Title: { ar: 'لماذا المحتوى يجذب جمهورك؟', en: 'Why Does Content Attract Your Audience?' },
    post3Title: { ar: '3 حيل بسيطة تجذب عملائك', en: '3 Simple Tricks to Attract Your Customers' },
    description: { ar: 'وهي تبدو غير منطقية أو مركبة من كلمات عشوائية.', en: 'And it seems illogical or composed of random words.' },
    date: { ar: '26 أغسطس, 2023', en: '26 Aug, 2023' },
    location: { ar: 'سوهاج • 25 أبريل, 2025', en: 'Sohag • April 25, 2025' },
  } as const;

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: DICT.post1Title[language],
      description: DICT.description[language],
      image: "/blog1.jpg",
      date: DICT.date[language],
      location: DICT.location[language],
      overlays: []
    },
    {
      id: 2,
      title: DICT.post2Title[language],
      description: DICT.description[language],
      image: "/blog2.jpg",
      date: DICT.date[language],
      location: DICT.location[language],
      overlays: []
    },
    {
      id: 3,
      title: DICT.post3Title[language],
      description: DICT.description[language],
      image: "/blog3.jpg",
      date: DICT.date[language],
      location: DICT.location[language],
      overlays: []
    }
  ];

  return (
    <section 
      className="py-8 sm:py-12 lg:py-16 bg-gray-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 
            className="font-almarai text-gray-800 mb-4"
            style={{
              fontSize: 'clamp(24px, 5vw, 36px)',
              fontWeight: '700',
              lineHeight: '1.2',
              direction: language === 'ar' ? 'rtl' : 'ltr',
            }}
          >
            {DICT.sectionTitle[language]}
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center"
          style={{
            gap: 'clamp(16px, 4vw, 32px)',
          }}
        >
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
              style={{
                width: 'min(398px, 100%)',
                height: 'clamp(400px, 50vw, 541px)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '398px',
              }}
            >
              {/* Image Container */}
              <div 
                className="relative overflow-hidden w-full"
                style={{
                  height: 'clamp(200px, 35vw, 316px)',
                  marginTop: '-1px',
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div 
                className="p-4 sm:p-6"
                style={{
                  paddingTop: 'clamp(16px, 3vw, 20px)',
                  paddingLeft: 'clamp(16px, 4vw, 24px)',
                  paddingRight: 'clamp(16px, 4vw, 24px)',
                  paddingBottom: 'clamp(16px, 4vw, 24px)',
                }}
              >
                {/* Metadata */}
                <div 
                  className={`flex items-center ${language === 'ar' ? 'justify-between' : 'justify-between'} mb-3 sm:mb-4`}
                  style={{
                    marginBottom: 'clamp(12px, 2vw, 16px)',
                    flexDirection: language === 'ar' ? 'row-reverse' : 'row',
                  }}
                >
                  {/* Date Box Container */}
                  <div 
                    className="relative"
                    style={{
                      width: '87.95px',
                      height: '103px',
                      backgroundColor: 'rgba(144, 192, 84, 1)',
                      marginTop: '-100px',
                      marginLeft: '-25px',
                    }}
                  >
                    {/* Day Number - No Background */}
                    <div 
                      className="absolute text-center flex items-center justify-center"
                      style={{
                        width: '40.68px',
                        height: '36px',
                        top: '14.5px',
                        left: '23.8px',
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: '600',
                        fontSize: '36px',
                        lineHeight: '36px',
                        letterSpacing: '0%',
                        color: 'rgba(255, 255, 255, 1)',
                      }}
                    >
                      26
                    </div>
                    
                    {/* Month and Year - Green Box */}
                    <div 
                      className="absolute text-center flex items-center justify-center"
                      style={{
                        width: '87.95px',
                        height: '37px',
                        top: '66px',
                        backgroundColor: 'rgba(42, 154, 91, 1)',
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: '400',
                        fontSize: '15px',
                        lineHeight: '27px',
                        letterSpacing: '0%',
                        color: 'rgba(255, 255, 255, 1)',
                      }}
                    >
                      {language === 'ar' ? 'أغسطس, 2023' : 'Aug, 2023'}
                    </div>
                  </div>
                  
                  <div 
                    className="text-gray-600 text-sm"
                    style={{
                      fontSize: 'clamp(10px, 1.5vw, 12px)',
                      fontWeight: '400',
                      direction: language === 'ar' ? 'rtl' : 'ltr',
                      color: '#6b7280',
                    }}
                  >
                    {post.location}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="font-bold text-gray-800 font-almarai"
                  style={{
                    fontSize: 'clamp(14px, 2.5vw, 18px)',
                    fontWeight: '700',
                    lineHeight: '1.4',
                    direction: language === 'ar' ? 'rtl' : 'ltr',
                    color: '#1f2937',
                    marginBottom: 'clamp(8px, 2vw, 12px)',
                    textAlign: language === 'ar' ? 'right' : 'left',
                  }}
                >
                  {post.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-gray-600 font-almarai"
                  style={{
                    fontSize: 'clamp(12px, 2vw, 14px)',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    direction: language === 'ar' ? 'rtl' : 'ltr',
                    color: '#6b7280',
                    marginBottom: '0',
                    textAlign: language === 'ar' ? 'right' : 'left',
                  }}
                >
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
