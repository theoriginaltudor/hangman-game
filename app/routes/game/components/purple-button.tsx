import { Link } from "react-router";

export const PurpleButton: React.FC<{
  children: React.ReactNode;
  to: string;
}> = ({ children, to: link }) => {
  return (
    <Link
      to={link}
      prefetch="intent"
      className="flex justify-center bg-darkNavy relative py-5 px-16 rounded-full hover:brightness-105"
    >
      <div className="flex justify-center absolute rounded-full bg-purple-600 top-[0.0625rem] bottom-[0.3125rem] left-[0.1875rem] right-[0.1875rem]">
        <div className="flex justify-center absolute top-[0.375rem] bottom-0 rounded-full left-[0.1875rem] right-[0.1875rem] bg-gradient-to-t from-indigo-300 to-pink-400" />
      </div>
      <h2 className="uppercase font-mouse text-ms leading-none text-white relative">
        {children}
      </h2>
    </Link>
  );
};
