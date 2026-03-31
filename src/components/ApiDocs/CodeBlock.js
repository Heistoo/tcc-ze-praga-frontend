import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import { Copy, Check } from 'lucide-react';

function CodeBlock({ examples }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const languages = Object.keys(examples);
  const currentCode = examples[languages[activeTab]];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid #E5E7EB',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#1E293B',
          px: 1,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={(e, v) => setActiveTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 40,
            '& .MuiTab-root': {
              minHeight: 40,
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 500,
              fontSize: '0.8rem',
              textTransform: 'none',
              py: 0,
            },
            '& .Mui-selected': {
              color: '#FFFFFF !important',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#52B788',
            },
          }}
        >
          {languages.map((lang) => (
            <Tab key={lang} label={lang} />
          ))}
        </Tabs>
        <Tooltip title={copied ? 'Copiado!' : 'Copiar'}>
          <IconButton onClick={handleCopy} size="small" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        component="pre"
        sx={{
          backgroundColor: '#0F172A',
          color: '#E2E8F0',
          p: 2.5,
          m: 0,
          overflowX: 'auto',
          fontFamily: '"JetBrains Mono", "Fira Code", monospace',
          fontSize: '0.8rem',
          lineHeight: 1.7,
        }}
      >
        <code>{currentCode}</code>
      </Box>
    </Box>
  );
}

export default CodeBlock;
