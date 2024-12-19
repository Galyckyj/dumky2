import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bmcolor: "#30435C", // BotomMenu
        itsearch: "#F5F7FA", // Color input search
        itborder: "#A7BAD", // Color input border
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'], // Використання змінної для шрифту
      },
    },
  },
  plugins: [],
} satisfies Config;
