"use client";

import { useEffect, useState } from "react";

/**
 * Tracks vertical scroll position and whether the page is scrolled
 * past a threshold. Used by the sticky navbar and scroll-to-top button.
 */
export function useScrollPosition(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  const [y, setY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          setY(current);
          setScrolled(current > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { scrolled, y };
}
