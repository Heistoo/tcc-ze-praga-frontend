export const API_PREFIX = '/api/v1';
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
export const API_TIMEOUT_MS = 30000;

export const API_ENDPOINTS = {
  auth: {
    login: `${API_PREFIX}/auth/login`,
    register: `${API_PREFIX}/auth/register`,
  },
  users: {
    me: `${API_PREFIX}/users/me`,
  },
  subscriptions: {
    plans: `${API_PREFIX}/subscriptions/plans`,
    me: `${API_PREFIX}/subscriptions/me`,
  },
  usage: {
    me: `${API_PREFIX}/usage/me`,
  },
  diagnoses: {
    list: `${API_PREFIX}/diagnoses`,
    detail: (id) => `${API_PREFIX}/diagnoses/${id}`,
  },
  actionPlans: {
    byDisease: (diseaseId) => `${API_PREFIX}/action-plans/${diseaseId}`,
  },
  inference: `${API_PREFIX}/inference`,
  chat: `${API_PREFIX}/chat`,
};

export const AUTH_STORAGE_KEYS = {
  token: 'ze-praga-auth-token',
  user: 'ze-praga-auth-user',
  expiresAt: 'ze-praga-auth-expires-at',
};

export const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export const PLAN_DETAILS = {
  free: {
    title: 'Plano Gratuito',
    price: 'R$ 0',
    period: '/mês',
    highlight: false,
    description: 'Para testar diagnósticos essenciais e validar o uso no dia a dia.',
    features: [
      '10 mensagens de chat por dia',
      '5 análises de imagem por dia',
      'Histórico por perfil autenticado',
      'Planos de ação essenciais',
    ],
  },
  pro: {
    title: 'Plano Pro',
    price: 'R$ 39',
    period: '/mês',
    highlight: true,
    description: 'Para produtores que acompanham lavouras com maior frequência.',
    features: [
      'Chat ilimitado',
      'Análises de imagem ilimitadas',
      '500 chamadas de API por mês',
      'Histórico por perfil autenticado',
    ],
  },
  enterprise: {
    title: 'Plano Plus',
    price: 'R$ 89',
    period: '/mês',
    highlight: false,
    description: 'Para equipes, consultorias e operações com alto volume de diagnóstico.',
    features: [
      'Chat e inferência ilimitados',
      'API ilimitada',
      'Suporte para múltiplas contas',
      'Prioridade em recursos avançados',
    ],
  },
};

export const DEFAULT_USAGE = {
  chat: { used: 0, limit: 10, remaining: 10 },
  inference: { used: 0, limit: 5, remaining: 5 },
  api: { used: 0, limit: 0, remaining: 0 },
};

export const API_ERROR_MESSAGES = {
  loadPlans: 'Não foi possível carregar os planos de assinatura.',
  loadSubscription: 'Não foi possível carregar sua assinatura.',
  activateSubscription: 'Não foi possível ativar a assinatura.',
};

export const USER_NAME_PATTERN = /^[\p{L} '-]+$/u;
export const USER_NAME_ERROR_MESSAGE = 'Use apenas letras, espacos, hifen ou apostrofo no nome.';

export function isValidUserName(name) {
  const trimmedName = (name || '').trim();
  return !trimmedName || USER_NAME_PATTERN.test(trimmedName);
}

export const CHAT_MESSAGES = {
  initialAssistant:
    'Olá! Sou o Zé Praga, seu assistente de diagnóstico fitossanitário. Envie uma foto da folha de soja para que eu possa analisar, ou pergunte sobre pragas e doenças da cultura.',
  imageOnlyMessage: 'Imagem enviada para análise',
  genericError: 'Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.',
  loginRequiredToSave: 'Entre na sua conta para salvar o diagnóstico.',
  diagnosisSaved: 'Diagnóstico salvo no histórico!',
  saveDiagnosisError: 'Erro ao salvar o diagnóstico.',
};

export const HISTORY_MESSAGES = {
  loadError: 'Erro ao carregar histórico.',
  removeError: 'Erro ao remover diagnóstico.',
  clearError: 'Erro ao limpar histórico.',
};
