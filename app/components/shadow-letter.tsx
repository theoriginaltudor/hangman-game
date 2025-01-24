export const ShadowLetter = ({ letter }: { letter: string }) => {
  if (letter === " ") {
    return <span className="opacity-0">0</span>;
  }
  const shadow = {
    sm: "text-stroke-sm text-mm",
    md: "text-stroke-lg text-[6.5rem]",
    xl: "text-stroke-lg text-mxl",
  };

  return (
    <div className="relative inline-flex p-0.5 xl:p-1">
      <span className="font-mouse tracking-wider text-stroke-sm md:text-stroke-lg text-mm md:text-[6.5rem] xl:text-mxl">
        {letter}
      </span>
      <span className="bg-gradient-to-t from-[#E3F2FF] to-playSky font-mouse absolute tracking-widest text-transparent bg-clip-text text-mm md:text-[6.5rem] xl:text-mxl">
        {letter}
      </span>
    </div>
  );
};
