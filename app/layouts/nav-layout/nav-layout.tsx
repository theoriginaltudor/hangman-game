import {
  Outlet,
  useLoaderData,
  useNavigate,
  type LoaderFunctionArgs,
} from "react-router";
import { Routes, type RouteValues } from "~/lib/utils";
import { NavBar } from "./nav-bar";
import { useEffect } from "react";
import { useKeyPress } from "~/use-key-press";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const lastSegment = `/${url.pathname.split("/").filter(Boolean).pop()}` as
    | RouteValues
    | undefined;
  const headings: Record<RouteValues, string> = {
    [Routes.instructions]: "How to Play",
    [Routes.category]: "Pick a Category",
    [Routes.home]: "Hangman",
    [Routes.ingame]: "Game On",
  } as const;

  return { pageHeading: lastSegment ? headings[lastSegment] : "" };
}

const NavLayout = () => {
  const { pageHeading } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  useKeyPress([
    { Escape: () => navigate(-1) },
    { Backspace: () => navigate(-1) },
  ]);

  return (
    <div className="h-screen flex flex-col gap-20 px-6 py-8 md:px-10 md:py-16 xl:px-0 xl:py-20 xl:max-w-[76rem] xl:mx-auto">
      <NavBar pageHeading={pageHeading} />
      <Outlet />
    </div>
  );
};

export default NavLayout;
