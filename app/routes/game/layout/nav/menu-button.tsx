import { NavButton } from "~/components/nav-button";
import MenuIcon from "~/assets/images/icon-menu.svg?react";
import { useGameStateStore } from "../../stores/game-state-store";

export const MenuButton = () => {
  const { updateState } = useGameStateStore();
  return <NavButton action={() => updateState("paused")} Icon={MenuIcon} />;
};
