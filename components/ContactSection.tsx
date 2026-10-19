"use client";

import { useState } from "react";
import { Mail, Phone, GitBranch, Globe, Award, Copy, Check, Send, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio-data";

interface ContactSectionProps {
  onOpenCoffeeModal?: () => void;
}

export default function ContactSection({
  onOpenCoffeeModal,
}: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "ready" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const emailDraftUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    "Project enquiry from " + formData.name.trim()
  )}&body=${encodeURIComponent(
    "Name: " + formData.name.trim() + "\nReply email: " + formData.email.trim() + "\n\n" + formData.message.trim()
  )}`;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please add your name, reply email, and a short message.");
      setFormStatus("error");
      return;
    }
    setErrorMessage("");
    window.location.href = emailDraftUrl;
    setFormStatus("ready");
  };

  return (
    <section id="contact" className="pt-4 pb-12 lg:pb-16 relative overflow-hidden bg-[#080D18]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#35D7FF]/[0.05] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Master Prompt Section 11 Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#35D7FF] uppercase">
            Let&apos;s Connect & Collaborate
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FC] leading-[1.08] font-display [text-wrap:balance]">
            Have an Idea? Let&apos;s Build Something Exceptional.
          </h2>
          <p className="text-base sm:text-lg text-[#96A3B7] leading-relaxed">
            Whether you need a scalable full stack application, an enterprise ERP/POS integration, a cloud security review, or technical consultation, I look forward to discussing your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels & Social Profiles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-7 rounded-3xl glass-card border border-white/[0.1] space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#35D7FF] uppercase tracking-wider">
                  Direct Email
                </span>
                <span className="text-xs text-[#96A3B7] font-mono">Response within 24h</span>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-black/40 border border-white/[0.08] rounded-xl">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#35D7FF] shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-[#F4F7FC] truncate">
                    {personalInfo.email}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-200 hover:text-white bg-white/[0.08] hover:bg-[#35D7FF]/20 hover:border-[#35D7FF]/40 border border-white/[0.1] rounded-lg transition-all shrink-0 ml-2 cursor-pointer active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#35D7FF]" />
                      <span className="text-[#35D7FF]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#96A3B7] pt-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1 text-[#35D7FF] hover:underline font-bold"
                >
                  <span>Open in Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="font-mono text-[11px] text-slate-500">Primary Channel</span>
              </div>
            </div>

            {/* Direct Profiles List */}
            <div className="p-7 rounded-3xl glass-card border border-white/[0.1] space-y-4 shadow-xl">
              <span className="text-xs font-mono font-bold text-[#8667FF] uppercase tracking-wider block">
                Verified Social Profiles
              </span>

              <div className="space-y-3">
                <a
                  href="https://github.com/johnorengo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#35D7FF]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] text-[#35D7FF]">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">GitHub Profile</span>
                      <span className="text-[11px] text-[#96A3B7] font-mono">@johnorengo · Code & Architecture</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#35D7FF] transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/johnorengo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#8667FF]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] text-[#8667FF]">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">LinkedIn Profile</span>
                      <span className="text-[11px] text-[#96A3B7] font-mono">Professional Network & Endorsements</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#8667FF] transition-colors" />
                </a>

                <a
                  href="https://www.credly.com/users/john-orengo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-amber-400/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] text-amber-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Credly Certifications</span>
                      <span className="text-[11px] text-[#96A3B7] font-mono">AWS, CNCF & Microsoft Badges</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#35D7FF]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] text-[#35D7FF]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Direct Call</span>
                      <span className="text-[11px] text-[#96A3B7] font-mono">{personalInfo.phoneDisplay}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#35D7FF] transition-colors" />
                </a>

                <a
                  href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#35D7FF]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] text-[#35D7FF]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">WhatsApp</span>
                      <span className="text-[11px] text-[#96A3B7] font-mono">{personalInfo.phoneDisplay}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#35D7FF] transition-colors" />
                </a>
              </div>

              {/* Buy Me a Coffee Support Modal Trigger */}
              {onOpenCoffeeModal && (
                <div className="pt-2 border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={onOpenCoffeeModal}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#35D7FF]/30 text-[#96A3B7] hover:text-[#35D7FF] transition-all text-xs font-bold cursor-pointer"
                  >
                    <span>☕</span>
                    <span>Support with M-Pesa or Buy Me a Coffee</span>
                  </button>
                </div>
              )}
            </div>

            {/* Location & Timezone Details */}
            <div className="p-4 rounded-2xl glass-card border border-white/[0.08] flex items-center justify-between text-xs text-[#96A3B7]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#35D7FF]" />
                <span>{personalInfo.location} ({personalInfo.timezone})</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#35D7FF]">
                <Clock className="w-3.5 h-3.5" />
                <span>Available Globally</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0E1524] shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#35D7FF] via-[#8667FF] to-[#35D7FF]" />
              <div className="p-6 sm:p-8 space-y-7">
                <div className="flex items-start justify-between gap-5">
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#35D7FF] uppercase">Your Next Idea</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F7FC] font-display leading-tight">Let&apos;s make it happen.</h3>
                    <p className="max-w-md text-sm text-[#96A3B7] leading-relaxed">Tell me what you&apos;re working on, what needs improving, or where you could use a hand.</p>
                  </div>
                  <div className="hidden sm:flex shrink-0 h-12 w-12 items-center justify-center rounded-2xl border border-[#35D7FF]/20 bg-[#35D7FF]/10 text-[#35D7FF]">
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-200"><span className="mr-2 font-mono text-[#35D7FF]" aria-hidden="true">01</span>Your name <span className="text-[#35D7FF]">*</span></label>
                      <input id="name" name="name" type="text" autoComplete="name" required placeholder="What should I call you?" value={formData.name} onChange={(event) => { setFormData({ ...formData, name: event.target.value }); setFormStatus("idle"); }} className="w-full rounded-xl border border-white/[0.1] bg-[#080D18]/80 px-4 py-3.5 text-sm text-[#F4F7FC] placeholder:text-slate-500 outline-none focus:border-[#35D7FF]/70 focus:ring-2 focus:ring-[#35D7FF]/15 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-200"><span className="mr-2 font-mono text-[#35D7FF]" aria-hidden="true">02</span>Reply email <span className="text-[#35D7FF]">*</span></label>
                      <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" value={formData.email} onChange={(event) => { setFormData({ ...formData, email: event.target.value }); setFormStatus("idle"); }} className="w-full rounded-xl border border-white/[0.1] bg-[#080D18]/80 px-4 py-3.5 text-sm text-[#F4F7FC] placeholder:text-slate-500 outline-none focus:border-[#35D7FF]/70 focus:ring-2 focus:ring-[#35D7FF]/15 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-200"><span className="mr-2 font-mono text-[#35D7FF]" aria-hidden="true">03</span>What do you have in mind? <span className="text-[#35D7FF]">*</span></label>
                    <textarea id="message" name="message" required rows={5} placeholder="A new product, a system that needs fixing, or a challenge worth solving. Share a little context and your ideal timeline." value={formData.message} onChange={(event) => { setFormData({ ...formData, message: event.target.value }); setFormStatus("idle"); }} className="w-full min-h-36 resize-y rounded-xl border border-white/[0.1] bg-[#080D18]/80 px-4 py-3.5 text-sm leading-relaxed text-[#F4F7FC] placeholder:text-slate-500 outline-none focus:border-[#35D7FF]/70 focus:ring-2 focus:ring-[#35D7FF]/15 transition-colors" />
                  </div>
                  {formStatus === "error" && <p role="alert" className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">{errorMessage}</p>}
                  {formStatus === "ready" && (
                    <p role="status" className="rounded-xl border border-[#35D7FF]/20 bg-[#35D7FF]/5 p-3 text-xs leading-relaxed text-slate-300">Complete and send your message in your email app. If it didn&apos;t open, <a href={emailDraftUrl} className="font-semibold text-[#35D7FF] underline underline-offset-2">open your draft again</a>.</p>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                    <p className="max-w-[16rem] text-xs leading-relaxed text-[#96A3B7]">Opens your email app with a draft ready for you to review and send.</p>
                    <button type="submit" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#35D7FF] to-[#8667FF] px-6 py-3.5 text-sm font-bold text-[#080D18] shadow-lg shadow-[#35D7FF]/10 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35D7FF] cursor-pointer">Prepare Message<ArrowUpRight className="w-4 h-4" aria-hidden="true" /></button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
