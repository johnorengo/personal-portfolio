"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "../data/portfolio-data";

interface NavbarProps {
  onOpenCoffeeModal?: () => void;
}

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenCoffeeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["contact", "experience", "projects", "expertise", "about", "top"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[rgb(var(--page-rgb))]/90 backdrop-blur-xl border-b border-[rgb(var(--border-rgb))]/[0.08] shadow-2xl py-3.5"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-8">
            {/* Wordmark / Monogram */}
            <a
              href="#top"
              className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 transition-transform active:scale-95"
            >
              <BrandMark className="h-7 sm:h-8 w-auto" />
              <span className="font-display font-bold text-base min-[375px]:text-lg sm:text-xl tracking-tight text-[var(--text-main)] group-hover:text-[var(--accent-text)] transition-colors">
                {personalInfo.name}
              </span>
            </a>

            {/* Navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                      isActive
                        ? "text-[var(--accent-text)] font-semibold"
                        : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#35D7FF] to-[#8667FF] rounded-full shadow-[0_0_8px_#35D7FF]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Primary Action Zone */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <ThemeToggle />
              {onOpenCoffeeModal && (
                <button
                  type="button"
                  onClick={onOpenCoffeeModal}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--accent-text)] bg-[rgb(var(--wash-rgb))]/[0.03] hover:bg-[rgb(var(--wash-rgb))]/[0.06] border border-[rgb(var(--border-rgb))]/[0.08] hover:border-[#35D7FF]/40 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer"
                  title="Support with M-Pesa / Buy Me a Coffee"
                >
                  <span className="text-sm">☕</span>
                  <span>Coffee</span>
                </button>
              )}
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#080D18] bg-gradient-to-r from-[#35D7FF] to-[#8667FF] hover:brightness-110 rounded-xl transition-all shadow-md shadow-[#35D7FF]/20 hover:shadow-[#35D7FF]/40 whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-1">
              <ThemeToggle />
              {onOpenCoffeeModal && (
                <button
                  type="button"
                  onClick={onOpenCoffeeModal}
                  className="p-2 text-[var(--accent-text)] border border-[rgb(var(--border-rgb))]/[0.1] bg-[rgb(var(--wash-rgb))]/[0.04] rounded-lg text-sm"
                  aria-label="Buy me a coffee"
                >
                  ☕
                </button>
              )}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] focus:outline-none"
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

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-[rgb(var(--border-rgb))]/[0.08] bg-[rgb(var(--page-rgb))]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-1 text-base font-medium">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-[var(--text-muted)] hover:bg-[rgb(var(--wash-rgb))]/[0.05] hover:text-[var(--accent-text)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[rgb(var(--border-rgb))]/[0.08] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-bold rounded-xl bg-gradient-to-r from-[#35D7FF] to-[#8667FF] text-[#080D18]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.cvPath}
                download
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium rounded-xl border border-[rgb(var(--border-rgb))]/[0.1] text-[var(--text-muted)] hover:bg-[rgb(var(--wash-rgb))]/[0.05]"
              >
                <Download className="w-4 h-4 text-[var(--accent-text)]" />
                <span>Download Résumé (PDF)</span>
              </a>
            </div>
          </div>
        )}
        <div id="chapter-badge-slot" className="flex min-h-8 items-center justify-end px-4 pt-2 sm:px-6 lg:px-8 min-[1600px]:hidden" />
      </header>
    </>
  );
}
