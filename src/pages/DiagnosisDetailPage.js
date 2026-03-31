import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { ArrowLeft } from 'lucide-react';
import DiagnosisResult from '../components/Diagnosis/DiagnosisResult';
import { getDiagnosisById } from '../services/historyService';

function DiagnosisDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getDiagnosisById(id);
        if (!data) {
          setError('Diagnóstico não encontrado.');
        } else {
          setDiagnosis(data);
        }
      } catch {
        setError('Erro ao carregar diagnóstico.');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowLeft size={18} />}
        onClick={() => navigate('/historico')}
        sx={{ mb: 2, color: 'text.secondary' }}
      >
        Voltar ao Histórico
      </Button>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && <Alert severity="error">{error}</Alert>}

      {diagnosis && (
        <>
          <Typography variant="caption" color="text.secondary">
            {new Date(diagnosis.timestamp).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Typography>
          <DiagnosisResult result={diagnosis} showImage />
        </>
      )}
    </Container>
  );
}

export default DiagnosisDetailPage;
