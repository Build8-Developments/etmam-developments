'use client';

import { 
  Header, 
  Footer,
  CTASection
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, blogCategories } from '@/mockData/blog';

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Unwrap params using React.use()
  const { id } = use(params);

  // Find the current post
  const currentPost = blogPosts.find(post => post.id === id);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === 'ar' ? 'المقال غير موجود' : 'Post Not Found'}
          </h1>
          <Link href="/blog" className="text-green-600 hover:text-green-700">
            {language === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog'}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Recent posts (last 3)
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="relative py-24 lg:py-40 pt-28 md:pt-32 min-h-[700px] flex items-center"
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
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center text-white max-w-5xl mx-auto">
              {/* Category Badge */}
              <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8">
                <span className="text-sm font-semibold" style={{ fontFamily: 'var(--font-almarai)' }}>
                  {language === 'ar' ? 'ثقافة بلدنا' : 'Our Country Culture'}
                </span>
              </div>
              
              {/* Main Title */}
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {currentPost.title[language]}
              </h1>
              
              {/* Subtitle/Description */}
              <p 
                className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-4xl mx-auto"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {currentPost.excerpt[language]}
              </p>
              
              {/* Post Meta in Hero */}
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-12">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg font-medium" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {currentPost.date}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-lg font-medium" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {language === 'ar' ? 'بواسطة' : 'By'} {currentPost.author[language]}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg font-medium" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {currentPost.readTime[language]} {language === 'ar' ? 'قراءة' : 'read'}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-lg font-medium" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {currentPost.comments} {language === 'ar' ? 'تعليق' : 'comments'}
                  </span>
                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className="animate-bounce">
                <svg className="w-8 h-8 mx-auto text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content - Article */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Article Image */}
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
                  <Image
                    src={currentPost.image}
                    alt={currentPost.title[language]}
                    fill
                    className="object-cover"
                  />
                  {currentPost.featured && (
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {language === 'ar' ? 'مميز' : 'Featured'}
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="p-6 sm:p-8">
                  {/* Category Tag */}
                  <div className="flex justify-end mb-6">
                    <div className="bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold">
                      {language === 'ar' ? 'ثقافة بلدنا' : 'Our Country Culture'}
                    </div>
                  </div>
                  
                  {/* Article Title */}
                  <h1 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight" 
                    style={{ 
                      fontFamily: 'var(--font-almarai)',
                      textAlign: language === 'ar' ? 'right' : 'left'
                    }}
                  >
                    {currentPost.title[language]}
                  </h1>

                  {/* Article Excerpt */}
                  <div className="mb-8">
                    <p 
                      className="text-gray-700 leading-relaxed text-lg mb-4" 
                      style={{ 
                        fontFamily: 'var(--font-almarai)',
                        textAlign: language === 'ar' ? 'right' : 'left'
                      }}
                    >
                      {currentPost.excerpt[language]}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 mb-8"></div>

                  {/* Article Body */}
                  <div 
                    className="prose prose-lg max-w-none"
                    style={{ 
                      fontFamily: 'var(--font-almarai)',
                      textAlign: language === 'ar' ? 'right' : 'left'
                    }}
                    dangerouslySetInnerHTML={{ __html: currentPost.content[language] }}
                  />
                </div>
              </article>
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
                     {blogCategories.slice(1).map((category) => (
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
                           {category.name[language]}
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
                              alt={post.title[language]}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2 mb-1 text-sm sm:text-base" style={{ fontFamily: 'var(--font-almarai)' }}>
                              {post.title[language]}
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

      {/* Comment Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 
                className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center" 
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' ? 'اترك تعليقا' : 'Leave a Comment'}
              </h2>
              
              <form className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      className="block text-sm font-medium text-gray-700 mb-2" 
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm font-medium text-gray-700 mb-2" 
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {language === 'ar' ? 'عنوان البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    />
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label 
                    className="block text-sm font-medium text-gray-700 mb-2" 
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'اكتب تعليق' : 'Write a Comment'}
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
                    placeholder={language === 'ar' ? 'اكتب تعليقك هنا...' : 'Write your comment here...'}
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  />
                </div>

                {/* Save Info Checkbox */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label 
                    htmlFor="save-info" 
                    className="mr-3 text-sm text-gray-600" 
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' 
                      ? 'احفظ اسمى بريدي الإلكتروني، والموقع الإلكتروني في هذا المتصفح لاستخدامه في المقبلة في تعليقى'
                      : 'Save my name, email, and website in this browser for my next comment'
                    }
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'إرسال التعليق' : 'Submit Comment'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}
