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
        className={`${cn('h-52 w-2/6 min-w-[150px] rounded-md', className)}`}
      />
    ))}
  </>
)

export default SkeletonLoader
