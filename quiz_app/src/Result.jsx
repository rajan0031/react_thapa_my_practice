import React from "react";
import Button from "react-bootstrap/Button";

const Result = ({ score, onRestart }) => {
  return (
    <div className="result-container">
      <h2>Your Score: {score}</h2>
      <Button variant="primary" onClick={onRestart}>
        Restart Quiz
      </Button>
    </div>
  );
};

export default Result;
