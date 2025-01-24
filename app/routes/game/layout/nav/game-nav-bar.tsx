import HeartIcon from "~/assets/images/icon-heart.svg?react";
import { HealthBar } from "./health-bar";
import { MenuButton } from "./menu-button";
import { useHealthStore } from "../../health-store";

export const GameNavBar = ({ category }: { category: string }) => {
  const { length, wrong } = useHealthStore();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <MenuButton />
        <h2 className="font-mouse text-[2.5rem] text-white tracking-wider">
          {category}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <HealthBar health={wrong > 0 ? 100 - (wrong * 100) / length : 100} />
        <HeartIcon className="w-[1.625rem] h-[1.5rem] md:w-[3.3125rem] md:h-[3.0625rem] " />
      </div>
    </div>
  );
};
