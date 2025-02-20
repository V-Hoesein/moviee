import ContentSection from '@/components/ContentSection'
import { MovieContainer } from '@/components/MovieContainer'
import { Button } from '@/components/ui/button'
import { getListContent } from '@/services/api'
import { GetListResponse } from '@/types/globals'
import { GetTvPopularProps } from '@/types/tv'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { MoveLeft, MoveRight } from 'lucide-react'
import { useState } from 'react'

const PopularTv = () => {
  const [popularTv, setPopularTv] = useState<GetTvPopularProps>({
    type: 'popular',
    page: 1,
  })

  const queryClient = useQueryClient()

  const { data, isFetching } = useQuery({
    initialData: { results: [], page: 1, total_pages: 1, total_results: 0 },
    queryKey: ['popularTv', popularTv],
    queryFn: () =>
      getListContent({
        type: 'tv',
        category: 'popular',
        page: popularTv.page,
      }),
    refetchOnWindowFocus: false,
  })

  const mutation = useMutation<GetListResponse, Error, number>({
    mutationFn: (newAPge) =>
      getListContent({ type: 'tv', category: 'popular', page: newAPge }),

    onSuccess: (newData, newPage) => {
      queryClient.setQueryData(['popularTv', newPage], newData)

      setPopularTv((prev) => ({
        ...prev,
        page: newPage,
      }))
    },
  })

  const handleNext = () => {
    if (!mutation.isPending) {
      mutation.mutate(popularTv.page + 1)
    }
  }

  const handlePrev = () => {
    if (popularTv.page > 1 && !mutation.isPending) {
      mutation.mutate(popularTv.page - 1)
    }
  }

  return (
    <>
      <ContentSection sectionName='popular tv'>
        <div className='flex overflow-x-auto items-center'>
          {data.page !== 1 && (
            <div className='px-4'>
              <Button
                className='rounded-full'
                variant='outline'
                size='icon'
                onClick={handlePrev}
                disabled={popularTv.page === 1}
              >
                <MoveLeft />
              </Button>
            </div>
          )}
          <MovieContainer data={data.results} isFetching={isFetching} />
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
    </>
  )
}

export default PopularTv
