import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Paperclip, Camera, Send, X } from 'lucide-react';

function ChatInput({ onSend, disabled = false }) {
  const [text, setText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() && !imageFile) return;

    onSend(text.trim(), imageFile);
    setText('');
    setImageFile(null);
    setImagePreview(null);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
    e.target.value = '';
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderTop: '1px solid #E5E7EB',
        backgroundColor: '#FFFFFF',
        p: 2,
      }}
    >
      {imagePreview && (
        <Box sx={{ position: 'relative', display: 'inline-block', mb: 1.5 }}>
          <Box
            component="img"
            src={imagePreview}
            alt="Preview"
            sx={{
              height: 72,
              borderRadius: 2,
              border: '1px solid #E5E7EB',
            }}
          />
          <IconButton
            size="small"
            onClick={removeImage}
            sx={{
              position: 'absolute',
              top: -6,
              right: -6,
              bgcolor: '#E63946',
              color: 'white',
              width: 20,
              height: 20,
              '&:hover': { bgcolor: '#C1121F' },
            }}
          >
            <X size={12} />
          </IconButton>
        </Box>
      )}
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.webp"
          ref={fileInputRef}
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={cameraInputRef}
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        <IconButton
          onClick={triggerFileInput}
          disabled={disabled}
          sx={{
            color: 'text.secondary',
            '&:hover': { color: 'primary.main' },
          }}
          aria-label="Anexar arquivo"
        >
          <Paperclip size={20} />
        </IconButton>
        <IconButton
          onClick={() => cameraInputRef.current?.click()}
          disabled={disabled}
          sx={{
            color: 'text.secondary',
            '&:hover': { color: 'primary.main' },
          }}
          aria-label="Abrir camera"
        >
          <Camera size={20} />
        </IconButton>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          placeholder="Digite sua mensagem ou envie uma foto..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          size="small"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              backgroundColor: '#F8F9FA',
              '& fieldset': {
                borderColor: '#E5E7EB',
              },
              '&:hover fieldset': {
                borderColor: 'primary.light',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        <IconButton
          type="submit"
          disabled={disabled || (!text.trim() && !imageFile)}
          sx={{
            backgroundColor: (!text.trim() && !imageFile) ? '#E5E7EB' : 'primary.main',
            color: (!text.trim() && !imageFile) ? '#9CA3AF' : 'white',
            width: 40,
            height: 40,
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            '&.Mui-disabled': {
              backgroundColor: '#E5E7EB',
              color: '#9CA3AF',
            },
          }}
          aria-label="Enviar mensagem"
        >
          <Send size={18} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ChatInput;
