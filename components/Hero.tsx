"use client";

import Image from "next/image";
import { ArrowRight, Mail, ShieldCheck, Terminal, Server, ChevronDown } from "lucide-react";
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
    <section id="top" className="relative min-h-[calc(100svh-5rem)] flex flex-col justify-between pt-4 pb-4 overflow-hidden bg-[rgb(var(--page-rgb))]">
      {/* Restrained Atmospheric Particle / Glow Field */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] w-[480px] h-[480px] rounded-full bg-[#35D7FF]/[0.08] blur-[140px]" />
        <div className="absolute top-[10%] right-[12%] w-[420px] h-[420px] rounded-full bg-[#8667FF]/[0.07] blur-[150px]" />
        <div className="absolute inset-0 tech-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        {/* Split Screen Hero Layout */}
        <div className="hero-layout grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-10 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy & Actions with Motion */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hero-copy lg:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-5"
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent-text)]">
              Full-Stack Software Engineering · Cybersecurity & Cloud Security
            </p>
            <RotatingHeadline />

            {/* Master Supporting Text */}
            <p className="hero-summary text-sm sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl font-normal">
              <span className="hero-summary-full">{personalInfo.supportingText}</span>
              <span className="hero-summary-compact hidden">Full stack software engineering and cybersecurity, turning complex ideas into secure, intuitive digital experiences.</span>
            </p>

            {/* Two Prominent CTAs: "Explore My Work" and "Let's Connect" */}
            <div className="hero-actions flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#080D18] bg-gradient-to-r from-[#35D7FF] to-[#8667FF] hover:brightness-110 rounded-xl transition-all shadow-lg shadow-[#35D7FF]/20 hover:shadow-[#35D7FF]/40 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-[var(--text-main)] hover:text-[var(--text-main)] glass-card hover:bg-[rgb(var(--wash-rgb))]/[0.08] border border-[rgb(var(--border-rgb))]/[0.12] hover:border-[#35D7FF]/40 rounded-xl transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Discuss an Opportunity</span>
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
                  className="hero-profile-link inline-flex min-h-8 items-center gap-2 rounded-lg border border-[rgb(var(--border-rgb))]/[0.15] bg-[rgb(var(--surface-rgb))]/70 px-2.5 text-xs font-semibold text-[var(--slate-200)] transition-colors hover:border-[#35D7FF]/50 hover:text-[var(--accent-text)]"
                >
                  <Image src="/icons/github.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/johnorengo"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-profile-link inline-flex min-h-8 items-center gap-2 rounded-lg border border-[rgb(var(--border-rgb))]/[0.15] bg-[rgb(var(--surface-rgb))]/70 px-2.5 text-xs font-semibold text-[var(--slate-200)] transition-colors hover:border-[#8667FF]/50 hover:text-[var(--violet-text)]"
                >
                  <Image src="/icons/linkedin.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.credly.com/users/john-orengo"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-profile-link inline-flex min-h-8 items-center gap-2 rounded-lg border border-[rgb(var(--border-rgb))]/[0.15] bg-[rgb(var(--surface-rgb))]/70 px-2.5 text-xs font-semibold text-[var(--slate-200)] transition-colors hover:border-[#35D7FF]/50 hover:text-[var(--accent-text)]"
                >
                  <Image src="/icons/credly.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                  <span>Credly Badges</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hero-profile-link inline-flex min-h-8 items-center gap-2 rounded-lg border border-[rgb(var(--border-rgb))]/[0.15] bg-[rgb(var(--surface-rgb))]/70 px-2.5 text-xs font-semibold text-[var(--slate-200)] transition-colors hover:border-[#35D7FF]/50 hover:text-[var(--accent-text)]"
                >
                  <Mail className="w-4 h-4 text-[var(--accent-text)]" />
                  <span>Email</span>
                </a>
</div>
            </div>
          </motion.div>

          {/* Right Column: Professionally Framed Portrait */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end lg:self-start"
          >
            <div className="relative w-full sm:max-w-md">
              {/* Luminous aura behind card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#35D7FF]/25 via-[#8667FF]/20 to-[#35D7FF]/25 rounded-3xl blur-2xl opacity-60" />

              {/* Card Container */}
              <div className="relative rounded-3xl glass-card border border-[rgb(var(--border-rgb))]/[0.12] shadow-2xl overflow-hidden bg-[rgb(var(--surface-rgb))]/95">
                <div>
                  <div className="relative w-full bg-[rgb(var(--page-rgb))] overflow-hidden">
                    <div className="hero-photo relative h-44 min-[390px]:h-48 sm:h-96 lg:h-[clamp(16rem,42svh,24rem)]">
                    <Image
                      src={personalInfo.profileImage}
                      alt="John Orengo | Software Engineer & Cybersecurity"
                      fill
                      sizes="(max-width: 639px) calc(100vw - 32px), (min-width: 1024px) 448px, (min-width: 640px) 448px, 60vw"
                      className="object-cover object-[center_18%]"
                      priority
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/95 via-[#080d18]/20 to-transparent" />
                    </div>

                    <div className="hero-identity absolute bottom-2 left-3 right-3 p-0 sm:bottom-4 sm:left-5 sm:right-5 flex items-center justify-between">
                      <div>
                        <span className="font-display font-bold text-white text-xs sm:text-base block drop-shadow-md">
                          {personalInfo.name}
                        </span>
                        <span className="text-[#62e8ff] text-[10px] sm:text-xs font-medium block">
                          {personalInfo.title}
                        </span>
                        <span className="mt-1 text-[9px] sm:text-[11px] leading-relaxed text-[#CBD5E1] block">
                          {personalInfo.specialism}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick matrix below photo */}
                  <div className="hero-domains p-2 sm:p-4 bg-[rgb(var(--card-rgb))] border-t border-[rgb(var(--border-rgb))]/[0.08] grid grid-cols-3 gap-1 sm:gap-2">
                    <div className="p-1 sm:p-2.5 rounded-xl bg-[rgb(var(--wash-rgb))]/[0.02] border border-[rgb(var(--border-rgb))]/[0.06] text-center">
                      <Terminal className="w-4 h-4 mx-auto text-[var(--accent-text)] mb-1" />
                      <span className="text-[9px] sm:text-[11px] font-bold text-[var(--text-main)] block">Full Stack</span>
                      <span className="text-[9px] sm:text-[10px] text-[var(--text-muted)] block font-mono">React · Laravel</span>
                    </div>
                    <div className="p-1 sm:p-2.5 rounded-xl bg-[rgb(var(--wash-rgb))]/[0.02] border border-[rgb(var(--border-rgb))]/[0.06] text-center">
                      <ShieldCheck className="w-4 h-4 mx-auto text-[var(--violet-text)] mb-1" />
                      <span className="text-[9px] sm:text-[11px] font-bold text-[var(--text-main)] block">Security</span>
                      <span className="text-[9px] sm:text-[10px] text-[var(--text-muted)] block font-mono">Azure · RBAC</span>
                    </div>
                    <div className="p-1 sm:p-2.5 rounded-xl bg-[rgb(var(--wash-rgb))]/[0.02] border border-[rgb(var(--border-rgb))]/[0.06] text-center">
                      <Server className="w-4 h-4 mx-auto text-[var(--accent-text)] mb-1" />
                      <span className="text-[9px] sm:text-[11px] font-bold text-[var(--text-main)] block">Systems</span>
                      <span className="text-[9px] sm:text-[10px] text-[var(--text-muted)] block font-mono">Linux · Cisco</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantitative Proof Strip with Motion */}
              <div className="relative sm:mt-4">
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-3">
                  {impactMetrics.map((metric, idx) => (
                    <motion.div
                      key={metric.label}
                      initial={false}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="px-2.5 sm:px-3 py-2.5 rounded-xl glass-card glass-card-hover border border-[rgb(var(--border-rgb))]/[0.07] flex flex-col space-y-1"
                    >
                      <span className="text-2xl font-extrabold font-mono tracking-tight tabular-nums bg-gradient-to-r from-[#35D7FF] to-[#8667FF] bg-clip-text text-transparent">
                        {metric.value}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-[var(--text-main)]">
                        {metric.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Elegant Scroll Indicator */}
      <div className="hidden sm:flex justify-center mt-4">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--accent-text)] transition-colors cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[var(--accent-text)]" />
        </a>
      </div>
    </section>
  );
}
