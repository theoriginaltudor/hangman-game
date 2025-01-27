import { create } from "zustand";

type HealthSate = {
  wrong: number;
  updateHealth: (wrong: number) => void;
};

export const useHealthStore = create<HealthSate>()((set) => ({
  wrong: 0,
  updateHealth: (wrong: number) => set({ wrong }),
}));
