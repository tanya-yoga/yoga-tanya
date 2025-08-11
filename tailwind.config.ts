import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        bg: "hsl(40 30% 98%)",
        fg: "hsl(222 47% 11%)",
        muted: "hsl(210 40% 96%)",
        "muted-fg": "hsl(215 16% 40%)",
        card: "white",
        primary: "hsl(16 84% 53%)",
        accent: "hsl(155 54% 45%)"
      }
    }
  },
  plugins: []
};
export default config;
