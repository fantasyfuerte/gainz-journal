import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#170e28",
        button: "#7f5af0",
        primary: "#fffffe",
        secondary: "#94a1b2",
        cta: "#2cb67d",
      },
    },
  },
  plugins: [],
} satisfies Config;
