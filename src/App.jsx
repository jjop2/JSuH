import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import MainPage from './features/MainPage/pages/MainPage';

function App() {
  const [lang, setLang] = useState('ko');
  const [mode, setMode] = useState('light');
  const [season, setSeason] = useState('spring');

  // 현재 시간, 날짜에 따라 setSeason 변경 추가

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-lang', lang);
    root.setAttribute('data-mode', mode);
    root.setAttribute('data-season', season);
    root.setAttribute('lang', lang);
  }, [lang, mode, season]);

  return (
    <div className={`language_${lang}`}>
      <Header
        lang={lang}
        setLang={setLang}
        setMode={setMode}
        setSeason={setSeason}
      />
      <MainPage
        lang={lang}
        season={season}
      />
      
    </div>
  )
}

export default App
