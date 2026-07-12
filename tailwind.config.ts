import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F3EA",
        paper2: "#EFEBDD",
        paper3: "#E9E4D3",
        ink: "#003D27",
        inkDeep: "#002619",
        body: "#2E3A34",
        muted: "#6B766E",
        gold: "#EFCC04",
        goldDeep: "#B8901F",
      },
      fontFamily: {
        serif: ["var(--font-marcellus)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
