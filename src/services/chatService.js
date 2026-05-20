import api from './api';
import { attachActionPlan } from './actionPlanService';
import { mapDiagnosis } from './diagnosisMapper';
import { API_ENDPOINTS } from '../constants';

export async function sendMessage(messages, imageFile = null, modelId = 'ensemble') {
  const formData = new FormData();
  formData.append('messages', JSON.stringify(messages));
  formData.append('model', modelId);
  if (imageFile) formData.append('image', imageFile);

  const response = await api.post(API_ENDPOINTS.chat, formData);
  const { role, content, diagnosis } = response.data;

  return {
    role,
    content,
    diagnosis: await attachActionPlan(mapDiagnosis(diagnosis)),
  };
}
