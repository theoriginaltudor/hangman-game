import { useNavigation, useRouteLoaderData } from "react-router";
import { useHealthStore } from "./stores/health-store";
import { useGameStateStore } from "./stores/game-state-store";
import { useState } from "react";

export const useGameLogic = () => {
  const { guess } = useRouteLoaderData("game-layout");
  if (guess === undefined) return { error: "Category exhausted" };
  const { updateHealth, wrong } = useHealthStore();
  const { updateState, state } = useGameStateStore();
  const word = (
    guess as { name: string; selected: boolean }
  ).name.toLowerCase();
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

  if (navigation.state === "loading") {
    if (selected.length > 0) setSelected([]);
    if (state !== "playing") updateState("playing");
  }

  return { selected, setSelected, word, navigation, state };
};
