import { ReactNode } from 'react';
import ProtectedRoute from './ProtectedRoute';

interface PublicRouteProps {
  children: ReactNode;
  fallback?: string;
}

const PublicRoute = ({ children, fallback }: PublicRouteProps) => {
  return (
    <ProtectedRoute requireAuth={false} fallback={fallback}>
      {children}
    </ProtectedRoute>
  );
};

export default PublicRoute;