"use client";

import { useState, useEffect } from "react";
import { X, Heart, Coffee, ExternalLink, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CoffeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoffeeModal({ isOpen, onClose }: CoffeeModalProps) {
  const [amount, setAmount] = useState(250);
  const [phone, setPhone] = useState("");
  const [sentMpesa, setSentMpesa] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSimulateMpesa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSentMpesa(true);
    setTimeout(() => {
      setSentMpesa(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="coffee-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg glass-panel border border-white/[0.15] rounded-3xl shadow-2xl overflow-hidden bg-[#070e1c]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#050a14]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300">
                  <Coffee className="w-4 h-4 text-teal-400" />
                </div>
                <h2 id="coffee-title" className="text-sm font-bold text-white">
                  Support John&apos;s Engineering Work
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.08] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal content */}
            <div className="p-6 sm:p-7 space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Your support directly fuels cloud security research, open source development, and technical community mentorship across Kenya.
              </p>

              {/* Amount Presets */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  Select Contribution (KES)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[100, 250, 500, 1000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAmount(val)}
                      className={`py-2.5 px-1 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                        amount === val
                          ? "bg-teal-400 text-slate-950 border-teal-300 shadow-md shadow-teal-500/30"
                          : "bg-white/[0.03] border-white/[0.08] text-slate-200 hover:border-teal-400/40"
                      }`}
                    >
                      KES {val.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* M-Pesa Phone Number Form */}
              <form onSubmit={handleSimulateMpesa} className="space-y-3">
                <label htmlFor="mpesa-number" className="block text-xs font-bold text-slate-300">
                  M-Pesa Mobile Number (Safaricom)
                </label>
                <input
                  id="mpesa-number"
                  type="tel"
                  placeholder="e.g. 0712 345 678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-slate-200 text-xs sm:text-sm focus:border-teal-400 focus:outline-none transition-colors placeholder:text-slate-600 font-mono"
                />
                <p className="text-[11px] text-slate-400">
                  Enter your M-Pesa phone number to generate an instant STK push authorization prompt.
                </p>

                {sentMpesa ? (
                  <div className="p-3.5 rounded-xl bg-teal-950/70 border border-teal-500/50 text-teal-300 text-xs flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />
                    <span>Prompt dispatched to {phone}. Please check your handset to authorize KES {amount}.</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={!phone}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 disabled:opacity-40 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-teal-500/20 cursor-pointer"
                  >
                    Send M-Pesa STK Prompt (KES {amount})
                  </button>
                )}
              </form>

              {/* Divider */}
              <div className="relative flex items-center justify-center">
                <div className="border-t border-white/[0.08] w-full" />
                <span className="bg-[#070e1c] px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Or International Card
                </span>
              </div>

              {/* Buy Me a Coffee Link */}
              <a
                href="https://www.buymeacoffee.com/orengo"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 hover:text-white transition-all text-xs font-bold"
              >
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Continue via BuyMeACoffee.com/orengo</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
