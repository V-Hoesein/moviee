import ContentSection from '@/components/ContentSection'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { searchMovie } from '@/services/api'
import SearchForm from '@/components/SearchForm'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import MovieContainer from '@/components/MovieContainer'
import { GetListResponse } from '@/types/globals'
import { Button } from '@/components/ui/button'
import { MoveLeft, MoveRight } from 'lucide-react'
import { SearchMovieProps } from '@/types/movie'
import { motion } from 'framer-motion'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [value] = useDebounce(searchQuery, 1000)
  const [page, setPage] = useState<number>(1)

  const queryClient = useQueryClient()

  const { data: searchResults, isFetching } = useQuery({
    initialData: { results: [], page: 1, total_pages: 1, total_results: 0 },
    queryKey: ['searchResults', value, page],
    queryFn: () => searchMovie({ query: value, page }),
  })

  const searchMutation = useMutation<GetListResponse, Error, SearchMovieProps>({
    mutationFn: ({ query, page }) => searchMovie({ query, page }),
    onSuccess: (newdata) => {
      queryClient.setQueryData(['searchResults', value, page], newdata)
    },
  })

  const handleNext = () => {
    if (!searchMutation.isPending && page < searchResults.total_pages) {
      setPage((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (!searchMutation.isPending && page > 1) {
      setPage((prev) => prev - 1)
    }
  }

  useEffect(() => {
    setPage(1)
  }, [value])

  return (
    <main className='bg-zinc-900 pt-[150px] h-full px-5'>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <SearchForm
          className='mx-auto md:max-w-5xl'
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </motion.div>

      {!!value && (
        <ContentSection
          sectionName='results'
          className='mt-5 mx-auto md:max-w-5xl'
        >
          <div className='flex overflow-x-auto items-center'>
            {page > 1 && (
              <div className='px-4'>
                <Button
                  className='rounded-full'
                  variant='outline'
                  size='icon'
                  onClick={handlePrev}
                  disabled={page === 1}
                >
                  <MoveLeft />
                </Button>
              </div>
            )}

            <MovieContainer
              data={searchResults.results}
              isFetching={isFetching}
            />
            {page < searchResults.total_pages && (
              <div className='px-4'>
                <Button
                  className='rounded-full'
                  variant='outline'
                  size='icon'
                  onClick={handleNext}
                >
                  <MoveRight />
                </Button>
              </div>
            )}
          </div>
        </ContentSection>
      )}
    </main>
  )
}

export default Search
