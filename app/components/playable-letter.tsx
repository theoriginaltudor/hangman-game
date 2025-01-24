export const PlayableLetter = ({
  letter,
  disabled,
}: {
  letter: string;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`${
        disabled ? "brightness-50 " : ""
      }flex justify-center bg-darkNavy relative rounded-[2.5rem] pt-[2.125rem] pb-[1.875rem] px-11`}
    >
      <div className="flex justify-center absolute rounded-[2.5rem] bg-blue-500 top-[0.0625rem] bottom-[0.3125rem] left-[0.1875rem] right-[0.1875rem]">
        <div className="flex justify-center absolute top-[0.375rem] bottom-0 rounded-[2.5rem] bg-playBlue left-[0.1875rem] right-[0.1875rem]" />
      </div>
      <h2
        className={`${
          disabled ? "opacity-0 " : ""
        }uppercase font-mouse text-ml leading-none text-white relative`}
      >
        {letter}
      </h2>
    </button>
  );
};
