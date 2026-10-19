"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";

const phrases = ["Intelligent Solutions.", "Secure Applications.", "Scalable Platforms."];

export default function RotatingHeadline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (paused || hovered || !visible || reduceMotion !== false) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % phrases.length), 4000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, visible, reduceMotion]);

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-[3.5rem] font-extrabold tracking-tight text-[#F4F7FC] leading-[1.05] font-display [text-wrap:balance]">
        <span className="sr-only">Building intelligent solutions, secure applications, and scalable platforms. Securing Digital Futures.</span>
        {/* All phrases share a grid cell, reserving space for the longest wrap. */}
        <span className="grid" aria-hidden="true">
          {phrases.map((phrase, index) => (
            <motion.span
              key={phrase}
              className="block [grid-area:1/1]"
              initial={false}
              animate={{ opacity: active === index ? 1 : 0, y: reduceMotion || active === index ? 0 : 10 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              Building{" "}
              <span className="bg-gradient-to-r from-[#35D7FF] via-[#8667FF] to-[#35D7FF] bg-clip-text text-transparent">{phrase}</span>
            </motion.span>
          ))}
        </span>
        <span className="block" aria-hidden="true">Securing Digital Futures.</span>
      </h1>
      <div className="mt-3 flex items-center gap-1" role="group" aria-label="Hero headline controls">
        {phrases.map((phrase, index) => (
          <button
            key={phrase}
            type="button"
            aria-label={`Show Building ${phrase}`}
            aria-pressed={active === index}
            onClick={() => { setActive(index); setPaused(true); }}
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#35D7FF]"
          >
            <span className={`h-1 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${active === index ? "w-5 bg-[#35D7FF]" : "w-1.5 bg-slate-600"}`} />
          </button>
        ))}
        {!reduceMotion && (
          <button
            type="button"
            aria-label={paused ? "Resume headline rotation" : "Pause headline rotation"}
            onClick={() => setPaused((value) => !value)}
            className="ml-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-slate-400 hover:text-[#35D7FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#35D7FF]"
          >
            {paused ? <Play className="h-3 w-3" aria-hidden="true" /> : <Pause className="h-3 w-3" aria-hidden="true" />}
          </button>
        )}
      </div>
    </div>
  );
}
