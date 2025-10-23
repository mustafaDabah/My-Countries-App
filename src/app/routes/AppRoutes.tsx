import { Route, Routes } from 'react-router-dom';
import Login from '@pages/Auth/Login';
import { REGISTER, LOGIN, COUNTRY, DASHBOARD } from '@utils/routesUrl';
import Register from '@pages/Auth/Register';

function AppRoutes() {
      const isAuthenticated = true;

  return (
      <Routes>
      <Route path={LOGIN} element={<Login />} />
      <Route path={REGISTER} element={<Register />} />

      </Routes>
  )
}

export default AppRoutes