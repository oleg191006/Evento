import cn from "@/shared/lib/utils/cn";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

const H1 = ({ children, className }: H1Props) => {
  return (
    <h1
      className={cn("text-3xl lg:text-6xl font-bold tracking-tight", className)}
    >
      {children}
    </h1>
  );
};

export default H1;
