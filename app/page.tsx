"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ExperienceCV from "../components/ExperienceCV";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CoffeeModal from "../components/CoffeeModal";

export default function Home() {
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);
  const [prefilledContactTopic, setPrefilledContactTopic] = useState<string | undefined>(undefined);

  const handleSelectContactForProject = (projectTitle: string) => {
    setPrefilledContactTopic(`Discussion on ${projectTitle}`);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#060e1a] text-slate-100">
      <Navbar onOpenCoffeeModal={() => setCoffeeModalOpen(true)} />

      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ProjectsShowcase onSelectContact={handleSelectContactForProject} />
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
