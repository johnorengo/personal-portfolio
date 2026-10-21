"use client";


import { useLayoutEffect, useRef, useState } from "react";
import { Download, Briefcase, GraduationCap, Award, CheckCircle, ExternalLink, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { experienceData, educationData, certificationsData, personalInfo } from "../data/portfolio-data";

type TimelineFilter = "experience" | "certifications" | "education";

function alignCareerTabs(element: HTMLDivElement | null) {
  if (!element) return;
  const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 72;
  const content = document.getElementById("career-content");
  if (!content) return;
  window.scrollTo({
    top: Math.max(0, window.scrollY + content.getBoundingClientRect().top - Math.max(80, headerHeight + 8) - element.offsetHeight - 24),
    behavior: "instant",
  });
}

export default function ExperienceCV() {
  const [activeTab, setActiveTab] = useState<TimelineFilter>("experience");
  const tabsRef = useRef<HTMLDivElement>(null);
  const alignAfterSelection = useRef(false);

  const selectTab = (tab: TimelineFilter) => {
    if (tab === activeTab) {
      alignCareerTabs(tabsRef.current);
      return;
    }
    alignAfterSelection.current = true;
    setActiveTab(tab);
  };

  useLayoutEffect(() => {
    if (!alignAfterSelection.current) return;
    alignAfterSelection.current = false;
    alignCareerTabs(tabsRef.current);
  }, [activeTab]);


  return (
    <section id="experience" className="pt-4 pb-12 lg:pb-16 relative overflow-clip bg-[rgb(var(--page-rgb))]">
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
            <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-text)] uppercase">
              Career History & Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight font-display [text-wrap:balance]">
              Grounded in applied computing and verified certifications.
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              Experience in software development, business systems, networking, and cybersecurity across technology companies and the public sector, supported by a Computer Science degree and cloud credentials.
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
        <div ref={tabsRef} role="group" aria-label="Choose career history or credentials" className="sticky top-[calc(var(--header-height,80px)+8px)] z-30 grid grid-cols-1 items-stretch gap-1.5 rounded-2xl border border-[rgb(var(--border-rgb))]/[0.12] bg-[rgb(var(--card-rgb))]/95 p-1.5 backdrop-blur-xl shadow-xl sm:flex sm:flex-wrap">
          {[
            { id: "experience", label: `Roles & Internships (${experienceData.length})`, icon: Briefcase },
            { id: "certifications", label: `Professional Development & Certifications (${certificationsData.length})`, icon: CheckCircle },
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
                onClick={() => selectTab(tab.id as TimelineFilter)}
                className={`relative flex min-h-11 min-w-0 items-center gap-2 px-3 py-2.5 text-left text-xs font-semibold leading-relaxed rounded-xl border transition-colors cursor-pointer sm:px-4 ${
                  isSelected
                    ? "text-[var(--accent-text)] bg-[rgb(var(--wash-rgb))]/[0.06] border-[#35D7FF]/40 shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)] border-transparent"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-[var(--accent-text)]" : "text-[var(--text-muted)]"}`} />
                <span>{tab.label}</span>
                {isSelected && (
                  <motion.div
                    layoutId="cvTabIndicatorMaster"
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-[#35D7FF] to-[#8667FF]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div key={activeTab} id="career-content" aria-live="polite" className="space-y-12">
          {/* Work Experience Section */}
          {(activeTab === "experience") && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-main)] font-display flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[var(--accent-text)]" />
                <span>Work Experience & Applied Roles</span>
              </h3>

              <div className="space-y-6">
                {experienceData.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 sm:p-8 rounded-3xl glass-card glass-card-hover border border-[rgb(var(--border-rgb))]/[0.08] space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgb(var(--border-rgb))]/[0.06] pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-[var(--accent-text)] uppercase tracking-wider block mb-1">
                          {exp.type}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] font-display">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                          <span className="font-semibold text-[var(--slate-200)]">{exp.organization}</span>
                          {exp.location && (
                            <>
                              <span aria-hidden="true" className="text-[var(--slate-600)]">&middot;</span>
                              <span>{exp.location}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <span className="font-mono text-xs sm:text-sm font-bold text-[var(--accent-text)] tabular-nums bg-[rgb(var(--wash-rgb))]/[0.03] px-3.5 py-1.5 rounded-lg border border-[rgb(var(--border-rgb))]/[0.08] self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-mono text-[var(--slate-400)] uppercase tracking-wider block">
                        Key Accomplishments
                      </span>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--slate-300)]">
                            <ChevronRight className="w-4 h-4 text-[var(--accent-text)] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[rgb(var(--border-rgb))]/[0.06] flex flex-wrap items-center gap-2">
                      <span className="text-xs text-[var(--text-muted)] mr-1">Stack:</span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-[var(--slate-300)] bg-[rgb(var(--wash-rgb))]/[0.03] border border-[rgb(var(--border-rgb))]/[0.06] px-2.5 py-0.5 rounded-md"
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
            <div id="credentials" className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-main)] font-display flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--violet-text)]" />
                <span>Professional Development & Certifications</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6">
                {certificationsData.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 rounded-3xl glass-card glass-card-hover border border-[rgb(var(--border-rgb))]/[0.08] hover:border-[#8667FF]/40 transition-all flex flex-col space-y-5"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[var(--violet-text)]">{cert.badgeType}</span>
                        <div className="p-2 rounded-xl bg-[#8667FF]/10 border border-[#8667FF]/30 text-[var(--violet-text)]">
                          <Award className="w-5 h-5" />
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-[var(--text-main)] font-display leading-snug">
                        {cert.title}
                      </h4>

                      <div className="text-xs text-[var(--text-muted)] space-y-1">
                        <p className="text-[var(--slate-300)] font-medium">{cert.issuer}</p>
                        <p className="font-mono text-[var(--text-muted)]">{cert.date}</p>
                        {cert.credentialId && (
                          <p className="font-mono text-[var(--text-muted)]">ID: {cert.credentialId}</p>
                        )}
                      </div>
                    </div>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between w-full pt-3.5 border-t border-[rgb(var(--border-rgb))]/[0.06] text-xs font-bold text-[var(--accent-text)] hover:text-[var(--text-main)]"
                      >
                        <span>Verify Credential</span>
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
              <h3 className="text-xl font-bold text-[var(--text-main)] font-display flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[var(--accent-text)]" />
                <span>Academic Background</span>
              </h3>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-8 rounded-3xl glass-card border border-[rgb(var(--border-rgb))]/[0.08] space-y-6">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgb(var(--border-rgb))]/[0.06] pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-[var(--accent-text)] uppercase tracking-wider block mb-1">
                          Higher Education
                        </span>
                        <h4 className="text-2xl font-bold text-[var(--text-main)] font-display">
                          {edu.degree}
                        </h4>
                        <p className="text-sm font-semibold text-[var(--slate-300)] mt-1">
                          {edu.institution} · {edu.location}
                        </p>
                        <p className="text-sm text-[var(--text-muted)] mt-1">{edu.classification}</p>
                      </div>

                      <span className="font-mono text-sm font-bold text-[var(--accent-text)] bg-[rgb(var(--wash-rgb))]/[0.03] px-3.5 py-1.5 rounded-lg border border-[rgb(var(--border-rgb))]/[0.08] self-start sm:self-auto">
                        {edu.period}
                      </span>
                    </div>

                    <div className="space-y-3 pt-1">
                      <span className="text-xs font-mono text-[var(--slate-400)] uppercase tracking-wider block">
                        Curriculum Highlights & Honors
                      </span>
                      <ul className="space-y-2">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
                            <CheckCircle className="w-4 h-4 text-[var(--accent-text)] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
