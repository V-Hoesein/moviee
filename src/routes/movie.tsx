import Movie from '@/pages/movie'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movie')({
  component: Movie,
})
