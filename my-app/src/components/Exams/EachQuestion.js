import { useEffect, useState } from "react";
import "./EachQuestions..css"

function EachQuestion({question, setAnswerQuestion, number, answer}){

    const [selectedAnswer, setSelectedAnswer] = useState('')
    var disable = false;

    function handleChange(e){
        setSelectedAnswer(e.target.value)
        setAnswerQuestion(selectedAnswer === question.correctAnswer, number-1,e.target.value)
    }

    useEffect(()=>{
        if (selectedAnswer === ""){ 
        setSelectedAnswer(answer || "");}
        else{
        }
    },[answer])

    if (selectedAnswer){
        disable = true
    }


    return (
    <>
    <h3 className="question">{number}. {question.question}</h3>
    <div className="answers"> {question.choices.map((c,i) => (
        <>
        <input id={question.question + i} onChange={handleChange} className="answer-input"  type='radio' name={question.question} value={c} disabled={disable}/>
        <label  className={ selectedAnswer !='' && c===selectedAnswer && c !== question.correctAnswer ? "answer-label wrong-answer" : (selectedAnswer !== "" && c === question.correctAnswer) ? "answer-label right-answer" : "answer-label "} htmlFor={question.question + i}>{c}</label>
        </>
    ))} </div>
    </>);
}


export default EachQuestion