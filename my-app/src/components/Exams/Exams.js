import { Link } from "react-router-dom";
import ExamLink from "./ExamLink";
import { useEffect } from "react";
function Exams() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="quiz-page">
      <h1>Welcome to the Quiz Zone</h1>
      <p style={{ width: "80%", margin: "20px auto" }}>
        Get ready to challenge yourself with our
        exciting range of quizzes. Whether you're looking to test your general
        knowledge or level up through progressively tougher questions, we've got
        you covered. Dive in and see how high you can score! Choose from our
        Level-Based Quizzes.
      </p>
      <div className="exam-choosing-container">
        <div>
          <h2 className="exam-intro">Choose Your Education Level</h2>
          <div className="level-quiz">
            <ExamLink name="Elementary" />
            <ExamLink name="HighSchool" />
            <ExamLink name="Higher Level" />
          </div>
        </div>
        <h2 className="exam-intro">OR</h2>
        <div className="general-quiz">
          <Link to="/exams/examdesc">
            <ExamLink name="General Knowledge" />
          </Link>
          <div className="general-desc">
            <h3
              style={{
                textAlign: "center",
                margin: "20px",
              }}
            >
              This Includes
            </h3>
            <ul className="general-knowledge-quiz-topics">
              <li>Geography</li>
              <li>History</li>
              <li>Science</li>
              <li>Mathematics</li>
              <li>Litreture</li>
              <li>Sports</li>
              <li>Politics</li>
              <li>Economics</li>
              <li>Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exams;
