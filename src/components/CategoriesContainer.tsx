import { GetTrendingsProps } from '@/services/api'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'

export type CategoriesContainerProps = {
  data: string[]
  selected: GetTrendingsProps
  setSelected: React.Dispatch<React.SetStateAction<GetTrendingsProps>>
  isFetching?: boolean
}

const SkeletonLoader = () => (
  <div className='flex space-x-2'>
    {[...Array(5)].map((_, i) => (
      <Skeleton key={i} className='h-4 w-[75px]' />
    ))}
  </div>
)

export const CategoriesContainer = ({
  data,
  selected,
  setSelected,
  isFetching,
}: CategoriesContainerProps) => {
  return (
    <div className='flex gap-2 mt-4 text-nowrap overflow-x-auto'>
      {isFetching && <SkeletonLoader />}
      {data.length > 0 &&
        data.map((item, index) => (
          <Button
            className='capitalize rounded-full'
            key={index}
            variant={`${selected.type === item ? 'default' : 'outline'}`}
            onClick={() =>
              setSelected({
                ...selected,
                type: item as GetTrendingsProps['type'],
              })
            }
          >
            {item.replaceAll('_', ' ')}
          </Button>
        ))}
    </div>
  )
}
