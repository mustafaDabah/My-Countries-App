import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './app/routes/AppRoutes'
import Navbar from '@components/layout/Navbar/Navbar'
import { Toaster } from 'sonner'
import StateInitializer from '@components/ui/AuthInitializer/StateInitializer'

function App() {

  return (
    <BrowserRouter>
      <StateInitializer />
      <Navbar />
      <Toaster position='top-right' duration={600} />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
