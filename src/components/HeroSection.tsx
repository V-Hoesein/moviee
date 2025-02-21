import { WavyBackground } from './ui/wavy-background'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div
      id='hero'
      className='relative h-[calc(100vh-20%)] overflow-hidden w-full flex flex-col items-center justify-center px-6'
    >
      <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-0'></div>

      <WavyBackground className='max-w-full px-4 z-10' speed='slow'>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center drop-shadow-lg'
        >
          Welcome to Movie App
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className='text-lg md:text-xl lg:text-2xl mt-4 text-white font-normal inter-var text-center drop-shadow-md'
        >
          Find your favorite movie and watch it now
        </motion.p>
      </WavyBackground>
    </div>
  )
}

export default HeroSection
