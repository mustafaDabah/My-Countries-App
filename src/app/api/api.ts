import { LOGIN } from '@utils/routesUrl';
import axios, { AxiosError, AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const BASE_URLS = {
  AUTH: 'https://reqres.in/api',
  COUNTRIES: 'https://restcountries.com/v3.1',
};

const AUTH_API_KEY = import.meta.env.VITE_AUTH_API_KEY;

/**
 * Create an Axios client with shared defaults and optional auth header.
 */
function createApiClient(
  baseURL: string,
  withAuth = false,
  extraHeaders?: Record<string, string>
): AxiosInstance {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
  });

  // ✅ Attach token automatically if requested
  if (withAuth) {
    instance.interceptors.request.use(
      (config) => {
        const token = Cookies.get('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // ✅ Handle auth errors globally
    instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const status = error.response?.status;
        if (status === 401) {
          Cookies.remove('auth_token');
          safeRedirectToLogin();
        }
        return Promise.reject(parseApiError(error));
      }
    );
  }

  return instance;
}

/**
 * Safely redirect to login without breaking React Router SPA context.
 */
function safeRedirectToLogin() {
  if (window.location.pathname !== LOGIN) {
    window.location.href = LOGIN;
  }
}

/**
 * Parse and normalize error responses.
 */
function parseApiError(error: AxiosError) {
  return error.response?.data || {
    message: error?.message,
    status: error.response?.status,
  };
}

export const authApi = createApiClient(BASE_URLS.AUTH, true, {
  'x-api-key': AUTH_API_KEY,
});

export const countriesApi = createApiClient(BASE_URLS.COUNTRIES);