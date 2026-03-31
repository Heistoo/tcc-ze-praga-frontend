import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import { AlertTriangle, AlertCircle, Info, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import ActionPlan from '../Diagnosis/ActionPlan';

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

function DiagnosisCard({ diagnosis, onSave }) {
  const [expanded, setExpanded] = useState(false);
  const severity = severityConfig[diagnosis.severity] || severityConfig.nenhuma;
  const SevIcon = severity.icon;
  const confidencePercent = (diagnosis.confidence * 100).toFixed(1);
  const confidenceColor = getConfidenceColor(diagnosis.confidence);

  return (
    <Box
      sx={{
        backgroundColor: '#FAFDF7',
        borderRadius: 3,
        border: '1px solid #E5E7EB',
        overflow: 'hidden',
        mt: 1,
      }}
    >
      <Box sx={{ p: 2.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
            {diagnosis.name || diagnosis.disease}
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

        {diagnosis.scientificName && (
          <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 2 }}>
            {diagnosis.scientificName}
          </Typography>
        )}

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
              Confianca
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700, color: confidenceColor, fontSize: '0.8rem' }}>
              {confidencePercent}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={diagnosis.confidence * 100}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: '#E5E7EB',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                backgroundColor: confidenceColor,
                transition: 'width 0.6s ease-in-out',
              },
            }}
          />
        </Box>

        <Collapse in={expanded}>
          {diagnosis.description && (
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.7 }}>
              {diagnosis.description}
            </Typography>
          )}
          {diagnosis.actionPlan && (
            <Box sx={{ mb: 2 }}>
              <ActionPlan actions={diagnosis.actionPlan} />
            </Box>
          )}
        </Collapse>

        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          <Button
            size="small"
            onClick={() => setExpanded(!expanded)}
            endIcon={expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            sx={{ color: 'primary.main', fontWeight: 500, fontSize: '0.8rem' }}
          >
            {expanded ? 'Menos detalhes' : 'Ver detalhes'}
          </Button>
          {onSave && (
            <Button
              size="small"
              variant="outlined"
              onClick={() => onSave(diagnosis)}
              sx={{ fontWeight: 500, fontSize: '0.8rem', ml: 'auto' }}
            >
              Salvar
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default DiagnosisCard;
