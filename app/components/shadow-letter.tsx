import { cn } from "~/lib/utils";

export const ShadowLetter = ({
  letter,
  title,
}: {
  letter: string;
  title?: boolean;
}) => {
  if (letter === " ") {
    return <span className="opacity-0">0</span>;
  }

  return (
    <div className="relative inline-flex p-0.5 xl:p-1">
      <span
        className={cn(
          "font-mouse tracking-wider text-stroke-sm md:text-stroke-lg text-mm md:text-[6.5rem] xl:text-mxl",
          {
            "text-[6rem] md:text-[8.375rem] xl:text-[8.375rem] tracking-tight":
              title,
          }
        )}
      >
        {letter}
      </span>
      <span
        className={cn(
          "bg-gradient-to-t from-[#E3F2FF] to-playSky font-mouse absolute tracking-widest text-transparent bg-clip-text text-mm md:text-[6.5rem] xl:text-mxl",
          {
            "text-[6rem] md:text-[8.375rem] xl:text-[8.375rem] tracking-tight":
              title,
          }
        )}
      >
        {letter}
      </span>
    </div>
  );
};
