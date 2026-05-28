"use client";

export default function Logo({ light = false, className = "" }) {
  const text = light ? "text-cream" : "text-ink";
  return (
    <a
      href="#top"
      aria-label="Verden Farms home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-forest-700 text-cream shadow-soft transition-transform duration-300 group-hover:rotate-6">
        {/* stylised tower / sprout mark */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M12 22V8"
            stroke="#bef264"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 12c0-3 2.4-5 5-5 0 3-2 5-5 5Z"
            fill="#bef264"
          />
          <path
            d="M12 9C12 6.5 9.8 5 7 5c0 2.6 2.2 4 5 4Z"
            fill="#aee9c3"
          />
        </svg>
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tightest ${text}`}>
        Verden<span className="text-forest-500">.</span>
      </span>
    </a>
  );
}
