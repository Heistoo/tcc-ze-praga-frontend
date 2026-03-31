import React, { useState, useMemo } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import InputAdornment from '@mui/material/InputAdornment';
import { Search, Trash2 } from 'lucide-react';
import HistoryList from '../components/History/HistoryList';
import useHistory from '../hooks/useHistory';

const severityFilters = [
  { key: 'all', label: 'Todos' },
  { key: 'alta', label: 'Severa', color: '#E63946' },
  { key: 'media', label: 'Moderada', color: '#F4A261' },
  { key: 'baixa', label: 'Leve', color: '#52B788' },
  { key: 'nenhuma', label: 'Saudavel', color: '#52B788' },
];

function HistoryPage() {
  const { diagnoses, loading, error, remove, clearAll } = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSeverity, setActiveSeverity] = useState('all');
  const [clearDialogOpen, setClearDialogOpen] = useState(false);

  const filteredDiagnoses = useMemo(() => {
    let result = diagnoses;

    if (activeSeverity !== 'all') {
      result = result.filter((d) => d.severity === activeSeverity);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          (d.disease || '').toLowerCase().includes(query) ||
          (d.scientificName || '').toLowerCase().includes(query)
      );
    }

    return result;
  }, [diagnoses, activeSeverity, searchQuery]);

  const handleClearAll = () => {
    if (clearAll) {
      clearAll();
    }
    setClearDialogOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Historico de Diagnosticos
        </Typography>
        {diagnoses.length > 0 && (
          <Button
            size="small"
            color="error"
            startIcon={<Trash2 size={16} />}
            onClick={() => setClearDialogOpen(true)}
            sx={{ fontWeight: 500 }}
          >
            Limpar
          </Button>
        )}
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Seus diagnosticos anteriores.
      </Typography>

      <TextField
        fullWidth
        size="small"
        placeholder="Buscar diagnostico..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            borderRadius: 3,
            backgroundColor: '#FFFFFF',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search size={18} color="#6B7280" />
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
        {severityFilters.map((filter) => (
          <Chip
            key={filter.key}
            label={filter.label}
            onClick={() => setActiveSeverity(filter.key)}
            variant={activeSeverity === filter.key ? 'filled' : 'outlined'}
            sx={{
              fontWeight: 500,
              ...(activeSeverity === filter.key && filter.color
                ? {
                    backgroundColor: filter.color,
                    color: '#FFFFFF',
                    '&:hover': { backgroundColor: filter.color },
                  }
                : activeSeverity === filter.key
                ? {
                    backgroundColor: 'primary.main',
                    color: '#FFFFFF',
                    '&:hover': { backgroundColor: 'primary.dark' },
                  }
                : {
                    borderColor: '#E5E7EB',
                    '&:hover': { borderColor: 'primary.light' },
                  }),
            }}
          />
        ))}
      </Box>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {!loading && <HistoryList diagnoses={filteredDiagnoses} onDelete={remove} />}

      <Dialog open={clearDialogOpen} onClose={() => setClearDialogOpen(false)}>
        <DialogTitle>Limpar historico</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja limpar todo o historico de diagnosticos? Esta acao nao pode ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setClearDialogOpen(false)}>Cancelar</Button>
          <Button onClick={handleClearAll} color="error" variant="contained">
            Limpar tudo
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default HistoryPage;
