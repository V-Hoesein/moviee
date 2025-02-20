import ContentSection from '@/components/ContentSection'
import MovieContainer from '@/components/MovieContainer'
import { getTrendings } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

const Trendings = () => {
  const trendings = useQuery({
    initialData: { results: [], page: 1, total_pages: 1, total_results: 0 },
    queryKey: ['trendings'],
    queryFn: () => getTrendings({ category: 'day', type: 'all' }),
    refetchOnWindowFocus: false,
  })
  return (
    <>
      <ContentSection sectionName='trendings'>
        <MovieContainer
          data={trendings.data.results}
          isFetching={trendings.isFetching}
        />
      </ContentSection>
    </>
  )
}

export default Trendings
