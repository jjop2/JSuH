import '../../styles/Projects.css'
import ProjectCard from './ProjectCard';
import { projectsData } from '../utils/projectsData';

const Projects = ({ navList }) => {
  return (
    <div className="project w-max section-h">
      <div className="project_title">
        <h1 className="section_title">{navList['projects']}</h1>
      </div>
      <div className="project_content">
        <ProjectCard projectsData={projectsData} />
      </div>
    </div>
  );
};

export default Projects;