import { authApi } from '@apis/api';
import Cookies from 'js-cookie';

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  id?: string;
}

export interface User {
  id: string;
  token: string;
}

class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

  async register(credentials: AuthCredentials): Promise<AuthResponse> {
    const response = await authApi.post<AuthResponse>('/register', credentials);
    return response.data;
  }

  async login(credentials: AuthCredentials): Promise<AuthResponse> {
    const response = await authApi.post<AuthResponse>('/login', credentials);
    return response.data;
  }

  setToken(token: string): void {
    Cookies.set(this.TOKEN_KEY, token, { 
      expires: 7,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
  }

  getToken(): string | undefined {
    return Cookies.get(this.TOKEN_KEY);
  }

  removeToken(): void {
    Cookies.remove(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const authService = new AuthService();