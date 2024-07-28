import React from "react";
import './Subjects.css'; // Import the CSS file
import download from '../../../images/downloading.png';

function Subject({ number, title, image }) {
  return (
    <div className="highschool-subject-container">
      <div className="highschool-subject-card">
        <div className="highschool-subject-title">
          <p>{title}</p>
        </div>
        <div className="highschool-subject-image-container">
          <img className="highschool-subject-image" src={image} alt={title} />
        </div>
    
      </div>
    </div>
  );
}

export default Subject;
