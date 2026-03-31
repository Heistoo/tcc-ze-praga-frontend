import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HistoryCard from './HistoryCard';
import { Inbox } from 'lucide-react';

function HistoryList({ diagnoses, onDelete }) {
  if (diagnoses.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 106, 79, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2,
          }}
        >
          <Inbox size={36} color="#9CA3AF" />
        </Box>
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 600 }}>
          Nenhum diagnostico salvo
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Faca uma analise no chat e salve o resultado.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {diagnoses.map((diagnosis) => (
        <HistoryCard
          key={diagnosis.id}
          diagnosis={diagnosis}
          onDelete={onDelete}
        />
      ))}
    </Box>
  );
}

export default HistoryList;
