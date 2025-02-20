import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import Navigation from '../Navigation'

const Header = () => {
  const navigate = useNavigate()

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
        <div className='flex justify-between items-center px-5 pb-2'>
          <Navigation />
          <Button
            className='rounded-full'
            variant='outline'
            size='icon'
            onClick={() => navigate({ to: '/search' })}
          >
            <Search />
          </Button>
        </div>
      </header>
    </>
  )
}

export default Header
