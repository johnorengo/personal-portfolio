"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, GitBranch, CheckCircle2, Cpu, BarChart2, AlertCircle, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types/portfolio";
import { scrollToSection } from "../lib/section-navigation";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectContact?: (projectTitle: string) => void;
}

export default function ProjectModal({
  project,
  onClose,
  onSelectContact,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl glass-card border border-[rgb(var(--border-rgb))]/[0.15] rounded-3xl shadow-2xl overflow-hidden my-8 bg-[rgb(var(--card-rgb))]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgb(var(--border-rgb))]/[0.08] bg-[rgb(var(--page-rgb))]">
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <span className="text-[var(--accent-text)] font-bold">{project.categoryLabel}</span>
                {project.year && <span>{project.year}</span>}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-xl hover:bg-[rgb(var(--wash-rgb))]/[0.08] transition-colors cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="max-h-[calc(85vh-5rem)] overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* Project Banner Visual */}
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-950 border border-[rgb(var(--border-rgb))]/[0.08]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={project.imageFit === "contain" ? "object-contain bg-[#280d00]" : "object-cover object-top"}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--card-rgb))] via-transparent to-transparent opacity-75" />
              </div>

              {/* Title & Role */}
              <div>
                <h2
                  id="modal-project-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] font-display tracking-tight leading-tight"
                >
                  {project.title}
                </h2>
                <div className="mt-2.5 flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                  {project.role && <span className="text-[var(--accent-text)] font-semibold">Role: {project.role}</span>}
                  <span>Category: {project.categoryLabel}</span>
                </div>
              </div>

              {/* Summary Description */}
              <div className="space-y-4 text-[var(--slate-300)] text-sm sm:text-base leading-relaxed">
                <p>{project.description}</p>
              </div>

              {/* Challenge vs Solution Breakdown */}
              {(project.challenge || project.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.challenge && (
                    <div className="p-4 rounded-xl bg-[rgb(var(--wash-rgb))]/[0.02] border border-[rgb(var(--border-rgb))]/[0.06] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                        <AlertCircle className="w-4 h-4" />
                        <span>The Challenge</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="p-4 rounded-xl bg-[rgb(var(--wash-rgb))]/[0.02] border border-[rgb(var(--border-rgb))]/[0.06] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent-text)] uppercase tracking-wider">
                        <Lightbulb className="w-4 h-4" />
                        <span>The Architectural Solution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Impact Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="p-5 rounded-2xl bg-[rgb(var(--wash-rgb))]/[0.02] border border-[rgb(var(--border-rgb))]/[0.08]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent-text)] uppercase tracking-wider mb-4">
                    <BarChart2 className="w-4 h-4 text-[var(--accent-text)]" />
                    <span>Verified Outcomes & Performance Metrics</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="p-3.5 bg-black/40 rounded-xl border border-[rgb(var(--border-rgb))]/[0.06]">
                        <span className="text-xl sm:text-2xl font-extrabold text-white font-mono block tabular-nums bg-gradient-to-r from-[#35D7FF] to-[#8667FF] bg-clip-text text-transparent">
                          {metric.value}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] mt-1 block">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Highlights */}
              {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-main)]">
                    <Cpu className="w-4 h-4 text-[var(--accent-text)]" />
                    <span>Architectural & Engineering Decisions</span>
                  </div>
                  <ul className="space-y-2.5">
                    {project.architectureHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                        <span className="text-[var(--accent-text)] font-mono text-xs mt-1 shrink-0 font-bold">0{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Deliverables */}
              {project.keyDeliverables && project.keyDeliverables.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[var(--text-main)]">
                    Project Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.keyDeliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-text)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Systems & Capabilities */}
              {project.technologies.length > 0 && (
              <div className="pt-4 border-t border-[rgb(var(--border-rgb))]/[0.08]">
                <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-2.5">
                  Systems & Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-[var(--slate-200)] bg-[rgb(var(--wash-rgb))]/[0.05] border border-[rgb(var(--border-rgb))]/[0.1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              )}

              {/* Action Row */}
              <div className="pt-6 border-t border-[rgb(var(--border-rgb))]/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[var(--slate-200)] hover:text-[var(--text-main)] bg-[rgb(var(--wash-rgb))]/[0.06] hover:bg-[rgb(var(--wash-rgb))]/[0.1] rounded-xl transition-colors border border-[rgb(var(--border-rgb))]/[0.1]"
                    >
                      <GitBranch className="w-4 h-4 text-[var(--accent-text)]" />
                      <span>GitHub Code</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onSelectContact) {
                      onSelectContact(project.title);
                    } else {
                      window.setTimeout(() => scrollToSection("contact"), 300);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#080D18] bg-gradient-to-r from-[#35D7FF] to-[#8667FF] hover:brightness-110 rounded-xl transition-all shadow-md shadow-[#35D7FF]/20 cursor-pointer"
                >
                  <span>Inquire About Similar Architecture</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
