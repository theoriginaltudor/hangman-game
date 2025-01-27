import HeartIcon from "~/assets/images/icon-heart.svg?react";
import { HealthBar } from "./health-bar";
import { MenuButton } from "./menu-button";

export const GameNavBar = ({
  category,
  health,
}: {
  category: string;
  health: number;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <MenuButton />
        <h2 className="font-mouse text-[2.5rem] text-white tracking-wider">
          {category}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <HealthBar health={health} />
        <HeartIcon className="w-[1.625rem] h-[1.5rem] md:w-[3.3125rem] md:h-[3.0625rem] " />
      </div>
    </div>
  );
};
