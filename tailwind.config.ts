import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Conecta as fontes do seu layout.tsx
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      // Suas cores personalizadas
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neonBlue: "#00f2ff",
        neonRed: "#ff0055",
        bgMain: "#050a14",
      },
    },
  },
  plugins: [],
};
export default config;