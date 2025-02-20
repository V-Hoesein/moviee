import { MovieProps } from './globals'

type GetTrendingsProps = {
  type: 'all' | 'movie' | 'tv'
  category: 'day' | 'week'
}

type MovieContainerProps = {
  data: MovieProps[]
  isFetching: boolean
}

type GetPopularMoviesProps = {
  language: string
  page: number
}

export type { GetTrendingsProps, MovieContainerProps, GetPopularMoviesProps }
