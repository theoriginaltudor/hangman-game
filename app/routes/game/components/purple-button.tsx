import { Link } from "react-router";

type Props = {
  children: React.ReactNode;
  to: string;
} & Pick<React.RefAttributes<HTMLAnchorElement>, "ref">;

export const PurpleButton: React.FC<Props> = ({ children, to: link, ref }) => {
  return (
    <Link
      to={link}
      ref={ref}
      prefetch="intent"
      className="relative flex justify-center px-16 py-5 rounded-full bg-darkNavy hover:brightness-105"
    >
      <div className="flex justify-center absolute rounded-full bg-purple-600 top-[0.0625rem] bottom-[0.3125rem] left-[0.1875rem] right-[0.1875rem]">
        <div className="flex justify-center absolute top-[0.375rem] bottom-0 rounded-full left-[0.1875rem] right-[0.1875rem] bg-gradient-to-t from-indigo-300 to-pink-400" />
      </div>
      <h2 className="relative leading-none text-white uppercase font-mouse text-ms">
        {children}
      </h2>
    </Link>
  );
};
