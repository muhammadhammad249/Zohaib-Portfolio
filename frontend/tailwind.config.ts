import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        burgundy: {
          100: "#FBE8EC",
          200: "#F2C4CF",
          300: "#E08DA0",
          400: "#C4516A",
          500: "#A1283F",
          600: "#800020", // Main Brand Burgundy
          700: "#6D1A2E",
          800: "#4A0E1E",
          900: "#2B0A12",
          950: "#1A060C", // Dark background default
        },
        champagne: {
          DEFAULT: "#D9B77E",
          light: "#EAD6B4",
          dark: "#B89658",
        },
        rose: {
          soft: "#F4A6B8",
          subtle: "#FCECEF",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
        blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
      },
      animation: {
        "float-slow": "float 10s ease-in-out infinite",
        "float-reverse": "floatReverse 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(2deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(16px) rotate(-2deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

