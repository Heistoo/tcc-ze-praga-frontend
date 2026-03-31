import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Eye, Trash2, AlertTriangle, AlertCircle, Info, CheckCircle, Calendar } from 'lucide-react';

const severityConfig = {
  alta: { label: 'Severa', color: '#E63946', icon: AlertTriangle, bg: '#FEE2E2' },
  media: { label: 'Moderada', color: '#F4A261', icon: AlertCircle, bg: '#FEF3C7' },
  baixa: { label: 'Leve', color: '#52B788', icon: Info, bg: '#D1FAE5' },
  nenhuma: { label: 'Saudavel', color: '#52B788', icon: CheckCircle, bg: '#D1FAE5' },
};

function getConfidenceColor(confidence) {
  if (confidence >= 0.9) return '#52B788';
  if (confidence >= 0.7) return '#F4A261';
  return '#E63946';
}

function HistoryCard({ diagnosis, onDelete }) {
  const navigate = useNavigate();
  const severity = severityConfig[diagnosis.severity] || severityConfig.media;
  const SevIcon = severity.icon;
  const confidenceColor = getConfidenceColor(diagnosis.confidence);

  const date = new Date(diagnosis.timestamp).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transform: 'translateY(-1px)',
        },
      }}
    >
      {diagnosis.imageUrl && (
        <Box
          component="img"
          src={diagnosis.imageUrl}
          alt={diagnosis.disease}
          sx={{
            width: { xs: '100%', sm: 160 },
            height: { xs: 160, sm: 'auto' },
            objectFit: 'cover',
            borderRadius: { xs: '12px 12px 0 0', sm: '12px 0 0 12px' },
          }}
        />
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent sx={{ pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Calendar size={14} color="#6B7280" />
            <Typography variant="caption" color="text.secondary">
              {date}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
              {diagnosis.disease}
            </Typography>
            <Chip
              icon={<SevIcon size={14} />}
              label={severity.label}
              size="small"
              sx={{
                backgroundColor: severity.bg,
                color: severity.color,
                fontWeight: 600,
                '& .MuiChip-icon': { color: severity.color },
              }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary" fontStyle="italic" sx={{ mb: 1.5 }}>
            {diagnosis.scientificName}
          </Typography>
          <Box sx={{ width: '100%', maxWidth: 200 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.3 }}>
              <Typography variant="caption" color="text.secondary">Confianca</Typography>
              <Typography variant="caption" sx={{ fontWeight: 700, color: confidenceColor }}>
                {Math.round(diagnosis.confidence * 100)}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={diagnosis.confidence * 100}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: '#E5E7EB',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 3,
                  backgroundColor: confidenceColor,
                },
              }}
            />
          </Box>
        </CardContent>
        <CardActions sx={{ pt: 0 }}>
          <Button
            size="small"
            startIcon={<Eye size={16} />}
            onClick={() => navigate('/historico/' + diagnosis.id)}
            sx={{ color: 'primary.main', fontWeight: 500 }}
          >
            Ver Detalhes
          </Button>
          <IconButton
            size="small"
            onClick={() => onDelete(diagnosis.id)}
            sx={{ ml: 'auto', color: 'text.secondary', '&:hover': { color: '#E63946' } }}
          >
            <Trash2 size={16} />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}

export default HistoryCard;
