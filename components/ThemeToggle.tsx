"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Storage may be disabled. */ }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[rgb(var(--border-rgb))]/15 bg-[rgb(var(--wash-rgb))]/5 text-[var(--text-main)] transition-colors hover:bg-[rgb(var(--wash-rgb))]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-text)]"
    >
      <Sun className="theme-to-light h-4 w-4" aria-hidden="true" />
      <Moon className="theme-to-dark h-4 w-4" aria-hidden="true" />
      <span className="theme-to-light sr-only">Switch to light mode</span>
      <span className="theme-to-dark sr-only">Switch to dark mode</span>
    </button>
  );
}
