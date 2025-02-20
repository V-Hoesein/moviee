import ContentSection from '@/components/ContentSection'
import { MovieContainer } from '@/components/MovieContainer'
import { getListContent } from '@/services/api'
import { GetTvPopularProps } from '@/types/tv'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const PopularTv = () => {
  const [popularTv] = useState<GetTvPopularProps>({
    type: 'popular',
    page: 1,
  })

  const popularTvList = useQuery({
    initialData: { results: [], page: 1, total_pages: 1, total_results: 0 },
    queryKey: ['popularTv', popularTv],
    queryFn: () => getListContent({ type: 'tv', category: 'popular' }),
    refetchOnWindowFocus: false,
  })

  return (
    <>
      <ContentSection sectionName='popular tv'>
        <MovieContainer
          data={popularTvList.data.results}
          isFetching={popularTvList.isFetching}
        />
      </ContentSection>
    </>
  )
}

export default PopularTv
