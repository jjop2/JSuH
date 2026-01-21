import About from '../components/About';
import Skills from '../components/Skills';
import { UITEXTS } from '../../../utils/uiTexts';
import '../styles/MainPage.css'
import Projects from '../components/Projects/Projects';

const MainPage = ({ lang, season }) => {
  const currentTexts = UITEXTS[lang];
  const navList = currentTexts.nav;
  const themeList = currentTexts.theme;

  return (
    <div className="main_page">
      <section className="page_section about_section" id="about">
        <About season={season} />
      </section>
      <section className="page_section skills_section" id="skills">
        <Skills navList={navList} />
      </section>
      <section className="page_section projects_section" id="projects">
        <Projects navList={navList} />
      </section>
    </div>
  );
};

export default MainPage;