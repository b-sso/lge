import React, { createContext, useContext, useState } from 'react';
const LanguageContext = createContext();

const stringTable = {
  en: {
    monitoring: 'Monitoring',
    alarm: 'Alarm',
    setting: 'Setting',
    logout: 'Logout',
    login: 'Login',
    room: 'Room',
    bay: 'Bay',
    soon: 'Service ending soon',
    deviceError: 'Device Error',
    cases: 'case(s)',
    byRoom: 'by Room',
    byError: 'by Device Error',
    lang: 'Language',
    theme: 'Screen Theme',
    loginTitle: 'Login intergration',
    connected: 'Connected',
    toggleIn: 'In',
    toggleOut: 'Out',
  },
  ko: {
    monitoring: '모니터링',
    alarm: '알림 현황',
    setting: '설정',
    logout: '로그아웃',
    login: '로그인',
    room: '룸',
    bay: '오픈타석',
    soon: '마감 임박',
    deviceError: '기기 오류',
    cases: '건',
    byRoom: '룸별',
    byError: '기기 오류별',
    lang: '언어',
    theme: '테마',
    loginTitle: '로그인 연동',
    connected: '연결완료',
    toggleIn: '입실',
    toggleOut: '퇴실',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const handleLangChange = (newLang) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, handleLangChange }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default stringTable;