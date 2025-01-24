import { ShadowLetter } from "~/components/shadow-letter";
import { BackButton } from "./back-button";

export const NavBar = ({ pageHeading }: { pageHeading: string }) => {
  return (
    <div className="flex justify-between items-center">
      <BackButton />
      <div>
        {pageHeading !== "" &&
          Array.from(pageHeading).map((letter, index) => (
            <ShadowLetter letter={letter} key={index} />
          ))}
      </div>
    </div>
  );
};
