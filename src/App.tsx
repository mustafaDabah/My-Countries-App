import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './app/routes/AppRoutes'
import Navbar from '@components/layout/Navbar/Navbar'
import { Toaster } from 'sonner'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position='top-right' />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
