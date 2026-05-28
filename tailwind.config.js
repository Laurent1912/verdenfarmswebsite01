/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./utils/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep farm greens
        forest: {
          50: "#eefbf2",
          100: "#d6f5e0",
          200: "#aee9c3",
          300: "#76d79e",
          400: "#3cbd76",
          500: "#1f9b56",
          600: "#147c44",
          700: "#166534", // brand primary
          800: "#124a2b",
          900: "#0d3a22",
          950: "#05210f",
        },
        // Fresh energetic accent
        lime: {
          DEFAULT: "#bef264",
          300: "#d3f88a",
          400: "#bef264",
          500: "#a3e635",
        },
        cream: "#f7f6ef",
        sand: "#efeee4",
        ink: "#0a0f0b",
      },
      fontFamily: {
        display: ["var(--font-display)", "Bricolage Grotesque", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(13, 58, 34, 0.18)",
        glow: "0 0 0 1px rgba(190,242,100,0.4), 0 18px 60px -18px rgba(190,242,100,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease both",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
