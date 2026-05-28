"use client";

import { FiImage } from "react-icons/fi";

/**
 * A premium, brand-styled placeholder for real photography.
 *
 * To use a real image instead, swap this component for next/image:
 *
 *   import Image from "next/image";
 *   <Image src="/images/tower.jpg" alt="..." fill sizes="..." className="object-cover" loading="lazy" />
 *
 * The gradient + label clearly marks where production photography belongs.
 */
export default function ImagePlaceholder({
  label = "Image",
  tone = "from-forest-700 to-forest-950",
  className = "",
  rounded = "rounded-3xl",
}) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={`relative isolate flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${tone} ${rounded} ${className}`}
    >
      {/* texture / depth */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_25%_20%,rgba(190,242,100,0.35),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.18),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(transparent_95%,rgba(255,255,255,0.6)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.6)_95%)] [background-size:22px_22px]" />

      <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
        <FiImage className="h-7 w-7 text-cream/80" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">
          {label}
        </span>
      </div>
    </div>
  );
}
