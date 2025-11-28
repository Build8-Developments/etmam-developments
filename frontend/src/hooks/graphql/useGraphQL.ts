"use client";

import { useQuery } from "@apollo/client/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/contexts/ToastContext";
import {
  GET_HEADER_QUERY,
  GET_HERO_QUERY,
  GET_HOME_ABOUT_QUERY,
  GET_STATISTICS_QUERY,
  GET_PARTNERS_QUERY,
  GET_CTA_QUERY,
  GET_SERVICES_QUERY,
  GET_SERVICE_DETAIL_QUERY,
  GET_HOW_IT_WORKS_QUERY,
  GET_ABOUT_QUERY,
  GET_LEADERSHIP_QUERY,
  GET_SUCCESS_FOUNDATION_QUERY,
  GET_WHY_CHOOSE_QUERY,
  GET_BLOG_POSTS_QUERY,
  GET_BLOG_POST_QUERY,
  GET_CONTACT_INFO_QUERY,
  GET_FAQ_QUERY,
  GET_CONSULTATION_QUERY,
  GET_SEO_QUERY,
} from "@/lib/queries";
import {
  GET_SHORT_CONSULTING_SERVICES,
  GET_CONSULTING_SERVICE_BY_DOCUMENTID,
} from "@/lib/graphql/queries/content/services/consulting";
import {
  GET_LEGAL_SERVICE_CATEGORIES,
  GET_LEGAL_SERVICE_CATEGORY_SUBSERVICES,
  GET_LEGAL_SERVICE_SUBSERVICE_DETAILS_BY_DOCUMENTID,
} from "@/lib/graphql/queries/content/services/legal";
import {
  GET_BLOG_POSTS,
  GET_FEATURED_BLOG_POSTS,
  GET_BLOG_POST_BY_SLUG,
  GET_BLOG_POST_DEFAULT_LOCALE,
  GET_BLOG_POST_COMMENTS,
  CREATE_BLOG_COMMENT,
} from "@/lib/graphql/queries/content/blog";
import { GET_HOME_PAGE } from "@/lib/graphql/queries/pages/home";
import { GET_ABOUT_PAGE } from "@/lib/graphql/queries/pages/about";
import { GET_CONTACT_PAGE } from "@/lib/graphql/queries/pages/contact";
import { GET_OFFERS_PAGE } from "@/lib/graphql/queries/pages/offers";
import { GET_PRIVACY_POLICY } from "@/lib/graphql/queries/pages/privacy-policy";
import { GET_TERMS_CONDITIONS } from "@/lib/graphql/queries/pages/terms-conditions";
import { GET_PACKAGES_PAGE } from "@/lib/graphql/queries/pages/packages";
import { GET_SERVICES_PAGE } from "@/lib/graphql/queries/pages/services";
import { GET_CONTACTS_INFO } from "@/lib/graphql/queries/content/contact_info";
import { CONTACT_SUBMISSION } from "@/lib/graphql/queries/content/contact_submit";
import { GET_FOOTER } from "@/lib/graphql/queries/content/footer";
import {
  GET_REVIEWS,
  GET_FEATURED_REVIEWS,
} from "@/lib/graphql/queries/content/reviews";
import {
  GET_OFFER_DETAILS,
  GET_OFFER_DETAIL_BY_SLUG,
} from "@/lib/graphql/queries/content/offer-detail";
import { useMutation } from "@apollo/client/react";

// Layout Hooks
export const useHeader = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_HEADER_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.header?.data?.attributes,
    loading,
    error,
  };
};

export const useFooter = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_FOOTER, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.footer || null,
    loading,
    error,
  };
};

// Home Page Hooks
export const useHero = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_HERO_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.hero?.data?.attributes,
    loading,
    error,
  };
};

export const useHomeAbout = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_HOME_ABOUT_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.homeAbout?.data?.attributes,
    loading,
    error,
  };
};

export const useStatistics = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_STATISTICS_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.statistics?.data?.attributes?.statistics,
    loading,
    error,
  };
};

export const usePartners = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_PARTNERS_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.partners?.data?.attributes?.partners,
    loading,
    error,
  };
};

export const useCTA = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_CTA_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.cta?.data?.attributes,
    loading,
    error,
  };
};

// Services Hooks
export const useServices = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_SERVICES_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.services?.data?.attributes?.services,
    loading,
    error,
  };
};

export const useServiceDetail = (id: string) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_SERVICE_DETAIL_QUERY, {
    variables: { id, locale: language },
    errorPolicy: "all",
    skip: !id,
  });

  return {
    data: (data as any)?.service?.data?.attributes,
    loading,
    error,
  };
};

export const useHowItWorks = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_HOW_IT_WORKS_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.howItWorks?.data?.attributes?.steps,
    loading,
    error,
  };
};

// About Page Hooks
export const useAbout = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_ABOUT_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.about?.data?.attributes,
    loading,
    error,
  };
};

export const useLeadership = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_LEADERSHIP_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.leadership?.data?.attributes?.members,
    loading,
    error,
  };
};

export const useSuccessFoundation = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_SUCCESS_FOUNDATION_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.successFoundation?.data?.attributes?.stories,
    loading,
    error,
  };
};

export const useWhyChoose = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_WHY_CHOOSE_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.whyChoose?.data?.attributes?.items,
    loading,
    error,
  };
};

// Blog Hooks (using new queries from blog.ts)
export const useBlogPostsNew = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_BLOG_POSTS, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.blogs || [],
    loading,
    error,
  };
};

export const useFeaturedBlogPosts = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_FEATURED_BLOG_POSTS, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.blogs || [],
    loading,
    error,
  };
};

export const useBlogPostBySlug = (slug: string) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_BLOG_POST_BY_SLUG, {
    variables: { slug, locale: language },
    errorPolicy: "all",
    skip: !slug,
  });

  return {
    data: (data as any)?.blogs?.[0] || null,
    loading,
    error,
  };
};

// Get blog post documentId from default locale (for creating relations like comments)
// This ensures Strapi can validate the relation regardless of current UI language
export const useBlogPostDefaultLocale = (slug: string) => {
  const { data, loading, error } = useQuery(GET_BLOG_POST_DEFAULT_LOCALE, {
    variables: { slug },
    errorPolicy: "all",
    skip: !slug,
  });

  // Get documentIds from both Arabic and English queries
  const blogsAr = (data as any)?.blogsAr || [];
  const blogsEn = (data as any)?.blogsEn || [];

  const arDocumentId = blogsAr[0]?.documentId;
  const enDocumentId = blogsEn[0]?.documentId;

  console.log("Arabic blog:", { documentId: arDocumentId, locale: "ar" });
  console.log("English blog:", { documentId: enDocumentId, locale: "en" });

  // Prefer Arabic documentId (default locale), fallback to English if Arabic doesn't exist
  const documentId = arDocumentId || enDocumentId || null;
  const locale = arDocumentId ? "ar" : enDocumentId ? "en" : null;

  return {
    documentId,
    locale, // Return which locale this documentId belongs to
    loading,
    error,
  };
};

// Legacy Blog Hooks (keeping for backward compatibility)
export const useBlogPosts = (limit?: number, start?: number) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_BLOG_POSTS_QUERY, {
    variables: { locale: language, limit, start },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.blogPosts?.data,
    meta: (data as any)?.blogPosts?.meta,
    loading,
    error,
  };
};

export const useBlogPost = (slug: string) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_BLOG_POST_QUERY, {
    variables: { slug, locale: language },
    errorPolicy: "all",
    skip: !slug,
  });

  return {
    data: (data as any)?.blogPosts?.data?.[0]?.attributes,
    loading,
    error,
  };
};

// Contact Hooks
export const useContactInfo = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_CONTACT_INFO_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.contactInfo?.data?.attributes,
    loading,
    error,
  };
};

// FAQ Hooks
export const useFAQ = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_FAQ_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.faqs?.data,
    loading,
    error,
  };
};

// Consultation Hooks
export const useConsultation = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_CONSULTATION_QUERY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.consultation?.data?.attributes,
    loading,
    error,
  };
};

// SEO Hooks
export const useSEO = (page: string) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_SEO_QUERY, {
    variables: { locale: language, page },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.seo?.data?.[0]?.attributes,
    loading,
    error,
  };
};

// Consulting Services Hooks
export const useConsultingServices = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_SHORT_CONSULTING_SERVICES, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.consultingServices || [],
    loading,
    error,
  };
};

export const useConsultingServiceDetail = (documentId: string) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(
    GET_CONSULTING_SERVICE_BY_DOCUMENTID,
    {
      variables: { documentId, locale: language },
      errorPolicy: "all",
      skip: !documentId,
    }
  );

  return {
    data: (data as any)?.consultingService,
    loading,
    error,
  };
};

// Legal Services Hooks
export const useLegalServiceCategories = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_LEGAL_SERVICE_CATEGORIES, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.legalServiceCategories || [],
    loading,
    error,
  };
};

export const useLegalServiceSubservices = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(
    GET_LEGAL_SERVICE_CATEGORY_SUBSERVICES,
    {
      variables: { locale: language },
      errorPolicy: "all",
    }
  );

  return {
    data: (data as any)?.legalSubServices || [],
    loading,
    error,
  };
};

export const useLegalServiceSubserviceDetail = (documentId: string) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(
    GET_LEGAL_SERVICE_SUBSERVICE_DETAILS_BY_DOCUMENTID,
    {
      variables: { documentId, locale: language },
      errorPolicy: "all",
      skip: !documentId,
    }
  );

  return {
    data: (data as any)?.legalSubService,
    loading,
    error,
  };
};

// Blog Comments Hooks
export const useBlogComments = (blogPostId: string) => {
  const { data, loading, error } = useQuery(GET_BLOG_POST_COMMENTS, {
    variables: { blogPostId },
    errorPolicy: "all",
    skip: !blogPostId,
  });

  return {
    data: (data as any)?.blogComments || [],
    loading,
    error,
  };
};

export const useCreateBlogComment = () => {
  const { showToast } = useToast();
  const { language } = useLanguage();

  const [createComment, { loading }] = useMutation(CREATE_BLOG_COMMENT, {
    onCompleted: () => {
      showToast(
        language === "ar"
          ? "تم إرسال تعليقك بنجاح! سيتم مراجعته قبل النشر."
          : "Your comment has been submitted successfully! It will be reviewed before publishing.",
        "success",
        5000
      );
    },
    onError: (error: any) => {
      console.error("Blog comment creation error:", error);
      const errorMessage = error?.message || "";
      if (errorMessage.includes("Rate limit")) {
        showToast(
          language === "ar"
            ? "تم تجاوز الحد المسموح. يرجى المحاولة لاحقاً."
            : "Rate limit exceeded. Please try again later.",
          "warning",
          5000
        );
      } else if (errorMessage.includes("Duplicate")) {
        showToast(
          language === "ar"
            ? "تم إرسال هذا التعليق من قبل. يرجى الانتظار قليلاً."
            : "This comment was already submitted. Please wait a moment.",
          "warning",
          5000
        );
      } else if (errorMessage.includes("not found")) {
        showToast(
          language === "ar"
            ? "حدث خطأ في الربط مع المقال. يرجى تحديث الصفحة والمحاولة مرة أخرى."
            : "An error occurred linking to the post. Please refresh the page and try again.",
          "error",
          6000
        );
      } else {
        showToast(
          language === "ar"
            ? "حدث خطأ أثناء إرسال التعليق. يرجى المحاولة مرة أخرى."
            : "An error occurred while submitting your comment. Please try again.",
          "error",
          6000
        );
      }
    },
  });

  return {
    createComment,
    loading,
  };
};

// Page Queries Hooks
export const useHomePage = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_HOME_PAGE, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.home || null,
    loading,
    error,
  };
};

export const useAboutPage = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_ABOUT_PAGE, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.about || null,
    loading,
    error,
  };
};

export const useContactPage = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_CONTACT_PAGE, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.contact || null,
    loading,
    error,
  };
};

export const useOffersPage = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_OFFERS_PAGE, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.offer || null,
    loading,
    error,
  };
};

export const usePrivacyPolicyPage = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_PRIVACY_POLICY, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.privacyPolicyPage || null,
    loading,
    error,
  };
};

export const useTermsConditionsPage = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_TERMS_CONDITIONS, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.termsAndConditionsPage || null,
    loading,
    error,
  };
};

export const usePackagesPage = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_PACKAGES_PAGE, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.package || null,
    loading,
    error,
  };
};

export const useServicesPage = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_SERVICES_PAGE, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.service || null,
    loading,
    error,
  };
};

// Contact Info Hook
export const useContactsInfo = () => {
  const { data, loading, error } = useQuery(GET_CONTACTS_INFO, {
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.contactInfos?.[0] || null,
    loading,
    error,
  };
};

// Contact Submission Hook
export const useCreateContactSubmission = () => {
  const { showToast } = useToast();
  const { language } = useLanguage();

  const [createSubmission, { loading }] = useMutation(CONTACT_SUBMISSION, {
    onCompleted: () => {
      showToast(
        language === "ar"
          ? "تم إرسال استشارتك بنجاح! سنتواصل معك قريباً."
          : "Your consultation has been submitted successfully! We will contact you soon.",
        "success",
        5000
      );
    },
    onError: (error: any) => {
      const errorMessage = error?.message || "";
      const isNetworkError =
        error?.networkError ||
        errorMessage.includes("NetworkError") ||
        errorMessage.includes("fetch") ||
        errorMessage.includes("ECONNREFUSED");

      if (isNetworkError) {
        showToast(
          language === "ar"
            ? "لا يمكن الاتصال بالخادم. يرجى التأكد من تشغيل Strapi والمحاولة مرة أخرى."
            : "Cannot connect to server. Please ensure Strapi is running and try again.",
          "error",
          6000
        );
      } else {
        showToast(
          language === "ar"
            ? "حدث خطأ أثناء إرسال الاستشارة. يرجى المحاولة مرة أخرى."
            : "An error occurred while submitting your consultation. Please try again.",
          "error",
          6000
        );
      }
    },
  });

  return {
    createSubmission,
    loading,
  };
};

// Reviews Hooks
export const useReviews = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_REVIEWS, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.reviews || [],
    loading,
    error,
  };
};

export const useFeaturedReviews = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_FEATURED_REVIEWS, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.reviews || [],
    loading,
    error,
  };
};

// Offer Details Hooks
export const useOfferDetails = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_OFFER_DETAILS, {
    variables: { locale: language },
    errorPolicy: "all",
  });

  return {
    data: (data as any)?.offerDetails || [],
    loading,
    error,
  };
};

export const useOfferDetailBySlug = (slug: string) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_OFFER_DETAIL_BY_SLUG, {
    variables: { slug, locale: language },
    errorPolicy: "all",
    skip: !slug,
  });

  return {
    data: (data as any)?.offerDetails?.[0] || null,
    loading,
    error,
  };
};
