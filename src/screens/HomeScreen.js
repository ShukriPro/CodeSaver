import React from 'react';
import '../styles/HomeScreen.css';


function HomeScreen() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  
  return (
    <div style={containerStyle}>
      <div className="animated-text"><h2><span className="highlight">Hello</span>, I'm</h2></div>
      <div className="animated-text"><h1>Shukri <span className="highlight">Ali</span></h1></div>
      <div className="animated-text"><h3>🌐 <span className="highlight">Web</span> / 📱 Developer</h3></div>
      <div className="animated-text"><h4>React.js , C#, Python </h4></div>
    </div>
  );
  
}

export default HomeScreen;
