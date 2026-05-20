import api from './api';
import { API_ENDPOINTS, AUTH_STORAGE_KEYS, DEFAULT_USAGE, SESSION_TTL_MS } from '../constants';

function saveSession(token, user) {
  localStorage.setItem(AUTH_STORAGE_KEYS.token, token);
  localStorage.setItem(AUTH_STORAGE_KEYS.user, JSON.stringify(user));
  localStorage.setItem(AUTH_STORAGE_KEYS.expiresAt, String(Date.now() + SESSION_TTL_MS));
  return { token, user };
}

function readUser() {
  try {
    const data = localStorage.getItem(AUTH_STORAGE_KEYS.user);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

function apiHeaders() {
  const token = localStorage.getItem(AUTH_STORAGE_KEYS.token);
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function normalizeProfilePayload(values) {
  return {
    ...values,
    full_name: (values.full_name || '').trim(),
    email: (values.email || '').trim(),
  };
}

async function loadUserSnapshot(baseUser) {
  const [profileResult, subscriptionResult, usageResult] = await Promise.allSettled([
    api.get(API_ENDPOINTS.users.me),
    api.get(API_ENDPOINTS.subscriptions.me),
    api.get(API_ENDPOINTS.usage.me),
  ]);

  if (profileResult.status === 'rejected' && profileResult.reason?.response?.status === 401) {
    logout();
    throw profileResult.reason;
  }

  const profile = profileResult.status === 'fulfilled' ? profileResult.value.data : {};
  const subscription =
    subscriptionResult.status === 'fulfilled' ? subscriptionResult.value.data : baseUser.subscription || null;
  const usage = usageResult.status === 'fulfilled' ? usageResult.value.data : baseUser.usage || DEFAULT_USAGE;

  return {
    ...baseUser,
    ...profile,
    subscription,
    usage,
  };
}

async function saveApiSession(token, user) {
  saveSession(token, user);
  const hydratedUser = await loadUserSnapshot(user);
  return saveSession(token, hydratedUser);
}

export function getAuthHeaders() {
  return apiHeaders();
}

export function getAuthToken() {
  return localStorage.getItem(AUTH_STORAGE_KEYS.token);
}

export function getCurrentUser() {
  return readUser();
}

export function getCurrentUserId() {
  return readUser()?.id || 'guest';
}

export function saveCurrentUser(user) {
  const token = getAuthToken();
  if (!token) return { token: null, user };

  return saveSession(token, user);
}

export async function getSession() {
  const token = getAuthToken();
  const user = readUser();
  if (!token || !user) return null;
  if (Number(localStorage.getItem(AUTH_STORAGE_KEYS.expiresAt) || 0) < Date.now()) {
    logout();
    return null;
  }

  return saveApiSession(token, user);
}

export async function login({ email, password }) {
  const response = await api.post(API_ENDPOINTS.auth.login, { email: email.trim(), password });
  return saveApiSession(response.data.access_token, response.data.user);
}

export async function register({ full_name, email, password }) {
  const response = await api.post(API_ENDPOINTS.auth.register, normalizeProfilePayload({ full_name, email, password }));
  return saveApiSession(response.data.access_token, response.data.user);
}

export async function updateProfile(values) {
  const response = await api.patch(API_ENDPOINTS.users.me, normalizeProfilePayload(values));
  const currentUser = readUser() || {};
  return saveSession(getAuthToken(), { ...currentUser, ...response.data });
}

export function logout() {
  localStorage.removeItem(AUTH_STORAGE_KEYS.token);
  localStorage.removeItem(AUTH_STORAGE_KEYS.user);
  localStorage.removeItem(AUTH_STORAGE_KEYS.expiresAt);
}
