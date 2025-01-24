import { Outlet, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { BackButton } from "~/components/back-button";
import { ShadowLetter } from "~/components/shadow-letter";
import { Routes, type RouteValues } from "~/lib/utils";

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
  return (
    <div className="h-screen flex flex-col gap-20 px-6 py-8 md:px-10 md:py-16 xl:px-28 xl:py-20">
      <div className="flex justify-between">
        <BackButton to={Routes.home} />
        <div>
          {pageHeading !== "" &&
            Array.from(pageHeading).map((letter, index) => (
              <ShadowLetter letter={letter} key={index} />
            ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavLayout;
