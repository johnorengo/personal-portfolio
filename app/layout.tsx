import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Orengo — Full-Stack Engineer & Cloud Security Specialist",
  description:
    "Portfolio of John Orengo, a Full-Stack Software Engineer and Cloud Security Specialist in Nairobi, Kenya. Architecting national education platforms, cloud identity governance, and high-reliability systems.",
  keywords: [
    "John Orengo",
    "Software Engineer Kenya",
    "Full-Stack Developer Nairobi",
    "Cloud Security",
    "Azure",
    "AWS Certified",
    "React",
    "Laravel",
    "Systems Architecture",
  ],
  authors: [{ name: "John Orengo" }],
  openGraph: {
    title: "John Orengo — Full-Stack Engineer & Cloud Security Specialist",
    description:
      "Building dependable digital systems and secure cloud infrastructure for real-world operations.",
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
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#060e1a] text-[#f8fafc] font-sans antialiased selection:bg-teal-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
