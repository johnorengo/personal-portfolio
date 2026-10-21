"use client";

import { useEffect, useState } from "react";
import { ArrowUp, PhoneCall } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const shouldDelayForMobile = window.matchMedia("(max-width: 639px)").matches;
      setIsVisible(!shouldDelayForMobile || window.scrollY > window.innerHeight * 0.82);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="floating-actions">
    <a
      href={`tel:${personalInfo.phone}`}
      className="floating-call-button"
      aria-label={`Call John Orengo at ${personalInfo.phoneDisplay}`}
    >
      <span className="floating-call-pulse" aria-hidden="true" />
      <span className="floating-call-icon" aria-hidden="true">
        <PhoneCall className="h-4 w-4" />
      </span>
      <span className="floating-call-copy">
        <span className="floating-call-eyebrow">Available to talk</span>
        <span>Direct call</span>
      </span>
    </a>
    <button
      type="button"
      className="floating-scroll-top"
      aria-label="Scroll to top"
      title="Back to top"
      onClick={() => window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      })}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
    </div>
  );
}
