import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Navigation from '../Navigation'

const Header = () => {
  return (
    <>
      {/* mobile */}
      <header
        className='fixed top-0 left-0right-0 z-50 bg-gradient-to-b
         from-zinc-950 via-zinc-950/70 to-zinc-950/20 shadow-sm
          backdrop-blur-xs p-5 w-full space-y-5'
      >
        <div className='flex justify-between items-center'>
          <h1 className='capitalize font-bold text-2xl'>moviee</h1>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex justify-between items-center pb-2 gap-3'>
          <Navigation />
        </div>
      </header>
    </>
  )
}

export default Header
