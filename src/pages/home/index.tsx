import { getListContent, getTrendings } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { MovieContainer } from '@/components/MovieContainer'
import { GetPopularMoviesProps } from '@/types/movie'
import { GetTvPopularProps } from '@/types/tv'
import ContentSection from '@/components/ContentSection'
import HeroSection from '@/components/HeroSection'

const Home = () => {
  const [popularTv] = useState<GetTvPopularProps>({
    type: 'popular',
    page: 1,
  })

  const [popularMovie] = useState<GetPopularMoviesProps>({
    language: 'en-US',
    page: 1,
  })

  const trendings = useQuery({
    initialData: { results: [], page: 1, total_pages: 1, total_results: 0 },
    queryKey: ['trendings'],
    queryFn: () => getTrendings({ category: 'day', type: 'all' }),
    refetchOnWindowFocus: false,
  })

  const popularTvList = useQuery({
    initialData: { results: [], page: 1, total_pages: 1, total_results: 0 },
    queryKey: ['popularTv', popularTv],
    queryFn: () => getListContent({ type: 'tv', category: 'popular' }),
    refetchOnWindowFocus: false,
  })

  const popularMovieList = useQuery({
    initialData: { results: [], page: 1, total_pages: 1, total_results: 0 },
    queryKey: ['popularMovie', popularMovie],
    queryFn: () => getListContent({ type: 'movie', category: 'popular' }),
    refetchOnWindowFocus: false,
  })

  return (
    <main className='h-full'>
      <HeroSection />

      <div className='flex flex-col space-y-5 p-5 rounded-t-3xl bg-zinc-950 h-full relative -translate-y-10'>
        <ContentSection sectionName='trendings'>
          <MovieContainer
            data={trendings.data.results}
            isFetching={trendings.isFetching}
          />
        </ContentSection>

        <ContentSection sectionName='popular movie'>
          <MovieContainer
            data={popularMovieList.data.results}
            isFetching={popularMovieList.isFetching}
          />
        </ContentSection>

        <ContentSection sectionName='popular tv'>
          <MovieContainer
            data={popularTvList.data.results}
            isFetching={popularTvList.isFetching}
          />
        </ContentSection>
      </div>
    </main>
  )
}

export default Home
