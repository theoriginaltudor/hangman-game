import { Outlet, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { GameNavBar } from "./nav/game-nav-bar";
import { useHealthStore } from "../health-store";
import { MenuDialog } from "./menu-dialog";

export async function loader({ params }: LoaderFunctionArgs) {
  return { category: params.category };
}

const GameLayout = () => {
  const { category } = useLoaderData<typeof loader>();
  const { length, wrong } = useHealthStore();
  const health = wrong > 0 ? 100 - (wrong * 100) / length : 100;
  return (
    <div className="h-screen flex flex-col gap-20 px-6 py-8 md:px-10 md:py-16 xl:px-28 xl:py-20">
      {category && <GameNavBar category={category} health={health} />}
      <Outlet />
      {health !== 0 && <MenuDialog />}
    </div>
  );
};

export default GameLayout;
