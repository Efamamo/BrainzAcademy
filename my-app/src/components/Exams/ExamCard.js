import { Link } from 'react-router-dom';

function ExamCard({ name, description, image, link }) {
  return (
    <div className="exam-card">
      <div>
        <img className="exam-icon" src={image} />
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={link}>
          {' '}
          <button>Take The Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default ExamCard;
