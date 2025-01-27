import { create } from "zustand";

type HealthSate = {
  length: number;
  wrong: number;
  updateHealth: (length: number, wrong: number) => void;
};

export const useHealthStore = create<HealthSate>()((set) => ({
  length: 1,
  wrong: 0,
  updateHealth: (length: number, wrong: number) => set({ length, wrong }),
}));
