import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Menu, Leaf, MessageCircle, History, BookOpen, Info, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Como Funciona', path: '/#como-funciona' },
  { label: 'API', path: '/api-docs', icon: <BookOpen size={18} /> },
  { label: 'Sobre', path: '/sobre', icon: <Info size={18} /> },
];

const mobileNavItems = [
  { label: 'Inicio', path: '/', icon: <Leaf size={20} /> },
  { label: 'Chat', path: '/chat', icon: <MessageCircle size={20} /> },
  { label: 'Historico', path: '/historico', icon: <History size={20} /> },
  { label: 'API Docs', path: '/api-docs', icon: <BookOpen size={20} /> },
  { label: 'Sobre', path: '/sobre', icon: <Info size={20} /> },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = useNavigate();

  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: id } });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
          {isMobile && (
            <IconButton
              edge="start"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 1, color: 'text.primary' }}
            >
              <Menu size={24} />
            </IconButton>
          )}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'primary.main',
              flexGrow: 1,
              gap: 1,
            }}
          >
            <Leaf size={28} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'primary.dark',
                letterSpacing: '-0.02em',
              }}
            >
              Ze Praga
            </Typography>
          </Box>
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navLinks.map((item) => (
                <Button
                  key={item.path}
                  component={item.path.startsWith('/#') ? 'button' : Link}
                  to={item.path.startsWith('/#') ? undefined : item.path}
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    },
                    ...(location.pathname === item.path && {
                      color: 'primary.main',
                      fontWeight: 600,
                    }),
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                component={Link}
                to="/chat"
                variant="contained"
                color="primary"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  ml: 1,
                  borderRadius: 24,
                  px: 3,
                }}
              >
                Iniciar Diagnostico
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 280, pt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, pb: 2 }}>
            <Leaf size={24} color={theme.palette.primary.main} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.dark' }}>
              Ze Praga
            </Typography>
          </Box>
          <List>
            {mobileNavItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(45, 106, 79, 0.08)',
                      color: 'primary.main',
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ px: 2, pt: 2 }}>
            <Button
              component={Link}
              to="/chat"
              variant="contained"
              color="primary"
              fullWidth
              endIcon={<ArrowRight size={18} />}
              onClick={() => setDrawerOpen(false)}
            >
              Iniciar Diagnostico
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
