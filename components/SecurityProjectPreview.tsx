"use client";

import { KeyRound, ShieldCheck, Terminal } from "lucide-react";

export default function SecurityProjectPreview({ projectId }: { projectId: string }) {
  const isScanner = projectId === "secretguard";
  const Icon = isScanner ? ShieldCheck : KeyRound;
  return (
    <div className="flex h-full flex-col justify-end gap-3 bg-[#080d18] px-5 pb-5 pt-14 text-[#e8eaff] sm:px-7">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#59e1ff]">
        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>{isScanner ? "Catch exposed credentials before deployment" : "Turn password rules into clear feedback"}</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#a6b5ff]/20 bg-[#10162d]">
        <div className="flex items-center justify-between border-b border-[#a6b5ff]/10 px-3 py-2 text-[9px] uppercase tracking-wider text-[#b0b9d5]">
          <span className="inline-flex items-center gap-2"><Terminal size={12} aria-hidden="true" /> Python CLI</span>
          <span>Illustrative preview</span>
        </div>
        <div className="space-y-2 p-3 font-mono text-[10px] leading-relaxed sm:text-xs">
          <p className="break-all text-[#59e1ff]">$ {isScanner ? "secretguard scan ./project --json" : "python Password_Strength_Checker.py"}</p>
          <p>{isScanner ? "Regex rules → findings → JSON report" : "Length · mixed case · digits · symbols"}</p>
          <p className="text-[#b19aff]">{isScanner ? "File + line + severity + recommendation" : "Weak / Moderate / Strong"}</p>
        </div>
      </div>
    </div>
  );
}
