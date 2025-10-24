import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '@pages/Auth/Login';
import Register from '@pages/Auth/Register';
import { LOGIN, REGISTER, COUNTRY, DASHBOARD } from '@utils/routesUrl';
import Dashboard from '@pages/Countries/Countries';
import NotFound from '@pages/NotFound/NotFound';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes() {
  return (
    <div>      
      <Routes>
        {/* Public routes - redirect to dashboard if authenticated */}
        <Route 
          path={LOGIN} 
          element={
            <ProtectedRoute requireAuth={false}>
              <Login />
            </ProtectedRoute>
          } 
        />
        <Route 
          path={REGISTER} 
          element={
            <ProtectedRoute requireAuth={false}>
              <Register />
            </ProtectedRoute>
          } 
        />
        
        {/* Protected routes */}
        <Route 
          path={DASHBOARD} 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to={DASHBOARD} replace />} />

        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;