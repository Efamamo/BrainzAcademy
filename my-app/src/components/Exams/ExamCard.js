import { Link } from "react-router-dom";

function ExamCard({ name, description, image }) {
  return (
    <div className="exam-card">
      <img className="exam-icon" src={image} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to="/exams/examdesc">
          {" "}
          <button>Take The Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default ExamCard;
