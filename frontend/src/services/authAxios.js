import axios from 'axios';
import Cookies from 'js-cookie';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user_data';

// Create axios instance with custom config
const authAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
});

// Request interceptor
authAxios.interceptors.request.use(
    (config) => {
        const token = Cookies.get(TOKEN_KEY);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
authAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // Clear auth data on unauthorized
            Cookies.remove(TOKEN_KEY);
            localStorage.removeItem(USER_KEY);
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Auth helper functions
export const setAuthData = (token, userData) => {
    Cookies.set(TOKEN_KEY, token, { secure: true, sameSite: 'strict' });
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
};

export const clearAuthData = () => {
    Cookies.remove(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
};

export const getAuthData = () => {
    const token = Cookies.get(TOKEN_KEY);
    const userData = localStorage.getItem(USER_KEY);
    return {
        token,
        user: userData ? JSON.parse(userData) : null,
    };
};

export default authAxios;

