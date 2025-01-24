import { NavButton } from "~/components/nav-button";
import MenuIcon from "~/assets/images/icon-menu.svg?react";

export const MenuButton = () => {
  return (
    <NavButton
      action={() => console.log("Menu button clicked")}
      Icon={MenuIcon}
    />
  );
};
