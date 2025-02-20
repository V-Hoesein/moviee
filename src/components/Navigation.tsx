import { PAGES } from '@/constans/pages'
import { Button } from './ui/button'
import { Link, useRouterState } from '@tanstack/react-router'

const Navigation = () => {
  const { location } = useRouterState()

  return (
    <nav className='flex w-full gap-x-2'>
      {PAGES.map((page) => (
        <Button
          key={page.name}
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
      ))}
    </nav>
  )
}

export default Navigation
