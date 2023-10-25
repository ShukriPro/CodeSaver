import { Button } from "bootstrap";
import project1 from "../assets/project/1.gif";
import project2 from "../assets/project/2.gif";
import project3 from "../assets/project/3.gif";
import project4 from "../assets/project/4.gif";
import project5 from "../assets/project/5.gif";
import project6 from "../assets/project/6.gif";
import project7 from "../assets/project/7.gif";
import project8 from "../assets/project/8.gif";

const ProjectScreen = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "25rem",
    height: "auto",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  };
  return (
    <div style={containerStyle}>
      <h1>
        PROJECT <span className="highlight">:</span>
      </h1>
      <h4>React.js / Java / C#</h4>
      <div className="scrolling-container">
        <img
          style={imageStyle}
          src={project1}
          alt="project 1"
          className="scrolling-image"
        />
        <img
          style={imageStyle}
          src={project2}
          alt="project 2"
          className="scrolling-image"
        />
        <img
          style={imageStyle}
          src={project3}
          alt="project 3"
          className="scrolling-image"
        />
        <img
          style={imageStyle}
          src={project4}
          alt="project 4"
          className="scrolling-image"
        />
        <img
          style={imageStyle}
          src={project5}
          alt="project 5"
          className="scrolling-image"
        />
        <img
          style={imageStyle}
          src={project6}
          alt="project 6"
          className="scrolling-image"
        />
        <img
          style={imageStyle}
          src={project7}
          alt="project 7"
          className="scrolling-image"
        />
        <img
          style={imageStyle}
          src={project8}
          alt="project 8"
          className="scrolling-image"
        />
      </div>
      <a
        href="https://github.com/ShukriPro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.shields.io/badge/View_on-GitHub-blue?style=flat-square&logo=github"
          alt="View on GitHub"
        />
      </a>
    </div>
  );
};

export default ProjectScreen;
