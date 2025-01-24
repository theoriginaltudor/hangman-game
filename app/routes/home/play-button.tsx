import { Link } from "react-router";
import PlayButtonIcon from "../assets/images/icon-play.svg?react";

export const PlayButton = ({ to: link }: { to: string }) => {
  return (
    <Link
      to={link}
      prefetch="intent"
      className="rounded-full hover:brightness-105 bg-gray-800 w-40 md:w-[12.5rem] relative aspect-square flex justify-center"
    >
      <div className="rounded-full bg-purple-600 absolute top-[0.5%] w-[95%] flex justify-center aspect-square">
        <div className="bg-gradient-to-t from-indigo-300 rounded-full to-pink-400 absolute top-0 w-[93%] aspect-square" />
      </div>
      <PlayButtonIcon className="absolute top-[35%] left-[34%] w-[33%] h-[31%]" />
    </Link>
  );
};
