"use client";

import { useState } from "react";
import { Download, Briefcase, GraduationCap, Award, CheckCircle, ExternalLink, FileText, ChevronRight } from "lucide-react";
import { experienceData, educationData, certificationsData, skillsCategories, personalInfo } from "../data/portfolio-data";

type TabMode = "experience" | "skills" | "certifications" | "education";

export default function ExperienceCV() {
  const [activeTab, setActiveTab] = useState<TabMode>("experience");

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#060e1a] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
              Curriculum Vitae & Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight [text-wrap:balance]">
              Grounded in applied computing and real-world system support.
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Detailed professional history spanning national software engineering, Azure cloud audits, formal computer science education, and industry certifications.
            </p>
          </div>

          {/* Quick CV Download Card */}
          <div className="p-5 rounded-2xl bg-[#0c182b] border border-slate-700/80 shadow-xl shrink-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800/50 text-teal-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">John Orengo — CV</span>
                <span className="text-xs text-slate-400">PDF Document · Updated 2026</span>
              </div>
            </div>

            <a
              href={personalInfo.cvPath}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-all shadow-sm hover:shadow-teal-500/25 whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Download Official CV</span>
            </a>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-8 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "experience"
                ? "bg-[#0f213a] text-teal-300 border border-teal-800/60 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Work Experience ({experienceData.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("skills")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "skills"
                ? "bg-[#0f213a] text-teal-300 border border-teal-800/60 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Technical Skills Matrix</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("certifications")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "certifications"
                ? "bg-[#0f213a] text-teal-300 border border-teal-800/60 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Certifications ({certificationsData.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "education"
                ? "bg-[#0f213a] text-teal-300 border border-teal-800/60 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </button>
        </div>

        {/* Tab 1: Work Experience Timeline */}
        {activeTab === "experience" && (
          <div className="space-y-6">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0c182b] border border-slate-800/90 hover:border-slate-700 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-1">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-300 mt-1">
                      <span className="font-semibold text-slate-200">{exp.organization}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400">{exp.location}</span>
                    </div>
                  </div>

                  <span className="font-mono text-xs sm:text-sm font-semibold text-teal-300 tabular-nums bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Key Accomplishments & Impact
                  </span>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400 mr-2">Technologies:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-slate-300 bg-slate-900/90 border border-slate-800 px-2.5 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Technical Skills Matrix */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0c182b] border border-slate-800 space-y-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center justify-between">
                    <span>{cat.title}</span>
                    <span className="text-xs font-mono text-teal-400">DOMAIN 0{idx + 1}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-[#091322] border border-slate-800/80 flex items-center justify-between text-xs"
                    >
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span
                        className={`font-mono text-[11px] ${
                          skill.level === "Advanced"
                            ? "text-teal-400 font-semibold"
                            : "text-slate-400"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === "certifications" && (
          <div id="credentials" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c182b] border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-teal-400">{cert.badgeType}</span>
                    <Award className="w-5 h-5 text-teal-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs text-slate-400 space-y-1">
                    <p className="text-slate-300 font-medium">Issuer: {cert.issuer}</p>
                    {cert.credentialId && (
                      <p className="font-mono text-slate-400">ID: {cert.credentialId}</p>
                    )}
                  </div>
                </div>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-800 text-xs font-semibold text-teal-400 hover:text-teal-300"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Education */}
        {activeTab === "education" && (
          <div className="p-8 rounded-2xl bg-[#0c182b] border border-slate-800 space-y-6">
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-1">
                      Higher Education
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-1">
                      {edu.institution} · {edu.location}
                    </p>
                  </div>

                  <span className="font-mono text-sm font-semibold text-teal-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                    {edu.period}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Curriculum Highlights & Honors
                  </span>
                  <ul className="space-y-2">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
