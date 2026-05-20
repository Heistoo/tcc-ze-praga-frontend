import api from './api';
import { attachActionPlan } from './actionPlanService';
import { mapDiagnosis } from './diagnosisMapper';
import { API_ENDPOINTS } from '../constants';

export async function analyzeImage(imageFile, modelId = 'ensemble') {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('model', modelId);

  const response = await api.post(API_ENDPOINTS.inference, formData);
  return attachActionPlan(mapDiagnosis(response.data));
}
