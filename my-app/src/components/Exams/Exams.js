import EachQuestion from "./EachQuestion";
import generalExam from "./questions/generalQuestions";
import Progress from "../Progress";
import { useState } from "react";
import PaginationComponent from "../Pagination";

  // using redux take out solvedCount, correct count, answers
  // modal for the score
  // final styling

function Exams() {
  const [solvedCount, setSolvedCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(generalExam.length / 6);
  const [answers, setAnswers] = useState({});

  const currentQuestions = generalExam.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(answers);
  };

  const handleAnswerSelected = (isCorrect, questionIndex, ans) => {
    setSolvedCount(solvedCount + 1);
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    }
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: ans,
    }));
  };

  return (
    <>
      <div className="exam-container">
        <div className="progress-indicator">
          <Progress count={solvedCount} total={generalExam.length} />
        </div>
        <div className="questions">
          {currentQuestions.map((question) => (
            <>
              <EachQuestion
                answer={answers[generalExam.indexOf(question)]}
                key={generalExam.indexOf(question) + 1}
                question={question}
                number={generalExam.indexOf(question) + 1}
                setAnswerQuestion={handleAnswerSelected}
              />
            </>
          ))}
        </div>
      </div>
      <div className="pagination-container">
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default Exams;
