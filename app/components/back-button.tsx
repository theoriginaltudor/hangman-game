import { useNavigate } from "react-router";
import BackButtonIcon from "../assets/images/icon-back.svg?react";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onMouseDown={() => navigate(-1)}
      className="rounded-full hover:brightness-105 bg-gradient-to-t from-[#7E7EFD] to-[#E660FC] w-10 md:w-16 xl:w-24 relative aspect-square flex justify-center"
    >
      <div className="bg-gradient-to-t from-indigo-300 rounded-full to-pink-400 absolute top-[1px] w-[85%] aspect-square" />
      <BackButtonIcon className="absolute top-[23%] left-[28.7%] w-[43.6%] h-[40%]" />
    </button>
  );
};
