
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        cyber: ["Inter", ...fontFamily.sans],
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "cyber-black": "#0a0a0f",
        "cyber-dark": "#121218",
        "cyber-purple": "#8B5CF6",
        "cyber-blue": "#0ea5e9",
        "cyber-pink": "#ec4899",
        "cyber-yellow": "#fbbf24",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "glass": "0 4px 30px rgba(0, 0, 0, 0.1)",
        "neon": "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(14, 165, 233, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)",
        "neon-purple": "0 0 15px rgba(139, 92, 246, 0.5)",
        "neon-blue": "0 0 15px rgba(14, 165, 233, 0.5)",
        "divine": "0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(14, 165, 233, 0.3), 0 0 90px rgba(236, 72, 153, 0.2)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "levitate": "levitate 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "divine-glow": "divine-glow 4s ease-in-out infinite",
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
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "glow": {
          "0%": { 
            textShadow: "0 0 5px rgba(139, 92, 246, 0.5), 0 0 10px rgba(139, 92, 246, 0.5)" 
          },
          "100%": { 
            textShadow: "0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(14, 165, 233, 0.8), 0 0 30px rgba(236, 72, 153, 0.8)" 
          },
        },
        "levitate": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(1deg)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
        },
        "divine-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(14, 165, 233, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)"
          },
          "50%": {
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(14, 165, 233, 0.5), 0 0 90px rgba(236, 72, 153, 0.4)"
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".shadow-neon": {
          "box-shadow": "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(14, 165, 233, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)",
        },
        ".shadow-divine": {
          animation: "divine-glow 4s ease-in-out infinite",
        },
      });
    }),
  ],
} satisfies Config;
