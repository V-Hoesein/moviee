type MovieProps = {
  id: number
  title?: string
  name?: string
  poster_path: string
}

type GetListResponse = {
  page: number
  results: MovieProps[]
  total_pages: number
  total_results: number
}

export type { MovieProps, GetListResponse }
