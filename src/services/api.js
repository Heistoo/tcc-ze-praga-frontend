import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT_MS, AUTH_STORAGE_KEYS } from '../constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT_MS,
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH_STORAGE_KEYS.token);

  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
