import instance from '@/services/instance'
import { GetContentProps, GetListResponse } from '@/types/globals'
import {
  GetNowPlayingMoviesResponse,
  GetTrendingsProps,
  SearchMovieProps,
} from '@/types/movie'

/* eslint-disable */
const buildQuery = (params) => {
  return Object.entries(params)
    .filter(
      ([_, value]) => value !== '' && value !== undefined && value !== null
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
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
  languange = 'en-US',
  type,
  category,
}: GetContentProps): Promise<GetListResponse | GetNowPlayingMoviesResponse> =>
  await instance.get(`/${type}/${category}?language=${languange}&page=${page}`)

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
