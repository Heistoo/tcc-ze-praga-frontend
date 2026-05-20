import api from './api';
import { attachActionPlan } from './actionPlanService';
import { diagnosisToCreatePayload, mapDiagnosis } from './diagnosisMapper';
import { API_ENDPOINTS } from '../constants';

async function attachPlans(diagnoses) {
  return Promise.all(diagnoses.map((diagnosis) => attachActionPlan(diagnosis)));
}

export async function getDiagnoses() {
  const response = await api.get(API_ENDPOINTS.diagnoses.list, {
    params: { page: 1, limit: 100 },
  });
  const items = (response.data.items || []).map(mapDiagnosis);
  return attachPlans(items);
}

export async function getDiagnosisById(id) {
  const response = await api.get(API_ENDPOINTS.diagnoses.detail(id));
  return attachActionPlan(mapDiagnosis(response.data));
}

export async function saveDiagnosis(diagnosis) {
  const response = await api.post(API_ENDPOINTS.diagnoses.list, diagnosisToCreatePayload(diagnosis));
  return attachActionPlan(mapDiagnosis(response.data));
}

export async function deleteDiagnosis(id) {
  await api.delete(API_ENDPOINTS.diagnoses.detail(id));
}

export async function clearAllDiagnoses() {
  const response = await api.delete(API_ENDPOINTS.diagnoses.list, {
    params: { confirm: true },
  });
  return response.data;
}
