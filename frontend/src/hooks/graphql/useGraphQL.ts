/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useQuery } from '@apollo/client/react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  GET_HEADER_QUERY,
  GET_FOOTER_QUERY,
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
  GET_SEO_QUERY
} from '@/lib/queries';

// Layout Hooks
export const useHeader = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_HEADER_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.header?.data?.attributes,
    loading,
    error
  };
};

export const useFooter = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_FOOTER_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.footer?.data?.attributes,
    loading,
    error
  };
};

// Home Page Hooks
export const useHero = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_HERO_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.hero?.data?.attributes,
    loading,
    error
  };
};

export const useHomeAbout = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_HOME_ABOUT_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.homeAbout?.data?.attributes,
    loading,
    error
  };
};

export const useStatistics = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_STATISTICS_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.statistics?.data?.attributes?.statistics,
    loading,
    error
  };
};

export const usePartners = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_PARTNERS_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.partners?.data?.attributes?.partners,
    loading,
    error
  };
};

export const useCTA = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_CTA_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.cta?.data?.attributes,
    loading,
    error
  };
};

// Services Hooks
export const useServices = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_SERVICES_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.services?.data?.attributes?.services,
    loading,
    error
  };
};

export const useServiceDetail = (id: string) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_SERVICE_DETAIL_QUERY, {
    variables: { id, locale: language },
    errorPolicy: 'all',
    skip: !id
  });
  
  return {
    data: (data as any)?.service?.data?.attributes,
    loading,
    error
  };
};

export const useHowItWorks = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_HOW_IT_WORKS_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.howItWorks?.data?.attributes?.steps,
    loading,
    error
  };
};

// About Page Hooks
export const useAbout = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_ABOUT_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.about?.data?.attributes,
    loading,
    error
  };
};

export const useLeadership = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_LEADERSHIP_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.leadership?.data?.attributes?.members,
    loading,
    error
  };
};

export const useSuccessFoundation = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_SUCCESS_FOUNDATION_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.successFoundation?.data?.attributes?.stories,
    loading,
    error
  };
};

export const useWhyChoose = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_WHY_CHOOSE_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.whyChoose?.data?.attributes?.items,
    loading,
    error
  };
};

// Blog Hooks
export const useBlogPosts = (limit?: number, start?: number) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_BLOG_POSTS_QUERY, {
    variables: { locale: language, limit, start },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.blogPosts?.data,
    meta: (data as any)?.blogPosts?.meta,
    loading,
    error
  };
};

export const useBlogPost = (slug: string) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_BLOG_POST_QUERY, {
    variables: { slug, locale: language },
    errorPolicy: 'all',
    skip: !slug
  });
  
  return {
    data: (data as any)?.blogPosts?.data?.[0]?.attributes,
    loading,
    error
  };
};

// Contact Hooks
export const useContactInfo = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_CONTACT_INFO_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.contactInfo?.data?.attributes,
    loading,
    error
  };
};

// FAQ Hooks
export const useFAQ = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_FAQ_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.faqs?.data,
    loading,
    error
  };
};

// Consultation Hooks
export const useConsultation = () => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_CONSULTATION_QUERY, {
    variables: { locale: language },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.consultation?.data?.attributes,
    loading,
    error
  };
};

// SEO Hooks
export const useSEO = (page: string) => {
  const { language } = useLanguage();
  const { data, loading, error } = useQuery(GET_SEO_QUERY, {
    variables: { locale: language, page },
    errorPolicy: 'all'
  });
  
  return {
    data: (data as any)?.seo?.data?.[0]?.attributes,
    loading,
    error
  };
};
