import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const colors = {
  darkNavy: "#261676",
  playBlue: "#2463FF",
  playSky: "#67B6FF",
};

export const fontSize:
  | ResolvableTo<
      KeyValuePair<
        string,
        | string
        | [fontSize: string, lineHeight: string]
        | [
            fontSize: string,
            configuration: Partial<{
              lineHeight: string;
              letterSpacing: string;
              fontWeight: string | number;
            }>
          ]
      >
    >
  | undefined = {
  mxl: ["8.5rem", "1"], // 136px with line-height 1
  ml: ["5.5rem", "1"], // 88px with line-height 1
  mm: ["3rem", "1"], // 48px with line-height 1
  ms: ["2rem", "1"], // 32px with line-height 1
  body: ["1.625rem", "1"], // 26px with line-height 1
};
