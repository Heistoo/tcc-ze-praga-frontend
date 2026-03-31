import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children, showFooter = true }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      {showFooter && <Footer />}
    </Box>
  );
}

export default Layout;
