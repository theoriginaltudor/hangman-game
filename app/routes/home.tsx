import { Card } from "~/components/transparent-card";
import type { Route } from "./+types/home";
import Logo from "../assets/images/logo.svg?react";
import { PlayButton } from "~/components/play-button";
import { BlueButton } from "~/components/blue-button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col pt-40 items-center h-screen">
      <Card className="gap-y-14 pb-[3.25rem]">
        <Logo className="relative w-[16.4375rem] md:w-[23.3125rem] -mt-[5rem] md:-mt-[6.5rem]" />
        <PlayButton to="/category" />
        <BlueButton to="/instructions">How to play</BlueButton>
      </Card>
    </div>
  );
}
