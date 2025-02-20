interface MovieProps {
  id: number
  title?: string
  name?: string
  poster_path: string
}

interface GetListResponse {
  page: number
  results: MovieProps[]
  total_pages: number
  total_results: number
}

interface GetContentProps {
  type: 'movie' | 'tv'
  category?: string
  languange?: string
  page?: number
}

export type { MovieProps, GetListResponse, GetContentProps }
