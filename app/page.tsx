"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ExperienceCV from "../components/ExperienceCV";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CoffeeModal from "../components/CoffeeModal";
import { clearSectionHash, scrollToSection } from "../lib/section-navigation";

export default function Home() {
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      let sectionId = window.location.hash.slice(1);
      try {
        sectionId = decodeURIComponent(sectionId);
      } catch {
        clearSectionHash();
        sectionId = "";
      }
      if (sectionId) {
        requestAnimationFrame(() => {
          if (!scrollToSection(sectionId)) clearSectionHash();
        });
      }
    }

    const handleSectionClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
      const sectionId = link?.getAttribute("href")?.slice(1);
      if (!sectionId || !document.getElementById(sectionId)) return;
      event.preventDefault();
      scrollToSection(sectionId);
    };

    document.addEventListener("click", handleSectionClick);
    return () => document.removeEventListener("click", handleSectionClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(var(--page-rgb))] text-[var(--text-main)]">
      <Navbar onOpenCoffeeModal={() => setCoffeeModalOpen(true)} />

      <main className="flex-1">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsShowcase />
        <ExperienceCV />
        <ContactSection
          onOpenCoffeeModal={() => setCoffeeModalOpen(true)}
        />
      </main>

      <Footer />

      <CoffeeModal
        isOpen={coffeeModalOpen}
        onClose={() => setCoffeeModalOpen(false)}
      />
    </div>
  );
}
