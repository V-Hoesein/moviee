import { Card, CardContent } from './ui/card'
import { motion } from 'framer-motion'

interface CardMovieProps {
  poster_path: string
  title?: string
}

const CardMovie = ({ poster_path, title }: CardMovieProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <Card className='h-52 sm:h-64 md:h-72 min-w-[150px] sm:min-w-[170px] md:min-w-[200px] rounded-md'>
      <CardContent
        className='h-full bg-cover bg-center rounded-md flex items-end p-2'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
        }}
      >
        <motion.p
          className='text-sm font-semibold bg-black/50 p-1 rounded hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {title ? title : 'No Title'}
        </motion.p>
      </CardContent>
    </Card>
  </motion.div>
)

export default CardMovie
