import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { colors, fontSize } from "../../custom-css";

const customTailwindMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [...Object.keys(fontSize!).map((key) => `text-${key}`)],
      "text-color": [...Object.keys(colors).map((key) => `text-${key}`)],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTailwindMerge(clsx(inputs));
}

export const Routes = {
  home: "/",
  instructions: "/instructions",
  category: "/category",
  ingame: "/ingame",
  reset: "/reset",
} as const;

export type RouteValues = (typeof Routes)[keyof typeof Routes];
