import { useState } from 'react'
import CountriesList from '@components/countries/CountriesList/CountriesList'
import { SearchAndFilter } from '@components/countries/SearchAndFilter/SearchAndFilter'
import { CountryCardSkeleton } from '@components/countries/SkeletonCard/SkeletonCard'
import Title from '@components/countries/Title/Title'
import useCountries from '@hooks/useCountries'
import { useDebounce } from '@hooks/useDebounce'

function Countries() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All');
  const debouncedSearch = useDebounce(search, 500);

  const { countries } = useCountries({ search: debouncedSearch, region });

  return (
    <div className='container'>
      <Title />
      <SearchAndFilter
        search={search}
        region={region}
        onSearchChange={setSearch}
        onRegionChange={setRegion}
      />

      {countries.isLoading && countries.isFetching && (
        <div className="grid grid-cols-1 ">
          {Array.from({ length: 8 }).map((_, i) => (
            <CountryCardSkeleton key={i} />
          ))}
        </div>
      )}

      {countries.isSuccess && countries.data.length > 0 && (
        <CountriesList countries={countries.data} />
      )}

      {countries.isSuccess && countries.data.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg font-medium capitalize">
          No countries found for "{search || 'all'}" in {region}.
        </p>
      )}

      {countries.isError && (
        <p className="text-center text-red-500 mt-4 capitalize">
          Something went wrong while fetching countries.
        </p>
      )}
    </div>
  )
}

export default Countries