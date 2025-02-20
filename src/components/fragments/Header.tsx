import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Navigation from '../Navigation'
import SearchForm from '../SearchForm'

const Header = () => {
  return (
    <>
      {/* mobile */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-zinc-950'>
        <div className='flex justify-between items-center p-4'>
          <h1 className='capitalize font-bold text-2xl'>moviee</h1>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex justify-between items-center px-5 pb-2 gap-3'>
          <Navigation />
          <SearchForm />
        </div>
      </header>
    </>
  )
}

export default Header
