import "./Subject.css";
import maths from "../../../images/maths.jpeg";
function Subject() {
  return (
    <div className="subject-container">
      <div className="top-subject-container">
        <span className="number">1</span>
        <p className="subject-title">Mathematics</p>
      </div>
      <div className="subject-image">
        <img  src={maths} alt="maths" />
      </div>
      <button id='download-button'>Download Text Book</button>
    </div>
  );
}

export default Subject;
