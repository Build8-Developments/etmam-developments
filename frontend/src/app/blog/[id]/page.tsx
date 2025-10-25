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
      
      {/* Hero Section - Simplified */}
      <div className="relative overflow-hidden">
        <div 
          className="relative py-16 lg:py-20 pt-28 md:pt-32 min-h-[400px] flex items-center"
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
            <div className="text-center text-white max-w-4xl mx-auto">
              {/* Author Info - Smaller and Elegant */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-white/20">
                    <Image
                      src="/men1.png"
                      alt={currentPost.author[language]}
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {language === 'ar' ? 'بواسطة' : 'By'} {currentPost.author[language]}
                  </span>
                  <span className="text-xs text-white/60">•</span>
                  <span className="text-xs text-white/80" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {currentPost.date}
                  </span>
                </div>
              </div>
              
              {/* Main Title */}
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {currentPost.title[language]}
              </h1>
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
                    className="prose prose-lg max-w-none mb-8"
                    style={{ 
                      fontFamily: 'var(--font-almarai)',
                      textAlign: language === 'ar' ? 'right' : 'left'
                    }}
                    dangerouslySetInnerHTML={{ __html: currentPost.content[language] }}
                  />

                  {/* Media Gallery */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-almarai)' }}>
                      {language === 'ar' ? 'معرض الصور والفيديوهات' : 'Media Gallery'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Sample Images */}
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src="/blog1.jpg"
                          alt="Article Image 1"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src="/blog2.jpg"
                          alt="Article Image 2"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Sample Video */}
                      <div className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          <p className="text-gray-600" style={{ fontFamily: 'var(--font-almarai)' }}>
                            {language === 'ar' ? 'فيديو توضيحي' : 'Explanatory Video'}
                          </p>
                        </div>
                      </div>
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src="/blog3.jpg"
                          alt="Article Image 3"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            </div>
                  
            {/* Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="space-y-8">
                
                {/* Author Bio Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 text-center" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {language === 'ar' ? 'عن الكاتب' : 'About the Author'}
                  </h3>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 mx-auto mb-4">
                      <Image
                        src="/men1.png"
                        alt={currentPost.author[language]}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: 'var(--font-almarai)' }}>
                      {currentPost.author[language]}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-almarai)' }}>
                      {language === 'ar' 
                        ? 'كاتب ومحرر محتوى متخصص في مجال الأعمال والخدمات التجارية مع خبرة تزيد عن 10 سنوات في الكتابة والتأليف.'
                        : 'Content writer and editor specialized in business and commercial services with over 10 years of experience in writing and authorship.'
                      }
                    </p>
                    <div className="flex flex-col gap-2">
                      <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium text-center" style={{ fontFamily: 'var(--font-almarai)' }}>
                        {language === 'ar' ? 'مقالات أخرى' : 'More Articles'}
                      </a>
                      <a href="#" className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium text-center" style={{ fontFamily: 'var(--font-almarai)' }}>
                        {language === 'ar' ? 'متابعة' : 'Follow'}
                      </a>
                    </div>
                  </div>
                </div>
                
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-800"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-800"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none text-gray-800"
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
