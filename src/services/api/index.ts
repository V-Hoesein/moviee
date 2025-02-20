import instance from '@/services/instance'
import { GetContentProps, GetListResponse } from '@/types/globals'
import { GetNowPlayingMoviesResponse, GetTrendingsProps } from '@/types/movie'

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

export { getTrendings, getListContent }
