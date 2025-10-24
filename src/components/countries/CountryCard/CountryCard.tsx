import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface CountryCardProps {
    country: Country
}

export const CountryCard = ({ country }: CountryCardProps) => {
    const nativeLanguageCode = Object.keys(country.name.nativeName)[0] as keyof typeof country.name.nativeName | undefined;
    const nativeName = nativeLanguageCode ? country.name.nativeName[nativeLanguageCode] : undefined;

    return (
        <Link
            to={`/country/${country.name.common.toLowerCase()}`}
            className="group block p-6 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 hover:border-primary/30 hover:bg-gradient-to-br hover:from-card hover:to-muted/20 mb-2"
        >
            <div className="space-y-4">
                {/* Country Flag Placeholder & Icon */}
                <div className="flex items-center justify-between my-5">
                    <img src={country.flags.svg} alt="flag" className='w-6' />
                    <MapPin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Country Names */}
                <div className="space-y-3">
                    {/* Common Name */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent line-clamp-1 group-hover:text-accent transition-colors">
                        {country.name.common}
                    </h3>

                    {/* Official Name */}
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {country.name.official}
                    </p>

                    {/* Native Name */}
                    {nativeName && (
                        <div className="pt-2 border-t border-border">
                            <div className="flex items-start gap-2">
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                    {nativeLanguageCode}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-card-foreground">
                                        {nativeName.common}
                                    </p>
                                    <p className="text-xs text-muted-foreground line-clamp-1">
                                        {nativeName.official}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Hover Indicator */}
                <div className="pt-2">
                    <div className="w-0 group-hover:w-full h-0.5 bg-accent transition-all duration-300"></div>
                </div>
            </div>
        </Link>
    );
};