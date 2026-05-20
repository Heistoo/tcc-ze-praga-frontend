import api from './api';
import { mapActionPlan } from './diagnosisMapper';
import { API_ENDPOINTS } from '../constants';

export async function getActionPlanByDisease(diseaseId) {
  if (!diseaseId) return null;

  const response = await api.get(API_ENDPOINTS.actionPlans.byDisease(diseaseId));
  return mapActionPlan(response.data);
}

export async function attachActionPlan(diagnosis) {
  if (!diagnosis || diagnosis.actionPlan || !diagnosis.diseaseId) {
    return diagnosis;
  }

  try {
    return {
      ...diagnosis,
      actionPlan: await getActionPlanByDisease(diagnosis.diseaseId),
    };
  } catch {
    return diagnosis;
  }
}
