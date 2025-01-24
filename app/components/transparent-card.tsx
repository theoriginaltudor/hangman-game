import { cn } from "~/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center bg-darkNavy relative rounded-[3.75rem] w-10/12 md:w-[37rem] mx-auto",
        className
      )}
      {...props}
    >
      <div className="flex justify-center absolute rounded-[3.75rem] bg-playBlue top-0 bottom-[0.75rem] left-[0.25rem] right-[0.25rem]">
        <div className="flex justify-center absolute top-[0.8125rem] bottom-0 rounded-[3.75rem] left-[0.25rem] right-[0.25rem] bg-gradient-to-t from-[#344ABA] to-[#001479] opacity-80" />
      </div>
      {children}
    </div>
  );
};
