"use client";

import { useEffect } from "react";

export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const body = document.body;
    const root = document.documentElement;
    const scrollY = window.scrollY;
    const previousBodyStyle = body.getAttribute("style");
    const previousOverflow = root.style.overflow;
    const scrollbarWidth = window.innerWidth - root.clientWidth;

    Object.assign(body.style, {
      position: "fixed",
      top: `-${scrollY}px`,
      left: "0",
      right: "0",
      width: "100%",
      overflow: "hidden",
      paddingRight: `${scrollbarWidth}px`,
    });
    root.style.overflow = "hidden";

    return () => {
      if (previousBodyStyle === null) body.removeAttribute("style");
      else body.setAttribute("style", previousBodyStyle);
      root.style.overflow = previousOverflow;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      root.style.scrollBehavior = previousBehavior;
    };
  }, [isLocked]);
}
