import { useSelector } from 'react-redux';
import Exam from './Exam';
import highSchoolQuizQuestions from './questions/highschool';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function HighSchoolQuiz() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isLoggedin) {
      navigate('/');
    }
  }, [auth.isLoggedin, navigate]);
  return <Exam generalExam={highSchoolQuizQuestions} quitExam="highschool" />;
}
export default HighSchoolQuiz;
