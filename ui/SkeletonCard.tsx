import clsx from 'clsx';

export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => {
 
  return(
    <div
      className={clsx('rounded-2xl bg-gray-900/80 p-4', {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent':
          isLoading,
      })}
    >
      <div className="flex gap-4">
        <div className="w-14 h-14 rounded-lg bg-gray-700 flex-none" />
        <div className="h-14 w-full flex-col flex-1 space-y-3">
          <div className="h-7 rounded-lg bg-gray-700 flex-1 " />
          <div  className="h-3 flex-1 flex gap-3 w-3/4">
            <div className="h-3 rounded-lg bg-gray-700 w-3/4" />
            <div className="h-3 rounded-lg bg-gray-700 w-3/4" />
            <div className="h-3 rounded-lg bg-gray-700 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}