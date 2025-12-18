"use client";

import { Header, Footer, CTASection, ConsultationSection } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/contexts/ToastContext";
import { use, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogPosts as mockBlogPosts } from "@/mockData/blog";
import {
  useBlogPostBySlug,
  useBlogPostDefaultLocale,
  useBlogPostsNew,
  useBlogComments,
  useCreateBlogComment,
} from "@/hooks/graphql/useGraphQL";
import { GET_BLOG_POST_COMMENTS } from "@/lib/graphql/queries/content/blog";
import { APP_CONFIG } from "@/constants/config";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const routeParams = useParams();
  const locale = routeParams.locale as string;
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  const { id } = use(params);

  const { data: blogPostData, loading: loadingPost } = useBlogPostBySlug(id);
  const { documentId: defaultLocaleDocumentId, locale: blogPostLocale } =
    useBlogPostDefaultLocale(id);
  const { data: allBlogPosts, loading: loadingAllPosts } = useBlogPostsNew();
  const { createComment, loading: submittingComment } = useCreateBlogComment();

  const isLoading = loadingPost || loadingAllPosts;

  const getStrapiImageUrl = useCallback(
    (url: string | undefined | null): string => {
      if (!url) return "/blog1.jpg";
      if (url.startsWith("http://") || url.startsWith("https://")) return url;
      return `${APP_CONFIG.apiUrl}${url}`;
    },
    []
  );

  const formatInlineText = useCallback((child: any): string => {
    if (!child) return "";
    if (child.type === "link") {
      const linkText =
        child.children?.map((c: any) => formatInlineText(c)).join("") || "";
      return `<a href="${
        child.url || "#"
      }" class="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
    }
    let text = child.text || "";
    if (!text) return "";
    if (child.code)
      text = `<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">${text}</code>`;
    if (child.bold) text = `<strong class="font-bold">${text}</strong>`;
    if (child.italic) text = `<em class="italic">${text}</em>`;
    if (child.underline) text = `<u class="underline">${text}</u>`;
    if (child.strikethrough) text = `<s class="line-through">${text}</s>`;
    return text;
  }, []);

  const convertContentToHTML = useCallback(
    (content: any): string => {
      if (!content) return "";
      if (typeof content === "string") return content;
      if (Array.isArray(content)) {
        return content
          .map((block: any) => {
            switch (block.type) {
              case "paragraph":
                const paragraphContent =
                  block.children
                    ?.map((child: any) => formatInlineText(child))
                    .join("") || "";
                if (!paragraphContent.trim()) return "";
                return `<p class="mb-4 leading-relaxed">${paragraphContent}</p>`;
              case "heading":
                const headingLevel = block.level || 2;
                const headingContent =
                  block.children
                    ?.map((child: any) => formatInlineText(child))
                    .join("") || "";
                return `<h${headingLevel} class="text-${
                  headingLevel === 1 ? "3xl" : "2xl"
                } font-bold mb-4 mt-6">${headingContent}</h${headingLevel}>`;
              case "list":
                const listTag = block.format === "ordered" ? "ol" : "ul";
                const listClass =
                  block.format === "ordered" ? "list-decimal" : "list-disc";
                const listItems =
                  block.children
                    ?.map((item: any) => {
                      const itemContent =
                        item.children
                          ?.map((child: any) => formatInlineText(child))
                          .join("") || "";
                      return `<li class="mb-2">${itemContent}</li>`;
                    })
                    .join("") || "";
                return `<${listTag} class="${listClass} ml-6 mb-4 space-y-2">${listItems}</${listTag}>`;
              case "quote":
                const quoteContent =
                  block.children
                    ?.map((child: any) => formatInlineText(child))
                    .join("") || "";
                return `<blockquote class="border-l-4 border-green-500 pl-4 py-2 mb-4 italic text-gray-700">${quoteContent}</blockquote>`;
              case "code":
                const codeContent =
                  block.children
                    ?.map((child: any) => child.text || "")
                    .join("") || "";
                return `<pre class="bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto"><code class="text-sm font-mono">${codeContent}</code></pre>`;
              default:
                return "";
            }
          })
          .join("");
      }
      return "";
    },
    [formatInlineText]
  );

  const currentPost = useMemo(() => {
    if (blogPostData) {
      const publishedDate = blogPostData.publishedAt
        ? new Date(blogPostData.publishedAt).toLocaleDateString(
            language === "ar" ? "ar-SA" : "en-US"
          )
        : "";
      const contentHTML = convertContentToHTML(blogPostData.content);
      return {
        id: blogPostData.slug || blogPostData.documentId || "",
        title: { ar: blogPostData.title || "", en: blogPostData.title || "" },
        excerpt: {
          ar: blogPostData.summary || "",
          en: blogPostData.summary || "",
        },
        content: { ar: contentHTML, en: contentHTML },
        image: getStrapiImageUrl(blogPostData.banner?.url),
        author: {
          ar: blogPostData.blog_author?.name || "",
          en: blogPostData.blog_author?.name || "",
        },
        authorImage: getStrapiImageUrl(
          blogPostData.blog_author?.profileImage?.url
        ),
        date: publishedDate,
        category: blogPostData.blog_category?.name || "all",
        featured: blogPostData.featured_post || false,
        comments:
          blogPostData.blog_comments?.filter((c: any) => c.approved).length ||
          0,
        readTime: { ar: "5 دقائق", en: "5 min" },
        tags: { ar: [], en: [] },
      };
    }
    return mockBlogPosts.find((post) => post.id === id);
  }, [blogPostData, id, language, convertContentToHTML, getStrapiImageUrl]);

  const blogPostDocumentId = useMemo(() => {
    if (defaultLocaleDocumentId) return defaultLocaleDocumentId;
    if (blogPostData?.documentId) return blogPostData.documentId;
    return null;
  }, [defaultLocaleDocumentId, blogPostData]);

  const isUsingMockData = useMemo(
    () => !blogPostData || !blogPostData.documentId,
    [blogPostData]
  );
  const { data: commentsData } = useBlogComments(blogPostDocumentId || "");

  const approvedComments = useMemo(() => {
    if (commentsData && commentsData.length > 0) return commentsData;
    if (blogPostData?.blog_comments)
      return blogPostData.blog_comments.filter((c: any) => c.approved);
    return [];
  }, [commentsData, blogPostData]);

  const handleCommentInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({ ...prev, [name]: value }));
  };

  const hasAlreadyCommented = useMemo(() => {
    if (!commentForm.email || !approvedComments.length) return false;
    return approvedComments.some(
      (comment: any) =>
        comment.email?.toLowerCase() === commentForm.email.toLowerCase()
    );
  }, [commentForm.email, approvedComments]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.email || !commentForm.comment) {
      showToast(
        language === "ar"
          ? "يرجى ملء جميع الحقول المطلوبة"
          : "Please fill in all required fields",
        "warning",
        4000
      );
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(commentForm.email)) {
      showToast(
        language === "ar"
          ? "يرجى إدخال بريد إلكتروني صحيح"
          : "Please enter a valid email address",
        "warning",
        4000
      );
      return;
    }
    if (hasAlreadyCommented) {
      showToast(
        language === "ar"
          ? "لقد قمت بإرسال تعليق على هذا المقال من قبل."
          : "You have already submitted a comment on this article.",
        "warning",
        6000
      );
      return;
    }
    if (!blogPostDocumentId) {
      showToast(
        language === "ar"
          ? "لا يمكن إرسال التعليق في الوقت الحالي."
          : "Cannot submit comment at the moment.",
        "error",
        6000
      );
      return;
    }
    setIsSubmittingComment(true);
    try {
      await createComment({
        variables: {
          name: commentForm.name,
          email: commentForm.email,
          comment: commentForm.comment,
          blogPostId: blogPostDocumentId,
        },
        refetchQueries: blogPostDocumentId
          ? [
              {
                query: GET_BLOG_POST_COMMENTS,
                variables: { blogPostId: blogPostDocumentId },
              },
            ]
          : [],
      });
      setCommentForm({ name: "", email: "", comment: "" });
    } catch (error) {
      console.error("Comment submission error:", error);
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const recentPosts = useMemo(() => {
    if (allBlogPosts && allBlogPosts.length > 0) {
      return allBlogPosts.slice(0, 3).map((post: any) => ({
        id: post.slug || "",
        title: { ar: post.title || "", en: post.title || "" },
        image: getStrapiImageUrl(post.banner?.url) || "/blog1.jpg",
        date: post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString(
              language === "ar" ? "ar-SA" : "en-US"
            )
          : "",
      }));
    }
    return mockBlogPosts.slice(0, 3);
  }, [allBlogPosts, language, getStrapiImageUrl]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[500px] bg-gray-200 animate-pulse" />
        <Footer />
      </div>
    );
  }

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === "ar" ? "المقال غير موجود" : "Post Not Found"}
          </h1>
          <Link
            href={`/${locale}/blog`}
            className="text-green-600 hover:text-green-700"
          >
            {language === "ar" ? "العودة إلى المدونة" : "Back to Blog"}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative overflow-hidden">
        <div
          className="relative py-16 lg:py-20 pt-28 md:pt-32 min-h-[400px] flex items-center"
          style={{
            background:
              "linear-gradient(86.9deg, rgba(27, 128, 54, 0.47) -14.86%, rgba(2, 6, 3, 0.47) 94%)",
            backdropFilter: "blur(4px)",
            pointerEvents: "none",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/bgabout.png)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              pointerEvents: "none",
            }}
          />
          <div
            className="absolute inset-0 bg-black/20"
            style={{ pointerEvents: "none" }}
          ></div>
          <div
            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            style={{ pointerEvents: "auto" }}
          >
            <div className="text-center text-white max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-white/20">
                    <Image
                      src={currentPost.authorImage || "/men1.png"}
                      alt={currentPost.author[language]}
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className="text-xs font-medium"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {language === "ar" ? "بواسطة" : "By"}{" "}
                    {currentPost.author[language]}
                  </span>
                  <span className="text-xs text-white/60">•</span>
                  <span
                    className="text-xs text-white/80"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {currentPost.date}
                  </span>
                </div>
              </div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {currentPost.title[language]}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
                  <Image
                    src={currentPost.image}
                    alt={currentPost.title[language]}
                    fill
                    className="object-cover"
                  />
                  {currentPost.featured && (
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {language === "ar" ? "مميز" : "Featured"}
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex justify-end mb-6">
                    <div className="bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold">
                      {currentPost.category ||
                        (language === "ar" ? "عام" : "General")}
                    </div>
                  </div>
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight"
                    style={{
                      fontFamily: "var(--font-almarai)",
                      textAlign: language === "ar" ? "right" : "left",
                    }}
                  >
                    {currentPost.title[language]}
                  </h1>
                  <div className="mb-8">
                    <p
                      className="text-gray-700 leading-relaxed text-lg mb-4"
                      style={{
                        fontFamily: "var(--font-almarai)",
                        textAlign: language === "ar" ? "right" : "left",
                      }}
                    >
                      {currentPost.excerpt[language]}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 mb-8"></div>
                  <div
                    className="prose prose-lg max-w-none mb-8 text-gray-900"
                    style={{
                      fontFamily: "var(--font-almarai)",
                      textAlign: language === "ar" ? "right" : "left",
                      color: "#000000",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: currentPost.content[language],
                    }}
                  />
                </div>
              </article>
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3
                    className="text-lg font-bold text-gray-800 mb-4 text-center"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {language === "ar" ? "عن الكاتب" : "Author"}
                  </h3>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 mx-auto mb-4">
                      <Image
                        src={currentPost.authorImage || "/men1.png"}
                        alt={currentPost.author[language]}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4
                      className="text-lg font-bold text-gray-800 mb-2"
                      style={{ fontFamily: "var(--font-almarai)" }}
                    >
                      {currentPost.author[language]}
                    </h4>
                  </div>
                </div>
                <div className="hidden sm:block bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                  <h3
                    className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {language === "ar" ? "مؤخراً" : "Recently"}
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {recentPosts.map((post: any) => (
                      <Link
                        key={post.id}
                        href={`/${locale}/blog/${post.id}`}
                        className="block group"
                      >
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
                            <h4
                              className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2 mb-1 text-sm sm:text-base"
                              style={{ fontFamily: "var(--font-almarai)" }}
                            >
                              {post.title[language]}
                            </h4>
                            <p
                              className="text-xs sm:text-sm text-gray-500"
                              style={{ fontFamily: "var(--font-almarai)" }}
                            >
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
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {approvedComments.length > 0 && (
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h2
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {language === "ar" ? "التعليقات" : "Comments"}
                  </h2>
                  <div className="bg-green-100 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold">
                    {approvedComments.length}{" "}
                    {language === "ar" ? "تعليق" : "comments"}
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {approvedComments.map((comment: any, index: number) => {
                    const commentDate = comment.createdAt
                      ? new Date(comment.createdAt).toLocaleDateString(
                          language === "ar" ? "ar-SA" : "en-US"
                        )
                      : "";
                    const initials =
                      comment.name
                        ?.split(" ")
                        .map((n: string) => n.charAt(0))
                        .join("")
                        .toUpperCase()
                        .substring(0, 2) || "U";
                    const colors = [
                      "bg-green-500",
                      "bg-blue-500",
                      "bg-purple-500",
                      "bg-pink-500",
                      "bg-indigo-500",
                    ];
                    return (
                      <div
                        key={comment.documentId || comment.id}
                        className="bg-gray-50 hover:bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 border-l-4 border-green-500"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full ${
                              colors[index % colors.length]
                            } flex items-center justify-center flex-shrink-0 shadow-md`}
                          >
                            <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                              {initials}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                              <h4
                                className="font-bold text-gray-800 text-base sm:text-lg"
                                style={{ fontFamily: "var(--font-almarai)" }}
                              >
                                {comment.name}
                              </h4>
                              <span
                                className="text-xs sm:text-sm text-gray-500"
                                style={{ fontFamily: "var(--font-almarai)" }}
                              >
                                {commentDate}
                              </span>
                            </div>
                            <p
                              className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-wrap break-words"
                              style={{ fontFamily: "var(--font-almarai)" }}
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
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h2
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "var(--font-almarai)" }}
                >
                  {language === "ar" ? "اترك تعليقا" : "Leave a Comment"}
                </h2>
              </div>
              <form
                onSubmit={handleCommentSubmit}
                className="space-y-5 sm:space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label
                      className="block text-sm sm:text-base font-semibold text-gray-700"
                      style={{ fontFamily: "var(--font-almarai)" }}
                    >
                      {language === "ar" ? "الاسم الكامل" : "Full Name"} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={commentForm.name}
                      onChange={handleCommentInputChange}
                      required
                      disabled={hasAlreadyCommented}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-800 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder={
                        language === "ar"
                          ? "أدخل اسمك الكامل"
                          : "Enter your full name"
                      }
                      style={{ fontFamily: "var(--font-almarai)" }}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block text-sm sm:text-base font-semibold text-gray-700"
                      style={{ fontFamily: "var(--font-almarai)" }}
                    >
                      {language === "ar"
                        ? "عنوان البريد الإلكتروني"
                        : "Email Address"}{" "}
                      *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={commentForm.email}
                      onChange={handleCommentInputChange}
                      required
                      disabled={hasAlreadyCommented}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-800 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder={
                        language === "ar"
                          ? "أدخل بريدك الإلكتروني"
                          : "Enter your email"
                      }
                      style={{ fontFamily: "var(--font-almarai)" }}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="block text-sm sm:text-base font-semibold text-gray-700"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {language === "ar" ? "اكتب تعليقك" : "Write your Comment"} *
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
                    placeholder={
                      language === "ar"
                        ? "اكتب تعليقك هنا..."
                        : "Write your comment here..."
                    }
                    style={{ fontFamily: "var(--font-almarai)" }}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={
                      isSubmittingComment ||
                      submittingComment ||
                      isUsingMockData ||
                      hasAlreadyCommented
                    }
                    className={`w-full sm:w-auto min-w-[200px] mx-auto block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg ${
                      isSubmittingComment ||
                      submittingComment ||
                      isUsingMockData ||
                      hasAlreadyCommented
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {isSubmittingComment || submittingComment
                      ? language === "ar"
                        ? "جاري الإرسال..."
                        : "Submitting..."
                      : language === "ar"
                      ? "إرسال التعليق"
                      : "Submit Comment"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ConsultationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
