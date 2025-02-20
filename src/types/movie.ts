import { GetListResponse } from '@/types/globals'
import { MovieProps } from './globals'

interface GetTrendingsProps {
  type: 'all' | 'movie' | 'tv'
  category: 'day' | 'week'
}

interface MovieContainerProps {
  data: MovieProps[]
  isFetching: boolean
}

interface GetPopularMoviesProps {
  language: string
  page: number
}

interface GetNowPlayingMoviesResponse extends GetListResponse {
  dates?: {
    maximum: string
    minimum: string
  }
}

interface SearchMovieProps {
  query: string
  include_adult?: boolean
  language?: string
  primary_release_year?: string
  page?: number
  region?: string
  year?: string
}

export type {
  GetTrendingsProps,
  MovieContainerProps,
  GetPopularMoviesProps,
  GetNowPlayingMoviesResponse,
  SearchMovieProps,
}
