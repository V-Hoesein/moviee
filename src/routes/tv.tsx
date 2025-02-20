import Tv from '@/pages/tv'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tv')({
  component: Tv,
})
