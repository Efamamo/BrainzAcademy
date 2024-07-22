import React from "react";
import Modal from "react-modal";
import error from "../images/error.png";
import success from "../images/success.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { examActions } from "../store/store";

const ModalComponent = ({
  solvedCount,
  isModalOpen,
  closeModal,
  correctCount,
  totalQuestions,
}) => {
  const percentage = (correctCount / totalQuestions) * 100;

  const exam = useSelector((state) => state.exam);
  const timeLeft = exam.timeLeft;
  var content = <p></p>;
  const dispatch = useDispatch()

  if (timeLeft <= 0) {
    content = (
      <>
        <img style={{ width: "100px" }} src={error} alt="error icon" />
        <h2>Time Out!</h2>
        <p>
          You answered {correctCount} out of {totalQuestions} questions
          correctly.
        </p>
        <div style={{ width: "50%", margin: "20px auto" }}>
          <CircularProgressbar
            value={Math.round(percentage)}
            text={`${Math.round(percentage)}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: solvedCount === totalQuestions ? "green" : "red",
              trailColor: "rgba(255, 255, 255, 0.3)",
            })}
          />
        </div>
        <button
          onClick={()=>{
            closeModal()
            dispatch(examActions.setTimeLeft(2*60*60))
          }}
          style={{ marginTop: "20px", backgroundColor: "red" }}
        >
          Close
        </button>
      </>
    );
  } else if (solvedCount === totalQuestions) {
    content = (
      <>
        <img style={{ width: "50px" }} src={success} alt="success icon" />
        <h2>Quiz Completed!</h2>
        <p>
          You answered {correctCount} out of {totalQuestions} questions
          correctly.
        </p>
        <div style={{ width: "50%", margin: "20px auto" }}>
          <CircularProgressbar
            value={Math.round(percentage)}
            text={`${Math.round(percentage)}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: solvedCount === totalQuestions ? "green" : "red",
              trailColor: "rgba(255, 255, 255, 0.3)",
            })}
          />
        </div>
        <button
          onClick={closeModal}
          style={{ marginTop: "20px", backgroundColor: "red" }}
        >
          Close
        </button>
      </>
    );
  } else {
    content = (
      <>
        <img style={{ width: "100px" }} src={error} alt="error icon" />
        <h2>Quiz In Progress!</h2>
        <p>
          You have completed only {solvedCount} out of {totalQuestions}{" "}
          questions.
        </p>
        <h3>Please finish all the questions.</h3>
        <button
          onClick={closeModal}
          style={{ marginTop: "20px", backgroundColor: "red" }}
        >
          Close
        </button>
      </>
    );
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Final Score"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // transparent black backdrop
          padding: "10px",
          borderRadius: "10px",
          color: "white",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)", // transparent black backdrop
        },
      }}
    >
      <div style={{ textAlign: "center" }}>{content}</div>
    </Modal>
  );
};

export default ModalComponent;
