import { Suspense } from "react";
import { SkeletonCard } from '/ui/SkeletonCard';
import clsx from 'clsx';

export default async function Page() {
  return (
    <section>
      <div>
        <h1>Playlists</h1>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
          <Suspense fallback={<SkeletonCard isLoading={true}/>}>
            <SkeletonCard isLoading={false}/>
          </Suspense>
        </div>
      </div>
    </section>
  )
}