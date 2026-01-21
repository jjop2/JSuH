import './styles/Header.css'
import { faGlobe, faPalette } from '@fortawesome/free-solid-svg-icons';
import { UITEXTS } from '../../utils/uiTexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Language from './Language';
import Theme from './Theme';

const Header = ({ lang='ko', setLang, setMode, setSeason }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  
  const currentTexts = UITEXTS[lang];
  const navList = currentTexts.nav;
  const themeList = currentTexts.theme;
  const sectionIds = Object.keys(navList);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [lang]);

  return (
    <header>
      <div className="header_container">
        <div className="header_left_box">
          <div className="home">
            <a href="/">JSuH</a>
          </div>
        </div>
        <div className="header_right_box">
          <nav className="main_nav">
            {sectionIds.map((id) => (
              <a 
                key={id}
                href={`#${id}`}
                className={activeId === id ? 'active' : ''}
              >
                {navList[id]}
              </a>
            ))}
          </nav>
          <div className="sub_nav">
            <div className="sub_nav_icon">
              <p onClick={() => setIsThemeOpen(!isThemeOpen)}>
                <FontAwesomeIcon icon={faPalette} />
              </p>
              {isThemeOpen && <Theme themeList={themeList} setMode={setMode} setSeason={setSeason} />}
            </div>
            <div className="sub_nav_icon">
              <p onClick={() => setIsLangOpen(!isLangOpen)}>
                <FontAwesomeIcon icon={faGlobe} />
              </p>
              {isLangOpen && <Language />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;