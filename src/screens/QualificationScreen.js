import React from 'react';
import '../styles/QualificationScreen.css';
import certificateImage1 from '../assets/Certificate/1.png';
import certificateImage2 from '../assets/Certificate/2.png';
import certificateImage3 from '../assets/Certificate/3.png';

function QualificationScreen() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '25rem',
    height: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: '10px'
  };
  return (
    <div style={containerStyle}>
      <h1>Qualifications  <span className="highlight">&</span> Education</h1>
      <div className="scrolling-container">
        <img style={imageStyle} src={certificateImage1} alt="Certificate 1" className="scrolling-image" />
        <img style={imageStyle} src={certificateImage2} alt="Certificate 2" className="scrolling-image" />
        <img style={imageStyle} src={certificateImage3} alt="Certificate 3" className="scrolling-image" />
        {/* Add more images here */}
      </div>
    </div>
  );
}

export default QualificationScreen;
