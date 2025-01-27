import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTailwindMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-body", "text-mm", "text-ms", "text-ml", "text-mxl"],
      "text-color": ["text-darkNavy", "text-playBlue", "text-playSky"],
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
} as const;

export type RouteValues = (typeof Routes)[keyof typeof Routes];
