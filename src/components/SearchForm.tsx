import { cn } from '@/lib/utils'
import { useRouterState } from '@tanstack/react-router'
import { Search } from 'lucide-react'

export interface SearchFormProps {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  className?: string
}

const SearchForm = ({
  searchQuery,
  setSearchQuery,
  className,
}: SearchFormProps) => {
  const { location } = useRouterState()

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  if (location.pathname === '/search') {
    return (
      <div
        className={`${cn('flex flex-1 items-center gap-x-2 border border-zinc-800 rounded-full px-5 py-3', className)}`}
      >
        <Search className='text-gray-400' />
        <input
          className='w-full bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-transparent placeholder:text-gray-400'
          placeholder='Search'
          type='search'
          onChange={searchHandler}
          value={searchQuery}
        />
      </div>
    )
  }

  return null
}

export default SearchForm
