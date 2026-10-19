"use client";

import { Download, Brain, Layers } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo, specializations } from "../data/portfolio-data";

export default function AboutSection() {
  const approaches = [
    {
      title: "Understand what matters",
      desc: "I listen to your goals and focus on the problem that matters.",
    },
    {
      title: "Build with care",
      desc: "I build for ease of use, security, and lasting reliability.",
    },
    {
      title: "Keep you involved",
      desc: "I explain decisions clearly and welcome your feedback.",
    },
  ];

  return (
    <section id="about" className="pt-4 pb-12 lg:pb-16 relative overflow-hidden bg-[#080D18]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#35D7FF]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        {/* Editorial Heading & Introduction with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#35D7FF] uppercase">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F7FC] leading-tight font-display [text-wrap:balance]">
              I&apos;m John. I turn complex challenges into dependable software.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#96A3B7] text-base sm:text-lg leading-relaxed">
            <p>{personalInfo.bio}</p>
            <p>
              With a Computer Science degree from The Catholic University of Eastern Africa, I bring experience building education platforms at Kenya&apos;s Ministry of Education, reviewing Azure security at Serianu, and delivering software and business solutions at Growmore Technology Africa Ltd.
            </p>
            <p>
              I take time to understand your goals, explain decisions clearly, and build with the people using your system in mind. Let&apos;s create something that makes their work easier and your business stronger.
            </p>

            <div className="pt-2">
              <a
                href={personalInfo.cvPath}
                download
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#35D7FF] to-[#8667FF] text-[#080D18] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md shadow-[#35D7FF]/20"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download Résumé (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid: Specializations & Problem Solving Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Where I Can Help Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 p-8 rounded-3xl glass-card border border-white/[0.08] space-y-6 flex flex-col justify-start"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#35D7FF] uppercase tracking-wider">
                  What I Bring
                </span>
                <Layers className="w-5 h-5 text-[#35D7FF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F4F7FC] font-display">
                Where I Can Help
              </h3>
              <p className="text-sm text-[#96A3B7]">
                I work across software development and security, connecting the pieces needed to turn your idea into a dependable product.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 sm:auto-rows-fr gap-3 pt-2">
              {specializations.map((spec, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5 text-xs text-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35D7FF]" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* How I Work Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 p-8 rounded-3xl glass-card border border-white/[0.08] space-y-6 flex flex-col justify-start"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#8667FF] uppercase tracking-wider">
                  Working Together
                </span>
                <Brain className="w-5 h-5 text-[#8667FF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F4F7FC] font-display">
                How I Work
              </h3>
              <p className="text-sm text-[#96A3B7]">
                Good work starts with understanding each other. Here is what you can expect from me.
              </p>
            </div>

            <div className="grid auto-rows-fr gap-3 pt-2">
              {approaches.map((app, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1"
                >
                  <span className="text-xs font-bold text-[#F4F7FC] block">
                    0{idx + 1}. {app.title}
                  </span>
                  <p className="text-xs text-[#96A3B7] leading-4">
                    {app.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
