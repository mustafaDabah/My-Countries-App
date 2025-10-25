import { countriesService } from '@services/countriesService';
import { useQuery } from '@tanstack/react-query';

interface UseCountriesProps {
    search: string;
    region: string;
}

function useCountries({ search, region }: UseCountriesProps) {
    const countries = useQuery({
        queryKey: ['countries', { search, region }],
        queryFn: async () => {
            // CASE1: both search + region active
            if (search.trim() && region !== 'All') {
                const regionCountries = await countriesService.filterByRegion(region);
                const filtered = regionCountries.filter((c) =>
                    c.name.common.toLowerCase().includes(search.toLowerCase())
                );
                return filtered;
            }

            // CASE 2 search only
            if (search.trim()) {
                return countriesService.searchByName(search.trim());
            }

            // CASE 3: region only
            if (region !== 'All') {
                return countriesService.filterByRegion(region);
            }

            // DEFAULT (get all countries)
            return countriesService.getAllCountries();
        },
        staleTime: 1000 * 60 * 5,
    });

    return { countries };
}

export default useCountries;
