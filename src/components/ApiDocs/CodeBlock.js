import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import { Copy, Check } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

function CodeBlock({ examples }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const isDark = useDarkMode();

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
        border: `1px solid ${isDark ? '#2D3B35' : '#E5E7EB'}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: isDark ? '#132218' : '#1E293B',
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
              color: isDark ? '#9CA3AF' : 'rgba(255,255,255,0.6)',
              fontWeight: 500,
              fontSize: '0.8rem',
              textTransform: 'none',
              py: 0,
            },
            '& .Mui-selected': {
              color: `${isDark ? '#E8F5E9' : '#FFFFFF'} !important`,
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
          <IconButton onClick={handleCopy} size="small" sx={{ color: isDark ? '#9CA3AF' : 'rgba(255,255,255,0.6)' }}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        component="pre"
        sx={{
          backgroundColor: isDark ? '#0D1B12' : '#0F172A',
          color: isDark ? '#D1E7D4' : '#E2E8F0',
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
