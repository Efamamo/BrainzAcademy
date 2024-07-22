import Exam from "./Exam"
import generalExam from "./questions/generalQuestions"
function GeneralKnowledgeQuiz(){
    return <Exam generalExam={generalExam}/>
}
export default GeneralKnowledgeQuiz