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
        ember: {
          50: "#FFF4ED",
          300: "#FCB380",
          400: "#FB8A3C",
          500: "#F2670C",
          600: "#D8550A",
          700: "#B34309",
        },
        ink: {
          900: "#0B1526",
          800: "#131F35",
          600: "#3D4A63",
          500: "#5B6B87",
          400: "#8996AC",
        },
        paper: {
          50: "#FFFFFF",
          100: "#F6F8FB",
          200: "#EDF1F6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #050B18 0%, #0A1428 45%, #152A4E 100%)",
        "gold-line": "linear-gradient(90deg, transparent, #C9A227, transparent)",
        "ember-line": "linear-gradient(90deg, transparent, #F2670C, transparent)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(5,11,24,0.35)",
        glass: "0 8px 32px 0 rgba(5,11,24,0.25)",
        soft: "0 8px 30px -8px rgba(15,23,42,0.12)",
        "soft-lg": "0 24px 60px -16px rgba(15,23,42,0.16)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-glow": "pulseGlow 2.4s ease-in-out infinite",
        wiggle: "wiggle 0.6s ease-in-out",
        "spin-slow": "spin 10s linear infinite",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.08)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-8deg)" },
          "75%": { transform: "rotate(8deg)" },
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
