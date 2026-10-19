"use client";

import { Code, Smartphone, Cpu, ShoppingCart, ShieldCheck, HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { servicesData } from "../data/portfolio-data";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "custom-software": Code,
  "web-mobile": Smartphone,
  "process-automation": Cpu,
  "erp-pos-systems": ShoppingCart,
  "secure-architecture": ShieldCheck,
  "tech-consulting": HelpCircle,
};

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="pt-8 pb-24 lg:pt-10 lg:pb-32 relative overflow-hidden bg-[#080D18]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#35D7FF]/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-3 mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#35D7FF] uppercase">
            Services & Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F7FC] leading-tight font-display [text-wrap:balance]">
            Engineering capabilities that drive real business impact.
          </h2>
          <p className="text-base text-[#96A3B7] leading-relaxed">
            Collaborating with organizations to architect secure software, automate operational bottlenecks, deploy robust business management tools, and harden cloud postures.
          </p>
        </motion.div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 rounded-2xl glass-card glass-card-hover flex flex-col justify-between space-y-6 group relative"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#35D7FF] to-[#8667FF] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#35D7FF] group-hover:border-[#35D7FF]/40 group-hover:bg-[#35D7FF]/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#96A3B7]">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F4F7FC] font-display group-hover:text-[#35D7FF] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#96A3B7] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Core Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#35D7FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono text-[#96A3B7] bg-white/[0.03] rounded border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service.title);
                      } else {
                        window.location.hash = "contact";
                      }
                    }}
                    className="p-1.5 rounded-lg text-slate-400 group-hover:text-[#35D7FF] group-hover:bg-white/[0.05] transition-colors cursor-pointer"
                    aria-label={`Discuss ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
