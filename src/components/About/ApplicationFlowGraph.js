import React from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { UserRound, Camera, Upload, Brain, Search, Sparkles, FileCheck } from 'lucide-react';

const iconMap = {
  user: UserRound,
  camera: Camera,
  upload: Upload,
  brain: Brain,
  search: Search,
  sparkles: Sparkles,
  filecheck: FileCheck,
};

function FlowNode({ data }) {
  const Icon = iconMap[data.icon];

  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        border: '1px solid #E5E7EB',
        borderTop: `4px solid ${data.color}`,
        p: 2,
        width: 170,
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        position: 'relative',
      }}
    >
      <Handle type="target" position={Position.Left} style={{ visibility: 'hidden', width: 1, height: 1 }} />
      <Handle type="source" position={Position.Right} style={{ visibility: 'hidden', width: 1, height: 1 }} />
      <Handle type="target" position={Position.Top} style={{ visibility: 'hidden', width: 1, height: 1 }} id="top" />
      <Handle type="source" position={Position.Bottom} style={{ visibility: 'hidden', width: 1, height: 1 }} id="bottom" />
      {data.step && (
        <Box
          sx={{
            position: 'absolute',
            top: -12,
            left: -10,
            width: 26,
            height: 26,
            borderRadius: '50%',
            backgroundColor: data.color,
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            fontWeight: 700,
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          }}
        >
          {data.step}
        </Box>
      )}
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          backgroundColor: `${data.color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          mb: 1,
        }}
      >
        {Icon && <Icon size={22} color={data.color} />}
      </Box>
      <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.8rem', lineHeight: 1.3, mb: 0.5 }}>
        {data.label}
      </Typography>
      <Typography variant="caption" sx={{ color: '#6B7280', fontSize: '0.65rem', lineHeight: 1.3, display: 'block' }}>
        {data.description}
      </Typography>
    </Box>
  );
}

const nodeTypes = { flowNode: FlowNode };

const initialNodes = [
  {
    id: 'user',
    type: 'flowNode',
    position: { x: 0, y: 75 },
    data: { label: 'Produtor Rural', description: 'Qualquer produtor, de qualquer porte', icon: 'user', color: '#2D6A4F' },
  },
  {
    id: 'photo',
    type: 'flowNode',
    position: { x: 230, y: 0 },
    data: { label: 'Captura', description: 'Foto da folha pelo celular', icon: 'camera', color: '#52B788', step: '1' },
  },
  {
    id: 'upload',
    type: 'flowNode',
    position: { x: 460, y: 0 },
    data: { label: 'Envio', description: 'Via Chat ou API RESTful', icon: 'upload', color: '#52B788', step: '2' },
  },
  {
    id: 'deeplearning',
    type: 'flowNode',
    position: { x: 690, y: 0 },
    data: { label: 'Deep Learning', description: 'ResNet-50, EfficientNet, ViT', icon: 'brain', color: '#F4A261', step: '3' },
  },
  {
    id: 'classification',
    type: 'flowNode',
    position: { x: 690, y: 180 },
    data: { label: 'Classificação', description: 'Doença + confiança + severidade', icon: 'search', color: '#E63946', step: '4' },
  },
  {
    id: 'llm',
    type: 'flowNode',
    position: { x: 460, y: 180 },
    data: { label: 'LLM (GPT-4o)', description: 'Plano de ação personalizado', icon: 'sparkles', color: '#7C3AED', step: '5' },
  },
  {
    id: 'result',
    type: 'flowNode',
    position: { x: 230, y: 180 },
    data: { label: 'Diagnóstico', description: 'Resultado + recomendações', icon: 'filecheck', color: '#2D6A4F', step: '6' },
  },
];

const initialEdges = [
  { id: 'e0', source: 'user', target: 'photo', type: 'smoothstep', animated: true, style: { stroke: '#2D6A4F', strokeWidth: 2 }, label: 'Tira foto' },
  { id: 'e1', source: 'photo', target: 'upload', type: 'smoothstep', animated: true, style: { stroke: '#52B788', strokeWidth: 2 } },
  { id: 'e2', source: 'upload', target: 'deeplearning', type: 'smoothstep', animated: true, style: { stroke: '#52B788', strokeWidth: 2 } },
  { id: 'e3', source: 'deeplearning', target: 'classification', sourceHandle: 'bottom', targetHandle: 'top', type: 'smoothstep', animated: true, style: { stroke: '#F4A261', strokeWidth: 2 } },
  { id: 'e4', source: 'classification', target: 'llm', type: 'smoothstep', animated: true, style: { stroke: '#E63946', strokeWidth: 2 } },
  { id: 'e5', source: 'llm', target: 'result', type: 'smoothstep', animated: true, style: { stroke: '#7C3AED', strokeWidth: 2 } },
  { id: 'e6', source: 'result', target: 'user', type: 'smoothstep', animated: false, style: { stroke: '#2D6A4F', strokeWidth: 1.5, strokeDasharray: '6 3' }, label: 'Recebe diagnóstico' },
];

function ApplicationFlowGraph() {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <Box
      sx={{
        width: '100%',
        height: 450,
        borderRadius: 3,
        border: '1px solid #E5E7EB',
        backgroundColor: '#FAFDF7',
        overflow: 'hidden',
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnDrag={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#E5E7EB" gap={20} size={1} />
        <Controls
          showInteractiveButton={false}
          showZoom={true}
          showFitView={true}
          position="bottom-right"
        />
      </ReactFlow>
    </Box>
  );
}

export default ApplicationFlowGraph;
