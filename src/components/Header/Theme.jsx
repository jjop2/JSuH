import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Theme.css'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faLeaf, faSeedling, faSnowman, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

const Theme = ({ themeList, setMode, setSeason }) => {
  return (
    <div className="theme">
      <div className="theme_wrap">
        <div className="theme_title">
          <p>{themeList['mode']}</p>
        </div>
        <div className="theme_content mode">
          <p>
            AUTO
          </p>
          <p>
            <FontAwesomeIcon icon={faSun} />
          </p>
          <p>
            <FontAwesomeIcon icon={faMoon} />
          </p>
        </div>
      </div>
      <div className="theme_wrap">
        <div className="theme_title">
          <p>{themeList['seasons']}</p>
        </div>
        <div className="theme_content">
          <p>
            <FontAwesomeIcon icon={faSeedling} />
          </p>
          <p>
            <FontAwesomeIcon icon={faUmbrellaBeach} />
          </p>
          <p>
            <FontAwesomeIcon icon={faLeaf} />
          </p>
          <p>
            <FontAwesomeIcon icon={faSnowman} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Theme;