
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
      colors: {
        golf: {
          green: {
            DEFAULT: "#1a4c2e",
            light: "#2d5a3d",
            dark: "#0f2318",
          },
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#e6c458",
        },
        tan: "#c19a6b",
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
        countUp: "countUp 0.8s ease-out",
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        countUp: {
          from: { 
            opacity: "0", 
            transform: "scale(0.5)" 
          },
          to: { 
            opacity: "1", 
            transform: "scale(1)" 
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
