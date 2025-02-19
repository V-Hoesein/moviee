import { Skeleton } from './ui/skeleton'

export default function GenresHeader({
  genres,
  isFetching,
}: {
  genres: string[] | undefined
  isFetching: boolean
}) {
  return (
    <div className='p-4 overflow-x-scroll text-nowrap text-xs'>
      {isFetching ? (
        <div className='flex space-x-2'>
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className='h-4 w-[75px]' />
          ))}
        </div>
      ) : genres && genres.length > 0 ? (
        genres.map((genre) => (
          <span key={genre} className='mr-2 border rounded-full px-2 py-1'>
            {genre}
          </span>
        ))
      ) : (
        <span className='text-gray-500'>No genres available</span>
      )}
    </div>
  )
}
