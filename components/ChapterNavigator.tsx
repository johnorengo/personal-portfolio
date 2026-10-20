"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { scrollToSection } from "../lib/section-navigation";

const chapters = [
  { id: "top", number: "01", label: "Introduction" },
  { id: "about", number: "02", label: "Perspective" },
  { id: "expertise", number: "03", label: "Expertise" },
  { id: "projects", number: "04", label: "Selected work" },
  { id: "experience", number: "05", label: "Experience" },
  { id: "contact", number: "06", label: "Connect" },
];

export default function ChapterNavigator() {
  const [activeId, setActiveId] = useState("top");
  const reduceMotion = useReducedMotion();
  const activeChapter = chapters.find((chapter) => chapter.id === activeId) ?? chapters[0];

  useEffect(() => {
    const elements = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0.01, 0.2, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.chapter = activeId;
    return () => { delete document.documentElement.dataset.chapter; };
  }, [activeId]);

  return (
    <>
      <div className="ambient-focus-field" aria-hidden="true" />

      <aside className="chapter-navigator hidden xl:block" aria-label="Portfolio chapters">
        <div className="chapter-rail" aria-hidden="true" />
        <nav className="relative flex flex-col items-end gap-3">
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeId;
            return (
              <button
                type="button"
                key={chapter.id}
                onClick={() => scrollToSection(chapter.id)}
                aria-current={isActive ? "step" : undefined}
                className={`chapter-link ${isActive ? "is-active" : ""}`}
              >
                <span className="chapter-number">{chapter.number}</span>
                {isActive && (
                  <motion.span
                    initial={reduceMotion ? false : { opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, x: 8 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    className="chapter-label"
                  >
                    {chapter.label}
                  </motion.span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="chapter-mobile xl:hidden" aria-live="polite">
        <span className="font-mono">{activeChapter.number}</span>
        <span className="chapter-mobile-divider" aria-hidden="true" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={activeChapter.id}
            initial={reduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {activeChapter.label}
          </motion.span>
        </AnimatePresence>
      </div>
    </>
  );
}
