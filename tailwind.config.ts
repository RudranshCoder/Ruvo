import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-base": "var(--bg-base)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        border: "var(--border-subtle)",
        ink: "var(--text-primary)",
        muted: "var(--text-secondary)",
        brand: "var(--brand)",
        "brand-soft": "var(--brand-soft)",
        lime: "var(--accent-lime)",
        pink: "var(--accent-pink)",
        cyan: "var(--accent-cyan)",
        good: "var(--status-good)",
        watch: "var(--status-watch)",
        bad: "var(--status-bad)",
      },
      fontFamily: {
        display: ["Unbounded", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Albert Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        control: "var(--radius-control)",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(198, 244, 50, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(198, 244, 50, 0.25)" },
        },
        "shimmer": {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
