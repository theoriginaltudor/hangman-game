import { BlueButton } from "~/components/blue-button";
import { Card } from "~/components/transparent-card";
import { PurpleButton } from "../components/purple-button";
import { Routes } from "~/lib/utils";
import { ShadowLetter } from "~/components/shadow-letter";

export const MenuDialog = ({ title }: { title: string }) => {
  return (
    <div className="h-screen flex fixed left-0 items-center justify-center w-screen">
      <div className="absolute bg-gradient-to-t from-[#2B1677] to-[#1A043A] h-screen opacity-75 w-screen" />
      <Card className="gap-y-14 pb-[3.25rem]">
        <div className="relative w-[16.4375rem] md:w-[23.3125rem] -mt-[3rem] md:-mt-[4.5rem] flex justify-center">
          {title.split("").map((letter, index) => (
            <ShadowLetter key={index} letter={letter} title />
          ))}
        </div>
        <BlueButton to="/instructions">Continue</BlueButton>
        <BlueButton to={Routes.category}>New category</BlueButton>
        <PurpleButton to={Routes.home}>Quit game</PurpleButton>
      </Card>
    </div>
  );
};
