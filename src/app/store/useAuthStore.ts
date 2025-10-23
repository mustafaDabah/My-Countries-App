import { authService } from '@services/authService';
import { create } from 'zustand';

interface State {
  isAuthenticated: boolean | null;
  isInitialized: boolean;
}

interface Action {
  setIsAuthenticated: (isAuth: State['isAuthenticated']) => void;
  initialUser: () => Promise<void>;
  setInitialized: (initialized: boolean) => void;
}

export const useAuthStore = create<State & Action>((set) => ({
  isAuthenticated: null,
  isInitialized: false,
  
  setIsAuthenticated: (isAuthenticated: boolean | null) => {
    set({ isAuthenticated });
  },
  
  setInitialized: (isInitialized: boolean) => {
    set({ isInitialized });
  },
  
  initialUser: async () => {
    try {
      const isDefaultUser = authService.isAuthenticated();
      set({ 
        isAuthenticated: isDefaultUser,
        isInitialized: true 
      });
    } catch (error) {
      set({ 
        isAuthenticated: false,
        isInitialized: true 
      });
    }
  }
}));