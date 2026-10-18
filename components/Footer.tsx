"use client";

import { ArrowUp, GitBranch, Globe, Award, Mail, Phone } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060e1a] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-md">
            <span className="font-semibold text-sm text-white block">
              {personalInfo.name}
            </span>
            <p className="text-slate-400 text-xs leading-relaxed">
              Full-Stack Software Engineer & Cloud Security Specialist. Architecting reliable digital platforms and hardened cloud environments.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-teal-300 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-teal-300 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-teal-300 transition-colors">
              Experience
            </a>
            <a href="#credentials" className="hover:text-teal-300 transition-colors">
              Credentials
            </a>
            <a href="#contact" className="hover:text-teal-300 transition-colors">
              Contact
            </a>
            <a
              href={personalInfo.cvPath}
              download
              className="text-teal-400 hover:text-teal-300 font-semibold"
            >
              CV (PDF)
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/johnorengo"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-teal-300 transition-colors"
              aria-label="GitHub"
            >
              <GitBranch className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-orengo"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-teal-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://www.credly.com/users/john-orengo"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-teal-300 transition-colors"
              aria-label="Credly"
            >
              <Award className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-teal-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-slate-400 hover:text-teal-300 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} John Orengo. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
