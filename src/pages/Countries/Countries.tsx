import CountriesList from '@components/countries/CountriesList/CountriesList'
import { SearchAndFilter } from '@components/countries/SearchAndFilter/SearchAndFilter'
import { CountryCardSkeleton } from '@components/countries/SkeletonCard/SkeletonCard'
import Title from '@components/countries/Title/Title'
import useCountries from '@hooks/useCountries'
import ProtectedRoute from '@routes/ProtectedRoute'
import React from 'react'

function Countries() {
  const { countries } = useCountries();

  console.log(countries.data)

  return (
    <div className='container'>
        <Title />
        <SearchAndFilter />
        
        {countries.isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <CountryCardSkeleton key={i} />
            ))}
          </div>
        )}

        {countries.isSuccess && (
          <CountriesList countries={countries.data} /> 
        )}
    </div>
  )
}

export default Countries