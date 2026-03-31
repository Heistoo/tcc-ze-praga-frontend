import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import HeroSection from '../components/Landing/HeroSection';
import HowItWorksSection from '../components/Landing/HowItWorksSection';
import DiseasesSection from '../components/Landing/DiseasesSection';
import TechnologySection from '../components/Landing/TechnologySection';

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  return (
    <Box>
      <HeroSection />
      <HowItWorksSection />
      <DiseasesSection />
      <TechnologySection />
    </Box>
  );
}

export default LandingPage;
