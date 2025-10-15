'use client';

import { 
  Header, 
  Footer,
  CTASection,
  PartnersSection
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for blog posts
  const blogPosts = [
    {
      id: 'national-day-95',
      title: language === 'ar' ? 'عزنا بطبعنا - اليوم الوطني السعودي 95' : 'Our Pride by Nature - Saudi National Day 95',
      excerpt: language === 'ar' ? 'وهي تبدو غير منطقية أو مركبة من كلمات عشوائية. يقدم هذا المقال نظرة عامة حول الموضوع ويشرح أهم النقاط بطريقة مختصرة وواضحة.' : 'It seems illogical or composed of random words. This article provides an overview of the topic and explains the most important points in a concise and clear way.',
      content: language === 'ar' ? 'محتوى كامل للمقال حول اليوم الوطني السعودي والتقاليد والثقافة السعودية...' : 'Full article content about Saudi National Day and Saudi traditions and culture...',
      image: '/blog3.jpg',
      category: 'culture',
      author: language === 'ar' ? 'فاطمة السيد' : 'Fatima Al-Sayed',
      date: '2025-04-25',
      readTime: language === 'ar' ? '10 دقائق' : '10 minutes',
      comments: 0,
      featured: true
    },
    {
      id: 'business-growth',
      title: language === 'ar' ? 'زيادة الأعمال - دليل شامل' : 'Business Growth - Complete Guide',
      excerpt: language === 'ar' ? 'نصائح عملية لتنمية الأعمال وزيادة الإيرادات في السوق السعودي' : 'Practical tips for business growth and revenue increase in the Saudi market',
      content: language === 'ar' ? 'محتوى كامل حول استراتيجيات نمو الأعمال...' : 'Full content about business growth strategies...',
      image: '/blog3.jpg',
      category: 'business',
      author: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohammed',
      date: '2025-04-20',
      readTime: language === 'ar' ? '8 دقائق' : '8 minutes',
      comments: 5,
      featured: false
    },
    {
      id: 'legal-updates',
      title: language === 'ar' ? 'التحديثات القانونية الجديدة 2025' : 'New Legal Updates 2025',
      excerpt: language === 'ar' ? 'أهم التحديثات القانونية التي يجب على رجال الأعمال معرفتها' : 'Most important legal updates that business owners should know',
      content: language === 'ar' ? 'محتوى كامل حول التحديثات القانونية...' : 'Full content about legal updates...',
      image: '/blog3.jpg',
      category: 'legal',
      author: language === 'ar' ? 'سارة أحمد' : 'Sara Ahmed',
      date: '2025-04-18',
      readTime: language === 'ar' ? '12 دقائق' : '12 minutes',
      comments: 3,
      featured: false
    },
    {
      id: 'consulting-tips',
      title: language === 'ar' ? 'نصائح للاستشارات الناجحة' : 'Tips for Successful Consulting',
      excerpt: language === 'ar' ? 'كيفية تقديم استشارات فعالة وتحقيق نتائج ملموسة' : 'How to provide effective consulting and achieve tangible results',
      content: language === 'ar' ? 'محتوى كامل حول نصائح الاستشارات...' : 'Full content about consulting tips...',
      image: '/blog3.jpg',
      category: 'consulting',
      author: language === 'ar' ? 'محمد العلي' : 'Mohammed Al-Ali',
      date: '2025-04-15',
      readTime: language === 'ar' ? '6 دقائق' : '6 minutes',
      comments: 7,
      featured: false
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: language === 'ar' ? 'جميع الفئات' : 'All Categories' },
    { id: 'business', name: language === 'ar' ? 'ريادة الأعمال' : 'Entrepreneurship' },
    { id: 'legal', name: language === 'ar' ? 'القانونية' : 'Legal' },
    { id: 'consulting', name: language === 'ar' ? 'الاستشارية' : 'Consulting' },
    { id: 'culture', name: language === 'ar' ? 'الثقافة' : 'Culture' },
    { id: 'technology', name: language === 'ar' ? 'التكنولوجيا' : 'Technology' }
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Recent posts (last 3)
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Custom Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[500px]"
          style={{
            background: 'linear-gradient(86.9deg, rgba(27, 128, 54, 0.47) -14.86%, rgba(2, 6, 3, 0.47) 94%)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/bgabout.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center text-white">
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'المدونة والمقالات' : 'Blog & Articles'}
                </h1>
                
                <p 
                className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-4xl mx-auto"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' 
                  ? 'مقالات ونصائح مفيدة في مجال الأعمال والخدمات التجارية والإدارية لمساعدتك في اتخاذ القرارات الصحيحة'
                  : 'Useful articles and tips in the field of business and commercial and administrative services to help you make the right decisions'
                  }
                </p>
                
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <div className={`absolute inset-y-0 flex items-center pointer-events-none ${language === 'ar' ? 'right-0 pr-4' : 'left-0 pl-4'}`}>
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder={language === 'ar' ? 'البحث هنا...' : 'Search here...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 ${language === 'ar' ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'}`}
                    style={{ fontFamily: 'var(--font-almarai)' }}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                  {searchTerm && (
                  <button 
                      onClick={() => setSearchTerm('')}
                      className={`absolute inset-y-0 flex items-center text-white/70 hover:text-white transition-colors ${language === 'ar' ? 'left-0 pl-4' : 'right-0 pr-4'}`}
                  >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </button>
                  )}
                </div>
                </div>
              </div>
                      </div>
                    </div>
                  </div>
                  
      {/* Main Content */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-3 order-2 lg:order-1">

              {/* Blog Posts Grid */}
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="block">
                    <article 
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer w-full max-w-4xl mx-auto"
                      style={{
                        minHeight: '400px'
                      }}
                    >
                    {/* Post Image */}
                    <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 mx-auto mt-2">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-3xl"
                      />
                      {post.featured && (
                        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {language === 'ar' ? 'مميز' : 'Featured'}
                        </div>
                      )}
                    </div>

                    {/* Post Content */}
                    <div className="p-4 sm:p-6">
                      {/* Category Tag */}
                      <div className="flex justify-end mb-3">
                        <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                          {language === 'ar' ? 'ثقافة بلدنا' : 'Our Country Culture'}
                    </div>
                  </div>
                  
                      {/* Title */}
                      <h2 
                        className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight" 
                        style={{ 
                          fontFamily: 'var(--font-almarai)',
                          textAlign: language === 'ar' ? 'right' : 'left'
                        }}
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <div className="mb-4">
                        <p 
                          className="text-gray-700 leading-relaxed mb-1 text-sm sm:text-base" 
                          style={{ 
                            fontFamily: 'var(--font-almarai)',
                            textAlign: language === 'ar' ? 'right' : 'left'
                          }}
                        >
                          {post.excerpt}
                        </p>
                        <p 
                          className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3" 
                          style={{ 
                            fontFamily: 'var(--font-almarai)',
                            textAlign: language === 'ar' ? 'right' : 'left'
                          }}
                        >
                          {language === 'ar' ? 'أو بشكل عام أكثر:' : 'Or more generally:'}
                        </p>
                        
                        {/* Read More Button - Inline with text */}
                        <div className="flex justify-end mb-3">
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                            {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                          </button>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-200 mb-3"></div>

                      {/* Post Meta */}
                      <div 
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 w-full"
                      >
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span 
                              className="text-xs sm:text-sm"
                              style={{ 
                                fontFamily: 'Cairo',
                                fontWeight: 600,
                                color: 'rgba(102, 102, 102, 1)'
                              }}
                            >
                              {post.comments} {language === 'ar' ? 'تعليق' : 'comments'}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span 
                              className="text-xs sm:text-sm"
                              style={{ 
                                fontFamily: 'Cairo',
                                fontWeight: 600,
                                color: 'rgba(102, 102, 102, 1)'
                              }}
                            >
                              {language === 'ar' ? 'بواسطة' : 'By'} {post.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span 
                              className="text-xs sm:text-sm"
                              style={{ 
                                fontFamily: 'Cairo',
                                fontWeight: 600,
                                color: 'rgba(102, 102, 102, 1)'
                              }}
                            >
                              {post.readTime} {language === 'ar' ? 'قراءة' : 'read'}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span 
                            className="text-xs sm:text-sm"
                            style={{ 
                              fontFamily: 'Cairo',
                              fontWeight: 600,
                              color: 'rgba(102, 102, 102, 1)'
                            }}
                          >
                            {post.date}
                          </span>
                      </div>
                    </div>

                    </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-500 text-lg" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {language === 'ar' ? 'لم يتم العثور على مقالات' : 'No articles found'}
                      </div>
                    </div>
              )}
                  </div>
                  
            {/* Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="space-y-8">
                
                 {/* Categories */}
                 <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                   <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 text-center" style={{ fontFamily: 'var(--font-almarai)' }}>
                     {language === 'ar' ? 'فئات' : 'Categories'}
                   </h3>
                   <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
                     {categories.slice(1).map((category) => (
                       <button
                         key={category.id}
                         onClick={() => setSelectedCategory(category.id)}
                          className={`w-full relative overflow-hidden rounded-xl ${
                            selectedCategory === category.id ? 'ring-2 ring-green-500 shadow-lg' : ''
                          }`}
                         style={{
                           height: '60px',
                           background: selectedCategory === category.id 
                             ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(22, 163, 74, 0.9))'
                             : 'rgba(0, 0, 0, 0.27)',
                           backgroundImage: selectedCategory === category.id 
                             ? 'none' 
                             : 'url(/cat.jpg)',
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           backgroundRepeat: 'no-repeat'
                         }}
                       >
                         {/* Dark overlay - only when not selected */}
                         {selectedCategory !== category.id && (
                           <div className="absolute inset-0 bg-black/30"></div>
                         )}
                         
                         {/* Gradient overlay for selected state */}
                         {selectedCategory === category.id && (
                           <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-500/20"></div>
                         )}
                         
                         {/* Text */}
                         <div 
                           className="absolute inset-0 flex items-center justify-center px-2"
                           style={{
                             fontFamily: 'var(--font-almarai)',
                             fontWeight: 700,
                             fontSize: '14px',
                             textAlign: 'center',
                             color: selectedCategory === category.id 
                               ? 'rgba(255, 255, 255, 1)' 
                               : 'rgba(255, 255, 255, 1)',
                             textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
                           }}
                         >
                           {category.name}
                         </div>
                         
                         {/* Selected indicator */}
                         {selectedCategory === category.id && (
                           <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full shadow-md"></div>
                         )}
                       </button>
                     ))}
                   </div>
                 </div>

                {/* Recent Posts */}
                <div className="hidden sm:block bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {language === 'ar' ? 'مؤخراً' : 'Recently'}
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {recentPosts.map((post) => (
                      <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                        <div className="flex gap-3 sm:gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2 mb-1 text-sm sm:text-base" style={{ fontFamily: 'var(--font-almarai)' }}>
                              {post.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500" style={{ fontFamily: 'var(--font-almarai)' }}>
                              {post.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      <Footer />
    </div>
  );
}
