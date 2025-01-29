import { type LoaderFunctionArgs } from "react-router";
import data from "app/DB/data.json";
import { PlayableLetter } from "~/routes/game/components/playable-letter";
import { KeyboardLetter } from "~/routes/game/components/keyboard-letter";
import { useGameLogic } from "./use-game-logic";
import { useKeyPress } from "~/use-key-press";
import fs from "fs/promises";
import path from "path";

type CategoryKeys = keyof typeof data.categories;

export async function loader({ params }: LoaderFunctionArgs) {
  const category = params.category as CategoryKeys;
  const list = data.categories[category];
  const filteredList = list.filter((item) => !item.selected);
  const index = Math.floor(Math.random() * filteredList.length);
  const guess: { name: string; selected: boolean } | undefined =
    filteredList[index];
  if (guess === undefined) return { guess };
  const updatedList = list.filter((item) => item.name !== guess.name);
  const updatedData = {
    categories: {
      ...data.categories,
      [category]: [...updatedList, { ...guess, selected: true }],
    },
  };
  const filePath = path.join(process.cwd(), "app/DB/data.json");
  try {
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));
  } catch (error) {
    console.error("Error writing file", error);
  }
  return { guess };
}

const Game = () => {
  const { selected, setSelected, word, navigation, state, error } =
    useGameLogic();
  const keypressList = "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => ({
    [letter]: () => {
      if (selected?.includes(letter) || state !== "playing") return;
      setSelected([...selected, letter]);
    },
  }));
  useKeyPress(keypressList, [selected, state]);

  const words = word?.split(" ");
  if (error)
    return (
      <div className="flex justify-center items-center text-3xl">{error}</div>
    );
  if (words && selected && setSelected)
    return (
      <div className="flex flex-col gap-28">
        <div className="flex flex-wrap justify-center gap-y-2 md:gap-y-3 xl:gap-y-3 gap-x-10 md:gap-x-[5.4375rem] xl:gap-x-[7rem]">
          {words.map((word, index) => (
            <div key={index} className="flex gap-x-3 md:gap-x-4">
              {word.split("").map((letter, index) => (
                <PlayableLetter
                  key={index}
                  letter={letter}
                  disabled={!selected.includes(letter)}
                />
              ))}
            </div>
          ))}
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
