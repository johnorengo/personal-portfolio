"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ServicesSection from "../components/ServicesSection";
import ExperienceCV from "../components/ExperienceCV";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CoffeeModal from "../components/CoffeeModal";

export default function Home() {
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);
  const [prefilledContactTopic, setPrefilledContactTopic] = useState<string | undefined>(undefined);

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledContactTopic(`Inquiry regarding ${serviceTitle}`);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080D18] text-[#F4F7FC]">
      <Navbar onOpenCoffeeModal={() => setCoffeeModalOpen(true)} />

      <main className="flex-1">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsShowcase />
        <ServicesSection onSelectService={handleSelectService} />
        <ExperienceCV />
        <ContactSection
          onOpenCoffeeModal={() => setCoffeeModalOpen(true)}
          prefilledTopic={prefilledContactTopic}
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
