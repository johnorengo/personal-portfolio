"use client";

import { useState, useEffect } from "react";
import { X, Coffee, CheckCircle, LoaderCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CoffeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoffeeModal({ isOpen, onClose }: CoffeeModalProps) {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [checkoutRequestId, setCheckoutRequestId] = useState("");
  const [paymentState, setPaymentState] = useState<"idle" | "sending" | "pending" | "checking" | "complete" | "failed" | "unconfirmed">("idle");
  const [message, setMessage] = useState("");
  const [receipt, setReceipt] = useState("");
  const [statusChecks, setStatusChecks] = useState(0);

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

  useEffect(() => {
    if (!isOpen || paymentState !== "pending" || !checkoutRequestId) return;

    if (statusChecks >= 12) {
      setMessage("We could not confirm the payment yet. Check your M-Pesa messages before trying again.");
      setPaymentState("unconfirmed");
      return;
    }

    const timer = window.setTimeout(async () => {
      setPaymentState("checking");
      try {
        const response = await fetch("/api/mpesa/status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checkoutRequestId }),
        });
        const result = await response.json();

        if (!response.ok) {
          setMessage(result.error || "Could not check the payment yet. Please try again.");
          setStatusChecks((checks) => checks + 1);
          setPaymentState("pending");
        } else if (result.status === "complete") {
          setReceipt(result.receiptNumber || "");
          setMessage("Your M-Pesa payment is confirmed. Thank you for the support!");
          setPaymentState("complete");
        } else if (result.status === "failed") {
          setMessage(result.message || "The payment was not completed. You can try again.");
          setPaymentState("failed");
        } else {
          setMessage("Waiting for M-Pesa confirmation. Complete the prompt on your phone.");
          setStatusChecks((checks) => checks + 1);
          setPaymentState("pending");
        }
      } catch {
        setMessage("Could not check the payment yet. Please try again.");
        setStatusChecks((checks) => checks + 1);
        setPaymentState("pending");
      }
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [checkoutRequestId, isOpen, paymentState, statusChecks]);

  const handleMpesa = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPaymentState("sending");
    setStatusChecks(0);
    setMessage("");
    setReceipt("");

    try {
      const response = await fetch("/api/mpesa/stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount), phone }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Could not start the M-Pesa prompt.");
      }

      setCheckoutRequestId(result.checkoutRequestId);
      setMessage(`STK prompt sent to ${result.phone}. Enter your M-Pesa PIN to continue.`);
      setPaymentState("pending");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not start the M-Pesa prompt.");
      setPaymentState("failed");
    }
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
            className="relative w-full max-w-lg glass-panel border border-[rgb(var(--border-rgb))]/[0.15] rounded-3xl shadow-2xl overflow-hidden bg-[rgb(var(--card-rgb))]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgb(var(--border-rgb))]/[0.08] bg-[rgb(var(--footer-rgb))]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300">
                  <Coffee className="w-4 h-4 text-teal-400" />
                </div>
                <h2 id="coffee-title" className="text-sm font-bold text-[var(--text-main)]">
                  Support John&apos;s Engineering Work
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-[var(--slate-400)] hover:text-[var(--text-main)] rounded-xl hover:bg-[rgb(var(--wash-rgb))]/[0.08] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal content */}
            <div className="p-6 sm:p-7 space-y-6">
              <p className="text-xs sm:text-sm text-[var(--slate-300)] leading-relaxed">
                Choose any amount and approve the secure M-Pesa prompt on your phone.
              </p>

              <form onSubmit={handleMpesa} className="space-y-4">
                <div>
                  <label htmlFor="coffee-amount" className="mb-2 block text-xs font-bold text-[var(--slate-300)]">
                    Your amount (KES)
                  </label>
                  <div className="flex items-center rounded-xl border border-[rgb(var(--border-rgb))]/[0.1] bg-[rgb(var(--page-rgb))]/80 focus-within:border-teal-400">
                    <span className="pl-3.5 text-xs font-mono text-[var(--slate-400)]">KES</span>
                    <input
                      id="coffee-amount"
                      type="number"
                      inputMode="numeric"
                      min="1"
                      max="250000"
                      step="1"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      disabled={["sending", "pending", "checking", "complete", "unconfirmed"].includes(paymentState)}
                      placeholder="Enter any amount"
                      className="w-full min-w-0 bg-transparent px-3.5 py-3 text-sm text-[var(--slate-200)] outline-none placeholder:text-[var(--slate-600)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mpesa-number" className="mb-2 block text-xs font-bold text-[var(--slate-300)]">
                    M-Pesa phone number
                  </label>
                <input
                  id="mpesa-number"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  placeholder="e.g. 0712 345 678"
                  value={phone}
                  disabled={["sending", "pending", "checking", "complete", "unconfirmed"].includes(paymentState)}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[rgb(var(--page-rgb))]/80 border border-[rgb(var(--border-rgb))]/[0.1] text-[var(--slate-200)] text-xs sm:text-sm focus:border-teal-400 focus:outline-none transition-colors placeholder:text-[var(--slate-600)] font-mono"
                />
                </div>

                {message && (
                  <div role="status" aria-live="polite" className={`flex items-start gap-2.5 rounded-xl border p-3.5 text-xs ${paymentState === "complete" ? "border-teal-500/50 bg-teal-950/70 text-teal-300" : paymentState === "failed" ? "border-rose-500/40 bg-rose-950/30 text-rose-200" : "border-teal-500/30 bg-teal-950/40 text-teal-200"}`}>
                    {paymentState === "complete" ? <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" /> : paymentState === "sending" || paymentState === "checking" ? <LoaderCircle className="mt-0.5 h-5 w-5 shrink-0 animate-spin" /> : <Coffee className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />}
                    <span>{message}{receipt ? ` Receipt: ${receipt}.` : ""}</span>
                  </div>
                )}

                <button
                  type={paymentState === "unconfirmed" ? "button" : "submit"}
                  onClick={paymentState === "unconfirmed" ? () => { setStatusChecks(0); setMessage("Checking the payment status again…"); setPaymentState("pending"); } : undefined}
                  disabled={!amount || !phone || ["sending", "pending", "checking", "complete"].includes(paymentState)}
                  className="w-full inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 px-4 py-3 text-xs font-bold text-slate-950 shadow-md shadow-teal-500/20 transition-all hover:from-teal-300 hover:to-emerald-300 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
                >
                  {paymentState === "sending" ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Connecting to M-Pesa…</> : paymentState === "checking" ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Checking payment…</> : paymentState === "pending" ? "Waiting for M-Pesa confirmation…" : paymentState === "complete" ? "Payment confirmed" : paymentState === "unconfirmed" ? "Check payment status again" : "Send M-Pesa STK prompt"}
                </button>
                {paymentState === "pending" && <p className="text-center text-[11px] text-[var(--slate-400)]">We’ll check for your payment confirmation automatically.</p>}
              </form>
              <p className="text-center text-[10px] leading-relaxed text-[var(--slate-500)]">You’ll approve the payment using your M-Pesa PIN. Your PIN is never entered on this site.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
