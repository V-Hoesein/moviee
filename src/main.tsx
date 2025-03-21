import { createRoot } from 'react-dom/client'
import './index.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
})

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
