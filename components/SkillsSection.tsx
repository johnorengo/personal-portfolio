"use client";

import Image from "next/image";
import { Code2, ShieldCheck, Brain, Smartphone, Briefcase, Cloud } from "lucide-react";
import { motion } from "motion/react";
import { skillsCategories } from "../data/portfolio-data";

const categoryIcons = [Code2, ShieldCheck, Brain, Smartphone, Briefcase, Cloud];

export default function SkillsSection() {
  return (
    <section id="expertise" className="pt-4 pb-12 lg:pb-16 relative overflow-hidden bg-[#080D18]">
      {/* Dynamic ambient backdrop */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#35D7FF]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#8667FF]/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-3"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#35D7FF] uppercase">
            Technical Proficiency & Domains
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F7FC] leading-tight font-display [text-wrap:balance]">
            Structured expertise across engineering disciplines.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Practical technical capabilities organized across software engineering, cybersecurity, machine learning, mobile apps, business systems, and cloud operations.
          </p>
        </motion.div>

        {/* 6 Expertise Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-7">
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
                className="h-full min-w-0 overflow-hidden p-6 sm:p-7 rounded-3xl border border-white/[0.12] bg-[#0E1524] flex flex-col justify-between gap-6 relative isolate group hover:border-[#35D7FF]/40 hover:shadow-[0_18px_48px_-20px_rgba(53,215,255,0.25)] transition-[border-color,box-shadow]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-80 -z-10" aria-hidden="true">
                  <Image
                    src={category.backgroundImage}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 390px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#080D18]/20 via-[#0E1524]/60 to-[#0E1524]" />
                </div>
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex min-h-32 items-start justify-between">
                    <div className="p-3 rounded-2xl bg-[#080D18]/75 backdrop-blur-md border border-white/[0.15] text-[#35D7FF] group-hover:bg-[#35D7FF]/10 group-hover:border-[#35D7FF]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="rounded-full border border-white/[0.12] bg-[#080D18]/75 px-2.5 py-1.5 text-[10px] font-mono tracking-wider text-slate-200 backdrop-blur-md">DOMAIN 0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#F4F7FC] font-display group-hover:text-[#35D7FF] transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills tags list */}
                <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-1.5 rounded-xl bg-[#080D18]/65 border border-white/[0.1] hover:border-[#35D7FF]/40 hover:bg-[#35D7FF]/5 transition-colors flex flex-wrap items-center gap-x-2 gap-y-1 min-w-0 max-w-full"
                    >
                      <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                      <span className="text-[10px] font-mono text-[#96A3B7]">{skill.tag}</span>
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
