import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        hero: "clamp(70px, 6vw, 100px)",
      },
      fontFamily: {
        grotesque: ["var(--font-grotesque)", "sans-serif"],
      },
      colors: {
        orange: "#FF834F",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        in: "in .6s both",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
