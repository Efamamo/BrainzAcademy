import EachQuestion from './EachQuestion';
import Progress from '../Progress';
import { useEffect, useState } from 'react';
import PaginationComponent from '../Pagination';
import { useSelector, useDispatch } from 'react-redux';
import ModalComponent from '../Modal';
import { examActions } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import quit from '../../images/icons/power-off-svgrepo-com (2).svg';

function Exam({ generalExam, quitExam }) {
  const dispatch = useDispatch();
  const exam = useSelector((state) => state.exam);
  const { solvedCount, correctCount, timeLeft } = exam;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(generalExam.length / 6);
  const navigate = useNavigate();

  const currentQuestions = generalExam.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const restart = () => {
    setCurrentPage(1);
    dispatch(examActions.reset());
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //reset whenever person leaves page is
  useEffect(() => {
    return () => {
      dispatch(examActions.reset());
    };
  }, [dispatch]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    console.log('load');
  }, []);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        dispatch(examActions.decrementTime());
      } else {
        clearInterval(timer);
        handleSubmit();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, dispatch, handleSubmit]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const quitQuiz = () => {
    navigate(`/exams/${quitExam}-desc`, { replace: true });
  };

  return (
    <div className="upper-exam-container">
      <div className="timer">Time Remaining: {formatTime(timeLeft)}</div>
      <div onClick={quitQuiz} className="quit">
        <img style={{ width: '30px' }} src={quit} alt="quit icon" />{' '}
        <p>Quit Exam</p>
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
          restart={restart}
          solvedCount={solvedCount}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          correctCount={correctCount}
          totalQuestions={generalExam.length}
        />
      )}
    </div>
  );
}

export default Exam;
