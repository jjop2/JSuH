import '../styles/Skills.css';

const Skills = ({ navList }) => {
  // 추후 언어별 정리 & 따로 빼놓기
  const skillData = [
    { category: "Language", items: "Java, JavaScript, Python, SQL" },
    { category: "Frontend", items: "React, Vite, HTML/CSS, Redux, Axios" },
    { category: "Backend", items: "Flask, Spring Boot (JPA)" },
    { category: "Database", items: "MySQL" },
    { category: "AI", items: "YOLO, TensorFlow, Roboflow, OpenCV, Scikit-learn" },
    { category: "DevOps & Tool", items: "AWS, Docker, Vercel, Git & Github, Notion, Figma" }
  ];

  return (
    <div className="skill w-max p-50">
      <div className="skill_title">
        <h1>{navList['skills']}</h1>
      </div>
      <div className="skill_content">
        {skillData.map((skill, i) => (
          <div key={i} className="skill_row">
            <div className="skill_label">{skill.category}</div>
            <div className="skill_items">
              {skill.items.split(', ').map((item, i) => (
                <span key={i} className="skill_tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;