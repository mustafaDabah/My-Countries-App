import Cookies from 'js-cookie';

const COOKIE_CONFIG = {
    expires: 7,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/',
};

export const COOKIE_KEYS = {
    AUTH_TOKEN: 'auth_token',
    THEME: 'theme',
} as const;

export type CookieKey = keyof typeof COOKIE_KEYS;

/**
 * Set a cookie with standardized configuration
 */
export const setCookie = <T = string>(
    key: CookieKey,
    value: T,
    options?: Cookies.CookieAttributes
): void => {
    const cookieKey = COOKIE_KEYS[key];
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);

    Cookies.set(cookieKey, stringValue, {
        ...COOKIE_CONFIG,
        ...options,
    });
};

/**
 * Get a cookie value
 */
export const getCookie = <T = string>(key: CookieKey): T | null => {
    const cookieKey = COOKIE_KEYS[key];
    const value = Cookies.get(cookieKey);

    if (!value) return null;

    try {
        return JSON.parse(value) as T;
    } catch {
        return value as T;
    }
};

/**
 * Remove a cookie
 */
export const removeCookie = (key: CookieKey, options?: Cookies.CookieAttributes): void => {
    const cookieKey = COOKIE_KEYS[key];
    Cookies.remove(cookieKey, {
        ...COOKIE_CONFIG,
        ...options,
    });
};
