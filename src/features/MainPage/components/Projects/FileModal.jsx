import { useState } from "react";
import "../../styles/FileModal.css";

const FileModal = ({ projectsData, index, setIsOpen }) => {
  const [currentFileIdx, setCurrentFileIdx] = useState(0);
  const projectFiles = projectsData[index].files;

  // 이전 사진 보기
  const prevFile = (e) => {
    e.stopPropagation();
    setCurrentFileIdx((prev) => (prev === 0 ? projectFiles.length - 1 : prev - 1));
  };

  // 다음 사진 보기
  const nextFile = (e) => {
    e.stopPropagation();
    setCurrentFileIdx((prev) => (prev === projectFiles.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="file_modal" onClick={() => setIsOpen(false)}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close_btn" onClick={() => setIsOpen(false)}>&times;</button>
        <button className="modal_nav_btn prev" onClick={prevFile}>&#60;</button>
        <div className="file_container">
          <img 
            src={projectFiles[currentFileIdx]} 
            alt={`project-file-${currentFileIdx}`}
          />
          <p className="file_counter">
            {currentFileIdx + 1} / {projectFiles.length}
          </p>
        </div>
        <button className="modal_nav_btn next" onClick={nextFile}>&#62;</button>
        
      </div>
    </div>
  );
};

export default FileModal;