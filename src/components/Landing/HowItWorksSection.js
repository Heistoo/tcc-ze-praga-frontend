import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { motion } from 'framer-motion';
import { Camera, Microscope, ClipboardList } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Envie uma Foto',
    description: 'Tire uma foto da folha ou faca upload de uma imagem da sua galeria.',
    color: '#2D6A4F',
  },
  {
    icon: Microscope,
    title: 'Analise com IA',
    description: 'Nossos modelos de deep learning classificam pragas e doencas automaticamente.',
    color: '#52B788',
  },
  {
    icon: ClipboardList,
    title: 'Plano de Acao',
    description: 'Receba diagnostico detalhado com recomendacoes de manejo personalizadas.',
    color: '#F4A261',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function HowItWorksSection() {
  return (
    <Box
      id="como-funciona"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 3, md: 6 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            color: 'primary.dark',
            mb: 1.5,
          }}
        >
          Como Funciona
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            maxWidth: 500,
            mx: 'auto',
          }}
        >
          Tres passos simples para levar tecnologia ao campo
        </Typography>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Grid container spacing={4}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Grid size={{ xs: 12, md: 4 }} key={step.title}>
                  <motion.div variants={cardVariants}>
                    <Card
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        height: '100%',
                        border: '1px solid #E5E7EB',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '16px',
                          backgroundColor: `${step.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        <Icon size={28} color={step.color} />
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          color: step.color,
                          fontSize: '0.75rem',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Passo {index + 1}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, mt: 1, mb: 1.5, color: 'text.primary' }}
                      >
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {step.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}

export default HowItWorksSection;
