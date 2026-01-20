import './styles/Header.css'
import { faGlobe, faPalette } from '@fortawesome/free-solid-svg-icons';
import { UITEXTS } from '../../utils/uiTexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Language from './Language';
import Theme from './Theme';

const Header = ({ lang='ko', setLang, setMode, setSeason }) => {
  const currentTexts = UITEXTS[lang];
  const navList = currentTexts.nav;
  const themeList = currentTexts.theme;

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  return (
    <header>
      <div className="header_container">
        <div className="header_left_box">
          <div className="home">
            <a href="/">JSuH</a>
          </div>
        </div>
        <div className="header_right_box">
          <div className="main_nav">
            <a href="#about">{navList['about']}</a>
            <a href="#skills">{navList['skills']}</a>
            <a href="#projects">{navList['projects']}</a>
            <a href="#certificates">{navList['certificates']}</a>
          </div>
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