import Button from '@components/ui/Button/Button'
import ThemeToggle from '@components/ui/ThemeToggle/ThemeToggle';
import { Heart, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '@hooks/useAuth';
import { useAuthStore } from '@store/useAuthStore';
import { useFavoritesStore } from '@store/useFavoritesStore';

function Navbar() {
    const { isAuthenticated } = useAuthStore();
    const { favorites } = useFavoritesStore();
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 z-20 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
            <div className="container mx-auto flex h-16 items-center justify-between ">
                <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center gap-2 transition-opacity hover:opacity-80">
                    <img className='w-2/3' src={'/assets/images/newMetrics.svg'} alt="new metrics logo" />
                </Link>

                <div className="flex items-center justify-center gap-2">
                    {isAuthenticated && (
                        <>
                            <Button
                                variant="ghost"
                                onClick={() => navigate('/favorites')}
                                size='sm'
                                className='relative'
                            >
                                <Heart size={18} />
                                <span className="text-sm font-medium">Favorites</span>
                                {favorites.length > 0 && (
                                    <span className="absolute top-1 left-1 text-[10px] bg-red-500 text-white rounded-full w-4 flex justify-center items-center h-4">
                                        {favorites.length}
                                    </span>
                                )}
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={logout}
                                size='sm'
                            >
                                <LogOut className="h-4 w-4" />
                                <span className="hidden sm:inline">Logout</span>
                            </Button>
                        </>
                    )}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navbar