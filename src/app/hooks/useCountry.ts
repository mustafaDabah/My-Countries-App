import { useQuery } from '@tanstack/react-query';
import { countriesService } from '@services/countriesService';

export default function useCountry(code?: string, borderCodes?: string[]) {
    const countryQuery = useQuery({
        queryKey: ['country', code],
        queryFn: async () => {
            if (!code) throw new Error('Country code is required');
            return countriesService.getCountryByCode(code);
        },
        enabled: !!code,
        staleTime: 1000 * 60 * 10,
    });

    const borderCountriesQuery = useQuery({
        queryKey: ['borderCountries', borderCodes?.join(',')],
        queryFn: () => countriesService.getCountriesByCodes(borderCodes || []),
        enabled: Array.isArray(borderCodes) && borderCodes.length > 0,
        staleTime: 1000 * 60 * 60,
    });

    return { countryQuery, borderCountriesQuery };
}
