import { mockAnalyzeImage } from './mock/mockInference';

export async function analyzeImage(imageFile, modelId = 'ensemble') {
  // Quando o backend real existir:
  // const formData = new FormData();
  // formData.append('image', imageFile);
  // formData.append('model', modelId);
  // const response = await api.post('/inference', formData, {
  //   headers: { 'Content-Type': 'multipart/form-data' },
  // });
  // return response.data;

  return mockAnalyzeImage(imageFile, modelId);
}
