import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './Lang';
import './assets/css/content.css';
import Header from './components/layout/Header';
import Navi from './components/layout/Navi';
import Comm from './components/layout/Comm';
import Dashboard from './pages/Dashboard';
import Setting from './pages/Setting';
import Robots from './pages/Robots';
import Login from './pages/Login';

function App() {
  const [mode, setMode] = useState('1');
  const handleModeChange = (selected) => {
    setMode(selected);
  };

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
      <LanguageProvider>
        <div className={`column-global ${mode === '2' ? 'mode-dark' : ''}`}>
          {isLoginPage ? (
          <Login />
          ) : (
          <>
            <div className="column-navi">
              <Navi />
            </div>
            <Header />
            <div className="column-content">
              <main>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/setting" element={<Setting mode={mode} onModeChange={handleModeChange} />} />
                  <Route path="/robots" element={<Robots />} />
                </Routes>
              </main>
            </div>
            <Comm />
          </>
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
