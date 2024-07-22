import React from 'react';

function Progress({ count,total }) {
  const percentage = (count / total) * 100;

  const progressBarStyle = {
    width: "600px",
    height: "30px",
    backgroundColor: "white",
    borderRadius: "5px",
    overflow: "hidden",
  };

  const progressStyle = {
    width: `${percentage}%`,
    height: "100%",
    backgroundColor: "blue",
    transition: "height 0.3s ease", 
  };

  return (
    <>
      <div style={progressBarStyle}>
        <div style={progressStyle}></div>
      </div>
      <h3>{percentage.toFixed(2)}%</h3>
    </>
  );
}

export default Progress;
