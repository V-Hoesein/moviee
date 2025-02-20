import instance from '@/services/instance'
import { GetListResponse } from '@/types/globals'
import { GetPopularMoviesProps, GetTrendingsProps } from '@/types/movie'
import { GetTvPopularProps } from '@/types/tv'

const getTrendings = async ({
  type = 'all',
  category = 'day',
}: GetTrendingsProps): Promise<GetListResponse> =>
  await instance.get(`/trending/${type}/${category}?language=en-US`)

const getPopularMovie = async ({
  language,
  page = 1,
}: GetPopularMoviesProps): Promise<GetListResponse> =>
  await instance.get(`/movie/popular?language=${language}&page=${page}`)

const getPopularTv = async ({
  type,
  page = 1,
}: GetTvPopularProps): Promise<GetListResponse> =>
  await instance.get(`/tv/${type}?language=en-US&page=${page}`)

export { getTrendings, getPopularTv, getPopularMovie }
