"use client";

import { useEffect, useRef } from "react";

type CursorVariant = "default" | "link" | "view";

function getCursorVariant(target: EventTarget | null): CursorVariant {
  if (!(target instanceof Element)) return "default";

  if (target.closest("a, button, [role='button'], input, textarea, select, summary, label")) {
    return "link";
  }

  return target.closest("[data-cursor='view']") ? "view" : "default";
}

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const ring = ringRef.current;
    const core = coreRef.current;
    if (!ring || !core) return;

    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;
    let active = false;

    const animateRing = () => {
      ringX += (targetX - ringX) * 0.2;
      ringY += (targetY - ringY) * 0.2;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(targetX - ringX) > 0.15 || Math.abs(targetY - ringY) > 0.15) {
        frame = window.requestAnimationFrame(animateRing);
      } else {
        ringX = targetX;
        ringY = targetY;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        frame = 0;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      targetX = event.clientX;
      targetY = event.clientY;
      if (!active) {
        active = true;
        ringX = targetX;
        ringY = targetY;
        document.documentElement.classList.add("has-custom-cursor");
        ring.style.opacity = "1";
        core.style.opacity = "1";
      }

      core.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      ring.dataset.variant = getCursorVariant(event.target);
      if (!frame) frame = window.requestAnimationFrame(animateRing);
    };

    const hideCursor = () => {
      active = false;
      document.documentElement.classList.remove("has-custom-cursor");
      ring.style.opacity = "0";
      core.style.opacity = "0";
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") hideCursor();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("blur", hideCursor);
    document.documentElement.addEventListener("pointerleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("blur", hideCursor);
      document.documentElement.removeEventListener("pointerleave", hideCursor);
      document.documentElement.classList.remove("has-custom-cursor");
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="portfolio-cursor" aria-hidden="true">
      <div ref={ringRef} className="portfolio-cursor__ring" data-variant="default">
        <span className="portfolio-cursor__label">VIEW</span>
      </div>
      <div ref={coreRef} className="portfolio-cursor__core" />
    </div>
  );
}
