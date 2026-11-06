"use client";

import { useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { skillsCategories } from "../data/portfolio-data";

interface ExpertiseNavProps {
  active?: boolean;
  onNavigate?: () => void;
}

export default function ExpertiseNav({ active, onNavigate }: ExpertiseNavProps) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const mobile = Boolean(onNavigate);

  function closeAfterNavigation() {
    setOpen(false);
    onNavigate?.();
  }

  return (
    <div
      className="relative"
      onPointerEnter={(event) => {
        if (!mobile && event.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (!mobile && event.pointerType === "mouse") {
          setOpen(false);
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          trigger.current?.focus();
          setOpen(false);
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen(!open)}
        className={`flex cursor-pointer items-center gap-1 rounded-lg hover:text-[var(--accent-text)] ${
          mobile ? "w-full justify-between px-3 py-2.5" : "py-1"
        } ${active ? "font-semibold text-[var(--accent-text)]" : "text-[var(--text-muted)]"}`}
      >
        Expertise
        <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div id={listId} hidden={!open} className={mobile ? "pl-3" : "absolute left-0 top-full max-h-[calc(100dvh-var(--header-height,80px)-24px)] w-72 overflow-y-auto pt-2"}>
        <ul className="rounded-xl border border-[rgb(var(--border-rgb))]/10 bg-[rgb(var(--page-rgb))] p-1.5 shadow-lg">
          {[{ id: "expertise", title: "Expertise overview" }, ...skillsCategories].map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={closeAfterNavigation}
                className="block rounded-lg px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-[rgb(var(--wash-rgb))]/5 hover:text-[var(--accent-text)] focus-visible:text-[var(--accent-text)]"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
