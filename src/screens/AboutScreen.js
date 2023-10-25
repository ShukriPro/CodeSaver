import React from "react";
//import '../styles/AboutScreen.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutScreen() {
  const containerStyle = {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
  
      <div class="container card p-5 shadow-lg" >
      <h1>
        About{" "}
        <span className="highlight" style={{ fontWeight: "bold" }}>
          Me!
        </span>
      </h1>
        {" "}
        <div className="animated-text m-2 ">
          <p>
            Hello, I'm major in web developer and software engineer. I have
            completed projects using technologies such as React.js, C#, Python,
            Pug.js, Adonis.js, Xamarin, and ASP.NET. I also have experience
            working with databases like MySQL and SQL during my studies.
          </p>
        </div>
        <div className="animated-text m-2">
          <p>
            In high school, I discovered my passion for coding. After high
            school, I continued my studies at Te Pukenga, where I focused on Web
            Development and Software Engineering. This helped me learn more
            about creating websites and apps.
          </p>
        </div>
        <div className="animated-text m-2">
          <p>
            I've set a big goal for myself: to make 100 phone apps before I turn
            30. When I'm not working on digital projects, I enjoy playing
            badminton and biking. Interestingly, some of my best app ideas come
            to me during a bike ride!
          </p>
        </div>
        <div className="animated-text m-2">
          <p>
            Feel free to reach out to me on my{" "}
            <a
              href="https://www.linkedin.com/in/shukri-ali-b4887a236/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span style={{ fontWeight: "bold", color: "#0e76a8" }}>
                LinkedIn
              </span>{" "}
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0e76a8" }} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;
