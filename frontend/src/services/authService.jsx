import axios from 'axios';

const API_URL = 'http://localhost:8080/'; // adjust to your Spring backend URL

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true // important for cookies
});

// Add request interceptor to add token to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = document.cookie.split('jwt=')[1];
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            window.location.href = '/signIn';
        }
        return Promise.reject(error);
    }
);

// Auth service functions
const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    
    if (response.data.token) {
      // Store token in HTTP-only cookie (secure in production)
      document.cookie = `jwt=${response.data.token}; path=/; max-age=86400; samesite=strict`;
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

const register = async (username, password, email) => {
  try {
    const response = await axiosInstance.post('/auth/register', {
      username,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

const logout = () => {
  document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

const isAuthenticated = () => {
  return document.cookie.includes('jwt=');
};

export { login, register, logout, isAuthenticated, axiosInstance };
