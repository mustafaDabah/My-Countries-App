import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    disabled?: boolean;
}

const Button = ({
    children,
    isLoading,
    variant = 'primary',
    size = 'md',
    disabled,
    className = '',
    ...rest
}: ButtonProps) => {
    const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-[16px] focus:outline-none 
    transition-all duration-150 ease-in
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:ring-2 focus:ring-offset-2 focus:ring-primary/30 w-full
  `;

    // Size variants
    const sizeClasses = {
        sm: 'px-3 py-2 text-sm min-h-[36px]',
        md: 'px-4 py-3 text-base min-h-[48px]',
        lg: 'px-6 py-4 text-lg min-h-[56px]'
    };

    // Color and style variants
    const variantClasses = {
        primary: `
      bg-primary text-white 
      hover:bg-primary/90 
      active:bg-primary/80
    `,
        secondary: `
      bg-accent text-white 
      hover:bg-accent/90 
      active:bg-accent/80
    `,
        outline: `
      bg-transparent border-2 border-primary 
      text-primary hover:bg-primary/10 
      active:bg-primary/20
    `,
        ghost: `
      bg-transparent text-muted-foreground 
      hover:bg-accent hover:text-white 
      active:bg-accent/80
    `
    };

    const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

    return (
        <button
            disabled={isLoading || disabled}
            className={buttonClasses}
            {...rest}
        >
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <span className="inline-flex items-center justify-center">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    </span>
                </div>
            ) : (
                <div className="flex items-center gap-2 justify-center">
                    {children}
                </div>
            )}
        </button>
    );
};

export default Button;