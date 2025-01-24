import { useNavigate } from "react-router";
import BackButtonIcon from "../assets/images/icon-back.svg?react";
import { NavButton } from "./nav-button";

export const BackButton = () => {
  const navigate = useNavigate();
  return <NavButton Icon={BackButtonIcon} action={() => navigate(-1)} />;
};
