import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { X } from 'lucide-react';

function ImagePreview({ imageUrl, onRemove }) {
  if (!imageUrl) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
        mb: 1,
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="Preview"
        sx={{
          height: 80,
          borderRadius: 2,
          border: '1px solid #E5E7EB',
        }}
      />
      <IconButton
        size="small"
        onClick={onRemove}
        sx={{
          position: 'absolute',
          top: -8,
          right: -8,
          bgcolor: '#E63946',
          color: 'white',
          width: 22,
          height: 22,
          '&:hover': { bgcolor: '#C1121F' },
        }}
      >
        <X size={12} />
      </IconButton>
    </Box>
  );
}

export default ImagePreview;
