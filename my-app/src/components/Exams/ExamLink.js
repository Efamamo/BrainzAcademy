import exam from '../../images/exam.png'

function ExamLink({name}){
    return (
        <div className='exam-card'>
            <img className='exam-icon' src={exam}/>
            <h2>{name}</h2>
        </div>
    )
}

export default ExamLink