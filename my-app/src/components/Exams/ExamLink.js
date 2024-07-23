import exam from '../../images/exam.png'

function ExamLink({name}){
    return (
        <div className='exam-card'>
            <img className='exam-icon' src={exam}/>
            <h3>{name}</h3>
        </div>
    )
}

export default ExamLink