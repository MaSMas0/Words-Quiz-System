import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import Question from "../../components/Questions/Question.js";
import "./Practice.css";
import ProgressBar from "@ramonak/react-progress-bar";

const Practice = ({
  name,
  score,
  questions,
  setQuestions,
  setScore,
  setRank,
  setName,
  fetchQuestions,
}) => {
  // states
  const [options, setOptions] = useState([
    "verb",
    "noun",
    "adverb",
    "adjective",
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //handlers
  // to shuffle choices as it would be boring to have them in the same order again and again :D
  const handleShuffle = (op) => {
    return op.sort(() => Math.random() - 0.5);
  };

  // to change the shuffling as the question changes
  useEffect(() => {
    const choices = [...options];
    setOptions(handleShuffle(choices));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);

  // just in case the student refresh to have a new order for the questions and actually to render questions from backend
  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // in order to keep the name in case the student refresh the page
  useEffect(() => {
    setName(String(window.sessionStorage.getItem("name")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="practice">
      {questions && (
        <ProgressBar
          completed={(currentQuestion / questions.length) * 100}
          labelColor="#f5f0ef"
          width='99vw'
        />
      )}
      <span className="subtitle"> Welcome, {name} </span>

      {questions ? (
        <>
          <Question
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            correct={questions[currentQuestion]?.pos}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            setRank={setRank}
          />
        </>
      ) : (
        // if the questions hasnt been fetched yet then show progress circle till the questions render
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Practice;
