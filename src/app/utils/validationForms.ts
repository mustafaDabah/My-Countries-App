
/**
 * Validate register form
 */
export const validateRegisterForm = (formData: FormData): { isValid: boolean; errors: string[] } => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const errors: string[] = [];

    // Required fields validation
    if (!email.trim()) errors.push('Email is required');
    if (!password) errors.push('Password is required');
    if (!confirmPassword) errors.push('Confirm Password is required');

    // Email format validation
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push('Please enter a valid email address');
    }

    // Password length validation
    if (password && password.length < 6) {
        errors.push('Password must be at least 6 characters long');
    }

    // Password match validation
    if (password && confirmPassword && password !== confirmPassword) {
        errors.push('Passwords do not match');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

/**
 * Validate email format
 */
const validateEmail = (email: string): string | null => {
    if (!email.trim()) {
        return 'Email is required';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'Please enter a valid email address';
    }

    return null;
};

/**
 * Validate password
 */
const validatePassword = (password: string, fieldName: string = 'Password'): string | null => {
    if (!password) {
        return `${fieldName} is required`;
    }

    if (password.length < 6) {
        return `${fieldName} must be at least 6 characters long`;
    }

    return null;
};

/**
 * Validate login form data
 */
export const validateLoginForm = (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const errors: string[] = [];

    // Validate email
    const emailError = validateEmail(email);
    if (emailError) errors.push(emailError);

    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) errors.push(passwordError);

    return {
        isValid: errors.length === 0,
        errors
    };
};