import useCountry from '@hooks/useCountry'
import { Link } from 'react-router-dom'

function BorderCountries({ codes }: { codes?: string[] }) {
    const { borderCountriesQuery } = useCountry('', codes)
    const enabled = Array.isArray(codes) && codes.length > 0;
    
    if (borderCountriesQuery.isLoading) return <div className="flex gap-2 flex-wrap"><span className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">Loading…</span></div>;
    if (borderCountriesQuery.isError) return <div className="text-red-500">Failed to load borders</div>;
    if (!enabled) return <span className="text-sm text-gray-500">No bordering countries</span>;

    return (
        <div className="flex gap-2 flex-wrap">
            {borderCountriesQuery?.data?.map((c) => (
                <Link
                    key={c.cca3}
                    to={`/country/${c.cca3}`}
                    className="px-3 py-1 rounded shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition text-sm bg-white dark:bg-gray-800"
                >
                    {c.name.common}
                </Link>
            ))}
        </div>
    )
}

export default BorderCountries