import type React from "react";
import { Link } from "react-router";

type Props = {
  children: React.ReactNode;
  to?: string;
  action?: () => void;
} & Pick<React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>, "ref">;

export const BlueButton: React.FC<Props> = ({
  children,
  to: link,
  action,
  ref,
}) => {
  if (!link) {
    return (
      <button
        {...(action && { onClick: action })}
        ref={ref as React.RefObject<HTMLButtonElement>}
        className="relative flex justify-center px-16 py-5 rounded-full bg-darkNavy hover:brightness-125"
      >
        <div className="flex justify-center absolute rounded-full bg-blue-500 top-[0.0625rem] bottom-[0.3125rem] left-[0.1875rem] right-[0.1875rem]">
          <div className="flex justify-center absolute top-[0.375rem] bottom-0 rounded-full bg-playBlue left-[0.1875rem] right-[0.1875rem]" />
        </div>
        <h2 className="relative leading-none tracking-widest text-white uppercase font-mouse text-ms">
          {children}
        </h2>
      </button>
    );
  }
  return (
    <Link
      to={link}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      prefetch="intent"
      className="relative flex justify-center px-16 py-5 rounded-full bg-darkNavy hover:brightness-125"
    >
      <div className="flex justify-center absolute rounded-full bg-blue-500 top-[0.0625rem] bottom-[0.3125rem] left-[0.1875rem] right-[0.1875rem]">
        <div className="flex justify-center absolute top-[0.375rem] bottom-0 rounded-full bg-playBlue left-[0.1875rem] right-[0.1875rem]" />
      </div>
      <h2 className="relative leading-none tracking-widest text-white uppercase font-mouse text-ms">
        {children}
      </h2>
    </Link>
  );
};
