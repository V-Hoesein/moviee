import { PAGES } from '@/constans/pages'
import { Button } from './ui/button'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import { ArrowLeft, Search } from 'lucide-react'

const Navigation = () => {
  const { location } = useRouterState()
  const navigate = useNavigate()

  if (location.pathname === '/search') {
    return (
      <Button
        className='rounded-full'
        variant='outline'
        onClick={() => navigate({ to: '/' })}
        size='icon'
      >
        <ArrowLeft />
      </Button>
    )
  }
  return (
    <nav className='flex w-full gap-x-2'>
      {PAGES.map((page) =>
        page.name === 'search' ? (
          <Button
            className='rounded-full ml-auto'
            variant='outline'
            size='icon'
            onClick={() => navigate({ to: '/search' })}
          >
            <Search />
          </Button>
        ) : (
          <Button
            asChild
            variant={`${location.pathname === page.path ? 'default' : 'outline'}`}
            size='sm'
            className='rounded-full'
          >
            <Link
              key={page.name}
              to={page.path}
              className='flex justify-between items-center'
            >
              <span className='capitalize'>{page.name}</span>
            </Link>
          </Button>
        )
      )}
    </nav>
  )
}

export default Navigation
