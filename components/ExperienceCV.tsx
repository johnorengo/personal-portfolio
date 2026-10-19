"use client";

import { useState } from "react";
import { Download, Briefcase, GraduationCap, Award, CheckCircle, ExternalLink, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { experienceData, educationData, certificationsData, personalInfo } from "../data/portfolio-data";

type TimelineFilter = "all" | "experience" | "certifications" | "education";

export default function ExperienceCV() {
  const [activeTab, setActiveTab] = useState<TimelineFilter>("experience");

  return (
    <section id="experience" className="pt-4 pb-12 lg:pb-16 relative overflow-hidden bg-[#080D18]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#35D7FF]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#35D7FF] uppercase">
              Career History & Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F7FC] leading-tight font-display [text-wrap:balance]">
              Grounded in applied computing and verified certifications.
            </h2>
            <p className="text-base text-[#96A3B7] leading-relaxed">
              Professional engineering roles across the public sector and cybersecurity firms, complemented by formal computer science studies and cloud credentials.
            </p>
          </div>

          {/* CV download */}
          <a
            href={personalInfo.cvPath}
            download
            className="self-start lg:self-end shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#080D18] bg-gradient-to-r from-[#35D7FF] to-[#8667FF] hover:brightness-110 rounded-xl transition-all shadow-md shadow-[#35D7FF]/20 whitespace-nowrap"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Tab switchers */}
        <div role="group" aria-label="Choose career history or credentials" className="flex items-center gap-2 border-b border-white/[0.08] pb-4 overflow-x-auto">
          {[
            { id: "all", label: "Overview", icon: Briefcase },
            { id: "experience", label: `Roles & Internships (${experienceData.length})`, icon: Briefcase },
            { id: "certifications", label: `Certifications (${certificationsData.length})`, icon: CheckCircle },
            { id: "education", label: "Education & Degree", icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isSelected}
                aria-controls="career-content"
                onClick={() => setActiveTab(tab.id as TimelineFilter)}
                className={`relative flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border transition-colors whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "text-[#35D7FF] bg-white/[0.06] border-[#35D7FF]/40 shadow-sm"
                    : "text-[#96A3B7] hover:text-white border-transparent"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#35D7FF]" : "text-[#96A3B7]"}`} />
                <span>{tab.label}</span>
                {isSelected && (
                  <motion.div
                    layoutId="cvTabIndicatorMaster"
                    className="absolute -bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-[#35D7FF] to-[#8667FF]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div key={activeTab} id="career-content" aria-live="polite" className="space-y-12">
          {activeTab === "all" && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#F4F7FC] font-display">Experience & Credentials at a Glance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-6">
                {[
                  { id: "experience", title: "Roles & Internships", count: experienceData.length, description: "Experience in software engineering, cybersecurity, and IT infrastructure across government, security, and education.", icon: Briefcase, action: "View Experience" },
                  { id: "certifications", title: "Industry Certifications", count: certificationsData.length, description: "Credentials from AWS, the Cloud Native Computing Foundation, and Microsoft, with links to verify them.", icon: CheckCircle, action: "View Certifications" },
                  { id: "education", title: "Education & Degree", count: educationData.length, description: "Computer Science at The Catholic University of Eastern Africa, including an Employee Task Management System capstone.", icon: GraduationCap, action: "View Education" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="p-6 rounded-3xl glass-card border border-white/[0.08] flex flex-col gap-4">
                      <div className="flex items-center justify-between text-[#35D7FF]">
                        <Icon className="w-5 h-5" />
                        <span className="text-2xl font-bold font-mono">{item.count}</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#F4F7FC]">{item.title}</h4>
                      <p className="text-sm text-[#96A3B7] leading-relaxed flex-1">{item.description}</p>
                      <button type="button" onClick={() => setActiveTab(item.id as TimelineFilter)} className="inline-flex items-center gap-2 text-xs font-bold text-[#35D7FF] hover:text-white self-start cursor-pointer">
                        {item.action}<ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Work Experience Section */}
          {(activeTab === "experience") && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#F4F7FC] font-display flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#35D7FF]" />
                <span>Work Experience & Applied Roles</span>
              </h3>

              <div className="space-y-6">
                {experienceData.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 sm:p-8 rounded-3xl glass-card glass-card-hover border border-white/[0.08] space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#35D7FF] uppercase tracking-wider block mb-1">
                          {exp.type}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#F4F7FC] font-display">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-[#96A3B7] mt-1">
                          <span className="font-semibold text-slate-200">{exp.organization}</span>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <span className="font-mono text-xs sm:text-sm font-bold text-[#35D7FF] tabular-nums bg-white/[0.03] px-3.5 py-1.5 rounded-lg border border-white/[0.08] self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#96A3B7] leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                        Key Accomplishments
                      </span>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <ChevronRight className="w-4 h-4 text-[#35D7FF] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                      <span className="text-xs text-[#96A3B7] mr-1">Stack:</span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06] px-2.5 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Section */}
          {(activeTab === "certifications") && (
            <div id="credentials" className="space-y-6 pt-6">
              <h3 className="text-xl font-bold text-[#F4F7FC] font-display flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#8667FF]" />
                <span>Industry Certifications & Verified Credentials</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificationsData.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 rounded-3xl glass-card glass-card-hover border border-white/[0.08] hover:border-[#8667FF]/40 transition-all flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#8667FF]">{cert.badgeType}</span>
                        <div className="p-2 rounded-xl bg-[#8667FF]/10 border border-[#8667FF]/30 text-[#8667FF]">
                          <Award className="w-5 h-5" />
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-[#F4F7FC] font-display leading-snug">
                        {cert.title}
                      </h4>

                      <div className="text-xs text-[#96A3B7] space-y-1">
                        <p className="text-slate-300 font-medium">Issuer: {cert.issuer}</p>
                        {cert.credentialId && (
                          <p className="font-mono text-[#96A3B7]">ID: {cert.credentialId}</p>
                        )}
                      </div>
                    </div>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between w-full pt-3.5 border-t border-white/[0.06] text-xs font-bold text-[#35D7FF] hover:text-white"
                      >
                        <span>Verify Credential on Credly</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {(activeTab === "education") && (
            <div className="space-y-6 pt-6">
              <h3 className="text-xl font-bold text-[#F4F7FC] font-display flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#35D7FF]" />
                <span>Academic Background</span>
              </h3>

              <div className="p-8 rounded-3xl glass-card border border-white/[0.08] space-y-6">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#35D7FF] uppercase tracking-wider block mb-1">
                          Higher Education
                        </span>
                        <h4 className="text-2xl font-bold text-[#F4F7FC] font-display">
                          {edu.degree}
                        </h4>
                        <p className="text-sm font-semibold text-slate-300 mt-1">
                          {edu.institution} · {edu.location}
                        </p>
                      </div>

                      <span className="font-mono text-sm font-bold text-[#35D7FF] bg-white/[0.03] px-3.5 py-1.5 rounded-lg border border-white/[0.08] self-start sm:self-auto">
                        {edu.period}
                      </span>
                    </div>

                    <div className="space-y-3 pt-1">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                        Curriculum Highlights & Honors
                      </span>
                      <ul className="space-y-2">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#96A3B7]">
                            <CheckCircle className="w-4 h-4 text-[#35D7FF] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
