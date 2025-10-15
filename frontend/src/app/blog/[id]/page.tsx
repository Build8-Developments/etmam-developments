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

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Unwrap params using React.use()
  const { id } = use(params);

  // Mock data for blog posts
  const blogPosts = [
    {
      id: 'national-day-95',
      title: language === 'ar' ? 'عزنا بطبعنا - اليوم الوطني السعودي 95' : 'Our Pride by Nature - Saudi National Day 95',
      excerpt: language === 'ar' ? 'وهي تبدو غير منطقية أو مركبة من كلمات عشوائية. يقدم هذا المقال نظرة عامة حول الموضوع ويشرح أهم النقاط بطريقة مختصرة وواضحة.' : 'It seems illogical or composed of random words. This article provides an overview of the topic and explains the most important points in a concise and clear way.',
      content: language === 'ar' ? `
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">تحديد نوع الكيان القانوني</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">أول خطوة في تأسيس شركة في المملكة العربية السعودية هي تحديد نوع الكيان القانوني المناسب لطبيعة نشاطك التجاري. يمكنك الاختيار من بين عدة خيارات مثل:</p>
          <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>شركة ذات مسؤولية محدودة</li>
            <li>شركة مساهمة</li>
            <li>مؤسسة فردية</li>
            <li>شركة تضامن</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">حجز الاسم التجاري</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">بعد تحديد نوع الكيان، يجب حجز الاسم التجاري من خلال وزارة التجارة. يجب أن يكون الاسم فريداً ولا يتعارض مع الأسماء المسجلة مسبقاً. هذه العملية مهمة جداً لأنها تحدد هوية شركتك في السوق.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">يمكنك حجز الاسم التجاري إلكترونياً من خلال منصة "استثمر" أو زيارة فروع وزارة التجارة المنتشرة في جميع أنحاء المملكة. تأكد من أن الاسم يعكس طبيعة نشاطك التجاري ويسهل على العملاء تذكره.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">استخراج السجل التجاري</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">السجل التجاري هو الوثيقة الرسمية التي تثبت تسجيل شركتك لدى وزارة التجارة. يمكن استخراجه إلكترونياً أو من خلال زيارة فروع الوزارة. هذه الوثيقة مطلوبة لجميع المعاملات التجارية والمالية.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">تأكد من تحديث بيانات السجل التجاري بشكل دوري، خاصة عند تغيير عنوان الشركة أو إضافة أنشطة تجارية جديدة. هذا يساعد في الحفاظ على صحة البيانات الرسمية لشركتك.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">الحصول على التراخيص المطلوبة</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">حسب طبيعة النشاط التجاري، قد تحتاج إلى تراخيص إضافية من الجهات الحكومية المختلفة مثل الهيئة العامة للاستثمار أو وزارة الصحة. هذه التراخيص ضرورية لضمان الامتثال للقوانين واللوائح المحلية.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">تختلف متطلبات التراخيص حسب نوع النشاط التجاري. على سبيل المثال، المطاعم تحتاج ترخيص من وزارة الصحة، بينما الشركات التقنية قد تحتاج موافقة من الهيئة العامة للاتصالات وتقنية المعلومات.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">فتح الحساب البنكي</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">بعد الحصول على السجل التجاري، يمكنك فتح حساب بنكي للشركة. ستحتاج إلى تقديم السجل التجاري وبطاقة الهوية الوطنية للمالك أو المدراء المفوضين.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">اختر البنك المناسب لاحتياجات شركتك. بعض البنوك تقدم خدمات خاصة للشركات الصغيرة والمتوسطة، بينما أخرى تركز على الشركات الكبيرة. قارن بين الخدمات والرسوم قبل اتخاذ القرار.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">التأمين والامتثال الضريبي</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">تأكد من الحصول على التأمين المناسب لشركتك، خاصة تأمين المسؤولية العامة. كما يجب التسجيل في الهيئة العامة للزكاة والدخل للامتثال للقوانين الضريبية.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">استعن بمحاسب قانوني لمساعدتك في إعداد التقارير المالية والضريبية. هذا سيوفر عليك الوقت والجهد ويضمن الامتثال للقوانين المحلية.</p>

          <div class="bg-green-50 border-r-4 border-green-500 p-6 my-8">
            <h3 class="text-xl font-bold text-green-800 mb-3">نصيحة مهمة</h3>
            <p class="text-green-700">تأكد من تحديث جميع الوثائق والتراخيص بشكل دوري. القوانين واللوائح تتغير باستمرار، والامتثال لها يحمي شركتك من المشاكل القانونية.</p>
          </div>
        </div>
      ` : 'Full article content about Saudi National Day and Saudi traditions and culture...',
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

  // Find the current post
  const currentPost = blogPosts.find(post => post.id === id) || blogPosts[0];
  
  if (!currentPost) {
    return <div>Post not found</div>;
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
                {currentPost.title}
              </h1>
              
              {/* Subtitle/Description */}
              <p 
                className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-4xl mx-auto"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {currentPost.excerpt}
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
                    {language === 'ar' ? 'بواسطة' : 'By'} {currentPost.author}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg font-medium" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {currentPost.readTime} {language === 'ar' ? 'قراءة' : 'read'}
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
                    alt={currentPost.title}
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
                    {currentPost.title}
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
                      {currentPost.excerpt}
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
                    dangerouslySetInnerHTML={{ __html: currentPost.content }}
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
