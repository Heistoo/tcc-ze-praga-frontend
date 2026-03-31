import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { AlertTriangle, AlertCircle, Info, CheckCircle } from 'lucide-react';
import ConfidenceBar from './ConfidenceBar';
import ActionPlan from './ActionPlan';

const severityConfig = {
  alta: { label: 'Severa', color: '#E63946', icon: AlertTriangle, bg: '#FEE2E2' },
  media: { label: 'Moderada', color: '#F4A261', icon: AlertCircle, bg: '#FEF3C7' },
  baixa: { label: 'Leve', color: '#52B788', icon: Info, bg: '#D1FAE5' },
  nenhuma: { label: 'Saudavel', color: '#52B788', icon: CheckCircle, bg: '#D1FAE5' },
};

function DiagnosisResult({ result, showImage = false }) {
  if (!result) return null;

  const severity = severityConfig[result.severity] || severityConfig.media;
  const SevIcon = severity.icon;

  return (
    <Card sx={{ mt: 3, borderRadius: 4, overflow: 'hidden' }}>
      {showImage && result.imageUrl && (
        <Box
          sx={{
            textAlign: 'center',
            backgroundColor: '#F8F9FA',
            p: 2,
          }}
        >
          <Box
            component="img"
            src={result.imageUrl}
            alt="Imagem analisada"
            sx={{
              maxWidth: '100%',
              maxHeight: 300,
              objectFit: 'contain',
              borderRadius: 2,
            }}
          />
        </Box>
      )}
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {result.disease}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontStyle="italic">
              {result.scientificName}
            </Typography>
          </Box>
          <Chip
            icon={<SevIcon size={14} />}
            label={severity.label}
            sx={{
              backgroundColor: severity.bg,
              color: severity.color,
              fontWeight: 600,
              '& .MuiChip-icon': { color: severity.color },
            }}
          />
        </Box>

        <ConfidenceBar confidence={result.confidence} />

        <Divider sx={{ my: 2.5 }} />

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary' }}>
          {result.description}
        </Typography>

        <Divider sx={{ my: 2.5 }} />

        <ActionPlan actions={result.actionPlan} />
      </CardContent>
    </Card>
  );
}

export default DiagnosisResult;
