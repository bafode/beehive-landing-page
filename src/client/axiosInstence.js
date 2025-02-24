import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_END_POINT || 'https://beehive-api.fr/v1',
    headers: {
        'Content-Type': 'application/json', 
    },
    withCredentials: true,
});

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
        config.headers['Content-Type'] = 'application/json';
        config.withCredentials = true;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
