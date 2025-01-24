export const KeyboardLetter = ({
  letter,
  disabled,
}: {
  letter: string;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`${
        disabled ? "brightness-50 " : "hover:bg-playBlue hover:text-white "
      }flex justify-center  text-darkNavy  bg-white rounded-[1.875rem] py-[1.5625rem] px-8`}
    >
      <h2 className="uppercase font-mouse text-mm leading-none">{letter}</h2>
    </button>
  );
};
