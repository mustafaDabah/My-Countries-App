import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCountry from '@hooks/useCountry';
import { Heart, ArrowLeft } from 'lucide-react';
import { CountryDetailSkeleton } from '@components/countries/SkeletonCard/SkeletonCard';
import BorderCountries from '../BorderCountries/BorderCountries';
import { formatCurrencies } from '@utils/formatCurrencies';
import { formatLanguages } from '@utils/formatLanguages';
import { useFavoritesStore } from '@store/useFavoritesStore';

const CountryDetails: React.FC = () => {
    const navigate = useNavigate();
    const { code } = useParams<{ code: string }>();
    const { countryQuery } = useCountry(code);
    const country = countryQuery.data! as Country;
    const isFavorite = useFavoritesStore((s) => s.isFavorite(country?.cca3));
    const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

    if (countryQuery.isLoading) return <CountryDetailSkeleton />;
    if (countryQuery.isError) return <div className="container py-8 text-red-500">Failed to load country.</div>;

    return (
        <div className="container py-8">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 transition"
                    >
                        <ArrowLeft size={16} />
                        Back
                    </button>
                    <h1 className="text-2xl font-semibold">{country.name.common}</h1>
                </div>

                <button
                    onClick={() => toggleFavorite(country.cca3)}
                    aria-pressed={isFavorite}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:scale-105 transition"
                >
                    <Heart size={16} className={isFavorite ? 'text-red-500' : 'text-gray-500'} />
                    {isFavorite ? 'Unfavorite' : 'Favorite'}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <img
                        src={country.flags.svg || country.flags.png}
                        alt={`${country.name.common} flag`}
                        className="w-full max-h-96 object-cover rounded-md shadow"
                    />
                </div>

                <div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                        <h2 className="text-xl font-semibold mb-4">{country.name.common}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">


                            <div>
                                <p className="text-sm text-gray-500">Population</p>
                                <p className="font-medium">{country.population.toLocaleString()}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Region</p>
                                <p className="font-medium">{country.region}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Subregion</p>
                                <p className="font-medium">{country.subregion ?? '—'}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Capital</p>
                                <p className="font-medium">{(country.capital && country.capital.join(', ')) || '—'}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Top level domain</p>
                                <p className="font-medium">{(country.tld && country.tld.join(', ')) || '—'}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Currencies</p>
                                <p className="font-medium">{formatCurrencies(country.currencies)}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Cca3</p>
                                <p className="font-medium">{country.cca3}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Languages</p>
                                <p className="font-medium">{formatLanguages(country.languages)}</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-sm text-gray-500 mb-2">Border Countries</p>
                            <BorderCountries codes={country.borders} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;
