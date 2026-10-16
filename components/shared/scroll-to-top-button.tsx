"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 320);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) return null;

  function scrollToTop() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      aria-label="Volver arriba"
      className="fixed bottom-5 right-5 z-30 grid size-11 place-items-center rounded-full border border-line bg-paper text-forest-text shadow-md transition-colors hover:border-clay hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay sm:bottom-7 sm:right-7"
      onClick={scrollToTop}
      title="Volver arriba"
      type="button"
    >
      <ArrowUp aria-hidden="true" size={18} strokeWidth={1.8} />
    </button>
  );
}