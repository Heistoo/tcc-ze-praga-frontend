import { useState, useEffect, useCallback } from 'react';
import { getDiagnoses, deleteDiagnosis, clearAllDiagnoses } from '../services/historyService';

function useHistory() {
  const [diagnoses, setDiagnoses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getDiagnoses();
      setDiagnoses(data);
    } catch {
      setError('Erro ao carregar histórico.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const remove = useCallback(async (id) => {
    try {
      await deleteDiagnosis(id);
      setDiagnoses((prev) => prev.filter((d) => d.id !== id));
    } catch {
      setError('Erro ao remover diagnóstico.');
    }
  }, []);

  const clearAll = useCallback(async () => {
    try {
      await clearAllDiagnoses();
      setDiagnoses([]);
    } catch {
      setError('Erro ao limpar histórico.');
    }
  }, []);

  return { diagnoses, loading, error, reload: load, remove, clearAll };
}

export default useHistory;
