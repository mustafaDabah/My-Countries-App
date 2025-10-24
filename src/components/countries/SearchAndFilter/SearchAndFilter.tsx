import { Input } from '@components/ui/Input/Input';
import { Search } from 'lucide-react';

interface SearchAndFilterProps {
  search: string;
  region: string;
  onSearchChange: (value: string) => void;
  onRegionChange: (value: string) => void;
}

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export const SearchAndFilter = ({
  search,
  region,
  onSearchChange,
  onRegionChange,
}: SearchAndFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <select
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 dark:bg-gray-800 dark:text-white"
      >
        {regions.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
