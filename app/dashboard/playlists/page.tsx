import { SkeletonCard } from '/ui/SkeletonCard';
import clsx from 'clsx';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <section>
      <div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
          <SkeletonCard isLoading={false}/>
          <SkeletonCard isLoading={false}/>
          <SkeletonCard isLoading={false}/>
          <SkeletonCard isLoading={false}/>
          <SkeletonCard isLoading={false}/>
          <SkeletonCard isLoading={false}/>
        </div>
      </div>
    </section>
  )
}