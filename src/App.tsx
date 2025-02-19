import Layout from '@/components/fragments/Layout'
import { ThemeProvider } from './components/ThemeProvider'
import { ModeToggle } from './components/ModeToggle'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ModeToggle />
      </Layout>
    </ThemeProvider>
  )
}

export default App
