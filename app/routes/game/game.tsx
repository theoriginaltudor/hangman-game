import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import data from "app/DB/data.json";
import { PlayableLetter } from "~/routes/game/components/playable-letter";
import { KeyboardLetter } from "~/routes/game/components/keyboard-letter";
import { useState } from "react";
import { useHealthStore } from "./health-store";

type CategoryKeys = keyof typeof data.categories;

export async function loader({ params }: LoaderFunctionArgs) {
  const category = params.category as CategoryKeys;
  const list = data.categories[category];
  const guess = list[Math.floor(Math.random() * list.length)];
  return { guess };
}

const Game = () => {
  const { guess } = useLoaderData<typeof loader>();
  const { updateHealth, wrong } = useHealthStore();
  const word = guess.name.toLowerCase();
  const [selected, setSelected] = useState<string[]>([]);
  const wrongGuesses = selected.filter(
    (letter) => !word.includes(letter)
  ).length;
  if (wrong !== wrongGuesses) updateHealth(word.length, wrongGuesses);
  return (
    <div className="flex flex-col gap-28">
      <div className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3 xl:gap-y-3 justify-center">
        {word.split("").map((letter, index) => {
          if (letter === " ")
            return (
              <div className="opacity-0">
                <PlayableLetter key={index} letter={letter} />
              </div>
            );
          return (
            <PlayableLetter
              key={index}
              letter={letter}
              disabled={!selected.includes(letter)}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-6">
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
          <KeyboardLetter
            key={letter}
            letter={letter}
            action={() => {
              if (selected.includes(letter)) return;
              setSelected([...selected, letter]);
            }}
            disabled={selected.includes(letter)}
          />
        ))}
      </div>
    </div>
  );
};
export default Game;
