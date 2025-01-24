export const Category = ({ category }: { category: string }) => {
  return (
    <button className="flex justify-center bg-darkNavy relative py-[4.8125rem] w-full rounded-3xl hover:brightness-125">
      <div className="flex justify-center absolute rounded-3xl bg-blue-500 top-[0.0625rem] bottom-[0.3125rem] left-[0.1875rem] right-[0.1875rem]">
        <div className="flex justify-center absolute top-[0.375rem] bottom-0 rounded-3xl bg-playBlue left-[0.1875rem] right-[0.1875rem]" />
      </div>
      <h2 className="uppercase font-mouse text-mm leading-none text-white relative">
        {category}
      </h2>
    </button>
  );
};
