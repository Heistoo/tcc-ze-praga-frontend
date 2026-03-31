import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Leaf, ExternalLink, BookOpen, Info } from 'lucide-react';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1B4332',
        color: 'rgba(255,255,255,0.85)',
        py: 6,
        px: { xs: 3, md: 6 },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Leaf size={24} color="#52B788" />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                Zé Praga
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
              Plataforma de diagnóstico fitossanitário inteligente — hoje focada na soja,
              com infraestrutura projetada para expandir a diversos cultivos e democratizar
              o acesso à tecnologia no campo.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#FFFFFF', mb: 2 }}>
              Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { label: 'Chat', path: '/chat' },
                { label: 'Histórico', path: '/historico' },
                { label: 'Documentação da API', path: '/api-docs' },
                { label: 'Sobre o Projeto', path: '/sobre' },
              ].map((link) => (
                <Typography
                  key={link.path}
                  component={Link}
                  to={link.path}
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: '#52B788' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#FFFFFF', mb: 2 }}>
              Projeto
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, lineHeight: 1.8 }}>
              Desenvolvido como Trabalho de Conclusão de Curso no Instituto Mauá de Tecnologia — 2026.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#52B788' } }}
              >
                <ExternalLink size={20} />
              </IconButton>
              <IconButton
                component={Link}
                to="/api-docs"
                sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#52B788' } }}
              >
                <BookOpen size={20} />
              </IconButton>
              <IconButton
                component={Link}
                to="/sobre"
                sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#52B788' } }}
              >
                <Info size={20} />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.5,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                ODS 2
              </Box>
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.5,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                ODS 9
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            &copy; 2026 Grupo Zé Praga — Instituto Mauá de Tecnologia
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
