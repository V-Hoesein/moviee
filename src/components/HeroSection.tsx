import { WavyBackground } from './ui/wavy-background'

const HeroSection = () => {
  return (
    <div id='hero' className={`h-[calc(100vh-20%)]`}>
      <WavyBackground className='max-w-4xl mx-auto pb-40' speed='slow'>
        <p className='text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center'>
          Welcome to movie app
        </p>
        <p className='text-lg md:text-lg mt-4 text-white font-normal inter-var text-center'>
          Find your favorite movie and watch it now
        </p>
      </WavyBackground>
    </div>
  )
}

export default HeroSection
