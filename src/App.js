import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';
import HistoryPage from './pages/HistoryPage';
import DiagnosisDetailPage from './pages/DiagnosisDetailPage';
import ApiDocsPage from './pages/ApiDocsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/chat" element={<Layout showFooter={false}><ChatPage /></Layout>} />
        <Route path="/historico" element={<Layout><HistoryPage /></Layout>} />
        <Route path="/historico/:id" element={<Layout><DiagnosisDetailPage /></Layout>} />
        <Route path="/api-docs" element={<Layout><ApiDocsPage /></Layout>} />
        <Route path="/sobre" element={<Layout><AboutPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
