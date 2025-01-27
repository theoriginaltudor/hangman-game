import { create } from "zustand";

type State = "playing" | "won" | "lost" | "paused";

type GameState = {
  state: State;
  updateState: (state: State) => void;
};

export const useGameStateStore = create<GameState>()((set) => ({
  state: "playing",
  updateState: (state) => set({ state }),
}));
