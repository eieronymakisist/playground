import axios, { AxiosInstance } from 'axios';
declare var process: any;  // ← ADD THIS LINE
const BASE_URL = process.env.REACT_APP_BACKEND_URL

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Global 401 handling
apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);