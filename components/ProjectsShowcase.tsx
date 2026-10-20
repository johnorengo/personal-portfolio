"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data/portfolio-data";

type FilterCategory = "all" | "business" | "education" | "fullstack";

const filterOptions: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "business", label: "Commercial Websites" },
  { id: "fullstack", label: "Agency Website" },
  { id: "education", label: "Public Sector" },
];

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="pt-4 pb-12 lg:pb-16 relative overflow-clip bg-[rgb(var(--page-rgb))]">
      {/* Dynamic ambient glow field */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#35D7FF]/[0.04] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-[#8667FF]/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Section Header with Asymmetric Editorial Composition */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4 border-b border-[rgb(var(--border-rgb))]/[0.08]">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center text-xs font-mono font-bold tracking-widest text-[var(--accent-text)] uppercase">
              <span>Featured Engineering Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.08] font-display [text-wrap:balance]">
              Architected for operational scale, performance, and security.
            </h2>
          </div>


        </div>

        {/* Interactive Filter Tabs */}
        <div role="group" aria-label="Filter projects" className="sticky top-[calc(var(--header-height,80px)+8px)] z-30 grid grid-cols-2 items-stretch gap-1.5 p-1.5 rounded-2xl border border-[rgb(var(--border-rgb))]/[0.12] bg-[rgb(var(--card-rgb))]/95 backdrop-blur-xl shadow-xl sm:flex sm:flex-wrap">
          {filterOptions.map((opt) => {
            const isSelected = activeFilter === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveFilter(opt.id)}
                className={`relative min-h-11 min-w-0 px-3 py-2 text-xs font-semibold leading-relaxed rounded-xl transition-colors cursor-pointer sm:px-4 ${
                  isSelected ? "text-[#080D18] font-bold" : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
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

        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`group h-full flex flex-col rounded-3xl glass-card glass-card-hover border border-[rgb(var(--border-rgb))]/[0.09] overflow-hidden relative ${idx === 0 && activeFilter === "all" ? "md:col-span-2" : ""}`}
                >
                  {/* Media container */}
                  <div className={`relative w-full ${idx === 0 && activeFilter === "all" ? "h-64 sm:h-80" : "h-56 sm:h-64"} shrink-0 bg-[rgb(var(--page-rgb))] overflow-hidden`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                      className={`${project.imageFit === "contain" ? "object-contain bg-[#280d00]" : "object-cover object-top"} transition-transform duration-700 group-hover:scale-105`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--surface-rgb))] via-[rgb(var(--surface-rgb))]/25 to-transparent" />

                    {/* Category Stamp */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-black/75 backdrop-blur-md text-[var(--accent-text)] border border-[#35D7FF]/30 shadow-md">
                        {project.categoryLabel}
                      </span>
                    </div>

                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-2 font-mono">
                        <span className="text-[var(--accent-text)]">{project.categoryLabel}</span>
                      </div>

                      <h3 className="min-h-14 text-xl font-bold text-[var(--text-main)] font-display group-hover:text-[var(--accent-text)] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Technologies & Trigger */}
                    <div className="pt-4 border-t border-[rgb(var(--border-rgb))]/[0.06] flex flex-col gap-4">
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-[rgb(var(--wash-rgb))]/[0.03] border border-[rgb(var(--border-rgb))]/[0.06] font-mono text-[10px]">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[10px] font-mono text-[var(--accent-text)]">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live preview of ${project.title}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-[#35D7FF]/30 bg-[#35D7FF]/10 px-4 py-2 text-xs font-bold text-[var(--accent-text)] hover:bg-[#35D7FF]/20 hover:text-[var(--text-main)] transition-colors"
                          >
                            Live Preview
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
        </div>
      </div>

    </section>
  );
}
