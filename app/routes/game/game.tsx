import { PlayableLetter } from "~/routes/game/components/playable-letter";
import { KeyboardLetter } from "~/routes/game/components/keyboard-letter";
import { useGameLogic } from "./use-game-logic";
import { useKeyPress } from "~/use-key-press";
import { ShadowLetter } from "~/components/shadow-letter";

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
      <div className="flex justify-center items-center">
        {Array.from(error).map((letter, index) => (
          <ShadowLetter letter={letter} key={index} />
        ))}
      </div>
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
