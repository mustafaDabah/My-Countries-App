import { useEffect, useState } from 'react';
import { CountryCardSkeleton } from '@components/countries/SkeletonCard/SkeletonCard';
import { countriesService } from '@services/countriesService';
import { useFavoritesStore } from '@store/useFavoritesStore';
import FavoriteCard from '@components/Favorites/FavoriteCard/FavoriteCard';
import Title from '@components/ui/Title/Title';

function Favorites() {
  const { favorites } = useFavoritesStore();
  const [favoriteCountries, setFavoriteCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (favorites.length === 0) {
        setFavoriteCountries([]);
        return;
      }
      setLoading(true);
      try {
        const data = await countriesService.getCountriesByCodes(favorites);
        setFavoriteCountries(data);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [favorites]);

  return (
    <div className="container ">
      <Title 
        title="Favorite Countries"
        description={'Discover your favorite countries.'}
    />

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <CountryCardSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && favoriteCountries.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {favoriteCountries.map((country) => (
            <FavoriteCard key={country.cca3} country={country} />
          ))}
        </div>
      )}

      {!loading && favoriteCountries.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg font-medium">
          You haven’t added any favorite countries yet.
        </p>
      )}
    </div>
  );
}

export default Favorites;
