import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[];
  isFavorite: (code: string) => boolean;
  toggleFavorite: (code: string) => void;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      isFavorite: (code) => get().favorites.includes(code),

      toggleFavorite: (code) =>
        set((state) => {
          const exists = state.favorites.includes(code);
          return {
            favorites: exists
              ? state.favorites.filter((c) => c !== code)
              : [...state.favorites, code],
          };
        }),

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: 'favorite_countries_v1', // localStorage key
      version: 1,
    }
  )
);
