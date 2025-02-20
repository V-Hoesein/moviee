import ContentSection from '@/components/ContentSection'
import { MovieContainer } from '@/components/MovieContainer'
import { getListContent } from '@/services/api'
import { GetPopularMoviesProps } from '@/types/movie'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const PopularMovie = () => {
  const [popularMovie] = useState<GetPopularMoviesProps>({
    language: 'en-US',
    page: 1,
  })

  const popularMovieList = useQuery({
    initialData: { results: [], page: 1, total_pages: 1, total_results: 0 },
    queryKey: ['popularMovie', popularMovie],
    queryFn: () => getListContent({ type: 'movie', category: 'popular' }),
    refetchOnWindowFocus: false,
  })

  return (
    <>
      <ContentSection sectionName='popular movie'>
        <MovieContainer
          data={popularMovieList.data.results}
          isFetching={popularMovieList.isFetching}
        />
      </ContentSection>
    </>
  )
}

export default PopularMovie
