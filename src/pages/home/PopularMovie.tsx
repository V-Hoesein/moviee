import ContentSection from '@/components/ContentSection'
import { MovieContainer } from '@/components/MovieContainer'
import { Button } from '@/components/ui/button'
import { getListContent } from '@/services/api'
import { GetListResponse } from '@/types/globals'
import { GetPopularMoviesProps } from '@/types/movie'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { MoveLeft, MoveRight } from 'lucide-react'
import { useState } from 'react'

const PopularMovie = () => {
  const [popularMovie, setPopularMovie] = useState<GetPopularMoviesProps>({
    language: 'en-US',
    page: 1,
  })

  const queryClient = useQueryClient()

  const { data, isFetching } = useQuery({
    initialData: { results: [], page: 1, total_pages: 1, total_results: 0 },
    queryKey: ['popularMovie', popularMovie],
    queryFn: () =>
      getListContent({
        type: 'movie',
        category: 'popular',
        page: popularMovie.page,
      }),
    refetchOnWindowFocus: false,
  })

  const mutation = useMutation<GetListResponse, Error, number>({
    mutationFn: (newPage) =>
      getListContent({ type: 'movie', category: 'popular', page: newPage }),

    onSuccess: (newData, newPage) => {
      queryClient.setQueryData(['popularMovie', newPage], newData)

      setPopularMovie((prev) => ({
        ...prev,
        page: newPage,
      }))
    },
  })

  const handleNext = () => {
    if (!mutation.isPending) {
      mutation.mutate(popularMovie.page + 1)
    }
  }

  const handlePrev = () => {
    if (popularMovie.page > 1 && !mutation.isPending) {
      mutation.mutate(popularMovie.page - 1)
    }
  }

  console.log(data)

  return (
    <ContentSection sectionName='Popular Movies'>
      <div className='flex overflow-x-auto items-center'>
        {data.page !== 1 && (
          <div className='px-4'>
            <Button
              className='rounded-full'
              variant='outline'
              size='icon'
              onClick={handlePrev}
              disabled={popularMovie.page === 1}
            >
              <MoveLeft />
            </Button>
          </div>
        )}
        <MovieContainer
          data={data.results}
          isFetching={isFetching || mutation.isPending}
        />
        {data.page !== data.total_pages && (
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
  )
}

export default PopularMovie
