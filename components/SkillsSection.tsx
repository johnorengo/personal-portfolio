"use client";


import Image from "next/image";
import { Code2, ShieldCheck, Brain, Smartphone, Briefcase, Cloud } from "lucide-react";
import { motion } from "motion/react";
import { skillsCategories } from "../data/portfolio-data";

const categoryIcons = [Code2, ShieldCheck, Brain, Smartphone, Briefcase, Cloud];

export default function SkillsSection() {
  return (
    <section id="expertise" className="pt-4 pb-12 lg:pb-16 relative overflow-hidden bg-[rgb(var(--page-rgb))]">
      {/* Dynamic ambient backdrop */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#35D7FF]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#8667FF]/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-3"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-text)] uppercase">
            Technical Proficiency & Domains
          </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight font-display [text-wrap:balance]">
            Structured expertise across engineering disciplines.
          </h2>
          <p className="text-base text-[var(--slate-300)] leading-relaxed">
            Practical technical capabilities organized across software engineering, cybersecurity, machine learning, mobile apps, business systems, and cloud operations.
          </p>
        </motion.div>

        {/* 6 Expertise Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-7">
          {skillsCategories.map((category, idx) => {
            const Icon = categoryIcons[idx] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="min-w-0 overflow-hidden p-6 sm:p-7 rounded-3xl glass-card glass-card-hover border border-[rgb(var(--border-rgb))]/[0.09] flex flex-col justify-start gap-4 relative isolate group"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-64 sm:h-72 -z-10" aria-hidden="true">
                  <Image
                    src={category.backgroundImage}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 387px, (min-width: 1024px) calc((100vw - 120px) / 3), (min-width: 768px) calc((100vw - 92px) / 2), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                    quality={90}
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--page-rgb))]/20 via-[rgb(var(--card-rgb))]/60 to-[rgb(var(--card-rgb))]" />
                </div>
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-2xl bg-[rgb(var(--page-rgb))]/75 backdrop-blur-md border border-[rgb(var(--border-rgb))]/[0.15] text-[var(--accent-text)] group-hover:bg-[#35D7FF]/10 group-hover:border-[#35D7FF]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="rounded-full border border-[rgb(var(--border-rgb))]/[0.12] bg-[rgb(var(--page-rgb))]/75 px-2.5 py-1.5 text-[10px] font-mono tracking-wider text-[var(--slate-200)] backdrop-blur-md">DOMAIN 0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--text-main)] font-display group-hover:text-[var(--accent-text)] transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--slate-300)] leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills tags list */}
                <div className="pt-3 border-t border-[rgb(var(--border-rgb))]/[0.1] grid grid-cols-2 content-start gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-2.5 py-2 rounded-xl bg-[rgb(var(--page-rgb))]/75 border border-[rgb(var(--border-rgb))]/[0.1] hover:border-[#35D7FF]/40 hover:bg-[#35D7FF]/5 transition-colors flex flex-col items-start justify-center gap-1 min-w-0"
                    >
                      <span className="text-[11px] sm:text-xs leading-snug font-medium text-[var(--slate-200)] break-words">{skill.name}</span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">{skill.tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
