import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Navigation from '../Navigation'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div
      className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-zinc-950/20 shadow-sm backdrop-blur-md p-5 sm:p-10 w-full'
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <header className='mx-auto md:max-w-5xl space-y-5'>
        <div className='flex justify-between items-center'>
          <h1 className='capitalize font-bold text-2xl'>moviee</h1>
          <div className='hidden sm:flex justify-between items-center gap-3'>
            <Navigation />
          </div>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex sm:hidden justify-between items-center pb-2 gap-3'>
          <Navigation />
        </div>
      </header>
    </motion.div>
  )
}

export default Header
