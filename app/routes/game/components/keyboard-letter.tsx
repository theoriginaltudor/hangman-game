import { cn } from "~/lib/utils";

export const KeyboardLetter = ({
  letter,
  disabled,
  action,
}: {
  letter: string;
  disabled?: boolean;
  action: () => void;
}) => {
  return (
    <button
      onMouseDown={action}
      className={cn(
        "flex justify-center  text-darkNavy  bg-white rounded-lg md:rounded-[1.875rem] py-[1.1875rem] md:py-[1.5625rem] px-2.5 md:px-8",
        {
          "brightness-50": disabled,
          "hover:bg-playBlue hover:text-white": !disabled,
        }
      )}
    >
      <h2 className="uppercase font-mouse text-2xl md:text-mm leading-none">
        {letter}
      </h2>
    </button>
  );
};
