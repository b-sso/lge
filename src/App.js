import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider  } from './Lang';
import './assets/css/content.css';
import Header from './components/layout/Header';
import Navi from './components/layout/Navi';
import Comm from './components/layout/Comm';
import Popup from './components/Popup';
import Dashboard from './pages/Dashboard';
import Setting from './pages/Setting';
import Robots from './pages/Robots';
import Login from './pages/Login';
import Alarm from './pages/Alarm';

function App() {
  const [mode, setMode] = useState('light');
  const handleModeChange = (selected) => {
    setMode(selected);
  };

  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isDashboardPage = location.pathname === '/';
  
  return (
    <LanguageProvider>
      <div className={`column-global ${mode === 'light' ? 'mode-light' : 'mode-dark'}`}>
        {isLoginPage ? (
        <Login />
        ) : (
        <>
          <div className="column-navi">
            <Navi />
          </div>
          <Header popupProgress={openPopup} />
          <div className={`${isDashboardPage ? 'column-content-wrap' : 'column-content'}`}>
            <main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/setting" element={<Setting mode={mode} onModeChange={handleModeChange} />} />
                <Route path="/robots" element={<Robots />} />
                <Route path="/alarm" element={<Alarm />} />
              </Routes>
            </main>
          </div>
          {isDashboardPage && (<Comm />)}
        </>
        )}
        {isPopupVisible && (<Popup popupProgress={closePopup} />)}
      </div>
    </LanguageProvider>
  );
}

export default App;

