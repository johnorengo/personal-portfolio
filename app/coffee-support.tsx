"use client";

import { useState } from "react";
import CoffeeModal from "../components/CoffeeModal";

interface CoffeeSupportProps {
  variant?: "header" | "contact" | "inline";
}

export default function CoffeeSupport({ variant = "header" }: CoffeeSupportProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          variant === "header"
            ? "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-teal-300 hover:text-white bg-teal-950/40 hover:bg-teal-900/60 border border-teal-800/40 rounded-lg transition-colors cursor-pointer"
            : "w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-950/40 hover:bg-teal-900/60 border border-teal-800/40 text-teal-300 hover:text-white transition-all text-xs font-semibold cursor-pointer"
        }
      >
        <span aria-hidden="true">🥤</span>
        <span>Buy me a soda</span>
      </button>

      <CoffeeModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
