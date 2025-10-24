import { countriesService } from '@services/countriesService';
import { useQuery } from '@tanstack/react-query';

function useCountries() {
    const countries = useQuery({
        queryKey: ['countries'],
        queryFn: countriesService.getAllCountries,
    });

    return { countries }
}

export default useCountries