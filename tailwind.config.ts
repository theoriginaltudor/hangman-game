import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        mouse: ["Mouse Memoirs", "sans-serif"],
      },
      colors: {
        darkNavy: "#261676",
        playBlue: "#2463FF",
        playSky: "#67B6FF",
      },
      fontSize: {
        mxl: ["8.5rem", "1"], // 136px with line-height 1
        ml: ["5.5rem", "1"], // 88px with line-height 1
        mm: ["3rem", "1"], // 48px with line-height 1
        ms: ["2rem", "1"], // 32px with line-height 1
        body: ["1.625rem", "1"], // 26px with line-height 1
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".text-stroke-sm": {
          "-webkit-text-stroke": "12px #1a1a1a", // 4px stroke for mobile
        },
        ".text-stroke-lg": {
          "-webkit-text-stroke": "24px #1a1a1a", // 8px stroke for desktop/tablet
        },
      });
    },
  ],
} satisfies Config;
