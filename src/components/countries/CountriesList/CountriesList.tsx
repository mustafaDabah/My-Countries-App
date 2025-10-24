import React from 'react'
import { CountryCard } from '../CountryCard/CountryCard'
import { VList } from 'virtua'

interface CountriesListProps {
    countries: Countries[]
}

function CountriesList({ countries }: CountriesListProps) {
    return (
        <VList
            className='overflow-hidden w-full v-list py-1 scrollbar-custom '
            style={{ height: 490 }}
            count={countries.length}
        >
            
            {(index: number) => {
                const country = countries[index];
                return <CountryCard country={country} key={index} />
            }}
        </VList>
    )
}

export default CountriesList