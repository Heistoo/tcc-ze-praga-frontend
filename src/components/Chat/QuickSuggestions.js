import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Camera, HelpCircle, Info } from 'lucide-react';

const suggestions = [
  { label: 'Enviar foto', icon: Camera, action: 'upload' },
  { label: 'O que voce detecta?', icon: HelpCircle },
  { label: 'Como funciona?', icon: Info },
];

function QuickSuggestions({ onSend, onUploadClick }) {
  const handleClick = (suggestion) => {
    if (suggestion.action === 'upload' && onUploadClick) {
      onUploadClick();
    } else {
      onSend(suggestion.label);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        py: 2,
      }}
    >
      {suggestions.map((suggestion) => {
        const Icon = suggestion.icon;
        return (
          <Chip
            key={suggestion.label}
            icon={<Icon size={16} />}
            label={suggestion.label}
            onClick={() => handleClick(suggestion)}
            variant="outlined"
            sx={{
              borderColor: 'primary.light',
              color: 'primary.main',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
              '&:hover': {
                backgroundColor: 'rgba(45, 106, 79, 0.08)',
                borderColor: 'primary.main',
              },
              '& .MuiChip-icon': {
                color: 'primary.main',
              },
            }}
          />
        );
      })}
    </Box>
  );
}

export default QuickSuggestions;
