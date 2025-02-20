import { PAGES } from '@/constans/pages'
import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'

const Navigation = () => {
  return (
    <nav className='flex gap-x-2'>
      {PAGES.map((page) => (
        <Button asChild variant='outline' size='sm' className='rounded-full'>
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
