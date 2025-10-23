import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthCredentials, AuthResponse, authService } from '@services/authService';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD, LOGIN } from '@utils/routesUrl';
import { toast } from 'sonner';
import { getAuthErrorMessage } from '@utils/getAuthErrorMessage';

function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Common mutation configuration
  const authMutationConfig = {
    onSuccess: (data: AuthResponse) => {
      authService.setToken(data.token);
      queryClient.setQueryData(['auth'], { isAuthenticated: true });
      toast.success('Authentication successful');
      navigate(DASHBOARD);
    },
    onError: (error: unknown) => {
      const errorMessage = getAuthErrorMessage(error);
      console.error('Auth error:', error);
      toast.error(errorMessage);
    },
  };

  const registerMutation = useMutation<AuthResponse, Error, AuthCredentials>({
    mutationFn: authService.register,
    ...authMutationConfig,
    onSuccess: (data) => {
      authService.setToken(data.token);
      queryClient.setQueryData(['auth'], { isAuthenticated: true });
      toast.success('Account created successfully!');
      navigate(DASHBOARD);
    },
  });

  const loginMutation = useMutation<AuthResponse, Error, AuthCredentials>({
    mutationFn: authService.login,
    ...authMutationConfig,
    onSuccess: (data) => {
      authService.setToken(data.token);
      queryClient.setQueryData(['auth'], { isAuthenticated: true });
      toast.success('Welcome back!');
      navigate(DASHBOARD);
    },
  });

  // Enhanced logout function
  const logout = () => {
    authService.removeToken();
    queryClient.setQueryData(['auth'], { isAuthenticated: false });
    queryClient.clear();
    toast.success('Logged out successfully');
    navigate(LOGIN)
  };

  return { 
    registerMutation, 
    loginMutation,
    logout
  };
}

export default useAuth;