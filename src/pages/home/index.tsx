import HeroSection from '@/components/HeroSection'
import Trendings from './Trendings'
import PopularMovie from './PopularMovie'
import PopularTv from './PopularTv'

const Home = () => {
  return (
    <main className='h-full'>
      <HeroSection />

      <div className='flex flex-col space-y-5 sm:space-y-7 md:space-y-12 lg:space-y-16 p-5 rounded-t-3xl bg-zinc-950 h-full relative -translate-y-10'>
        <Trendings />
        <PopularMovie />
        <PopularTv />
      </div>
    </main>
  )
}

export default Home
