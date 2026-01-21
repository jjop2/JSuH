import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Footer/styles/Footer.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GITHUB_URL = "https://github.com/jjop2";
const EMAIL = "jngsuh616@gmail.com";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container w-max">
        <div className="footer_contact">
          <a
            href={GITHUB_URL}
            target='_blank'
            className="contact_block github"
          >
            <FontAwesomeIcon icon={faGithub} /> {GITHUB_URL}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="contact_block"
          >
            <FontAwesomeIcon icon={faEnvelope} /> {EMAIL}
          </a>
        </div>
        <p className="footer_copyright">
          © 2026 Jang Suhyeon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;