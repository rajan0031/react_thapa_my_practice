import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import questions from "./Question";
import button from "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userScore, setUserScore] = useState(0);

  const handleQuizStart = () => {
    setQuizStarted(true);
  };

  const handleQuizComplete = (score) => {
    setUserScore(score);
    setQuizCompleted(true);
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setUserScore(0);
  };

  return (
    <div className="app-container">
      {!quizStarted && !quizCompleted && (
        <div className="start-container">
          <h1>Welcome to the Quiz App</h1>
          <button variant="primary" onClick={handleQuizStart}>
            Start Quiz
          </button>
        </div>
      )}
      {quizStarted && !quizCompleted && (
        <Quiz onQuizComplete={handleQuizComplete} />
      )}
      {quizCompleted && (
        <Result score={userScore} onRestart={handleRestartQuiz} />
      )}
    </div>
  );
};

export default App;
