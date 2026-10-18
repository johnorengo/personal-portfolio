"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

interface NavbarProps {
  onOpenCoffeeModal?: () => void;
}

export default function Navbar({ onOpenCoffeeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#060e1a]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-slate-100 hover:text-teal-400 transition-colors"
          >
            <span className="font-semibold text-lg sm:text-xl tracking-tight text-white group-hover:text-teal-300 transition-colors">
              {personalInfo.name}
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#about"
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Experience
            </a>
            <a
              href="#credentials"
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Credentials
            </a>
            <a
              href="#contact"
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onOpenCoffeeModal && (
              <button
                type="button"
                onClick={onOpenCoffeeModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-teal-300 hover:text-white bg-teal-950/40 hover:bg-teal-900/60 border border-teal-800/40 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                title="Support with M-Pesa / Buy Me a Coffee"
              >
                <span>☕</span>
                <span>Buy Coffee</span>
              </button>
            )}
            <a
              href={personalInfo.cvPath}
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-all shadow-sm hover:shadow-teal-500/20 whitespace-nowrap shrink-0 font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            {onOpenCoffeeModal && (
              <button
                type="button"
                onClick={onOpenCoffeeModal}
                className="p-2 text-teal-400 hover:text-teal-300 border border-teal-900/40 bg-teal-950/30 rounded-lg text-sm"
                aria-label="Buy me a coffee"
              >
                ☕
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-[#071322] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-300">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-teal-300"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-teal-300"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-teal-300"
            >
              Experience
            </a>
            <a
              href="#credentials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-teal-300"
            >
              Credentials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 hover:text-teal-300"
            >
              Contact
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={personalInfo.cvPath}
              download
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold rounded-lg bg-teal-400 text-slate-950 hover:bg-teal-300"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              <span>Email John</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
