import { Moon, Sun } from 'lucide-react';
import Button from '../Button/Button';
import { useThemeStore } from '@store/useThemeStore';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label="Toggle theme"
      size='sm'
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle