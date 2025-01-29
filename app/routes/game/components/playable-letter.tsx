import { cn } from "~/lib/utils";

export const PlayableLetter = ({
  letter,
  disabled,
}: {
  letter: string;
  disabled?: boolean;
}) => {
  return (
    <button
      className={cn(
        "flex justify-center bg-darkNavy relative rounded-xl md:rounded-3xl xl:rounded-[2.5rem] pt-[1.1875rem] md:pt-[2.125rem] pb-[1.0625rem] md:pb-[1.875rem] w-10 md:w-[5.4375rem] xl:w-[7rem]",
        {
          "brightness-50": disabled,
        }
      )}
    >
      <div className="flex justify-center absolute rounded-xl md:rounded-3xl xl:rounded-[2.5rem] bg-blue-500 top-[0.0625rem] bottom-[0.3125rem] left-[0.1875rem] right-[0.1875rem]">
        <div className="flex justify-center absolute top-[0.375rem] bottom-0 rounded-xl md:rounded-3xl xl:rounded-[2.5rem] bg-playBlue left-[0.1875rem] right-[0.1875rem]" />
      </div>
      <h2
        className={cn(
          "uppercase font-mouse text-[2.5rem] md:text-ml leading-none text-white relative",
          {
            "opacity-0": disabled,
          }
        )}
      >
        {letter}
      </h2>
    </button>
  );
};
