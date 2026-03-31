import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CloudUpload, Image } from 'lucide-react';

function ImageDropzone({ onImageSelect, disabled = false }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onImageSelect(acceptedFiles[0]);
      }
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.webp'] },
    multiple: false,
    disabled,
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed',
        borderColor: isDragActive ? 'primary.main' : '#E5E7EB',
        borderRadius: 3,
        p: 5,
        textAlign: 'center',
        cursor: disabled ? 'default' : 'pointer',
        bgcolor: isDragActive ? 'rgba(45, 106, 79, 0.04)' : 'background.paper',
        transition: 'all 0.2s ease',
        opacity: disabled ? 0.6 : 1,
        '&:hover': disabled
          ? {}
          : {
              borderColor: 'primary.light',
              bgcolor: 'rgba(45, 106, 79, 0.04)',
            },
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <>
          <Image size={48} color="#2D6A4F" style={{ marginBottom: 8 }} />
          <Typography variant="h6" color="primary">
            Solte a imagem aqui
          </Typography>
        </>
      ) : (
        <>
          <CloudUpload size={48} color="#9CA3AF" style={{ marginBottom: 8 }} />
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
            Arraste uma imagem ou clique para selecionar
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Formatos aceitos: JPG, PNG, WEBP
          </Typography>
        </>
      )}
    </Box>
  );
}

export default ImageDropzone;
