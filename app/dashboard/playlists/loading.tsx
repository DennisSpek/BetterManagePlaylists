import { SkeletonCard } from '/ui/SkeletonCard';

export default function Loading() {
  return (
    <div >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
      </div>
    </div>
  );
}