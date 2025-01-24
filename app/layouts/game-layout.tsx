import { Outlet, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { GameNavBar } from "~/components/game-nav-bar";

export async function loader({ params }: LoaderFunctionArgs) {
  return { category: params.category };
}

const GameLayout = () => {
  const { category } = useLoaderData<typeof loader>();
  return (
    <div className="h-screen flex flex-col gap-20 px-6 py-8 md:px-10 md:py-16 xl:px-28 xl:py-20">
      {category && <GameNavBar category={category} />}
      <Outlet />
    </div>
  );
};

export default GameLayout;
