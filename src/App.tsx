import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ExplanationPage from './components/ExplanationPage';
import Chatbot from './components/Chatbot';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard />;
      case 'explanation':
        return <ExplanationPage />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {renderCurrentPage()}
        <Chatbot />
      </Layout>
    </ThemeProvider>
  );
}

export default App;