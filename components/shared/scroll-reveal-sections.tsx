"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ScrollRevealSections({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) return;
    const content = container.querySelectorAll<HTMLElement>(
      "section > div:not([aria-hidden='true'])",
    );
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    let observer: IntersectionObserver;

    function observeContent() {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("scroll-reveal-visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0, rootMargin: "0px 0px -32px 0px" },
      );

      content.forEach((element) => {
        if (!element.classList.contains("scroll-reveal-visible")) {
          observer.observe(element);
        }
      });
    }

    content.forEach((element) => {
      element.classList.add("scroll-reveal");
    });
    observeContent();
    mobileQuery.addEventListener("change", observeContent);

    return () => {
      mobileQuery.removeEventListener("change", observeContent);
      observer.disconnect();
      content.forEach((element) =>
        element.classList.remove("scroll-reveal", "scroll-reveal-visible"),
      );
    };
  }, []);

  return (
    <div className="contents" ref={containerRef}>
      {children}
    </div>
  );
}
