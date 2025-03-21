import { createRootRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/fragments/Header'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const queryClient = new QueryClient()

const RootComponent = () => (
  <>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </ThemeProvider>
    {/* <TanStackRouterDevtools /> */}
  </>
)

export const Route = createRootRoute({
  component: RootComponent,
})
