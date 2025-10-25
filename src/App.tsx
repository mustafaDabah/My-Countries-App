import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './app/routes/AppRoutes'
import Navbar from '@components/layout/Navbar/Navbar'
import { Toaster } from 'sonner'
import StateInitializer from '@components/ui/AuthInitializer/StateInitializer'
import { ScrollToTop } from '@components/layout/ScrollToTop/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <StateInitializer />
      <Navbar />
      <Toaster position='top-right' duration={800} />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
