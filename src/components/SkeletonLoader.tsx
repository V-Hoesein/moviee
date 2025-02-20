import { cn } from '@/lib/utils'
import { Skeleton } from './ui/skeleton'

const SkeletonLoader = ({
  className,
  count = 5,
}: {
  className?: string
  count?: number
}) => (
  <div className='flex mt-3 space-x-2 w-full'>
    {[...Array(count)].map((_, i) => (
      <Skeleton
        key={i}
        className={`${cn('h-52 w-2/6 min-w-[150px] rounded-md', className)}`}
      />
    ))}
  </div>
)

export default SkeletonLoader
