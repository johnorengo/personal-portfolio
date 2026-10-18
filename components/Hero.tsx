"use client";

import Image from "next/image";
import { Download, ArrowRight, GitBranch, Globe, Award, Mail, Phone, ShieldCheck, Terminal, Server } from "lucide-react";
import { personalInfo, keyImpactMetrics } from "../data/portfolio-data";

export default function Hero() {
  return (
    <section id="top" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Subtle structural grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(20, 184, 166, 0.15), transparent 70%),
            linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-400 uppercase">
              <span>Full-Stack Engineer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Cloud Security Specialist</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Nairobi, Kenya</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Building dependable digital systems for mission-critical operations.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I design and deploy resilient full-stack applications, cloud identity governance controls, and hands-on ICT infrastructure. From national education verification portals to Azure security audits, I bridge rigorous software engineering with operational reliability.
            </p>

            {/* Availability Notice */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Available for engineering roles, cloud audits & collaboration</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-all shadow-sm hover:shadow-teal-500/25 whitespace-nowrap"
              >
                <span>Explore Selected Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.cvPath}
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-100 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social & Professional Links Row */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="block text-xs font-medium text-slate-400 mb-3">
                Connect & Verify Credentials
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/johnorengo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-teal-300 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GitBranch className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">·</span>

                <a
                  href="https://www.linkedin.com/in/john-orengo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-teal-300 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-700">·</span>

                <a
                  href="https://www.credly.com/users/john-orengo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-teal-300 transition-colors"
                  aria-label="Credly Certifications"
                >
                  <Award className="w-4 h-4 text-slate-400" />
                  <span>Credly</span>
                </a>
                <span className="text-slate-700">·</span>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-teal-300 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Email</span>
                </a>
                <span className="text-slate-700">·</span>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-teal-300 transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>WhatsApp / Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Persona & Architecture Anchor */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-teal-500/20 via-sky-500/10 to-teal-500/5 rounded-2xl blur-lg opacity-70" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#0c182b] border border-slate-800 shadow-2xl overflow-hidden">
                {/* Visual Header / Portrait Frame */}
                <div className="relative h-96 w-full bg-[#060e1a] overflow-hidden">
                  <Image
                    src={personalInfo.profileImage}
                    alt="John Orengo — Full-Stack Engineer"
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    priority
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c182b] via-[#0c182b]/30 to-transparent" />
                  
                  {/* Subtle badge overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                    <div>
                      <span className="font-semibold text-white block text-sm">John Orengo</span>
                      <span className="text-teal-300 text-xs">Software Engineer & Security Trainee</span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">BSc Computer Science</span>
                  </div>
                </div>

                {/* Engineering Highlights Strip */}
                <div className="p-5 space-y-3.5 bg-[#0a1526] border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <span>Engineering Focus</span>
                    <span className="text-teal-400 font-mono text-[11px]">PROD-READY</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-lg bg-[#0f213a] border border-slate-800/90 text-center">
                      <Terminal className="w-4 h-4 mx-auto text-teal-400 mb-1" />
                      <span className="text-[11px] font-semibold text-slate-200 block">Full-Stack</span>
                      <span className="text-[10px] text-slate-400 block">React · Laravel</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#0f213a] border border-slate-800/90 text-center">
                      <ShieldCheck className="w-4 h-4 mx-auto text-sky-400 mb-1" />
                      <span className="text-[11px] font-semibold text-slate-200 block">Cloud Sec</span>
                      <span className="text-[10px] text-slate-400 block">Azure · RBAC</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#0f213a] border border-slate-800/90 text-center">
                      <Server className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
                      <span className="text-[11px] font-semibold text-slate-200 block">Systems</span>
                      <span className="text-[10px] text-slate-400 block">Linux · Cisco</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Rigor Strip below Split Hero */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-slate-800/90">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {keyImpactMetrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <span className="text-3xl sm:text-4xl font-bold text-white font-mono tracking-tight tabular-nums">
                  {metric.value}
                </span>
                <span className="text-sm font-semibold text-teal-300">
                  {metric.label}
                </span>
                <span className="text-xs text-slate-400">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
