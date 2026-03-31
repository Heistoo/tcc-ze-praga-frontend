import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function ApiSidebar({ sections, activeSection }) {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      sx={{
        width: 220,
        flexShrink: 0,
        position: 'sticky',
        top: 80,
        height: 'calc(100vh - 100px)',
        overflowY: 'auto',
        display: { xs: 'none', md: 'block' },
        borderRight: '1px solid #E5E7EB',
        pr: 1,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontWeight: 700,
          color: 'text.secondary',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          px: 2,
          pt: 1,
          pb: 1,
          display: 'block',
          fontSize: '0.7rem',
        }}
      >
        Navegacao
      </Typography>
      <List dense disablePadding>
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <ListItemButton
              key={section.id}
              onClick={() => handleClick(section.id)}
              sx={{
                borderRadius: 1.5,
                mx: 0.5,
                py: 0.8,
                px: 1.5,
                borderLeft: isActive ? '3px solid #2D6A4F' : '3px solid transparent',
                backgroundColor: isActive ? 'rgba(45, 106, 79, 0.06)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(45, 106, 79, 0.04)',
                },
              }}
            >
              <ListItemText
                primary={section.label}
                primaryTypographyProps={{
                  variant: 'body2',
                  sx: {
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'primary.main' : 'text.secondary',
                    fontSize: '0.82rem',
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}

export default ApiSidebar;
