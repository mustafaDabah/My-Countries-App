import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { DASHBOARD, LOGIN } from '@utils/routesUrl';
import { useAuthStore } from '@store/useAuthStore';

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: string;
  requireAuth?: boolean;
}

const ProtectedRoute = ({
  children,
  fallback = LOGIN,
  requireAuth = true
}: ProtectedRouteProps) => {
  const location = useLocation();
  const { isAuthenticated, isInitialized } = useAuthStore();

  if (!isInitialized) {
    return (
      <div className="min-h-screen z-100 absolute inset-0 bg-gradient-to-br from-background via-background to-muted/2 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (requireAuth && !isAuthenticated) {
    return <Navigate to={fallback} state={{ from: location }} replace />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to={DASHBOARD} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;