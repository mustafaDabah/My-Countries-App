import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    additionalStyle?: string;
    isLoading?: boolean
    disabled?: boolean
}

const Button = ({ children, isLoading, variant = 'primary', additionalStyle, disabled, ...rest }: ButtonProps) => {
    const baseClass = `w-full p-4 font-semibold rounded-[16px] text-[16px] focus:outline-none transition-all ease-in duration-150`;
    let bgColor = '';
    let textColor = '';

    switch (variant) {
        case 'primary':
            bgColor = 'bg-primary';
            textColor = 'text-white';
            break; 
        case 'secondary':
            bgColor = 'bg-accent  ';
            textColor = 'text-white';
            break;
        case 'ghost':
            bgColor = 'hover:bg-accent hover:text-accent-foreground ';
            textColor = 'text-gray-700';
            break;
        case 'outline':
            bgColor = 'bg-transparent border-solid border-2 border-gray-400  border-primary';
            textColor = 'text-gray-600 ';
            break;
    }

    return (
        <button 
            disabled={isLoading || disabled}
            className={`${baseClass} ${bgColor} ${additionalStyle} ${textColor}`}
            {...rest}
        >
            {isLoading ? (
                <span className="inline-flex items-center justify-center">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                </span>
            ) : (
                <div className='flex items-center gap-3 justify-center'>
                    {children}
                </div>
            )}
        </button>
    );
};

export default Button;