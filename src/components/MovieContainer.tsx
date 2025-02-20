import { Card, CardContent } from './ui/card'
import { Skeleton } from './ui/skeleton'
import { MovieContainerProps } from '@/types/movie'

const SkeletonLoader = () => (
  <div className='flex space-x-2 w-full'>
    {[...Array(5)].map((_, i) => (
      <Skeleton key={i} className='h-52 w-2/6 min-w-[150px] rounded-md' />
    ))}
  </div>
)

const CardMovie = ({
  poster_path,
  title,
}: {
  poster_path: string
  title?: string
}) => (
  <Card className='h-52 w-2/6 min-w-[150px] rounded-md'>
    <CardContent
      className='h-full bg-cover bg-center rounded-md flex items-end p-2'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
      }}
    >
      <p className='text-sm font-semibold bg-black/50 p-1 rounded hidden'>
        {title ? title : 'No Title'}
      </p>
    </CardContent>
  </Card>
)

export const MovieContainer = ({ data, isFetching }: MovieContainerProps) => {
  return (
    <div className='flex flex-col gap-3 mt-4'>
      <div className='flex gap-3 overflow-x-auto'>
        {isFetching ? (
          <SkeletonLoader />
        ) : data.length > 0 ? (
          data.map((item) => (
            <CardMovie
              key={item.id}
              poster_path={item.poster_path}
              title={item.title ? item.title : item.name}
            />
          ))
        ) : (
          <div className='flex items-center justify-center h-40 w-full bg-zinc-800 rounded-md'>
            <p className='text-sm font-semibold'>No Movies Found</p>
          </div>
        )}
      </div>
    </div>
  )
}
