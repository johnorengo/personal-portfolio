export function clearSectionHash() {
  if (window.location.hash) {
    window.history.replaceState(
      window.history.state,
      "",
      window.location.pathname + window.location.search,
    );
  }
}

let cancelPendingNavigation: (() => void) | undefined;

export function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return false;
  cancelPendingNavigation?.();

  let frame = 0;
  let fallback: ReturnType<typeof setTimeout> | undefined;
  const interruptions = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
  const cleanup = () => {
    window.cancelAnimationFrame(frame);
    if (fallback !== undefined) clearTimeout(fallback);
    window.removeEventListener("scrollend", finish);
    for (const event of interruptions) window.removeEventListener(event, cleanup);
    if (cancelPendingNavigation === cleanup) cancelPendingNavigation = undefined;
  };
  const destination = () => {
    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    return Math.max(0, window.scrollY + section.getBoundingClientRect().top - headerHeight);
  };
  const finish = () => {
    cleanup();
    // The header can shrink during smooth scrolling; align against its final height.
    const top = destination();
    if (Math.abs(window.scrollY - top) > 2) window.scrollTo({ top, behavior: "instant" });
  };
  cancelPendingNavigation = cleanup;
  for (const event of interruptions) window.addEventListener(event, cleanup, { passive: true });

  // Let React close the mobile menu and let the browser lay out the shorter header.
  frame = window.requestAnimationFrame(() => {
    frame = window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: destination(), behavior: reduceMotion ? "instant" : "smooth" });
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
      if (reduceMotion) {
        finish();
      } else {
        window.addEventListener("scrollend", finish, { once: true });
        fallback = setTimeout(finish, 1500);
      }
    });
  });
  clearSectionHash();
  return true;
}