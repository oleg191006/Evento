import Skeleton from "../Skeleton/Skeleton";

const SkeletonCard = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
};

export default SkeletonCard;
