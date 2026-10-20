"use client";


import Image from "next/image";
import { ArrowRight, Mail, ShieldCheck, Terminal, Server } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio-data";
import RotatingHeadline from "./RotatingHeadline";

export default function Hero() {
  const impactMetrics = [
    { value: "20+", label: "Projects Worked On", detail: "Projects worked on" },
    { value: "4+", label: "Years of Experience", detail: "Software engineering & security" },
    { value: "3+", label: "Cloud Certifications", detail: "AWS, CNCF & Microsoft SC-900" },
  ];

  return (
    <section id="top" className="relative flex flex-col py-6 overflow-hidden bg-[rgb(var(--page-rgb))]">
      {/* Restrained Atmospheric Particle / Glow Field */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] w-[480px] h-[480px] rounded-full bg-[#35D7FF]/[0.08] blur-[140px]" />
        <div className="absolute top-[10%] right-[12%] w-[420px] h-[420px] rounded-full bg-[#8667FF]/[0.07] blur-[150px]" />
        <div className="absolute inset-0 tech-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      </div>

      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Split Screen Hero Layout */}
        <div className="hero-layout grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-10 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy & Actions with Motion */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hero-copy lg:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-5"
          >
            <RotatingHeadline />

            {/* Master Supporting Text */}
            <p className="hero-summary text-sm sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl font-normal">
              <span className="hero-summary-full">{personalInfo.supportingText}</span>
              <span className="hero-summary-compact hidden">Full stack engineer and cybersecurity specialist, turning complex ideas into secure, intuitive digital experiences.</span>
            </p>

            {/* Two Prominent CTAs: "Explore My Work" and "Let's Connect" */}
            <div className="hero-actions flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#080D18] bg-gradient-to-r from-[#35D7FF] to-[#8667FF] hover:brightness-110 rounded-xl transition-all shadow-lg shadow-[#35D7FF]/20 hover:shadow-[#35D7FF]/40 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span className="hidden sm:inline">Explore Selected Work</span><span className="sm:hidden">View work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-[var(--text-main)] hover:text-[var(--text-main)] glass-card hover:bg-[rgb(var(--wash-rgb))]/[0.08] border border-[rgb(var(--border-rgb))]/[0.12] hover:border-[#35D7FF]/40 rounded-xl transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span className="hidden sm:inline">Discuss an Opportunity</span><span className="sm:hidden">Let&apos;s connect</span>
              </a>
            </div>

            {/* Social channels row */}
            <div className="hero-social flex flex-col gap-1 border-t border-[rgb(var(--border-rgb))]/[0.08] pt-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="shrink-0 text-[9px] sm:text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                Verified Social & Technical Profiles
              </span>
              <div className="hero-social-links grid grid-cols-2 gap-1.5 sm:flex sm:flex-1 sm:flex-wrap">
                <a
                  href="https://github.com/johnorengo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="hero-profile-link inline-flex min-h-8 items-center gap-2 rounded-lg border border-[rgb(var(--border-rgb))]/[0.15] bg-[rgb(var(--surface-rgb))]/70 px-2.5 text-xs font-semibold text-[var(--slate-200)] transition-colors hover:border-[#35D7FF]/50 hover:text-[var(--accent-text)]"
                >
                  <Image src="/icons/github.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/johnorengo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="hero-profile-link inline-flex min-h-8 items-center gap-2 rounded-lg border border-[rgb(var(--border-rgb))]/[0.15] bg-[rgb(var(--surface-rgb))]/70 px-2.5 text-xs font-semibold text-[var(--slate-200)] transition-colors hover:border-[#8667FF]/50 hover:text-[var(--violet-text)]"
                >
                  <Image src="/icons/linkedin.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.credly.com/users/john-orengo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Credly certifications"
                  className="hero-profile-link inline-flex min-h-8 items-center gap-2 rounded-lg border border-[rgb(var(--border-rgb))]/[0.15] bg-[rgb(var(--surface-rgb))]/70 px-2.5 text-xs font-semibold text-[var(--slate-200)] transition-colors hover:border-[#35D7FF]/50 hover:text-[var(--accent-text)]"
                >
                  <Image src="/icons/credly.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                  <span>Credly Badges</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send email to John Orengo"
                  className="hero-profile-link inline-flex min-h-8 items-center gap-2 rounded-lg border border-[rgb(var(--border-rgb))]/[0.15] bg-[rgb(var(--surface-rgb))]/70 px-2.5 text-xs font-semibold text-[var(--slate-200)] transition-colors hover:border-[#35D7FF]/50 hover:text-[var(--accent-text)]"
                >
                  <Mail className="w-4 h-4 text-[var(--accent-text)]" />
                  <span>Email</span>
                </a>
</div>
            </div>
          </motion.div>

          {/* A single open composition: portrait, identity, domains and proof. */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-visual lg:col-span-5 w-full"
          >
            <div className="hero-portrait-panel">
              <div className="hero-photo relative">
                <Image
                  src="/portraits/john-cutout.webp"
                  alt="John Orengo in a suit with arms crossed"
                  fill
                  priority
                  sizes="(max-width: 639px) 42vw, (max-width: 1023px) 22vw, 260px"
                  className="object-contain object-bottom"
                />
              </div>
              <div className="hero-identity">
                <span className="hero-name">{personalInfo.name}</span>
                <span className="hero-role">{personalInfo.title}</span>
                <span className="hero-specialism">{personalInfo.specialism}</span>
              </div>
            </div>
            <div className="hero-domains">
              {[
                { Icon: Terminal, title: "Full Stack", tools: "React · Laravel" },
                { Icon: ShieldCheck, title: "Security", tools: "Azure · RBAC" },
                { Icon: Server, title: "Systems", tools: "Linux · Cisco" },
              ].map(({ Icon, title, tools }) => (
                <div key={title}>
                  <Icon className="h-4 w-4 text-[var(--accent-text)]" />
                  <span className="font-semibold">{title}</span>
                  <span className="font-mono text-[var(--text-muted)]">{tools}</span>
                </div>
              ))}
            </div>
            <div className="hero-metrics">
              {impactMetrics.map((metric) => (
                <div className="hero-metric" key={metric.label}>
                  <span className="font-mono font-extrabold text-[var(--accent-text)]">{metric.value}</span>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
