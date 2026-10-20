export function clearSectionHash() {
  if (window.location.hash) {
    window.history.replaceState(
      window.history.state,
      "",
      window.location.pathname + window.location.search,
    );
  }
}

export function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return false;

  section.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    block: "start",
  });
  section.setAttribute("tabindex", "-1");
  section.focus({ preventScroll: true });
  clearSectionHash();
  return true;
}
