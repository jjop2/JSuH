import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import MainPage from './features/MainPage/pages/MainPage';
import Footer from './components/Footer/Footer';

function App() {
  const [currentLang, setCurrentLang] = useState('ko');
  const [currentMode, setCurrentMode] = useState('light');
  const [currentSeason, setCurrentSeason] = useState('winter');

  // 현재 시간, 날짜에 따라 setSeason 변경 추가

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-lang', currentLang);
    root.setAttribute('data-mode', currentMode);
    root.setAttribute('data-season', currentSeason);
    root.setAttribute('lang', currentLang);
  }, [currentLang, currentMode, currentSeason]);

  return (
    <div className={`language_${currentLang}`}>
      <Header
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        setCurrentMode={setCurrentMode}
        setSeason={setCurrentSeason}
      />
      <MainPage
        currentLang={currentLang}
        currentSeason={currentSeason}
      />
      <Footer />
      
    </div>
  )
}

export default App
