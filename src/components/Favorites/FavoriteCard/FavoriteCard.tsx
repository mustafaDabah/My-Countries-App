import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavoritesStore } from '@store/useFavoritesStore';

interface FavoriteCardProps {
  country: Country;
}

const FavoriteCard = ({ country }: FavoriteCardProps) => {
  const isFavorite = useFavoritesStore((s) => s.isFavorite(country?.cca3));
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition overflow-hidden relative">
      <button
        onClick={() => toggleFavorite(country.cca3)}
        className="absolute top-3 right-3 p-1 rounded-full bg-white dark:bg-gray-700 shadow hover:scale-105 transition"
      >
        <Heart
          size={18}
          className={isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}
        />
      </button>

      <Link to={`/country/${country.cca3}`}>
        <img
          src={country.flags.svg || country.flags.png}
          alt={`${country.name.common} flag`}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg mb-2">{country.name.common}</h2>
          <p className="text-sm text-gray-500">Region: {country.region}</p>
          <p className="text-sm text-gray-500">
            Population: {country.population.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FavoriteCard;
