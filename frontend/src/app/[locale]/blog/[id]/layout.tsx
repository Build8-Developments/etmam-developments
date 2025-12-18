import type { Metadata } from "next";
import { Locale, locales, defaultLocale } from "@/i18n/config";
import { fetchWithLocale } from "@/lib/graphql/utils/fetchGraphQL";
import { GET_BLOG_POST_BY_SLUG } from "@/lib/graphql/queries/content/blog";
import { APP_CONFIG } from "@/constants/config";

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

async function getBlogPost(slug: string, locale: string) {
  const { data, success } = await fetchWithLocale({
    query: GET_BLOG_POST_BY_SLUG,
    locale,
    variables: { slug, locale },
  });

  if (success && data?.blogs?.[0]) {
    return data.blogs[0];
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, locale } = await params;
  const validLocale = (locale as Locale) || defaultLocale;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://etmam.com";

  // Fetch blog post data
  const post = await getBlogPost(id, validLocale);

  // Default fallback metadata
  const defaultTitles: Record<Locale, string> = {
    ar: "مقال - إتمام",
    en: "Article - Etmam",
  };

  const defaultDescriptions: Record<Locale, string> = {
    ar: "اقرأ المزيد من المقالات على مدونة إتمام",
    en: "Read more articles on Etmam blog",
  };

  if (!post) {
    return {
      title: defaultTitles[validLocale],
      description: defaultDescriptions[validLocale],
    };
  }

  const title = post.title || defaultTitles[validLocale];
  const description = post.summary || defaultDescriptions[validLocale];
  const imageUrl = post.banner?.url
    ? post.banner.url.startsWith("http")
      ? post.banner.url
      : `${APP_CONFIG.apiUrl}${post.banner.url}`
    : `${baseUrl}/images/blog/default-og.jpg`;

  return {
    title: `${title} - ${validLocale === "ar" ? "إتمام" : "Etmam"}`,
    description,
    alternates: {
      canonical: `${baseUrl}/${validLocale}/blog/${id}`,
      languages: {
        ar: `${baseUrl}/ar/blog/${id}`,
        en: `${baseUrl}/en/blog/${id}`,
        "x-default": `${baseUrl}/${defaultLocale}/blog/${id}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${validLocale}/blog/${id}`,
      siteName: validLocale === "ar" ? "إتمام" : "Etmam",
      locale: validLocale === "ar" ? "ar_SA" : "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.blog_author?.name ? [post.blog_author.name] : undefined,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
