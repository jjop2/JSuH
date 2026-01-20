import About from '../components/About';
import '../styles/MainPage.css'

const MainPage = ({ lang, season }) => {
  return (
    <div className="main_page">
      <div className="page_section about_section">
        <About season={season} />
      </div>
    </div>
  );
};

export default MainPage;