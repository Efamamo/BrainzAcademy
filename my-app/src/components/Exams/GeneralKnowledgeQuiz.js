import { useSelector } from 'react-redux';
import Exam from './Exam';
import generalExam from './questions/generalQuestions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function GeneralKnowledgeQuiz() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isLoggedin) {
      navigate('/');
    }
  }, [auth.isLoggedin, navigate]);
  return <Exam generalExam={generalExam} />;
}
export default GeneralKnowledgeQuiz;
