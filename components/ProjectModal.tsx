"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, GitBranch, CheckCircle2, Cpu, BarChart2 } from "lucide-react";
import { Project } from "../types/portfolio";

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
      if (e.key === "Escape") {
        onClose();
      }
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

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c182b] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#091322]">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-teal-400 font-semibold">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.clientOrOrg}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[calc(85vh-5rem)] overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Project Banner Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c182b] via-transparent to-transparent opacity-60" />
          </div>

          {/* Title & Role */}
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
            >
              {project.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="text-teal-300 font-medium">Role: {project.role}</span>
              <span aria-hidden="true">·</span>
              <span>Organization: {project.clientOrOrg}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>{project.description}</p>
          </div>

          {/* Impact Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-5 rounded-xl bg-[#091322] border border-slate-800/90">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-4">
                <BarChart2 className="w-4 h-4 text-teal-400" />
                <span>Measurable Impact & Benchmarks</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 bg-[#0f213a] rounded-lg border border-slate-800">
                    <span className="text-xl sm:text-2xl font-bold text-white font-mono block tabular-nums">
                      {metric.value}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 block">
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
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Cpu className="w-4 h-4 text-teal-400" />
                <span>Architectural & Engineering Decisions</span>
              </div>
              <ul className="space-y-2.5">
                {project.architectureHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-teal-400 font-mono text-xs mt-1 shrink-0">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Deliverables */}
          {project.keyDeliverables && project.keyDeliverables.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white">
                Key Deliverables & Systems Built
              </h3>
              <ul className="space-y-2">
                {project.keyDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="pt-4 border-t border-slate-800">
            <span className="text-xs font-semibold text-slate-400 block mb-2.5">
              Technologies & Methodologies
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                >
                  <GitBranch className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-teal-300 hover:text-white bg-teal-950/60 hover:bg-teal-900 border border-teal-800/60 rounded-lg transition-colors"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
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
                  window.location.hash = "contact";
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
            >
              <span>Discuss Similar Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
