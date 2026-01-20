import About from '../components/About';
import Skills from '../components/Skills';
import { UITEXTS } from '../../../utils/uiTexts';
import '../styles/MainPage.css'

const MainPage = ({ lang, season }) => {
  const currentTexts = UITEXTS[lang];
  const navList = currentTexts.nav;
  const themeList = currentTexts.theme;

  return (
    <div className="main_page">
      <div className="page_section about_section" id="about">
        <About season={season} />
      </div>
      <div className="page_section skills_section" id="skills">
        <Skills navList={navList} />
      </div>
    </div>
  );
};

export default MainPage;