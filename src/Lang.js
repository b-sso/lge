import React, { createContext, useContext, useState } from 'react';
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ko');
  const handleLangChange = (selected) => {
    setLang(selected);
  };

  return (
    <LanguageContext.Provider value={{ lang, handleLangChange }}>
      <div className={`${lang === 'en' ? 'lang-en' : 'lang-ko'}`}>
      {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

const stringTable = {
  en: {
    // navi
    monitoring: 'Monitoring',
    alarm: 'Alarm',
    setting: 'Setting',
    logout: 'Logout',
    login: 'Login',

    // header
    goWork: 'Go',
    outWork: 'Out',

    // dashboard
    lately: 'DOA',
    status: 'Status',
    room: 'Room',
    bay: 'Bay',
    roomEnding: 'Service ending soon',
    deviceError: 'Device Error',
    cases: 'case(s)',
    byRoom: 'by Room',
    byError: 'by Device Error',
    all: 'All',
    checkIn: 'Check-In',
    checkOut: 'Check-Out',
    hideRoom: 'Hidden Room(or Bay)',

    // comm
    commTitle: 'Common area',


    // login
    loginMailPlace: 'Please enter your email address',
    loginPwPlace: 'Please enter your password',
    loginGuide: 'If you have lost your password,',
    loginGuide2: 'please contact the administrator at',

    // setting
    loginTitle: 'Login intergration',
    loginConnected: 'Connected',
    settingComplete: 'Setup complete',
    settingLoginIdPlace: 'Enter your ID',
    settingLoginPwPlace: 'Enter your PW',
    modeTitle: 'Screen Theme',
    modeLight: 'Light mode',
    modeDark: 'Dark mode',
    lang: 'Language',
    langKo: 'Korean',
    viewType: 'View Type',
    viewTypeSingle: 'Single',
    viewTypeMixed: 'Mixed',
    viewSettings: 'Settings',
    roomAdd: 'add',
    roomSearchPlace: 'Search this view',
    roomLabelName: 'Name',
    roomLabelCreated: 'Created On',
    roomLabelEdit: 'Edit',
    roomLabelDelete: 'Delete',
    roomLabelOk: 'OK',

    // 공통
    setTemp: 'Set Temp.',
    currentTemp: 'Current Temp',
    setDimming: 'Dimming',
    labelMode: 'Mode',
    labelSpeed: 'Speed',
    labelBoostSpeed: 'Boost Speed',
    titleConditioner: 'Air Conditioner',
    titlePurifier: 'Air Purifier',
    titleStyler: 'Styler',
    titleProjector: 'Projector',
    titleLighting: 'Lighting',
    titleDisplay: 'Display',
    titleGolf: 'Golf Simulator',

    // robot
    titleRobot: 'Robots',
    robotUse: 'in use',
    robotCharging: 'charging',
    robotCheck: 'check',
    robotControl: 'Control',
    robotStatus: 'Status',
    robotStatusCharging: 'Charging',
    robotStatusStandby: 'Standby',
    robotStatusError: 'Need to check',
    robotStatusMoving: 'Moving to',
    robotStatusArrive: 'Arrive at',
    robotMove: 'Move',
    robotMoveGo: 'Select a Destination',
    
    // mode
    modeAuto: 'Auto',

    modeCool: 'Cool',
    modeAirDry: 'Air Dry',
    modeFan: 'Fan',
    modeHeat: 'Heat',
    modeAirClean: 'Air Clean',
    modeAroma: 'Aroma',
    modeEnergySaving: 'Energy Saving',

    modeClean: 'Clean',
    modeSleep: 'Sleep',
    modeSlient: 'Slient',
    modeHumidity: 'Humidity',
    modeCirculator: 'Circulator',
    modeBaby: 'Baby Care',
    modeDual: 'Dual Clean',
    modeFast: 'Fast',
    modeSmart: 'Smart',

    modeSpeedLow: 'Low',
    modeSpeedMiddle: 'Middle',
    modeSpeedHigh: 'High',
    modeSpeedTurbo: 'Turbo',

    modePicMall: 'Shopping Mall/QSR',
    modePicGeneral: 'General',
    modePicCorp: 'Government/Corporation',
    modePicTrans: 'Transportation',
    modePicEdu: 'Education',
    modePicHospital: 'Hospital',
    modePicExpert: 'Expert',
    modePicCelibration: 'Calibration',

    modeInputHdmi1: 'HDMI1',
    modeInputHdmi2: 'HDMI2',
    modeInputHdBase: 'HDBaseT',

    modeSoundStandard: 'Standrad',
    modeSoundCinema: 'Cinema',
    modeSoundClear: 'Clear Voice IV',
    modeSoundSports: 'Sports',
    modeSoundMusic: 'Music',
    modeSoundGame: 'Game',

  },
  ko: {
    // navi
    monitoring: '모니터링',
    alarm: '알림 현황',
    setting: '설정',
    logout: '로그아웃',
    login: '로그인',

    // header
    goWork: '출근',
    outWork: '퇴근',

    // dashboard
    lately: '접속일',
    status: '현황',
    room: '룸',
    bay: '오픈타석',
    roomEnding: '마감 임박',
    deviceError: '기기 오류',
    cases: '건',
    byRoom: '룸별',
    byError: '기기 오류별',
    all: '전체',
    checkIn: '입실',
    checkOut: '퇴실',
    hideRoom: '숨김 룸(or 타석)',

    // comm
    commTitle: '공용부',

    // robot
    titleRobot: '로봇',
    robotUse: '사용 중',
    robotCharging: '충전 중',
    robotCheck: '점검 중',
    robotControl: '제어하기',
    robotStatus: '현재 상황',
    robotStatusCharging: '충전 중',
    robotStatusStandby: '대기 중',
    robotStatusError: '점검 필요',
    robotStatusMoving: '이동 중',
    robotStatusArrive: '도착',

    // login
    loginMailPlace: '메일주소를 입력하세요',
    loginPwPlace: '비밀번호를 입력하세요',
    loginGuide: '승인된 계정으로 로그인 가능하며 로그인 불가 시 아래 메일로 문의하세요.',

    // setting
    loginTitle: '로그인 연동',
    loginConnected: '연결됨',
    settingComplete: '설정 완료',
    settingLoginIdPlace: 'ID를 입력하세요',
    settingLoginPwPlace: 'PW를 입력하세요',
    modeTitle: '화면 모드',
    modeLight: '라이트 모드',
    modeDark: '다크 모드',
    lang: '언어',
    langKo: '한국어',
    viewType: '보기 타입',
    viewTypeSingle: '개별',
    viewTypeMixed: '혼합',
    viewSettings: '설정',
    roomAdd: '등록',
    roomSearchPlace: '검색어를 입력하세요',
    roomLabelName: '이름',
    roomLabelCreated: '등록일',
    roomLabelEdit: '수정',
    roomLabelDelete: '삭제',
    roomLabelOk: '완료',
    robotMove: '이동',
    robotMoveGo: '목적지',

    // 공통
    setTemp: '희망 온도',
    currentTemp: '현재 온도',
    setDimming: '밝기',

    titleConditioner: '에어컨',
    titlePurifier: '공기청정기',
    titleStyler: '스타일러',
    titleProjector: '프로젝터',
    titleLighting: '조명',
    titleDisplay: '디스플레이',
    titleGolf: '골프 시뮬레이터',

    // mode
    modeAuto: '자동',

    modeCool: '냉방',
    modeAirDry: '제습',
    modeFan: '송풍',
    modeHeat: '난방',
    modeAirClean: '공기청정',
    modeAroma: '아로마',
    modeEnergySaving: 'Energy Saving',

    modeClean: '청정',
    modeSleep: '취임',
    modeSlient: '정음, 정소음',
    modeHumidity: '가습 청정',
    modeCirculator: '순환 청정',
    modeBaby: '베이비 케어',
    modeDual: '듀얼 청정',
    modeFast: '쾌속',
    modeSmart: '스마트',

    modeSpeedLow: '약풍',
    modeSpeedMiddle: '중풍',
    modeSpeedHigh: '강풍',
    modeSpeedTurbo: '파워',

    modePicMall: '쇼핑몰/QSR',
    modePicGeneral: '일반',
    modePicCorp: '정부/기업',
    modePicTrans: '교통',
    modePicEdu: '교육',
    modePicHospital: '병원',
    modePicExpert: '전문가',
    modePicCelibration: '색감보정',

    modeInputHdmi1: 'HDMI1',
    modeInputHdmi2: 'HDMI2',
    modeInputHdBase: 'HDBaseT',

    modeSoundStandard: '표준',
    modeSoundCinema: '영화관',
    modeSoundClear: '선명한 음성 IV',
    modeSoundSports: '스포츠',
    modeSoundMusic: '음악',
    modeSoundGame: '게임',
  }
};

export default stringTable;