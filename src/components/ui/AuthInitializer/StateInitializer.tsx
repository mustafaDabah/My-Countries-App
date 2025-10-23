import { useLayoutEffect } from 'react';
import { useAuthStore } from '@store/useAuthStore';
import { useThemeStore } from '@store/useThemeStore';

const StateInitializer = () => {
  const initialUser = useAuthStore((state) => state.initialUser);
  const theme = useThemeStore((state) => state.theme);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');

    initialUser();
  }, [theme, initialUser]);

  return null;
};

export default StateInitializer;