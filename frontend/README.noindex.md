# Env-aware noindex configuration

This project is configured to prevent indexing on staging/preview while allowing indexing on production.

## How it works

- `src/app/robots.ts`: Returns a `robots.txt` that fully blocks crawlers on staging/preview and allows all on production. It also emits a sitemap URL on production if `NEXT_PUBLIC_SITE_URL` is defined.
- `src/app/layout.tsx`: Injects `<meta name="robots" content="noindex,nofollow">` in the `<head>` on staging/preview.

## Environment variables

Set one of the following to enable staging/preview behavior:

- `DEPLOY_ENV=staging`
- `NEXT_PUBLIC_DEPLOY_ENV=staging`
- `VERCEL_ENV=preview` (on Vercel preview deployments)

Recommended production variable:

- `NEXT_PUBLIC_SITE_URL=https://www.your-domain.com`

## Notes

- The Strapi `strapi/public/robots.txt` does not affect the Next.js site. The Next app serves its own `robots.txt` via `src/app/robots.ts`.
- Keep sensitive API tokens out of client-exposed env vars (avoid `NEXT_PUBLIC_*` for secrets).
- For non-Vercel hosting, set `DEPLOY_ENV` appropriately in your CI/CD for staging builds.
