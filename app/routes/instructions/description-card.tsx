type Props = {
  count: number;
  title: string;
  body: string;
};

export const Description = ({ count, title, body }: Props) => {
  return (
    <div className="grid grid-cols-1 leading-tight tracking-wider md:grid-cols-[auto_1fr] xl:grid-cols-1 gap-5 md:gap-10 font-mouse bg-white rounded-3xl p-8 xl:text-center">
      <div className="flex items-center gap-4 xl:justify-center">
        <span className="inline-block text-2xl text-playBlue md:text-ml">
          {count < 10 && "0"}
          {count}
        </span>
        <h3 className="text-2xl md:text-[2.5rem] uppercase md:hidden">
          {"  "} {title}
        </h3>
      </div>

      <div className="md:flex md:flex-col md:gap-4 xl:gap-10">
        <h3 className="text-2xl md:text-[2.5rem] uppercase md:block hidden">
          {"  "} {title}
        </h3>
        <p className="md:text-xl xl:text-body text-[#887DC0]">{body}</p>
      </div>
    </div>
  );
};
