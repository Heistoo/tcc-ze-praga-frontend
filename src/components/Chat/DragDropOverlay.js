import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload } from 'lucide-react';

function DragDropOverlay({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(45, 106, 79, 0.08)',
              border: '3px dashed',
              borderColor: 'primary.main',
              borderRadius: 3,
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                backgroundColor: 'rgba(45, 106, 79, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Upload size={28} color="#2D6A4F" />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.dark' }}>
              Solte a imagem aqui
            </Typography>
            <Typography variant="body2" color="text.secondary">
              JPG, PNG ou WebP
            </Typography>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DragDropOverlay;
