import { type LoaderFunctionArgs } from "react-router";
import data from "app/DB/data.json";
import { PlayableLetter } from "~/routes/game/components/playable-letter";
import { KeyboardLetter } from "~/routes/game/components/keyboard-letter";
import { useGameLogic } from "./use-game-logic";
import { useKeyPress } from "~/use-key-press";

type CategoryKeys = keyof typeof data.categories;

export async function loader({ params }: LoaderFunctionArgs) {
  const category = params.category as CategoryKeys;
  const list = data.categories[category];
  const guess = list.filter((item) => !item.selected)[
    Math.floor(Math.random() * list.length)
  ];
  return { guess };
}

const Game = () => {
  const { selected, setSelected, word, navigation, state } = useGameLogic();
  const keypressList = "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => ({
    [letter]: () => {
      if (selected.includes(letter) || state !== "playing") return;
      setSelected([...selected, letter]);
    },
  }));
  useKeyPress(keypressList, [selected, state]);

  return (
    <div className="flex flex-col gap-28">
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3 xl:gap-y-3">
        {word.split("").map((letter, index) => {
          if (letter === " ")
            return (
              <div className="opacity-0" key={index}>
                <PlayableLetter letter={letter} />
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
            disabled={
              selected.includes(letter) || navigation.state === "loading"
            }
          />
        ))}
      </div>
    </div>
  );
};
export default Game;
