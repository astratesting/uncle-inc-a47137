import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ink-black": "#08080e",
        "ink-black-light": "#12121a",
        "ink-card": "#1a1a24",
        "ink-border": "#1e293b",
        indigo: { DEFAULT: "#4f46e5", light: "#6366f1", dark: "#4338ca" },
        cyan: { DEFAULT: "#06b6d4", light: "#22d3ee" },
        teal: { DEFAULT: "#2dd4bf", light: "#5eead4" },
        "text-primary": "#f1f5f9",
        "text-secondary": "#94a3b8",
        "text-muted": "#64748b",
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;