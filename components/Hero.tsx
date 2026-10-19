"use client";

import Image from "next/image";
import { ArrowRight, GitBranch, Globe, Award, Mail, Phone, ShieldCheck, Terminal, Server, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio-data";

export default function Hero() {
  const impactMetrics = [
    { value: "1.2M+", label: "Records Managed", detail: "National institutional systems" },
    { value: "15+", label: "Facilities Supported", detail: "Enterprise ICT & networks" },
    { value: "99.9%", label: "Architecture SLA", detail: "Zero single-point failures" },
    { value: "3+", label: "Cloud Certifications", detail: "AWS, CNCF & Microsoft SC-900" },
  ];

  return (
    <section id="top" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-6 pb-12 lg:pt-6 lg:pb-12 overflow-hidden bg-[#080D18]">
      {/* Restrained Atmospheric Particle / Glow Field */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] w-[480px] h-[480px] rounded-full bg-[#35D7FF]/[0.08] blur-[140px]" />
        <div className="absolute top-[10%] right-[12%] w-[420px] h-[420px] rounded-full bg-[#8667FF]/[0.07] blur-[150px]" />
        <div className="absolute inset-0 tech-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto space-y-10">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy & Actions with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-7"
          >
            {/* Master Headline: "Building Intelligent Solutions. Securing Digital Futures." */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-[#F4F7FC] leading-[1.05] font-display [text-wrap:balance]">
              Building{" "}
              <span className="bg-gradient-to-r from-[#35D7FF] via-[#8667FF] to-[#35D7FF] bg-clip-text text-transparent">
                Intelligent Solutions.
              </span>
              <br />
              Securing Digital Futures.
            </h1>

            {/* Master Supporting Text */}
            <p className="text-base sm:text-lg text-[#96A3B7] leading-relaxed max-w-2xl font-normal">
              {personalInfo.supportingText}
            </p>

            {/* Two Prominent CTAs: "Explore My Work" and "Let's Connect" */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#080D18] bg-gradient-to-r from-[#35D7FF] to-[#8667FF] hover:brightness-110 rounded-xl transition-all shadow-lg shadow-[#35D7FF]/20 hover:shadow-[#35D7FF]/40 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#F4F7FC] hover:text-white glass-card hover:bg-white/[0.08] border border-white/[0.12] hover:border-[#35D7FF]/40 rounded-xl transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Let&apos;s Connect</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Professionally Framed Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end lg:self-start"
          >
            <div className="relative w-full max-w-md">
              {/* Luminous aura behind card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#35D7FF]/25 via-[#8667FF]/20 to-[#35D7FF]/25 rounded-3xl blur-2xl opacity-60" />

              {/* Card Container */}
              <div className="relative rounded-3xl glass-card border border-white/[0.12] shadow-2xl overflow-hidden bg-[#121A29]/95">
                <div>
                  <div className="relative h-96 lg:h-[clamp(16rem,42svh,24rem)] w-full bg-[#080D18] overflow-hidden">
                    <Image
                      src={personalInfo.profileImage}
                      alt="John Orengo — Software Engineer & Cybersecurity"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      priority
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121A29] via-transparent to-transparent opacity-90" />

                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                      <div>
                        <span className="font-display font-bold text-white text-base block drop-shadow-md">
                          {personalInfo.name}
                        </span>
                        <span className="text-[#35D7FF] text-xs font-medium block">
                          Full-Stack & Cloud Security
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#35D7FF] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#35D7FF]/30">
                        BSc CUEA
                      </span>
                    </div>
                  </div>

                  {/* Quick matrix below photo */}
                  <div className="p-4 bg-[#0E1524] border-t border-white/[0.08] grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                      <Terminal className="w-4 h-4 mx-auto text-[#35D7FF] mb-1" />
                      <span className="text-[11px] font-bold text-[#F4F7FC] block">Full-Stack</span>
                      <span className="text-[10px] text-[#96A3B7] block font-mono">React · Laravel</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                      <ShieldCheck className="w-4 h-4 mx-auto text-[#8667FF] mb-1" />
                      <span className="text-[11px] font-bold text-[#F4F7FC] block">Security</span>
                      <span className="text-[10px] text-[#96A3B7] block font-mono">Azure · RBAC</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                      <Server className="w-4 h-4 mx-auto text-[#35D7FF] mb-1" />
                      <span className="text-[11px] font-bold text-[#F4F7FC] block">Systems</span>
                      <span className="text-[10px] text-[#96A3B7] block font-mono">Linux · Cisco</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social channels row */}
              <div className="relative mt-4 text-center">
                <span className="block text-xs font-mono text-[#96A3B7] uppercase tracking-wider mb-3">
                  Verified Social & Technical Profiles
                </span>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
                  <a
                    href="https://github.com/johnorengo"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#96A3B7] hover:text-[#35D7FF] transition-colors"
                  >
                    <GitBranch className="w-4 h-4 text-[#35D7FF]" />
                    <span>GitHub</span>
                  </a>
                  <span className="text-slate-700">·</span>

                  <a
                    href="https://www.linkedin.com/in/john-orengo"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#96A3B7] hover:text-[#8667FF] transition-colors"
                  >
                    <Globe className="w-4 h-4 text-[#8667FF]" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-slate-700">·</span>

                  <a
                    href="https://www.credly.com/users/john-orengo"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#96A3B7] hover:text-[#35D7FF] transition-colors"
                  >
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Credly Badges</span>
                  </a>
                  <span className="text-slate-700">·</span>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#96A3B7] hover:text-[#35D7FF] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#35D7FF]" />
                    <span>Email</span>
                  </a>
                  <span className="text-slate-700">·</span>

                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#96A3B7] hover:text-[#8667FF] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#8667FF]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quantitative Proof Strip with Motion */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {impactMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl glass-card glass-card-hover border border-white/[0.07] flex flex-col space-y-1"
              >
                <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight tabular-nums bg-gradient-to-r from-[#35D7FF] to-[#8667FF] bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <span className="text-sm font-bold text-[#F4F7FC]">
                  {metric.label}
                </span>
                <span className="text-xs text-[#96A3B7] leading-snug">
                  {metric.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="flex justify-center mt-6">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs text-[#96A3B7] hover:text-[#35D7FF] transition-colors cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#35D7FF]" />
        </a>
      </div>
    </section>
  );
}
