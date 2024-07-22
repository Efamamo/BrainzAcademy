import EachQuestion from "./EachQuestion";
import generalExam from "./questions/generalQuestions";
import Progress from "../Progress";
import { useEffect, useState } from "react";
import PaginationComponent from "../Pagination";
import { useSelector, useDispatch } from "react-redux";
import ModalComponent from "../Modal";
import { examActions } from "../../store/store";

function Exams() {
  const dispatch = useDispatch();
  const exam = useSelector((state) => state.exam);
  const { solvedCount, correctCount, timeLeft } = exam;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(generalExam.length / 6);

  const currentQuestions = generalExam.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //reset whenever person leaves page is
  useEffect(()=>{
    dispatch(examActions.reset())
  },[])


  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  
  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(examActions.decrementTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div
        className="timer"
        style={{ textAlign: "end", margin: "20px 0", fontWeight: "bold" }}
      >
        Time Remaining: {formatTime(timeLeft)}
      </div>
      <div className="exam-container">
        <div className="progress-indicator">
          <Progress count={solvedCount} total={generalExam.length} />
        </div>
        <div className="questions">
          {currentQuestions.map((question) => (
            <EachQuestion
              key={generalExam.indexOf(question) + 1}
              question={question}
              number={generalExam.indexOf(question) + 1}
            />
          ))}
        </div>
      </div>
      {currentPage === totalPages && (
        <button className="load-more-btn" onClick={handleSubmit}>
          Submit
        </button>
      )}
      <div className="pagination-container">
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {isModalOpen && (
        <ModalComponent
          solvedCount={solvedCount}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          correctCount={correctCount}
          totalQuestions={generalExam.length}
        />
      )}
    </>
  );
}

export default Exams;
