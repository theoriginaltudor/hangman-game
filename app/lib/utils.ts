import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Routes = {
  home: "/",
  instructions: "/instructions",
  category: "/category",
  ingame: "/ingame",
} as const;

export type RouteValues = (typeof Routes)[keyof typeof Routes];
