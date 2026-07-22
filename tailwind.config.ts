import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050B18",
          900: "#0A1428",
          800: "#0F1E3A",
          700: "#152A4E",
          600: "#1D3A66",
        },
        charcoal: {
          900: "#121417",
          800: "#1A1D22",
          700: "#22262D",
          600: "#2C3138",
          500: "#3A4049",
        },
        gold: {
          400: "#E4C784",
          500: "#C9A227",
          600: "#A9821A",
          700: "#8A6A15",
        },
        steel: {
          400: "#7FA6C9",
          500: "#4E7CA6",
          600: "#3A5F82",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #050B18 0%, #0A1428 45%, #152A4E 100%)",
        "gold-line": "linear-gradient(90deg, transparent, #C9A227, transparent)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(5,11,24,0.35)",
        glass: "0 8px 32px 0 rgba(5,11,24,0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
