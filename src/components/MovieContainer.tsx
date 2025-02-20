import CardMovie from './CardMovie'
import SkeletonLoader from './SkeletonLoader'
import { MovieContainerProps } from '@/types/movie'

const MovieContainer = ({ data, isFetching }: MovieContainerProps) => {
  if (isFetching && !!data)
    return (
      <div className='flex gap-3 mt-4'>
        <SkeletonLoader />
      </div>
    )

  if (!data.length) {
    return (
      <div className='flex items-center justify-center h-40 w-full bg-zinc-800 rounded-md'>
        <p className='text-sm font-semibold'>No Movies Found</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-3 mt-4'>
      <div className='flex gap-3 overflow-x-auto'>
        {data.map((item) => (
          <CardMovie
            key={item.id}
            poster_path={item.poster_path}
            title={item.title || item.name}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieContainer
