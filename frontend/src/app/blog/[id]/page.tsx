'use client';

import { 
  Header, 
  Footer,
  CTASection,
  ConsultationSection
} from '@/components';
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/contexts/ToastContext";
import { use, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts as mockBlogPosts, blogCategories } from '@/mockData/blog';
import { useBlogPostBySlug, useBlogPostsNew, useBlogComments, useCreateBlogComment } from '@/hooks/graphql/useGraphQL';
import { GET_BLOG_POST_COMMENTS } from '@/lib/graphql/queries/content/blog';

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  
  // Unwrap params using React.use()
  const { id } = use(params);

  // Try to get post from GraphQL by slug
  const { data: blogPostData } = useBlogPostBySlug(id);
  const { data: allBlogPosts } = useBlogPostsNew();
  const { createComment, loading: submittingComment } = useCreateBlogComment();

  // Transform GraphQL data or use mock data
  const currentPost = useMemo(() => {
    // Try GraphQL data first
    if (blogPostData) {
      const publishedDate = blogPostData.publishedAt ? new Date(blogPostData.publishedAt).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US') : '';
      
      return {
        id: blogPostData.slug || blogPostData.documentId || '',
        title: { ar: blogPostData.title || '', en: blogPostData.title || '' },
        excerpt: { ar: blogPostData.summary || '', en: blogPostData.summary || '' },
        content: { ar: blogPostData.content || '', en: blogPostData.content || '' },
        image: blogPostData.banner?.url || '/blog1.jpg',
        author: { ar: blogPostData.blog_author?.name || '', en: blogPostData.blog_author?.name || '' },
        date: publishedDate,
        category: blogPostData.blog_category?.name || 'all',
        featured: blogPostData.featured_post || false,
        comments: blogPostData.blog_comments?.filter((c: any) => c.approved).length || 0,
        readTime: { ar: '5 دقائق', en: '5 min' },
        tags: { ar: [], en: [] }
      };
    }

    // Fall back to mock data
    return mockBlogPosts.find(post => post.id === id);
  }, [blogPostData, id, language]);

  // Get blog post documentId for comments
  const blogPostDocumentId = useMemo(() => {
    if (blogPostData?.documentId) {
      return blogPostData.documentId;
    }
    // If using mock data, return null (comments can't be submitted)
    return null;
  }, [blogPostData]);
  
  // Check if we're using mock data (no GraphQL data available)
  const isUsingMockData = useMemo(() => {
    return !blogPostData || !blogPostData.documentId;
  }, [blogPostData]);

  // Get comments for this blog post
  const { data: commentsData } = useBlogComments(blogPostDocumentId || '');

  // Get approved comments from current post or comments query
  const approvedComments = useMemo(() => {
    if (commentsData && commentsData.length > 0) {
      return commentsData;
    }
    // Fallback to comments from blog post data
    if (blogPostData?.blog_comments) {
      return blogPostData.blog_comments.filter((c: any) => c.approved);
    }
    return [];
  }, [commentsData, blogPostData]);

  const handleCommentInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Check if user has already commented (same email for this blog post)
  const hasAlreadyCommented = useMemo(() => {
    if (!commentForm.email || !approvedComments.length) return false;
    return approvedComments.some((comment: any) => 
      comment.email?.toLowerCase() === commentForm.email.toLowerCase()
    );
  }, [commentForm.email, approvedComments]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!commentForm.name || !commentForm.email || !commentForm.comment) {
      showToast(
        language === 'ar' 
          ? 'يرجى ملء جميع الحقول المطلوبة'
          : 'Please fill in all required fields',
        'warning',
        4000
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(commentForm.email)) {
      showToast(
        language === 'ar' 
          ? 'يرجى إدخال بريد إلكتروني صحيح'
          : 'Please enter a valid email address',
        'warning',
        4000
      );
      return;
    }

    // Check if user has already commented
    if (hasAlreadyCommented) {
      showToast(
        language === 'ar' 
          ? 'لقد قمت بإرسال تعليق على هذا المقال من قبل. يمكنك إرسال تعليق واحد فقط لكل مقال.'
          : 'You have already submitted a comment on this article. You can only submit one comment per article.',
        'warning',
        6000
      );
      return;
    }

    if (!blogPostDocumentId) {
      showToast(
        language === 'ar' 
          ? 'لا يمكن إرسال التعليق في الوقت الحالي. يرجى التأكد من اتصال Strapi والمحاولة مرة أخرى.'
          : 'Cannot submit comment at the moment. Please ensure Strapi is connected and try again.',
        'error',
        6000
      );
      console.warn('Cannot submit comment: blogPostDocumentId is missing. Blog post may be using mock data.');
      return;
    }

    setIsSubmittingComment(true);

    try {
      await createComment({
        variables: {
          name: commentForm.name,
          email: commentForm.email,
          comment: commentForm.comment,
          blogPostId: blogPostDocumentId
        },
        refetchQueries: blogPostDocumentId ? [{
          query: GET_BLOG_POST_COMMENTS,
          variables: { blogPostId: blogPostDocumentId }
        }] : []
      });

      // Reset form
      setCommentForm({
        name: '',
        email: '',
        comment: ''
      });
    } catch (error) {
      // Error is handled by mutation onError
      console.error('Comment submission error:', error);
    } finally {
      setIsSubmittingComment(false);
    }
  };

  // Recent posts (last 3) - use GraphQL if available
  const recentPosts = useMemo(() => {
    if (allBlogPosts && allBlogPosts.length > 0) {
      return allBlogPosts.slice(0, 3).map((post: any) => ({
        id: post.slug || '',
        title: { ar: post.title || '', en: post.title || '' },
        image: post.banner?.url || '/blog1.jpg',
        date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US') : ''
      }));
    }
    return mockBlogPosts.slice(0, 3);
  }, [allBlogPosts, language]);

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
                    {recentPosts.map((post: any) => (
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

      {/* Comments Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            
            {/* Existing Comments */}
            {approvedComments.length > 0 && (
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h2 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800" 
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'التعليقات' : 'Comments'}
                  </h2>
                  <div className="bg-green-100 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold">
                    {approvedComments.length} {language === 'ar' ? 'تعليق' : approvedComments.length === 1 ? 'comment' : 'comments'}
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {approvedComments.map((comment: any, index: number) => {
                    const commentDate = comment.createdAt 
                      ? new Date(comment.createdAt).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })
                      : '';
                    
                    const initials = comment.name
                      ?.split(' ')
                      .map((n: string) => n.charAt(0))
                      .join('')
                      .toUpperCase()
                      .substring(0, 2) || 'U';
                    
                    const colors = ['bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'];
                    const colorIndex = index % colors.length;
                    
                    return (
                      <div 
                        key={comment.documentId || comment.id} 
                        className="bg-gray-50 hover:bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 border-l-4 border-green-500"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          {/* Avatar */}
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full ${colors[colorIndex]} flex items-center justify-center flex-shrink-0 shadow-md`}>
                            <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                              {initials}
                            </span>
                          </div>
                          
                          {/* Comment Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                              <h4 
                                className="font-bold text-gray-800 text-base sm:text-lg" 
                                style={{ fontFamily: 'var(--font-almarai)' }}
                              >
                                {comment.name}
                              </h4>
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span style={{ fontFamily: 'var(--font-almarai)' }}>
                                  {commentDate}
                                </span>
                              </div>
                            </div>
                            <p 
                              className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-wrap break-words" 
                              style={{ fontFamily: 'var(--font-almarai)' }}
                            >
                              {comment.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Comment Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h2 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2" 
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' ? 'اترك تعليقا' : 'Leave a Comment'}
              </h2>
                <p 
                  className="text-sm sm:text-base text-gray-600" 
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' 
                    ? 'شاركنا رأيك وافكارك حول هذا المقال'
                    : 'Share your thoughts and ideas about this article'
                  }
                </p>
              </div>
              
              {isUsingMockData && (
                <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-yellow-800" style={{ fontFamily: 'var(--font-almarai)' }}>
                      {language === 'ar' 
                        ? 'ملاحظة: لن يتم حفظ التعليقات عند استخدام البيانات التجريبية. يرجى التأكد من اتصال Strapi لإرسال التعليقات.'
                        : 'Note: Comments cannot be saved when using mock data. Please ensure Strapi is connected to submit comments.'
                      }
                    </p>
                  </div>
                </div>
              )}

              {hasAlreadyCommented && (
                <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-blue-800" style={{ fontFamily: 'var(--font-almarai)' }}>
                      {language === 'ar' 
                        ? 'لقد قمت بإرسال تعليق على هذا المقال من قبل. يمكنك إرسال تعليق واحد فقط لكل مقال.'
                        : 'You have already submitted a comment on this article. You can only submit one comment per article.'
                      }
                    </p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleCommentSubmit} className="space-y-5 sm:space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label 
                      className="block text-sm sm:text-base font-semibold text-gray-700" 
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={commentForm.name}
                      onChange={handleCommentInputChange}
                      required
                      disabled={hasAlreadyCommented}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-800 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      style={{ fontFamily: 'var(--font-almarai)' }}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label 
                      className="block text-sm sm:text-base font-semibold text-gray-700" 
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {language === 'ar' ? 'عنوان البريد الإلكتروني' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={commentForm.email}
                      onChange={handleCommentInputChange}
                      required
                      disabled={hasAlreadyCommented}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-800 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                      style={{ fontFamily: 'var(--font-almarai)' }}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>
                </div>

                {/* Comment */}
                <div className="space-y-2">
                  <label 
                    className="block text-sm sm:text-base font-semibold text-gray-700" 
                    style={{ fontFamily: 'var(--font-almarai)' }}
                  >
                    {language === 'ar' ? 'اكتب تعليقك' : 'Write your Comment'} *
                  </label>
                  <textarea
                    name="comment"
                    value={commentForm.comment}
                    onChange={handleCommentInputChange}
                    required
                    disabled={hasAlreadyCommented}
                    rows={6}
                    maxLength={1000}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none text-gray-800 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder={language === 'ar' ? 'اكتب تعليقك هنا... (حد أقصى 1000 حرف)' : 'Write your comment here... (max 1000 characters)'}
                    style={{ fontFamily: 'var(--font-almarai)' }}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                  <div className="text-xs sm:text-sm text-gray-500 text-left" style={{ fontFamily: 'var(--font-almarai)' }}>
                    {commentForm.comment.length} / 1000 {language === 'ar' ? 'حرف' : 'characters'}
                </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmittingComment || submittingComment || isUsingMockData || hasAlreadyCommented}
                    className={`w-full sm:w-auto min-w-[200px] mx-auto block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                      isSubmittingComment || submittingComment || isUsingMockData || hasAlreadyCommented
                        ? 'opacity-50 cursor-not-allowed transform-none' 
                        : ''
                    }`}
                    style={{ fontFamily: 'var(--font-almarai)' }}
                    title={
                      isUsingMockData 
                        ? (language === 'ar' ? 'غير متاح عند استخدام البيانات التجريبية' : 'Not available when using mock data')
                        : hasAlreadyCommented
                        ? (language === 'ar' ? 'لقد قمت بالتعليق من قبل' : 'You have already commented')
                        : undefined
                    }
                  >
                    {isSubmittingComment || submittingComment
                      ? (language === 'ar' ? 'جاري الإرسال...' : 'Submitting...')
                      : isUsingMockData
                      ? (language === 'ar' ? 'غير متاح (بيانات تجريبية)' : 'Not Available (Mock Data)')
                      : hasAlreadyCommented
                      ? (language === 'ar' ? 'تم التعليق مسبقاً' : 'Already Commented')
                      : (language === 'ar' ? 'إرسال التعليق' : 'Submit Comment')
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Section */}
      <ConsultationSection />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}
