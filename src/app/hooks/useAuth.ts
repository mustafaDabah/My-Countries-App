import { useMutation } from '@tanstack/react-query';
import { AuthCredentials, AuthResponse, authService } from '@services/authService';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD, LOGIN } from '@utils/routesUrl';
import { toast } from 'sonner';
import { getAuthErrorMessage } from '@utils/getAuthErrorMessage';
import { useAuthStore } from '@store/useAuthStore';
import { useFavoritesStore } from '@store/useFavoritesStore';

function useAuth() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthStore();
  const { clearFavorites } = useFavoritesStore();

  const authMutationConfig = {
    onSuccess: (data: AuthResponse) => {
      authService.setToken(data.token);
      setIsAuthenticated(true);
      toast.success('Authentication successful');
      navigate(DASHBOARD, { replace: true });
    },
    onError: (error: unknown) => {
      setIsAuthenticated(false);
      const errorMessage = getAuthErrorMessage(error);
      console.error('Auth error:', error);
      toast.error(errorMessage);
    },
  };

  const registerMutation = useMutation<AuthResponse, Error, AuthCredentials>({
    mutationFn: authService.register,
    ...authMutationConfig,
  });

  const loginMutation = useMutation<AuthResponse, Error, AuthCredentials>({
    mutationFn: authService.login,
    ...authMutationConfig,
  });

  const logout = () => {
    authService.removeToken();
    setIsAuthenticated(false);
    clearFavorites();
    toast.success('Logged out successfully');
    navigate(LOGIN, { replace: true });
  };

  return { 
    registerMutation, 
    loginMutation,
    logout,
  };
}

export default useAuth;