import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import { colors, fontSize } from "./custom-css";

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
      colors,
      fontSize,
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
