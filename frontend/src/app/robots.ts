import type { MetadataRoute } from 'next';

/**
 * Env-aware robots configuration.
 * Staging/preview environments get full noindex/nofollow via robots.txt.
 * Production allows all and points to sitemap.
 *
 * To activate staging mode set one of:
 *   DEPLOY_ENV=staging
 *   NEXT_PUBLIC_DEPLOY_ENV=staging
 *   VERCEL_ENV=preview (Vercel preview deployments)
 *
 * Optionally define NEXT_PUBLIC_SITE_URL for sitemap base.
 */
export default function robots(): MetadataRoute.Robots {
  const isStaging =
    process.env.DEPLOY_ENV === 'staging' ||
    process.env.NEXT_PUBLIC_DEPLOY_ENV === 'staging' ||
    process.env.VERCEL_ENV === 'preview';

  if (isStaging) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
      sitemap: [],
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: [`${siteUrl.replace(/\/$/, '')}/sitemap.xml`],
  };
}
