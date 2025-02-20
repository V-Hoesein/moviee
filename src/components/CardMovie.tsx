import { Card, CardContent } from './ui/card'

interface CardMovieProps {
  poster_path: string
  title?: string
}
const CardMovie = ({ poster_path, title }: CardMovieProps) => (
  <Card className='h-52 sm:h-64 md:h-72 min-w-[150px] sm:min-w-[170px] md:min-w-[200px] rounded-md'>
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

export default CardMovie
