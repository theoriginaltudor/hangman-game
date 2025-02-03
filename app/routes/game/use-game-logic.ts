import { useLoaderData, useNavigation } from "react-router";
import { useHealthStore } from "./stores/health-store";
import { useGameStateStore } from "./stores/game-state-store";
import { useState } from "react";
import type { loader } from "./layout/game-layout";

export const useGameLogic = () => {
  const { guess } = useLoaderData<typeof loader>();
  if (guess === undefined) return { error: "Category exhausted" };
  const { updateHealth, wrong } = useHealthStore();
  const { updateState, state } = useGameStateStore();
  const word = guess.name.toLowerCase();
  const [selected, setSelected] = useState<string[]>([]);
  const wrongGuesses = selected.filter(
    (letter) => !word.includes(letter)
  ).length;
  if (wrong !== wrongGuesses) updateHealth(wrongGuesses);
  if (
    word
      .split("")
      .filter((letter) => letter !== " ")
      .every((letter) => selected.includes(letter)) &&
    state !== "won"
  )
    updateState("won");

  const navigation = useNavigation();

  if (navigation.state === "loading" && selected.length > 0) {
    setSelected([]);
  }

  return { selected, setSelected, word, navigation, state };
};
