import type React from "react";
import { Link } from "react-router";

export const BlueButton: React.FC<{
  children: React.ReactNode;
  to?: string;
  action?: () => void;
}> = ({ children, to: link, action }) => {
  if (!link) {
    return (
      <button
        {...(action && { onClick: action })}
        className="flex justify-center bg-darkNavy relative py-5 px-16 rounded-full hover:brightness-125"
      >
        <div className="flex justify-center absolute rounded-full bg-blue-500 top-[0.0625rem] bottom-[0.3125rem] left-[0.1875rem] right-[0.1875rem]">
          <div className="flex justify-center absolute top-[0.375rem] bottom-0 rounded-full bg-playBlue left-[0.1875rem] right-[0.1875rem]" />
        </div>
        <h2 className="uppercase font-mouse text-ms leading-none text-white relative tracking-widest">
          {children}
        </h2>
      </button>
    );
  }
  return (
    <Link
      to={link}
      prefetch="intent"
      className="flex justify-center bg-darkNavy relative py-5 px-16 rounded-full hover:brightness-125"
    >
      <div className="flex justify-center absolute rounded-full bg-blue-500 top-[0.0625rem] bottom-[0.3125rem] left-[0.1875rem] right-[0.1875rem]">
        <div className="flex justify-center absolute top-[0.375rem] bottom-0 rounded-full bg-playBlue left-[0.1875rem] right-[0.1875rem]" />
      </div>
      <h2 className="uppercase font-mouse text-ms leading-none text-white relative tracking-widest">
        {children}
      </h2>
    </Link>
  );
};
