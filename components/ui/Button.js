"use client";

import { motion } from "framer-motion";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-lime-400";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants = {
  primary:
    "bg-lime-400 text-forest-900 hover:bg-lime-300 shadow-glow focus-visible:ring-offset-forest-900",
  solid:
    "bg-forest-700 text-cream hover:bg-forest-600 focus-visible:ring-offset-cream",
  outline:
    "border border-cream/40 text-cream hover:border-lime-400 hover:text-lime-300 focus-visible:ring-offset-forest-900",
  "outline-dark":
    "border border-forest-700/30 text-forest-800 hover:border-forest-700 hover:bg-forest-700 hover:text-cream focus-visible:ring-offset-cream",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  as,
  ...props
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={classes}
      {...props}
    >
      {children}
    </Tag>
  );
}
