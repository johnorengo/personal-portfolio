"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ExperienceCV from "../components/ExperienceCV";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CoffeeModal from "../components/CoffeeModal";

export default function Home() {
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);

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
