import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useQuery } from '@tanstack/react-query'
import { getGenres } from '@/services/api'
import GenresHeader from '../GenresHeader'

const Header = () => {
  const { data: genres, isFetching } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
    refetchOnWindowFocus: false,
  })

  return (
    <>
      {/* mobile */}
      <header>
        <div className='flex justify-between items-center p-4'>
          <h1 className='capitalize font-bold'>moviee</h1>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <GenresHeader genres={genres} isFetching={isFetching} />
      </header>
    </>
  )
}

export default Header
