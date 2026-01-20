import '../styles/Projects.css'

const Projects = ({ navList }) => {
  return (
    <div className="project w-max">
      <div className="project_title p-50">
        <h1>{navList['projects']}</h1>
      </div>
      <div className="project_content">
        <div className="project_card">
          <div className="project_info_section">
            <h2 className="project_name">프로젝트 제목</h2>
            <div className="project_tag">Frontend</div>
            <p className="project_date">2025.06 ~ 2026.01</p>
          </div>
          <div className="project_content_section">
            <div className="project_detail_box project_role">
              <h3>주요 역할 및 구현</h3>
              <ul>
                <li>내용1</li>
                <li>내용2</li>
              </ul>
            </div>
            <div className="project_detail_box project_achieve">
              <h3>트러블 슈팅 및 성과</h3>
              <ul>
                <li>성과1</li>
                <li>성과2</li>
              </ul>
            </div>
          </div>
          <div className="project_link_section">
            <a href="#" className="link_item">깃허브 주소</a>
            <a href="#" className="link_item">시연 영상</a>
            <a href="#" className="link_item">기능 움짤</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;