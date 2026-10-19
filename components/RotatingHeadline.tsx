"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const phrases = [
  { opening: "Building", highlight: "Intelligent Solutions.", closing: "Securing Digital Futures." },
  { opening: "Engineering", highlight: "Secure Software.", closing: "Built for Real World Demands." },
  { opening: "Connecting", highlight: "Business Systems.", closing: "Simplifying Everyday Work." },
  { opening: "Creating", highlight: "Scalable Platforms.", closing: "Ready for What Comes Next." },
];

export default function RotatingHeadline() {
  const [active, setActive] = useState(0);
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
    if (hovered || !visible || reduceMotion !== false) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % phrases.length), 4000);
    return () => window.clearInterval(timer);
  }, [hovered, visible, reduceMotion]);

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-[3.5rem] font-extrabold tracking-tight text-[#F4F7FC] leading-[1.05] font-display [text-wrap:balance]">
        <span className="sr-only">Building intelligent solutions. Securing digital futures. Secure software, connected business systems, and scalable platforms.</span>
        {/* All phrases share a grid cell, reserving space for the longest wrap. */}
        <span className="grid" aria-hidden="true">
          {phrases.map((phrase, index) => (
            <motion.span
              key={phrase.highlight}
              className="block [grid-area:1/1]"
              initial={false}
              animate={{ opacity: active === index ? 1 : 0, y: reduceMotion || active === index ? 0 : 10 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {phrase.opening}{" "}
              <span className="bg-gradient-to-r from-[#35D7FF] via-[#8667FF] to-[#35D7FF] bg-clip-text text-transparent">{phrase.highlight}</span>
              <span className="block">{phrase.closing}</span>
            </motion.span>
          ))}
        </span>
      </h1>

    </div>
  );
}
