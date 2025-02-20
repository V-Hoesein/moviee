import { cn } from '@/lib/utils'
import { Skeleton } from './ui/skeleton'

const SkeletonLoader = ({
  className,
  count = 3,
}: {
  className?: string
  count?: number
}) => (
  <>
    {[...Array(count)].map((_, i) => (
      <Skeleton
        key={i}
        className={`${cn('h-52 sm:h-64 md:h-72 min-w-[150px] sm:min-w-[170px] md:min-w-[200px] rounded-md', className)}`}
      />
    ))}
  </>
)

export default SkeletonLoader
