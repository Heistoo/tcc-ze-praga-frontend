import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

function getColor(confidence) {
  if (confidence >= 0.9) return '#52B788';
  if (confidence >= 0.7) return '#F4A261';
  return '#E63946';
}

function ConfidenceBar({ confidence }) {
  const percentage = (confidence * 100).toFixed(1);
  const color = getColor(confidence);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          Confianca do modelo
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 700, color }}>
          {percentage}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={confidence * 100}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: '#E5E7EB',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            backgroundColor: color,
            transition: 'width 0.6s ease-in-out',
          },
        }}
      />
    </Box>
  );
}

export default ConfidenceBar;
