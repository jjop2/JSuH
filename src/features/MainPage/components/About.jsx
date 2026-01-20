import '../styles/About.css'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = ({ season }) => {
  return (
    <div className="about max_w">
      <div className="about_cont_wrap">
        <div className="about_title">
          <p className="title_block">안녕하세요,</p>
          <p className="title_block">풀스택 & AI 개발자 장수현입니다</p>
        </div>
        <div className="about_description">
          <p className="desc_block">봄의 호기심으로 새로운 기술을 탐구하기 시작하고,</p>
          <p className="desc_block">가을의 결실을 맺어 사용자에게 편리함을 선물하는 과정을 좋아합니다.</p>
          <p className="desc_block">다양한 분야를 넘나들며 쌓아온 지식들은 저에게 사계절처럼 풍성한 자양분이 되었습니다. 단순히 코드를 짜는 것을 넘어, 누군가의 삶을 더 좋은 방향으로 바꾸는 실질적인 서비스를 구현하고자 합니다.</p>
        </div>
        <div className="about_contact">
          <p className="contact_block"><FontAwesomeIcon icon={faGithub} /> 깃허브주소</p>
          <p className="contact_block"><FontAwesomeIcon icon={faEnvelope} /> 이메일</p>
        </div>
      </div>
      <div className="about_pic_wrap">
        <div className="season_section">
          <p>now_season = "{season}"</p>
        </div>
        <div className="picture_section">
          <img src="" alt="봄1" />
        </div>
      </div>
    </div>
  );
};

export default About;