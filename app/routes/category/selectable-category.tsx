import { useRef } from "react";
import { Link } from "react-router";
import { Routes } from "~/lib/utils";

export const Category = ({
  category,
  reference,
  index,
}: {
  category: string;
  reference?: React.RefObject<HTMLAnchorElement[]>;
  index?: number;
}) => {
  const itemRef = useRef<HTMLAnchorElement | null>(null);

  if (reference && itemRef.current && index)
    reference.current[index] = itemRef.current;
  return (
    <Link
      to={`${Routes.ingame}/${category}`}
      ref={itemRef}
      className="flex justify-center bg-darkNavy relative py-[1.875rem] md:py-[4.625rem] xl:py-[4.8125rem] w-full rounded-3xl hover:brightness-125"
    >
      <div className="flex justify-center absolute rounded-3xl bg-blue-500 top-[0.0625rem] bottom-[0.3125rem] left-[0.1875rem] right-[0.1875rem]">
        <div className="flex justify-center absolute top-[0.375rem] bottom-0 rounded-3xl bg-playBlue left-[0.1875rem] right-[0.1875rem]" />
      </div>
      <h2 className="uppercase font-mouse text-[1.5rem] md:text-mm leading-none text-white relative tracking-wider">
        {category}
      </h2>
    </Link>
  );
};
