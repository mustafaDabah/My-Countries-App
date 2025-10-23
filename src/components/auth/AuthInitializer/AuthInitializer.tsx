import { useEffect } from 'react';
import { useAuthStore } from '@store/useAuthStore';

const AuthInitializer = () => {
  const { initialUser } = useAuthStore();

  useEffect(() => {
    initialUser();
  }, []); 

  return null;
};

export default AuthInitializer;