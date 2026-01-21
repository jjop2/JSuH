import '../../styles/Projects.css'
import ProjectCard from './ProjectCard';
import { projectsData } from '../utils/projectsData';

const Projects = ({ navList }) => {
  return (
    <div className="project w-max">
      <div className="project_title p-50">
        <h1>{navList['projects']}</h1>
      </div>
      <div className="project_content">
        <ProjectCard projectsData={projectsData} />
      </div>
    </div>
  );
};

export default Projects;