import EachQuestion from "./EachQuestion";
import generalExam from "./questions/generalQuestions";
import Progress from "../Progress";
import { useEffect, useState } from "react";
import PaginationComponent from "../Pagination";
import { useSelector } from "react-redux";
import ModalComponent from "../Modal";

  // modal for the score
  // final styling


function Exams() {

  const exam = useSelector((state) => state.exam)
  const solvedCount = exam.solvedCount
  const correctCount = exam.correctCount
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(generalExam.length / 6);

  const currentQuestions = generalExam.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  const handleSubmit = () =>{
    setIsModalOpen(true)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  function closeModal(){
    setIsModalOpen(false)
  }


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
                key={generalExam.indexOf(question) + 1}
                question={question}
                number={generalExam.indexOf(question) + 1}
              />
            </>
          ))}
        </div>
      </div>
      {currentPage === totalPages &&<button className="load-more-btn" onClick={handleSubmit}>Submit</button>}
      <div className="pagination-container">
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
 
      
      {isModalOpen && <ModalComponent solvedCount={solvedCount} isModalOpen={isModalOpen} closeModal={closeModal} correctCount={correctCount} totalQuestions={generalExam.length}/>}
    </>
  );
}

export default Exams;
