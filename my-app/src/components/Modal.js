import React from "react";
import Modal from "react-modal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ModalComponent = ({
  solvedCount,
  isModalOpen,
  closeModal,
  correctCount,
  totalQuestions,
}) => {
  const percentage = (correctCount / totalQuestions) * 100;

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
          padding: "20px",
          borderRadius: "10px",
          color: "white",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)", // transparent black backdrop
        },
      }}
    >
      <div style={{ textAlign: "center" }}>
        {solvedCount === totalQuestions ? (
          <>
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
          </>
        ) : (
          <>
            <h2>Quiz In Progress!</h2>
            <p>
              You have completed {solvedCount} out of {totalQuestions}{" "}
              questions.
            </p>
            <h3>Please finish all the questions.</h3>
          </>
        )}

        <button onClick={closeModal} style={{ marginTop: "20px", backgroundColor:"red" }}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
