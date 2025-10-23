// Custom error interface for API responses
interface ApiError {
  error: string;
  message?: string;
}

// Type guard to check if error is an ApiError
const isApiError = (error: unknown): error is ApiError => {
  return typeof error === 'object' && error !== null && 'error' in error;
};

// Extract error message from various error types
export const getAuthErrorMessage = (error: unknown): string => {
  if (isApiError(error)) {
    return error.error || error.message || 'Authentication failed';
  }
  
  if (error instanceof Error) {
    return error?.meesage;
  }
  
  return 'An unexpected error occurred';
};
