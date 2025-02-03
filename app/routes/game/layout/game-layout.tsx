import { Outlet, useParams, type LoaderFunctionArgs } from "react-router";
import { GameNavBar } from "./nav/game-nav-bar";
import { MenuDialog } from "./menu-dialog";
import { useGameStateStore } from "../stores/game-state-store";
import { getDB, type CategoryKeys } from "~/DB/db.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const category = params.category as CategoryKeys;
  const data = await getDB();
  const list = data.categories[category];
  const filteredList = list.filter((item) => !item.selected);
  const index = Math.floor(Math.random() * filteredList.length);
  const guess: { name: string; selected: boolean } | undefined =
    filteredList[index];
  if (guess === undefined) return { guess };
  console.log("guess", guess);
  return { guess };
}

const GameLayout = () => {
  const { category } = useParams();
  const { state } = useGameStateStore();
  return (
    <div className="h-screen flex flex-col gap-20 px-6 py-8 md:px-10 md:py-16 xl:px-0 xl:py-20 xl:max-w-[76rem] xl:mx-auto">
      {category && <GameNavBar category={category} />}
      <Outlet />
      {state === "lost" && <MenuDialog title="You Lose" />}
      {state === "won" && <MenuDialog title="You Win" />}
      {state === "paused" && <MenuDialog title="Paused" />}
    </div>
  );
};

export default GameLayout;
