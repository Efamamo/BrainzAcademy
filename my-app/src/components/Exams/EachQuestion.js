import { useEffect, useReducer, useState } from "react";
import "./EachQuestions..css";
import { useSelector, useDispatch } from "react-redux";
import { examActions } from "../../store/store";

function EachQuestion({ question, number }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const exam = useSelector((state) => state.exam)
  const dispatch = useDispatch();
  const answers = exam.answers;
  var disable = false;

  function handleChange(e) {
    setSelectedAnswer(e.target.value);
    dispatch(examActions.increamentCount());
    if (e.target.value === question.correctAnswer) {
      dispatch(examActions.increamentCorrectCount());
    }
    dispatch(examActions.addAnswer({key: number-1, value: e.target.value}))
  }

  useEffect(() => {
    if (selectedAnswer === "") {
      setSelectedAnswer(answers[number - 1] || "");
    } else {
    }
  }, [answers]);

  if (selectedAnswer) {
    disable = true;
  }

  return (
    <>
      <h3 className="question">
        {number}. {question.question}
      </h3>
      <div className="answers">
        {" "}
        {question.choices.map((c, i) => (
          <>
            <input
              id={question.question + i}
              onChange={handleChange}
              className="answer-input"
              type="radio"
              name={question.question}
              value={c}
              disabled={disable}
            />
            <label
              className={
                selectedAnswer != "" &&
                c === selectedAnswer &&
                c !== question.correctAnswer
                  ? "answer-label wrong-answer"
                  : selectedAnswer !== "" && c === question.correctAnswer
                  ? "answer-label right-answer"
                  : !disable
                  ? "active answer-label"
                  : "answer-label"
              }
              htmlFor={question.question + i}
            >
              {c}
            </label>
          </>
        ))}{" "}
      </div>
    </>
  );
}

export default EachQuestion;
