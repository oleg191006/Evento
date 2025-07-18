import Skeleton from "@/shared/components/Skeleton/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton className="h4 w-[550px] " />
      <Skeleton className="h-4 w-[400px]" />
      <Skeleton className="h-4 w-[430px]" />
    </div>
  );
}
