"use client";

import { useState, useEffect } from "react";
import { X, Heart, Coffee, ExternalLink, CheckCircle } from "lucide-react";

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

  if (!isOpen) return null;

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="coffee-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#0c182b] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#091322]">
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-teal-400" />
            <h2 id="coffee-title" className="text-sm font-bold text-white">
              Support John&apos;s Engineering Work
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 space-y-6">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Your support directly aids research into cloud security tools, maintaining open-source repositories, and community technical mentorship.
          </p>

          {/* Amount Presets */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Select Contribution (KES)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[100, 250, 500, 1000].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all text-center cursor-pointer ${
                    amount === val
                      ? "bg-teal-950/80 border-teal-400 text-teal-300 shadow-sm"
                      : "bg-[#091322] border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  KES {val.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* M-Pesa Phone Number Form */}
          <form onSubmit={handleSimulateMpesa} className="space-y-3">
            <label htmlFor="mpesa-number" className="block text-xs font-semibold text-slate-300">
              M-Pesa Mobile Number (Safaricom)
            </label>
            <input
              id="mpesa-number"
              type="tel"
              placeholder="e.g. 0712 345 678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#091322] border border-slate-800 text-slate-200 text-xs sm:text-sm focus:border-teal-400 focus:outline-none transition-colors placeholder:text-slate-600"
            />
            <p className="text-[11px] text-slate-400">
              Enter your M-Pesa number to generate an STK push payment request.
            </p>

            {sentMpesa ? (
              <div className="p-3 rounded-lg bg-teal-950/60 border border-teal-800/80 text-teal-300 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>M-Pesa request sent to {phone}. Please check your phone handset to authorize KES {amount}.</span>
              </div>
            ) : (
              <button
                type="submit"
                disabled={!phone}
                className="w-full py-2.5 px-4 rounded-lg bg-teal-400 hover:bg-teal-300 disabled:opacity-40 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
              >
                Send M-Pesa STK Prompt (KES {amount})
              </button>
            )}
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-800 w-full" />
            <span className="bg-[#0c182b] px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Or International Card
            </span>
          </div>

          {/* Buy Me a Coffee Link */}
          <a
            href="https://www.buymeacoffee.com/orengo"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#091322] hover:bg-[#0f213a] border border-slate-700/80 text-slate-200 hover:text-white transition-all text-xs font-semibold"
          >
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Continue via BuyMeACoffee.com/orengo</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
