import EachQuestion from "./EachQuestion";
import generalExam from "./questions/generalQuestions";
import Progress from "../Progress";
import { useState } from "react";
import PaginationComponent from "../Pagination";
import { useSelector } from "react-redux";

  // using redux take out solvedCount, correct count, answers
  // modal for the score
  // final styling


function Exams() {

  const exam = useSelector((state) => state.exam)
  console.log(exam)
  const solvedCount = exam.solvedCount
  const correctCount = exam.correctCount

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(generalExam.length / 6);

  const currentQuestions = generalExam.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <>
      <div className="exam-container">
        <div className="progress-indicator">
          <Progress count={solvedCount} total={generalExam.length} />
          <h3>{correctCount}</h3>
        </div>
        <div className="questions">
          {currentQuestions.map((question) => (
            <>
              <EachQuestion
                key={generalExam.indexOf(question) + 1}
                question={question}
                number={generalExam.indexOf(question) + 1}
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
