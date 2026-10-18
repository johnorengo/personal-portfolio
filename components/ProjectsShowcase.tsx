"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../types/portfolio";
import { projectsData } from "../data/portfolio-data";
import ProjectModal from "./ProjectModal";

interface ProjectsShowcaseProps {
  onSelectContact?: (projectTitle: string) => void;
}

type FilterCategory = "all" | "fullstack" | "security" | "infrastructure";

export default function ProjectsShowcase({ onSelectContact }: ProjectsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#081220] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
              Selected Work & Deployments
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight [text-wrap:balance]">
              Systems designed for operational scale and strict security.
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              A curated catalog of production applications, cloud governance audits, and enterprise ICT infrastructure projects delivered across Kenya.
            </p>
          </div>

          {/* Interactive Filter Controls (Segmented Bar) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0c182b] border border-slate-800 rounded-xl overflow-x-auto shrink-0">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                activeFilter === "all"
                  ? "bg-teal-400 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Systems ({projectsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("fullstack")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                activeFilter === "fullstack"
                  ? "bg-teal-400 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Full-Stack
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("security")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                activeFilter === "security"
                  ? "bg-teal-400 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Cloud & Security
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("infrastructure")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                activeFilter === "infrastructure"
                  ? "bg-teal-400 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Infrastructure
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl bg-[#0c182b] border border-slate-800/90 hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-teal-950/20 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Media Container */}
              <div className="relative w-full h-64 sm:h-72 bg-[#060e1a] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c182b] via-transparent to-transparent opacity-80" />

                {/* Quick Category Stamp */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-teal-300 border border-teal-800/40">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="p-2 rounded-lg bg-slate-950/80 backdrop-blur-md text-slate-300 group-hover:text-teal-300 border border-slate-800 group-hover:border-teal-700/60 transition-colors inline-block">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{project.clientOrOrg}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Technologies and Action Button */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={tech} className="inline-flex items-center">
                        <span className="text-slate-300 font-medium">{tech}</span>
                        {idx < Math.min(project.technologies.length, 4) - 1 && (
                          <span className="mx-1 text-slate-600">·</span>
                        )}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-slate-500 font-mono text-[11px]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-400 group-hover:text-teal-300 whitespace-nowrap">
                    <span>Case Study & Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
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
