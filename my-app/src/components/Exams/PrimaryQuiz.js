import { useSelector } from 'react-redux';
import Exam from './Exam';
import elementaryQuizQuestions from './questions/elementary';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function PrimaryQuiz() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isLoggedin) {
      navigate('/');
    }
  }, [auth.isLoggedin, navigate]);
  return <Exam generalExam={elementaryQuizQuestions} quitExam="primary" />;
}
export default PrimaryQuiz;
