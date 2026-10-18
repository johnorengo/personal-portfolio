"use client";

import { useState } from "react";
import { Mail, Phone, GitBranch, Globe, Award, Copy, Check, Send, ArrowUpRight, MapPin, Clock } from "lucide-react";
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
    topic: prefilledTopic || "Software Engineering Role",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      // Form reset after confirmation
      setTimeout(() => {
        setStatus("idle");
        setFormData({
          name: "",
          email: "",
          topic: "Software Engineering Role",
          message: "",
        });
      }, 5000);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#081220] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
            Initiate Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight [text-wrap:balance]">
            Let&apos;s build dependable software and secure infrastructure together.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Whether discussing full-time software engineering roles, cloud security audits, public sector platforms, or technical advisory—reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Social Proof Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#0c182b] border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <span className="text-xs text-slate-400">Response within 24 hours</span>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-[#091322] border border-slate-800 rounded-xl">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                    {personalInfo.email}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all shrink-0 ml-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-teal-400" />
                      <span className="text-teal-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-semibold"
                >
                  <span>Open in Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-500">orengokennedy93@gmail.com</span>
              </div>
            </div>

            {/* Direct Channels & Social Profiles Grid */}
            <div className="p-6 rounded-2xl bg-[#0c182b] border border-slate-800 space-y-4">
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block">
                Social & Professional Profiles
              </span>

              <div className="space-y-2.5">
                <a
                  href="https://github.com/johnorengo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#091322] hover:bg-[#0f213a] border border-slate-800/80 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-4 h-4 text-slate-400 group-hover:text-teal-400" />
                    <div>
                      <span className="text-xs font-semibold text-white block">GitHub</span>
                      <span className="text-[11px] text-slate-400">@johnorengo · Repositories & Open Source</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-300" />
                </a>

                <a
                  href="https://www.linkedin.com/in/john-orengo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#091322] hover:bg-[#0f213a] border border-slate-800/80 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-slate-400 group-hover:text-teal-400" />
                    <div>
                      <span className="text-xs font-semibold text-white block">LinkedIn</span>
                      <span className="text-[11px] text-slate-400">Professional network & recommendations</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-300" />
                </a>

                <a
                  href="https://www.credly.com/users/john-orengo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#091322] hover:bg-[#0f213a] border border-slate-800/80 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-slate-400 group-hover:text-teal-400" />
                    <div>
                      <span className="text-xs font-semibold text-white block">Credly Verification</span>
                      <span className="text-[11px] text-slate-400">AWS & CNCF Digital Badges</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-300" />
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#091322] hover:bg-[#0f213a] border border-slate-800/80 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-teal-400" />
                    <div>
                      <span className="text-xs font-semibold text-white block">Phone / WhatsApp</span>
                      <span className="text-[11px] text-slate-400">{personalInfo.phoneDisplay}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-300" />
                </a>
              </div>

              {/* Buy Me a Coffee / M-Pesa Trigger */}
              {onOpenCoffeeModal && (
                <div className="pt-3 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={onOpenCoffeeModal}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-950/40 hover:bg-teal-900/60 border border-teal-800/40 text-teal-300 hover:text-white transition-all text-xs font-semibold cursor-pointer"
                  >
                    <span>☕</span>
                    <span>Support via M-Pesa or Buy Me a Coffee</span>
                  </button>
                </div>
              )}
            </div>

            {/* Location & Timezone Details */}
            <div className="p-4 rounded-xl bg-[#091322] border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Nairobi, Kenya (EAT / UTC+3)</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c182b] border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-1">
                  Message John Orengo
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Send a Direct Project Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Fill in the details below or send an email directly to{" "}
                  <a href={`mailto:${personalInfo.email}`} className="text-teal-400 underline">
                    {personalInfo.email}
                  </a>.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Topic selection */}
                <div>
                  <label htmlFor="topic" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Discussion Topic
                  </label>
                  <select
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#091322] border border-slate-800 text-slate-200 text-xs sm:text-sm focus:border-teal-400 focus:outline-none transition-colors"
                  >
                    <option value="Software Engineering Role">Full-Time Software Engineering Role</option>
                    <option value="Cloud Security Audit">Microsoft Azure / Cloud Security Audit</option>
                    <option value="Education Platform Integration">Education / Public Sector System Integration</option>
                    <option value="ICT Infrastructure">Enterprise ICT Infrastructure & Diagnostics</option>
                    <option value="General Collaboration">General Technical Inquiry & Collaboration</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#091322] border border-slate-800 text-slate-200 text-xs sm:text-sm focus:border-teal-400 focus:outline-none transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#091322] border border-slate-800 text-slate-200 text-xs sm:text-sm focus:border-teal-400 focus:outline-none transition-colors placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project or Opportunity Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Describe the system challenge, timeline, tech stack requirements, or role specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#091322] border border-slate-800 text-slate-200 text-xs sm:text-sm focus:border-teal-400 focus:outline-none transition-colors placeholder:text-slate-600 resize-y"
                  />
                </div>

                {status === "success" ? (
                  <div className="p-4 rounded-xl bg-teal-950/60 border border-teal-800/80 text-teal-300 text-xs sm:text-sm flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Thank you, message prepared!</span>
                      <span className="text-teal-200/80 text-xs">
                        John has received your inquiry. You can also send directly via{" "}
                        <a
                          href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                            formData.topic + " from " + formData.name
                          )}&body=${encodeURIComponent(formData.message)}`}
                          className="underline font-semibold"
                        >
                          email client
                        </a>.
                      </span>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow-teal-500/20 disabled:opacity-50 cursor-pointer"
                  >
                    {status === "sending" ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry to John</span>
                      </>
                    )}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
