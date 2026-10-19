"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types/portfolio";
import { projectsData } from "../data/portfolio-data";
import ProjectModal from "./ProjectModal";

interface ProjectsShowcaseProps {
  onSelectContact?: (projectTitle: string) => void;
}

type FilterCategory = "all" | "business" | "education" | "fullstack";

const filterOptions: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "business", label: "Commercial Websites" },
  { id: "fullstack", label: "Agency Website" },
  { id: "education", label: "Public Sector" },
];

export default function ProjectsShowcase({ onSelectContact }: ProjectsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const featuredProject = filteredProjects[0];
  const secondaryProjects = filteredProjects.slice(1);

  return (
    <section id="projects" className="pt-4 pb-12 lg:pb-16 relative overflow-hidden bg-[#080D18]">
      {/* Dynamic ambient glow field */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#35D7FF]/[0.04] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-[#8667FF]/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header with Asymmetric Editorial Composition */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4 border-b border-white/[0.08]">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#35D7FF] uppercase">
              <span>03</span>
              <span className="text-slate-600">/</span>
              <span>Featured Engineering Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F7FC] leading-[1.08] font-display [text-wrap:balance]">
              Architected for operational scale, performance, and security.
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 glass-card rounded-2xl shrink-0 border border-white/[0.08] overflow-x-auto self-start md:self-auto">
            {filterOptions.map((opt) => {
              const isSelected = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setActiveFilter(opt.id)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
                    isSelected ? "text-[#080D18] font-bold" : "text-[#96A3B7] hover:text-[#F4F7FC]"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterPillEditorial"
                      className="absolute inset-0 bg-gradient-to-r from-[#35D7FF] to-[#8667FF] rounded-xl shadow-md shadow-[#35D7FF]/30"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    {opt.label} {opt.id === "all" ? `(${projectsData.length})` : ""}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Projects Layout */}
        <div className="space-y-10">
          {/* 1. Flagship Featured Case Study (Oversized Hero Card) */}
          {featuredProject && (
            <motion.article
              layout
              key={featuredProject.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(featuredProject)}
              className="group relative rounded-3xl glass-card border border-white/[0.1] hover:border-[#35D7FF]/40 transition-all duration-300 overflow-hidden cursor-pointer shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Visual Media Pane */}
                <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-[#0A101C] overflow-hidden">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className={`${featuredProject.imageFit === "contain" ? "object-contain bg-[#280d00]" : "object-cover object-top"} transition-transform duration-700 group-hover:scale-105`}
                    priority
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D18] via-transparent to-transparent opacity-80 lg:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#121A29]/90 hidden lg:block" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#080D18]/85 backdrop-blur-md text-[#35D7FF] border border-[#35D7FF]/30 shadow-lg">
                      {featuredProject.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-5 right-5">
                    <span className="p-3 rounded-xl bg-[#080D18]/85 backdrop-blur-md text-[#F4F7FC] group-hover:text-[#35D7FF] border border-white/[0.1] group-hover:border-[#35D7FF]/50 transition-all inline-block shadow-lg">
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>

                {/* Content Pane */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-[#121A29]/95">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#96A3B7]">
                      <span className="text-[#35D7FF] font-bold">Featured Case Study</span>
                      {featuredProject.year && <span>{featuredProject.year}</span>}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F7FC] font-display group-hover:text-[#35D7FF] transition-colors leading-tight">
                      {featuredProject.title}
                    </h3>

                    <p className="text-sm text-[#96A3B7] leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Key Metrics Highlight */}
                    {featuredProject.metrics && featuredProject.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 pt-3">
                        {featuredProject.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <span className="text-lg font-bold font-mono text-[#35D7FF] block tabular-nums">
                              {m.value}
                            </span>
                            <span className="text-[11px] text-[#96A3B7] block mt-0.5">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technologies & Trigger */}
                  <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5 text-xs">
                      {featuredProject.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#35D7FF] group-hover:text-white whitespace-nowrap">
                      <span>Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* 2. Secondary Bento Grid (Remaining Projects with Varied Layouts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {secondaryProjects.map((project, idx) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedProject(project)}
                  className="group flex flex-col rounded-3xl glass-card glass-card-hover border border-white/[0.09] overflow-hidden cursor-pointer relative"
                >
                  {/* Media container */}
                  <div className="relative w-full h-56 sm:h-64 bg-[#0A101C] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`${project.imageFit === "contain" ? "object-contain bg-[#280d00]" : "object-cover object-top"} transition-transform duration-700 group-hover:scale-105`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121A29] via-[#121A29]/25 to-transparent" />

                    {/* Category Stamp */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-black/75 backdrop-blur-md text-[#35D7FF] border border-[#35D7FF]/30 shadow-md">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="p-2.5 rounded-xl bg-black/75 backdrop-blur-md text-slate-300 group-hover:text-[#35D7FF] border border-white/[0.1] group-hover:border-[#35D7FF]/50 transition-all inline-block shadow-md">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#96A3B7] mb-2 font-mono">
                        <span className="text-[#35D7FF]">{project.categoryLabel}</span>
                      </div>

                      <h3 className="text-xl font-bold text-[#F4F7FC] font-display group-hover:text-[#35D7FF] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-[#96A3B7] leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>
                    </div>

                    {/* Technologies & Trigger */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#96A3B7]">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] font-mono text-[10px]">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[10px] font-mono text-[#35D7FF]">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#35D7FF] group-hover:text-white whitespace-nowrap">
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectContact={onSelectContact}
      />
    </section>
  );
}
