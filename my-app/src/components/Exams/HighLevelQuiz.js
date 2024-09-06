import { useSelector } from 'react-redux';
import Exam from './Exam';
import universityQuizQuestions from './questions/highlevel';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function HighLevelQuiz() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isLoggedin) {
      navigate('/');
    }
  }, [auth.isLoggedin, navigate]);
  return <Exam generalExam={universityQuizQuestions} quitExam="highlevel" />;
}
export default HighLevelQuiz;
