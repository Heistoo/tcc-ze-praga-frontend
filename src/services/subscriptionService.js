import api from './api';
import { API_ENDPOINTS, API_ERROR_MESSAGES } from '../constants';
export { PLAN_DETAILS } from '../constants';

export function usageFromPlan(plan) {
  return {
    chat: { used: 0, limit: plan.chat_daily_limit, remaining: plan.chat_daily_limit },
    inference: {
      used: 0,
      limit: plan.inference_daily_limit,
      remaining: plan.inference_daily_limit,
    },
    api: { used: 0, limit: plan.api_monthly_limit, remaining: plan.api_monthly_limit },
  };
}

function throwApiError(message) {
  throw new Error(message);
}

export async function listPlans() {
  try {
    const response = await api.get(API_ENDPOINTS.subscriptions.plans);
    return response.data;
  } catch {
    return throwApiError(API_ERROR_MESSAGES.loadPlans);
  }
}

export async function getMySubscription() {
  try {
    const response = await api.get(API_ENDPOINTS.subscriptions.me);
    return response.data;
  } catch {
    return throwApiError(API_ERROR_MESSAGES.loadSubscription);
  }
}

export async function subscribeToPlan(planName) {
  try {
    const response = await api.post(API_ENDPOINTS.subscriptions.me, { plan_name: planName });
    return response.data;
  } catch {
    return throwApiError(API_ERROR_MESSAGES.activateSubscription);
  }
}
