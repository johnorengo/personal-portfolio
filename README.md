# John Orengo Portfolio

A production-ready Next.js portfolio for John Orengo, a full stack software engineer specializing in secure software, cloud and network security, and business systems.

## Getting Started

Install dependencies before starting the app, including after pulling changes to `package.json` or `package-lock.json`:

```bash
npm ci
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to self-host Space Grotesk, Inter, and JetBrains Mono. Development and production builds need network access to Google Fonts when downloading these fonts for the first time.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact form delivery

The contact form sends messages directly from the page through Web3Forms. Generate an access key for the receiving inbox at https://web3forms.com/. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. This is a public form key, not a private API secret.

Set the same variable in the hosting environment and rebuild or redeploy, since Next.js embeds public environment variables at build time. Restart the development server after changing `.env.local`.

Submission shows success only after the provider confirms acceptance. Without a key, the form displays an availability error instead of claiming delivery.

## Production deployment

Before deploying, set these environment variables in the hosting platform:

- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — Web3Forms access key for the contact form.
- `NEXT_PUBLIC_SITE_URL` — the full public HTTPS address, for example `https://example.com`. This enables canonical metadata, Open Graph URLs, `robots.txt`, and `sitemap.xml`.

Run `npm run build` before upload. The application includes security headers, a restrictive Content Security Policy, a web app manifest, crawler metadata, and a sitemap route when the public site URL is configured.
