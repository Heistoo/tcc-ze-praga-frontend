import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import { AlertTriangle, AlertCircle, Info, CheckCircle, ChevronDown, ChevronUp, Cpu } from 'lucide-react';
import ActionPlan from '../Diagnosis/ActionPlan';

const severityConfig = {
  alta: { label: 'Severa', color: '#E63946', icon: AlertTriangle, bg: '#FEE2E2' },
  media: { label: 'Moderada', color: '#F4A261', icon: AlertCircle, bg: '#FEF3C7' },
  baixa: { label: 'Leve', color: '#52B788', icon: Info, bg: '#D1FAE5' },
  nenhuma: { label: 'Saudável', color: '#52B788', icon: CheckCircle, bg: '#D1FAE5' },
};

const modelNames = {
  resnet50: 'ResNet-50',
  efficientnet: 'EfficientNet-B4',
  vit: 'ViT-B/16',
  ensemble: 'Ensemble',
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
              Confiança
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

        {/* Model Used Badge */}
        {diagnosis.modelUsed && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
            <Cpu size={12} color="#6B7280" />
            <Typography variant="caption" color="text.secondary">
              Modelo: <strong>{modelNames[diagnosis.modelUsed] || diagnosis.modelUsed}</strong>
            </Typography>
          </Box>
        )}

        {/* Top-3 Predictions */}
        {diagnosis.top3 && diagnosis.top3.length > 1 && (
          <Box sx={{ mb: 2, p: 1.5, backgroundColor: '#F8F9FA', borderRadius: 2, border: '1px solid #E5E7EB' }}>
            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', display: 'block', mb: 1 }}>
              Top-3 Classificações
            </Typography>
            {diagnosis.top3.map((pred, idx) => {
              const predSev = severityConfig[pred.severity] || severityConfig.nenhuma;
              return (
                <Box key={pred.diseaseId} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: idx < 2 ? 0.8 : 0 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', width: 16 }}>
                    {idx + 1}.
                  </Typography>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="caption" sx={{ fontWeight: idx === 0 ? 700 : 500, display: 'block' }} noWrap>
                      {pred.disease}
                    </Typography>
                  </Box>
                  <Box sx={{ width: 60 }}>
                    <LinearProgress
                      variant="determinate"
                      value={pred.confidence * 100}
                      sx={{
                        height: 4,
                        borderRadius: 2,
                        backgroundColor: '#E5E7EB',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 2,
                          backgroundColor: idx === 0 ? predSev.color : '#9CA3AF',
                        },
                      }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ fontWeight: 600, minWidth: 42, textAlign: 'right', color: idx === 0 ? predSev.color : 'text.secondary' }}>
                    {(pred.confidence * 100).toFixed(1)}%
                  </Typography>
                </Box>
              );
            })}
          </Box>
        )}

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
