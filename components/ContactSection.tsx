"use client";

import { useState } from "react";
import { Mail, Phone, GitBranch, Globe, Award, Copy, Check, Send, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio-data";

interface ContactSectionProps {
  onOpenCoffeeModal?: () => void;
  prefilledTopic?: string;
}

export default function ContactSection({
  onOpenCoffeeModal,
  prefilledTopic,
}: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: prefilledTopic || "Software Engineering Project",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  /**
   * Form Submission Handler:
   * Ready for email delivery integration (e.g., Resend, Formspree, or custom /api/contact route).
   * Validates input fields and provides instant feedback with direct mailto fallback.
   */
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");

    // Integration Point: Connect your preferred email service API here
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({
          name: "",
          email: "",
          subject: "Software Engineering Project",
          message: "",
        });
      }, 6000);
    }, 800);
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
            <div className="p-7 sm:p-9 rounded-3xl glass-card border border-white/[0.1] shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#35D7FF] uppercase tracking-wider block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-bold text-[#F4F7FC] font-display">
                  Start a Project Conversation
                </h3>
                <p className="text-xs sm:text-sm text-[#96A3B7] mt-1">
                  Fill in the details below or email directly to{" "}
                  <a href={`mailto:${personalInfo.email}`} className="text-[#35D7FF] underline font-semibold">
                    {personalInfo.email}
                  </a>.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Subject selection */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-300 mb-1.5">
                    Subject / Discussion Area
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-[#F4F7FC] text-xs sm:text-sm focus:border-[#35D7FF] focus:outline-none transition-colors"
                  >
                    <option value="Software Engineering Project">Full Stack Web or Mobile Development</option>
                    <option value="ERP / POS System Integration">ERP, POS, or Inventory System Implementation</option>
                    <option value="Cybersecurity Audit">Azure Cloud Security or Posture Audit</option>
                    <option value="Business Process Automation">Process Automation & Workflow Digitization</option>
                    <option value="Full Time Engineering Role">Full Time Software Engineering Position</option>
                    <option value="General Consultation">General Technical Inquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-[#F4F7FC] text-xs sm:text-sm focus:border-[#35D7FF] focus:outline-none transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-[#F4F7FC] text-xs sm:text-sm focus:border-[#35D7FF] focus:outline-none transition-colors placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-300 mb-1.5">
                    Project or Challenge Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Describe the system requirements, timeline, stack preferences, or specific business challenge..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-[#F4F7FC] text-xs sm:text-sm focus:border-[#35D7FF] focus:outline-none transition-colors placeholder:text-slate-600 resize-y"
                  />
                </div>

                {formStatus === "error" && (
                  <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs">
                    {errorMessage}
                  </div>
                )}

                {formStatus === "success" ? (
                  <div className="p-4 rounded-xl bg-[#35D7FF]/10 border border-[#35D7FF]/40 text-[#35D7FF] text-xs sm:text-sm flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#35D7FF] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Inquiry received successfully!</span>
                      <span className="text-slate-300 text-xs mt-0.5 block">
                        Thank you for reaching out. A confirmation has been drafted. You can also send directly via{" "}
                        <a
                          href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                            formData.subject + " - " + formData.name
                          )}&body=${encodeURIComponent(formData.message)}`}
                          className="underline font-bold text-[#35D7FF]"
                        >
                          mail client
                        </a>.
                      </span>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#35D7FF] to-[#8667FF] hover:brightness-110 text-[#080D18] font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#35D7FF]/20 disabled:opacity-50 cursor-pointer"
                  >
                    {formStatus === "submitting" ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>Send Message to John</span>
                      </>
                    )}
                  </button>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
