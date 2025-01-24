type Props = {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
    }
  >;
  action: () => void;
};

export const NavButton = ({ Icon, action }: Props) => {
  return (
    <button
      onMouseDown={action}
      className="rounded-full hover:brightness-105 bg-gradient-to-t from-[#7E7EFD] to-[#E660FC] w-10 md:w-16 xl:w-24 relative aspect-square flex justify-center"
    >
      <div className="bg-gradient-to-t from-indigo-300 rounded-full to-pink-400 absolute top-[1px] w-[85%] aspect-square" />
      <Icon className="absolute top-[23%] left-[28.7%] w-[43.6%] h-[40%]" />
    </button>
  );
};
