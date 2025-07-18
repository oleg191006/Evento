import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const PaginationControls = ({
  previousPath,
  nextPath,
}: PaginationControlsProps) => {
  return (
    <section className="w-full flex justify-between">
      {previousPath ? (
        <PaginationButton href={previousPath}>
          <ArrowLeftIcon /> Previous
        </PaginationButton>
      ) : (
        <div />
      )}
      {nextPath && (
        <PaginationButton href={nextPath}>
          Next <ArrowRightIcon />
        </PaginationButton>
      )}
    </section>
  );
};

export default PaginationControls;

type PaginationButtonProps = {
  href: string;
  children: React.ReactNode;
};

const PaginationButton = ({ href, children }: PaginationButtonProps) => {
  return (
    <Link
      className="text-white flex items-center gap-x-2  px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-xs "
      href={href}
    >
      {children}
    </Link>
  );
};
