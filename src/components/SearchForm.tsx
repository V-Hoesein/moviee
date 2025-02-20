import { useRouterState } from '@tanstack/react-router'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

const SearchForm = () => {
  const { location } = useRouterState()

  if (location.pathname === '/search') {
    return (
      <div className='flex flex-1 items-center gap-x-2 border border-zinc-800 rounded-full px-2'>
        <Search className='text-gray-400' />
        <Input
          className='w-full bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-transparent placeholder:text-gray-400'
          placeholder='Search'
          type='search'
        />
      </div>
    )
  }

  return null
}

export default SearchForm
