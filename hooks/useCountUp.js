"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animate a number from 0 to `end` once the element scrolls into view.
 * @param {number} end - target value
 * @param {object} opts - { duration (ms), start }
 */
export function useCountUp(end, { duration = 1800, start = 0 } = {}) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const startTime = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              // easeOutCubic for a smooth deceleration
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(start + (end - start) * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration, start]);

  return { value, ref };
}
