import { LOGIN } from '@utils/routesUrl';
import axios from 'axios';
import Cookies from 'js-cookie';

const API_AUTH_URL = 'https://reqres.in/api';

export const authApi = axios.create({
    baseURL: API_AUTH_URL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': (import.meta as unknown)?.env?.VITE_AUTH_API_KEY ?? '',
    },
});

authApi.interceptors.request.use(
    (config) => {
        const token = Cookies.get('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// WE DON'T HAVE THIS CASE INTO THIS PROJECT, BUT IT'S REALLY USEFUL IN CASE WE HAVE REFRESH TOKEN
authApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            Cookies.remove('auth_token');
            window.location.href = LOGIN;
        }
        return Promise.reject(error.response?.data || error);
    }
);