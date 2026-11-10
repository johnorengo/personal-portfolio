# John Orengo Portfolio

Next.js portfolio for John Orengo, a full stack software engineer working across secure applications, cloud and network security, and business systems.

## Local development

Use a current supported Node.js release, then run:

```bash
npm ci
npm run dev
```

The site opens at `http://localhost:3000`. The three font files are bundled in `app/fonts`, so production builds do not need access to Google Fonts.

## Deploy to Vercel

Connect this repository to a Vercel project with the Next.js framework preset. Use `npm ci` for installation and `npm run build` for the build. Leave the output directory at the framework default. Deploy the latest `main` commit; redeploying an older deployment rebuilds its older source.

Set these environment variables in Vercel before the final deployment:

- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`: the public Web3Forms access key for the receiving inbox. Until this is set, the form reports that messaging is unavailable and visitors can use the contact links.
- `NEXT_PUBLIC_SITE_URL`: the full public HTTPS URL, without a trailing slash. This enables canonical metadata, Open Graph URLs, and the sitemap.

The current production address is `https://john4tech.vercel.app`. The site uses it for canonical metadata and the sitemap when `NEXT_PUBLIC_SITE_URL` is unset. `NEXT_PUBLIC_` values are embedded at build time, so redeploy after changing either value. The Web3Forms key is designed to be public; keep any other private credentials out of `NEXT_PUBLIC_` variables. For form abuse protection, enable Web3Forms domain restrictions if your plan supports them, using the final production domain.

The app sets a Content Security Policy and other browser security headers in `next.config.ts`. Vercel supplies HTTPS and its default HSTS header. The contact form sends directly to Web3Forms over HTTPS and limits field lengths. Preview deployment access and firewall settings can be managed in Vercel's project Security settings.

Before pushing changes, run:

```bash
npm run lint
npm run build
npm audit --omit=dev
```
