import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  weight: "300 700",
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  weight: "100 800",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const profileSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Orengo",
  url: siteUrl,
  image: siteUrl ? `${siteUrl}/profile.jpg` : undefined,
  jobTitle: "Full Stack Software Engineer",
  description: "Full stack software engineer specializing in secure software, cloud and network security, and business systems.",
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  sameAs: [
    "https://github.com/johnorengo",
    "https://www.linkedin.com/in/johnorengo",
    "https://www.credly.com/users/john-orengo",
  ],
};

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "John Orengo | Full Stack Software Engineer & Cybersecurity Specialist",
    template: "%s | John Orengo",
  },
  description:
    "John Orengo is a Nairobi-based full stack software engineer specializing in secure web applications, cloud and network security, ERP and business systems, and digital transformation.",
  keywords: [
    "John Orengo",
    "Full Stack Software Engineer",
    "Cybersecurity Specialist",
    "Full Stack Developer",
    "Cloud Security",
    "Nairobi Kenya",
    "React",
    "Laravel",
    "Azure",
    "AWS Certified",
  ],
  authors: [{ name: "John Orengo", url: siteUrl }],
  creator: "John Orengo",
  publisher: "John Orengo",
  category: "Technology portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: siteUrl ? { canonical: "/" } : undefined,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    title: "John Orengo | Full Stack Software Engineer & Cybersecurity Specialist",
    description:
      "Secure software, cloud and network security, business systems, and practical digital transformation.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "John Orengo Portfolio",
  },
  twitter: {
    card: "summary",
    title: "John Orengo | Full Stack Software Engineer",
    description: "Secure software, cloud and network security, and business systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <Script id="portfolio-theme" strategy="beforeInteractive">{`
        (() => {
          const root = document.documentElement;
          const media = window.matchMedia('(prefers-color-scheme: dark)');
          const stored = () => { try { return localStorage.getItem('portfolio-theme'); } catch { return null; } };
          const apply = () => { const choice = stored(); root.dataset.theme = choice === 'light' || choice === 'dark' ? choice : media.matches ? 'dark' : 'light'; };
          apply();
          media.addEventListener('change', apply);
          window.addEventListener('storage', apply);
        })();
      `}</Script>
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c") }}
      />
      <body className="min-h-full flex flex-col bg-[rgb(var(--page-rgb))] text-[var(--text-main)] antialiased selection:bg-[#35D7FF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
