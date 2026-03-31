import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Cpu, BarChart3, Clock, HardDrive, Trophy, Layers, Zap, Info } from 'lucide-react';

const models = [
  {
    id: 'resnet50',
    name: 'ResNet-50',
    fullName: 'Residual Network 50 layers',
    description: 'Rede neural convolucional profunda com conexões residuais. Amplamente utilizada como baseline em tarefas de classificação de imagens.',
    architecture: 'CNN',
    accuracy: 0.956,
    f1Score: 0.952,
    precision: 0.958,
    recall: 0.949,
    inferenceTime: 45,
    modelSize: 97.8,
    parameters: '25.6M',
    epochs: 50,
    color: '#2D6A4F',
    perClass: [
      { name: 'Ferrugem Asiática', accuracy: 0.97, f1: 0.96 },
      { name: 'Mancha-Alvo', accuracy: 0.94, f1: 0.93 },
      { name: 'Antracnose', accuracy: 0.93, f1: 0.92 },
      { name: 'Cercosporiose', accuracy: 0.95, f1: 0.94 },
      { name: 'Míldio', accuracy: 0.96, f1: 0.95 },
      { name: 'Folha Saudável', accuracy: 0.98, f1: 0.98 },
    ],
  },
  {
    id: 'efficientnet',
    name: 'EfficientNet-B4',
    fullName: 'Efficient Network B4',
    description: 'Arquitetura que escala profundidade, largura e resolução de forma balanceada. Excelente relação entre acurácia e eficiência computacional.',
    architecture: 'CNN',
    accuracy: 0.971,
    f1Score: 0.968,
    precision: 0.972,
    recall: 0.965,
    inferenceTime: 62,
    modelSize: 74.3,
    parameters: '19.3M',
    epochs: 50,
    color: '#52B788',
    perClass: [
      { name: 'Ferrugem Asiática', accuracy: 0.98, f1: 0.98 },
      { name: 'Mancha-Alvo', accuracy: 0.96, f1: 0.95 },
      { name: 'Antracnose', accuracy: 0.96, f1: 0.95 },
      { name: 'Cercosporiose', accuracy: 0.97, f1: 0.96 },
      { name: 'Míldio', accuracy: 0.97, f1: 0.97 },
      { name: 'Folha Saudável', accuracy: 0.99, f1: 0.99 },
    ],
  },
  {
    id: 'vit',
    name: 'ViT-B/16',
    fullName: 'Vision Transformer Base 16',
    description: 'Modelo baseado em Transformer adaptado para visão computacional. Divide a imagem em patches e aplica self-attention para capturar relações globais.',
    architecture: 'Transformer',
    accuracy: 0.964,
    f1Score: 0.961,
    precision: 0.966,
    recall: 0.957,
    inferenceTime: 78,
    modelSize: 330.2,
    parameters: '86.6M',
    epochs: 50,
    color: '#F4A261',
    perClass: [
      { name: 'Ferrugem Asiática', accuracy: 0.98, f1: 0.97 },
      { name: 'Mancha-Alvo', accuracy: 0.95, f1: 0.94 },
      { name: 'Antracnose', accuracy: 0.95, f1: 0.94 },
      { name: 'Cercosporiose', accuracy: 0.96, f1: 0.96 },
      { name: 'Míldio', accuracy: 0.96, f1: 0.96 },
      { name: 'Folha Saudável', accuracy: 0.98, f1: 0.98 },
    ],
  },
  {
    id: 'ensemble',
    name: 'Ensemble',
    fullName: 'Ensemble (ResNet + EfficientNet + ViT)',
    description: 'Combinação dos três modelos por média ponderada das predições. Reduz a variância e aumenta a robustez do diagnóstico final.',
    architecture: 'Ensemble',
    accuracy: 0.978,
    f1Score: 0.976,
    precision: 0.979,
    recall: 0.973,
    inferenceTime: 185,
    modelSize: 502.3,
    parameters: '131.5M',
    epochs: '-',
    color: '#E63946',
    perClass: [
      { name: 'Ferrugem Asiática', accuracy: 0.99, f1: 0.99 },
      { name: 'Mancha-Alvo', accuracy: 0.97, f1: 0.96 },
      { name: 'Antracnose', accuracy: 0.97, f1: 0.96 },
      { name: 'Cercosporiose', accuracy: 0.98, f1: 0.97 },
      { name: 'Míldio', accuracy: 0.98, f1: 0.97 },
      { name: 'Folha Saudável', accuracy: 0.99, f1: 0.99 },
    ],
  },
];

function MetricBar({ value, maxValue = 1, color, label, suffix = '%' }) {
  const displayValue = suffix === '%' ? (value * 100).toFixed(1) : value;
  const percent = (value / maxValue) * 100;
  return (
    <Box sx={{ mb: 1.5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 700, color, fontSize: '0.8rem' }}>
          {displayValue}{suffix}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={Math.min(percent, 100)}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: '#E5E7EB',
          '& .MuiLinearProgress-bar': { borderRadius: 4, backgroundColor: color },
        }}
      />
    </Box>
  );
}

function ModelsPage() {
  const [view, setView] = useState('cards');
  const bestModel = models.reduce((a, b) => (a.accuracy > b.accuracy ? a : b));

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Cpu size={28} color="#2D6A4F" />
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Comparação de Modelos
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: 800 }}>
          Avaliação comparativa das arquiteturas de deep learning treinadas para classificação
          de doenças foliares em soja. Todos os modelos foram treinados utilizando o dataset
          PlantVillage com transfer learning e avaliados no mesmo conjunto de teste.
        </Typography>
      </Box>

      {/* Dataset Info */}
      <Card sx={{ p: 3, mb: 4, backgroundColor: 'rgba(45, 106, 79, 0.04)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Info size={18} color="#2D6A4F" />
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main' }}>
            Configuração Experimental
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {[
            { label: 'Dataset', value: 'PlantVillage (Soja)', detail: '~5.500 imagens' },
            { label: 'Divisão', value: '70/15/15', detail: 'Treino / Validação / Teste' },
            { label: 'Classes', value: '6', detail: '5 doenças + saudável' },
            { label: 'Resolução', value: '224x224px', detail: 'RGB normalizado' },
            { label: 'Otimizador', value: 'AdamW', detail: 'lr=1e-4, weight decay=0.01' },
            { label: 'Framework', value: 'PyTorch 2.x', detail: 'GPU NVIDIA T4' },
          ].map((item) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={item.label}>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                {item.label}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {item.value}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {item.detail}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Card>

      {/* View Toggle */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, v) => v && setView(v)}
          size="small"
        >
          <ToggleButton value="cards">Cards</ToggleButton>
          <ToggleButton value="table">Tabela</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {view === 'cards' ? (
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {models.map((model) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={model.id}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  borderTop: `4px solid ${model.color}`,
                  position: 'relative',
                }}
              >
                {model.id === bestModel.id && (
                  <Chip
                    icon={<Trophy size={14} />}
                    label="Melhor Acurácia"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      backgroundColor: '#FEF3C7',
                      color: '#D97706',
                      fontWeight: 600,
                      '& .MuiChip-icon': { color: '#D97706' },
                    }}
                  />
                )}
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, color: model.color }}>
                  {model.name}
                </Typography>
                <Chip
                  label={model.architecture}
                  size="small"
                  variant="outlined"
                  sx={{ mb: 2, borderColor: model.color, color: model.color }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, minHeight: 60 }}>
                  {model.description}
                </Typography>

                <MetricBar value={model.accuracy} color={model.color} label="Acurácia" />
                <MetricBar value={model.f1Score} color={model.color} label="F1-Score" />
                <MetricBar value={model.precision} color={model.color} label="Precisão" />
                <MetricBar value={model.recall} color={model.color} label="Recall" />

                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #E5E7EB' }}>
                  <Grid container spacing={1}>
                    <Grid size={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Clock size={14} color="#6B7280" />
                        <Typography variant="caption" color="text.secondary">Inferência</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {model.inferenceTime}ms
                      </Typography>
                    </Grid>
                    <Grid size={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <HardDrive size={14} color="#6B7280" />
                        <Typography variant="caption" color="text.secondary">Tamanho</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {model.modelSize}MB
                      </Typography>
                    </Grid>
                    <Grid size={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Layers size={14} color="#6B7280" />
                        <Typography variant="caption" color="text.secondary">Parâmetros</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {model.parameters}
                      </Typography>
                    </Grid>
                    <Grid size={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Zap size={14} color="#6B7280" />
                        <Typography variant="caption" color="text.secondary">Épocas</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {model.epochs}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <TableContainer component={Paper} sx={{ mb: 5 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgba(45, 106, 79, 0.06)' }}>
                <TableCell sx={{ fontWeight: 700 }}>Modelo</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Arquitetura</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Acurácia</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">F1-Score</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Precisão</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Recall</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Inferência</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Tamanho</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Parâmetros</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {models.map((model) => (
                <TableRow
                  key={model.id}
                  sx={{
                    ...(model.id === bestModel.id && {
                      backgroundColor: 'rgba(45, 106, 79, 0.04)',
                    }),
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 4, height: 24, borderRadius: 2, backgroundColor: model.color }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {model.name}
                      </Typography>
                      {model.id === bestModel.id && <Trophy size={14} color="#D97706" />}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Chip label={model.architecture} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    {(model.accuracy * 100).toFixed(1)}%
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    {(model.f1Score * 100).toFixed(1)}%
                  </TableCell>
                  <TableCell align="center">
                    {(model.precision * 100).toFixed(1)}%
                  </TableCell>
                  <TableCell align="center">
                    {(model.recall * 100).toFixed(1)}%
                  </TableCell>
                  <TableCell align="center">{model.inferenceTime}ms</TableCell>
                  <TableCell align="center">{model.modelSize}MB</TableCell>
                  <TableCell align="center">{model.parameters}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Per-Class Performance */}
      <Box sx={{ mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <BarChart3 size={22} color="#2D6A4F" />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Desempenho por Classe
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgba(45, 106, 79, 0.06)' }}>
                <TableCell sx={{ fontWeight: 700 }}>Doença</TableCell>
                {models.map((m) => (
                  <TableCell key={m.id} align="center" sx={{ fontWeight: 700 }} colSpan={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: m.color }} />
                      {m.name}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell />
                {models.map((m) => (
                  <React.Fragment key={m.id}>
                    <TableCell align="center" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Acc</TableCell>
                    <TableCell align="center" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>F1</TableCell>
                  </React.Fragment>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {models[0].perClass.map((cls, idx) => (
                <TableRow key={cls.name}>
                  <TableCell sx={{ fontWeight: 500 }}>{cls.name}</TableCell>
                  {models.map((m) => (
                    <React.Fragment key={m.id}>
                      <TableCell align="center" sx={{ fontSize: '0.85rem' }}>
                        {(m.perClass[idx].accuracy * 100).toFixed(1)}%
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: '0.85rem' }}>
                        {(m.perClass[idx].f1 * 100).toFixed(1)}%
                      </TableCell>
                    </React.Fragment>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Methodology Note */}
      <Card sx={{ p: 3, backgroundColor: 'rgba(45, 106, 79, 0.04)' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
          Nota Metodológica
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          Os modelos foram treinados utilizando transfer learning a partir de pesos pré-treinados no ImageNet.
          O data augmentation incluiu rotação aleatória, flip horizontal, variação de brilho e contraste.
          A avaliação foi realizada no conjunto de teste (15% dos dados) com métricas macro-averaged.
          O tempo de inferência foi medido em GPU NVIDIA T4 com batch size = 1.
          Os valores apresentados são representativos e serão atualizados com os resultados finais do treinamento.
        </Typography>
      </Card>
    </Container>
  );
}

export default ModelsPage;
