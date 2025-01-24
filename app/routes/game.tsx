import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import data from "app/DB/data.json";
import { PlayableLetter } from "~/components/playable-letter";

type CategoryKeys = keyof typeof data.categories;

export async function loader({ params }: LoaderFunctionArgs) {
  const category = params.category as CategoryKeys;
  const list = data.categories[category];
  const guess = list[Math.floor(Math.random() * list.length)];
  return { guess };
}

const Game = () => {
  const { guess } = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3 xl:gap-y-3 justify-center">
      {guess.name.split("").map((letter, index) => {
        if (letter === " ")
          return (
            <div className="opacity-0">
              <PlayableLetter key={index} letter={letter} />
            </div>
          );
        return <PlayableLetter key={index} letter={letter} />;
      })}
    </div>
  );
};
export default Game;
