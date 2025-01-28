import { useLoaderData, useNavigation } from "react-router";
import { useHealthStore } from "./stores/health-store";
import { useGameStateStore } from "./stores/game-state-store";
import { useState } from "react";
import type { loader } from "./game";

export const useGameLogic = () => {
  const { guess } = useLoaderData<typeof loader>();
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

  if (navigation.state === "loading" && state !== "playing") {
    updateState("playing");
  }

  if (navigation.state === "loading" && selected.length > 0) setSelected([]);

  return { selected, setSelected, word, navigation };
};
