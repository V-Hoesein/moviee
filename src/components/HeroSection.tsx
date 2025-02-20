const HeroSection = () => {
  return (
    <div
      id='hero'
      className={`h-[calc(100vh-20%)] bg-zinc-900 flex flex-col
        justify-center items-center
        bg-background-hero bg-cover bg-center bg-no-repeat
        bg-fixed bg-[url(/public/bg.jpeg)]
        text-white brightness-50`}
    >
      <h1 className='text-4xl font-semibold'>Welcome to Movie App</h1>
      <p className='mt-2 text-gray-300 '>
        Find your favorite movie and watch it now
      </p>
    </div>
  )
}

export default HeroSection
