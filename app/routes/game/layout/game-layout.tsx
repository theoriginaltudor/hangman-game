import { Outlet, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { GameNavBar } from "./nav/game-nav-bar";
import { MenuDialog } from "./menu-dialog";
import { useGameStateStore } from "../stores/game-state-store";

export async function loader({ params }: LoaderFunctionArgs) {
  return { category: params.category };
}

const GameLayout = () => {
  const { category } = useLoaderData<typeof loader>();
  const { state } = useGameStateStore();
  return (
    <div className="h-screen flex flex-col gap-20 px-6 py-8 md:px-10 md:py-16 xl:px-28 xl:py-20">
      {category && <GameNavBar category={category} />}
      <Outlet />
      {state === "lost" && <MenuDialog title="You Lose" />}
      {state === "won" && <MenuDialog title="You Win" />}
      {state === "paused" && <MenuDialog title="Paused" />}
    </div>
  );
};

export default GameLayout;
