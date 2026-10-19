"use client";

import Image from "next/image";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#060A14] py-16 text-[#96A3B7] text-xs relative overflow-hidden">
      {/* Subtle bottom ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-t from-[#35D7FF]/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2.5 max-w-md">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#121A29] to-[#182338] border border-white/[0.1] flex items-center justify-center font-display font-bold text-xs text-[#35D7FF]">
                JO
              </span>
              <span className="font-display font-bold text-base text-[#F4F7FC]">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-[#96A3B7] text-xs leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#about" className="hover:text-[#35D7FF] transition-colors">
              About
            </a>
            <a href="#expertise" className="hover:text-[#35D7FF] transition-colors">
              Expertise
            </a>
            <a href="#projects" className="hover:text-[#35D7FF] transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-[#35D7FF] transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-[#35D7FF] transition-colors">
              Contact
            </a>
            <a
              href={personalInfo.cvPath}
              download
              className="text-[#35D7FF] hover:underline font-bold"
            >
              Résumé (PDF)
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="flex items-center justify-self-center md:justify-self-start gap-5">
            <a
              href="https://github.com/johnorengo"
              target="_blank"
              rel="noreferrer"
              className="text-[#96A3B7] hover:text-[#35D7FF] transition-colors"
              aria-label="GitHub Profile"
            >
              <Image src="/icons/github.svg" alt="" aria-hidden="true" width={16} height={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/johnorengo"
              target="_blank"
              rel="noreferrer"
              className="text-[#96A3B7] hover:text-[#8667FF] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Image src="/icons/linkedin.svg" alt="" aria-hidden="true" width={16} height={16} />
            </a>
            <a
              href="https://www.credly.com/users/john-orengo"
              target="_blank"
              rel="noreferrer"
              className="text-[#96A3B7] hover:text-amber-400 transition-colors"
              aria-label="Credly Certifications"
            >
              <Image src="/icons/credly.svg" alt="" aria-hidden="true" width={16} height={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#96A3B7] hover:text-[#35D7FF] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-[#96A3B7] hover:text-[#35D7FF] transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <span className="text-[#96A3B7] text-center">© {new Date().getFullYear()} John Orengo. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="justify-self-center md:justify-self-end p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#35D7FF]/40 text-[#96A3B7] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#35D7FF]" />
              <span className="text-[11px] font-bold">Top</span>
            </button>
        </div>
      </div>
    </footer>
  );
}
