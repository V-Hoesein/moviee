import instance from '@/services/instance'
import { GetContentProps, GetListResponse } from '@/types/globals'
import {
  GetNowPlayingMoviesResponse,
  GetTrendingsProps,
  SearchMovieProps,
} from '@/types/movie'

const buildQuery = (
  params: Record<string, string | number | boolean | undefined | null>
): string => {
  return Object.entries(params)
    .filter(
      ([, value]) => value !== '' && value !== undefined && value !== null
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join('&')
}

const getTrendings = async ({
  type = 'all',
  category = 'day',
}: GetTrendingsProps): Promise<GetListResponse> =>
  await instance.get(`/trending/${type}/${category}?language=en-US`)

const getListContent = async ({
  page = 1,
  language = 'en-US',
  type,
  category,
}: GetContentProps): Promise<GetListResponse | GetNowPlayingMoviesResponse> =>
  await instance.get(`/${type}/${category}?language=${language}&page=${page}`)

const searchMovie = async ({
  query,
  page = 1,
  include_adult = false,
  language = 'en-US',
  primary_release_year = '',
  region = '',
  year = '',
}: SearchMovieProps): Promise<GetListResponse> => {
  const queryParams = buildQuery({
    query,
    page,
    include_adult,
    language,
    primary_release_year,
    region,
    year,
  })

  return await instance.get(`/search/movie?${queryParams}`)
}

export { getTrendings, getListContent, searchMovie }
