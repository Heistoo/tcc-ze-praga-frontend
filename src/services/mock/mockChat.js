import { delay } from './delay';
import { chatResponses } from './mockData';
import { mockAnalyzeImage } from './mockInference';

const modelNames = {
  resnet50: 'ResNet-50',
  efficientnet: 'EfficientNet-B4',
  vit: 'ViT-B/16',
  ensemble: 'Ensemble',
};

function getModelName(modelId) {
  return modelNames[modelId] || modelId;
}

function getKeywordResponse(text) {
  const lower = text.toLowerCase();

  if (lower.match(/oi|ola|bom dia|boa tarde|boa noite|hey|hello/)) {
    return chatResponses.greeting;
  }
  if (lower.match(/quem e voce|o que voce faz|sobre voce|como funciona/)) {
    return chatResponses.about;
  }
  if (lower.match(/ferrugem/)) {
    return chatResponses.ferrugem;
  }
  if (lower.match(/mancha|alvo/)) {
    return chatResponses.mancha;
  }
  if (lower.match(/praga|doenca|sintoma|folha|amarela|marrom|mancha/)) {
    return chatResponses.default;
  }
  return chatResponses.default;
}

export async function mockSendMessage(messages, imageFile, modelId = 'ensemble') {
  await delay(1500);

  if (imageFile) {
    const result = await mockAnalyzeImage(imageFile, modelId);

    return {
      role: 'assistant',
      content: `Analisei a imagem da folha utilizando o modelo **${getModelName(modelId)}** e detectei **${result.disease}** (${result.scientificName}) com **${(result.confidence * 100).toFixed(1)}%** de confiança.`,
      diagnosis: result,
    };
  }

  const lastMessage = messages[messages.length - 1];
  const content = lastMessage ? lastMessage.content : '';

  return {
    role: 'assistant',
    content: getKeywordResponse(content),
    diagnosis: null,
  };
}
