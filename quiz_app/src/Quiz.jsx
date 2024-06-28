import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import questions from "./Question";

const Quiz = ({ onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.ans) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(null);
    } else {
      onQuizComplete(score);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="quiz-container">
      <h2>{currentQuestion.ques}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            {option}
            <Button
              variant="outline-primary"
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null}
            >
              Select
            </Button>
          </li>
        ))}
      </ul>
      {selectedOption !== null && !isLastQuestion && (
        <Button variant="primary" onClick={handleNextQuestion}>
          Next Question
        </Button>
      )}
    </div>
  );
};

export default Quiz;
