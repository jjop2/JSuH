import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Projects.css';
import { projectTags } from '../utils/projectRoleTag';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faImage, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import FileModal from './FileModal';
import { useState } from 'react';

const ProjectCard = ({ projectsData }) => {
  const [isOpen, setIsOpen] = useState(false);  // 파일 모달 open
  
  const projectCard = (project, i) => {
    // 깃허브/영상/사진/gif 있으면 해당 객체, 없으면 false
    const isGithub = project.link.github ? project.link.github : false;
    const isVideo = project.link.video ? project.link.video : false;
    const isFile = project.files ? project.files : false;

    return (
      <div className="project_card" key={i}>
        <div className="project_info_section">
          <h2 className="project_name">{project.name}</h2>
          <p className="project_description">{project.description}</p>
          <p className="project_date">{project.start_date} ~ {project.end_date}</p>
          <div className="project_tag_container">
            {project.tags.map((tag, i) => {
              return (
                <span
                  key={i}
                  className="project_tag"
                  style={{
                    backgroundColor: projectTags[tag]?.bg || "var(--sub-text)",
                    color: projectTags[tag]?.text || "var(--sub-bg)"
                  }}
                >
                  {tag}
                </span>
              )
            })}
          </div>
        </div>
        <div className="project_content_section">
          <div className="project_detail_box project_role">
            <h3>주요 역할 및 구현</h3>
            <ul>
              {project.roles.map((role, i) => {
                return <li key={i}>{role}</li>
              })}
            </ul>
          </div>
          <div className="project_detail_box project_achieve">
            <h3>트러블 슈팅 및 성과</h3>
            <ul>
              {project.achievements.map((acm, i) => {
                return (
                  <li key={i}>
                    <strong>{acm.keyword}</strong>: {acm.description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="project_link_section">
          {isGithub && (
            <a href={isGithub} target='_blank' className="link_button link_github">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          )}
          {isVideo && (
            <a href={isVideo} target='_blank' className="link_button link_default">
              <FontAwesomeIcon icon={faPlayCircle} /> 시연 영상
            </a>
          )}
          {isFile && (
            <p
              className="link_button link_default"
              onClick={() => setIsOpen(false)} // true
            >
              <FontAwesomeIcon icon={faImage} /> 사진 / GIF
            </p>
          )}
        </div>
        {isOpen && (
          <FileModal
            projectsData={projectsData}
            index={i}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    )
  }

  return projectsData.map((project, i) => projectCard(project, i));
};

export default ProjectCard;