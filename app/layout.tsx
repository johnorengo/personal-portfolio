import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Orengo | Software Engineer & Cybersecurity Specialist",
  description:
    "Building intelligent solutions and securing digital futures. Multidisciplinary technology professional specializing in full stack engineering, cybersecurity, cloud governance, and enterprise business systems.",
  keywords: [
    "John Orengo",
    "Software Engineer",
    "Cybersecurity Specialist",
    "Full Stack Developer",
    "Cloud Security",
    "Nairobi Kenya",
    "React",
    "Laravel",
    "Azure",
    "AWS Certified",
  ],
  authors: [{ name: "John Orengo" }],
  openGraph: {
    title: "John Orengo | Software Engineer & Cybersecurity Specialist",
    description:
      "Building intelligent solutions and securing digital futures. Full stack software engineering, cloud security, and scalable digital platforms.",
    type: "website",
    locale: "en_US",
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
      <body className="min-h-full flex flex-col bg-[rgb(var(--page-rgb))] text-[var(--text-main)] antialiased selection:bg-[#35D7FF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
