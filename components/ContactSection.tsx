"use client";

import { useState } from "react";
import { Phone, GitBranch, Globe, Award, Check, Send, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio-data";

interface ContactSectionProps {
  onOpenCoffeeModal?: () => void;
}

export default function ContactSection({
  onOpenCoffeeModal,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formStatus === "submitting") return;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please add your name, reply email, and a short message.");
      setFormStatus("error");
      return;
    }
    const submission = new FormData(event.currentTarget);
    if (submission.get("botcheck")) return;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setErrorMessage("Messaging is temporarily unavailable. Please use the contact links to reach me.");
      setFormStatus("error");
      return;
    }
    setErrorMessage("");
    setFormStatus("submitting");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: "Portfolio enquiry from " + formData.name.trim(),
          from_name: "John Orengo Portfolio",
          botcheck: false,
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(response.status === 429 ? "Please wait a moment before sending another message." : "Your message could not be sent. Please try again.");
      }
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage(error instanceof Error && error.name !== "AbortError" && error.name !== "TypeError" ? error.message : "The connection was interrupted. Please try again; your message is still here.");
      setFormStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  };

  return (
    <section id="contact" className="pt-4 pb-12 lg:pb-16 relative overflow-hidden bg-[rgb(var(--page-rgb))]">
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
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-text)] uppercase">
            Let&apos;s Connect & Collaborate
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.08] font-display [text-wrap:balance]">
            Have an Idea? Let&apos;s Build Something Exceptional.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            Whether you need a scalable full stack application, an enterprise ERP/POS integration, a cloud security review, or technical consultation, I look forward to discussing your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-8 items-stretch">
          {/* Your Next Idea Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full min-w-0"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-[rgb(var(--border-rgb))]/[0.1] bg-[rgb(var(--card-rgb))] shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#35D7FF] via-[#8667FF] to-[#35D7FF]" />
              <div className="p-6 sm:p-8 space-y-7">
                <div className="flex items-start justify-between gap-5">
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[var(--accent-text)] uppercase">Your Next Idea</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] font-display leading-tight">Let&apos;s make it happen.</h3>
                    <p className="max-w-md text-sm text-[var(--text-muted)] leading-relaxed">Tell me what you&apos;re working on, what needs improving, or where you could use a hand.</p>
                  </div>
                  <div className="hidden sm:flex shrink-0 h-12 w-12 items-center justify-center rounded-2xl border border-[#35D7FF]/20 bg-[#35D7FF]/10 text-[var(--accent-text)]">
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} aria-busy={formStatus === "submitting"} className="space-y-5">
                  <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold text-[var(--slate-200)]">The name behind the idea <span className="text-[var(--accent-text)]">*</span></label>
                      <input id="name" name="name" disabled={formStatus === "submitting"} type="text" autoComplete="name" required placeholder="Your first and last name" value={formData.name} onChange={(event) => { setFormData({ ...formData, name: event.target.value }); setFormStatus("idle"); }} className="w-full rounded-xl border border-[rgb(var(--border-rgb))]/[0.1] bg-[rgb(var(--page-rgb))]/80 px-4 py-3.5 text-sm text-[var(--text-main)] placeholder:text-[var(--slate-500)] outline-none focus:border-[#35D7FF]/70 focus:ring-2 focus:ring-[#35D7FF]/15 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold text-[var(--slate-200)]">Work / Personal Email <span className="text-[var(--accent-text)]">*</span></label>
                      <input id="email" name="email" disabled={formStatus === "submitting"} type="email" autoComplete="email" required placeholder="Your preferred email address" value={formData.email} onChange={(event) => { setFormData({ ...formData, email: event.target.value }); setFormStatus("idle"); }} className="w-full rounded-xl border border-[rgb(var(--border-rgb))]/[0.1] bg-[rgb(var(--page-rgb))]/80 px-4 py-3.5 text-sm text-[var(--text-main)] placeholder:text-[var(--slate-500)] outline-none focus:border-[#35D7FF]/70 focus:ring-2 focus:ring-[#35D7FF]/15 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold text-[var(--slate-200)]">What shall we bring to life? <span className="text-[var(--accent-text)]">*</span></label>
                    <textarea id="message" name="message" disabled={formStatus === "submitting"} required rows={5} placeholder="A new product, a system that needs fixing, or a challenge worth solving. Share a little context and your ideal timeline." value={formData.message} onChange={(event) => { setFormData({ ...formData, message: event.target.value }); setFormStatus("idle"); }} className="w-full min-h-36 resize-y rounded-xl border border-[rgb(var(--border-rgb))]/[0.1] bg-[rgb(var(--page-rgb))]/80 px-4 py-3.5 text-sm leading-relaxed text-[var(--text-main)] placeholder:text-[var(--slate-500)] outline-none focus:border-[#35D7FF]/70 focus:ring-2 focus:ring-[#35D7FF]/15 transition-colors" />
                  </div>
                  {formStatus === "error" && <p role="alert" className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">{errorMessage}</p>}
                  {formStatus === "success" && (
                    <p role="status" className="flex items-start gap-2 rounded-xl border border-[#35D7FF]/20 bg-[#35D7FF]/5 p-3 text-sm leading-relaxed text-[var(--slate-200)]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-text)]" />Message sent. Thank you for reaching out. I&apos;ll reply to the email you provided.</p>
                  )}
                  <div className="flex justify-center border-t border-[rgb(var(--border-rgb))]/[0.08] pt-5">
                    <button type="submit" disabled={formStatus === "submitting"} className="inline-flex min-h-12 min-w-48 items-center justify-center rounded-full border border-[rgb(var(--border-rgb))]/15 bg-gradient-to-r from-[#35D7FF] to-[#8667FF] bg-[length:150%_100%] bg-left px-9 py-3.5 text-sm font-bold tracking-wide text-[#080D18] shadow-[0_6px_24px_-8px_rgba(53,215,255,0.45)] transition-[background-position,box-shadow,transform] duration-300 enabled:hover:bg-right enabled:hover:shadow-[0_8px_30px_-6px_rgba(134,103,255,0.5)] motion-safe:enabled:hover:-translate-y-0.5 motion-safe:enabled:active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35D7FF] cursor-pointer disabled:opacity-60 disabled:cursor-wait">{formStatus === "submitting" ? "Sending..." : "Send Message"}</button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Verified Social Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full min-w-0"
          >
            {/* Direct Profiles List */}
            <div className="h-full p-6 sm:p-8 rounded-3xl glass-card border border-[rgb(var(--border-rgb))]/[0.1] flex flex-col gap-5 shadow-xl">
              <span className="text-xs font-mono font-bold text-[var(--violet-text)] uppercase tracking-wider block">
                Verified Social Profiles
              </span>

              <div className="grid auto-rows-fr gap-3 flex-1">
                <a
                  href="https://github.com/johnorengo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[rgb(var(--wash-rgb))]/[0.02] hover:bg-[rgb(var(--wash-rgb))]/[0.06] border border-[rgb(var(--border-rgb))]/[0.06] hover:border-[#35D7FF]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[rgb(var(--wash-rgb))]/[0.04] text-[var(--accent-text)]">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">GitHub Profile</span>
                      <span className="text-[11px] text-[var(--text-muted)] font-mono">@johnorengo · Code & Architecture</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--slate-500)] group-hover:text-[var(--accent-text)] transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/johnorengo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[rgb(var(--wash-rgb))]/[0.02] hover:bg-[rgb(var(--wash-rgb))]/[0.06] border border-[rgb(var(--border-rgb))]/[0.06] hover:border-[#8667FF]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[rgb(var(--wash-rgb))]/[0.04] text-[var(--violet-text)]">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">LinkedIn Profile</span>
                      <span className="text-[11px] text-[var(--text-muted)] font-mono">Professional Network & Endorsements</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--slate-500)] group-hover:text-[var(--violet-text)] transition-colors" />
                </a>

                <a
                  href="https://www.credly.com/users/john-orengo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[rgb(var(--wash-rgb))]/[0.02] hover:bg-[rgb(var(--wash-rgb))]/[0.06] border border-[rgb(var(--border-rgb))]/[0.06] hover:border-amber-400/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[rgb(var(--wash-rgb))]/[0.04] text-amber-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Credly Certifications</span>
                      <span className="text-[11px] text-[var(--text-muted)] font-mono">AWS, CNCF & Microsoft Badges</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--slate-500)] group-hover:text-amber-400 transition-colors" />
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[rgb(var(--wash-rgb))]/[0.02] hover:bg-[rgb(var(--wash-rgb))]/[0.06] border border-[rgb(var(--border-rgb))]/[0.06] hover:border-[#35D7FF]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[rgb(var(--wash-rgb))]/[0.04] text-[var(--accent-text)]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Direct Call</span>
                      <span className="text-[11px] text-[var(--text-muted)] font-mono">{personalInfo.phoneDisplay}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--slate-500)] group-hover:text-[var(--accent-text)] transition-colors" />
                </a>


              </div>

              {/* Buy Me a Coffee Support Modal Trigger */}
              {onOpenCoffeeModal && (
                <div className="pt-2 border-t border-[rgb(var(--border-rgb))]/[0.08]">
                  <button
                    type="button"
                    onClick={onOpenCoffeeModal}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[rgb(var(--wash-rgb))]/[0.03] hover:bg-[rgb(var(--wash-rgb))]/[0.06] border border-[rgb(var(--border-rgb))]/[0.08] hover:border-[#35D7FF]/30 text-[var(--text-muted)] hover:text-[var(--accent-text)] transition-all text-xs font-bold cursor-pointer"
                  >
                    <span>☕</span>
                    <span>Fuel My Next Build</span>
                  </button>
                </div>
              )}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
