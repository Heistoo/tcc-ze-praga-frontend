import { useState, useEffect, useCallback } from 'react';
import { getDiagnoses, deleteDiagnosis, clearAllDiagnoses } from '../services/historyService';
import { HISTORY_MESSAGES } from '../constants';

function useHistory(enabled = true) {
  const [diagnoses, setDiagnoses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    if (!enabled) {
      setDiagnoses([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await getDiagnoses();
      setDiagnoses(data);
    } catch {
      setError(HISTORY_MESSAGES.loadError);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    load();
  }, [load]);

  const remove = useCallback(async (id) => {
    try {
      await deleteDiagnosis(id);
      setDiagnoses((prev) => prev.filter((d) => d.id !== id));
    } catch {
      setError(HISTORY_MESSAGES.removeError);
    }
  }, []);

  const clearAll = useCallback(async () => {
    try {
      await clearAllDiagnoses();
      setDiagnoses([]);
    } catch {
      setError(HISTORY_MESSAGES.clearError);
    }
  }, []);

  return { diagnoses, loading, error, reload: load, remove, clearAll };
}

export default useHistory;
