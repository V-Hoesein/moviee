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

export type {
  GetTrendingsProps,
  MovieContainerProps,
  GetPopularMoviesProps,
  GetNowPlayingMoviesResponse,
}
