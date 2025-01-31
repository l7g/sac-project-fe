import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: {
          light: "#F0803C", //Pumpkin orange
          dark: "#1A1A2E", // Deep Navy
        },
        secondary: {
          light: "#151E3F", // Space cadet blue
          dark: "#2E2E38", // Dark Gray
        },
        accent: {
          light: {
            DEFAULT: "#F0803C", // Gold
            hover: "#B99727",
          },
          dark: {
            DEFAULT: "#800020", // Burugundy
            hover: "#660019",
          },
        },
        text: {
          light: "#333333", // Charcoal
          dark: "#EAEAEA", // Light Gray
        },
        background: {
          light: "#FAFAFA", // Off-white
          dark: "#121212", // Very Dark Gray
        },
        outline: {
          light: {
            DEFAULT: "#ffffff",
            hover: "#F7FF00",
          },
          dark: {
            DEFAULT: "#ffffff",
            hover: "#F7FF00",
          },
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
