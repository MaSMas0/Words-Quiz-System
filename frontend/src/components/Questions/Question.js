import React, { useState } from "react";
import "./Question.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import axios from "axios";

const Questions = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
  setRank,
}) => {
  // states and its setters
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  // using useNavigate
  const navigate = useNavigate();

  // Handlers

  // checks if the selection is correct will set 'select' class  and if it is wrong it will set 'wrong' class which will alter its appearance
  const handleSelect = (option) => {
    if (selected === option && selected === correct) {
      return "select";
    } else if (selected === option && selected !== correct) {
      return "wrong";
    }
  };

  // check if the answer is correct then the score will be increased by 1 the logic of rank is handled by backend
  const handleCheck = (option) => {
    setSelected(option);
    if (option === correct) setScore(score + 1);
    setError(false);
  };

  // handle next has 3 cases :
  // 1- that the index is higher than 8 which means the user in the last question so a submit button is appearing and functionality will be :
  // a - using axios to post score to the backend and then the backend will handle the logic of calculating rank then respond with the rank then setRank will update rank
  // b - it will navigate to rank page
  // 2- that index is less than 8 and the user has selected a choice in that case will render next question in the array and empty selected for the new rendered question
  // 3- that the student didnt choose any of the choices in that case an error message will appear to let him that he needs to make a choice
  const handleNext = (event) => {
    if (currentQuestion > 8) {
      axios
        .post("http://localhost:3001/rank", {
          score, // just for info this is the new syntax and it is equal to score:score when key and value are same you can use this syntax
        })
        .then(function (response) {
          const { data } = response;
          setRank(data);
        })
        .catch(function (error) {});
      event.preventDefault();
      navigate("/score");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  // to quit in the middle of the practice  so it will reset current question to render it correctly next time student will enter also to empty question to render new random ones
  // and it will navigate to home page
  const handleQuit = () => {
    setCurrentQuestion(0);
    setQuestions();
    navigate("/");
  };

  return (
    <div className="question">
      <h1>Question {currentQuestion + 1}</h1>

      <div className="singleQuestion">
        <h2 style={{ color: "white" }}>
          What part of Speech does{" "}
          <strong
            style={{
              fontWeight: 900,
              fontSize: 34,
              color: "burlywood",
              textDecoration: "",
            }}
          >
            {questions[currentQuestion].word}
          </strong>{" "}
          belong to ?
        </h2>
        <div className="options"></div>
        {/* if error show error message  */}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {/* if there are options map it to have  4 buttons of choices and if selected then disaple them all  */}
        {options &&
          options.map((op) => (
            <button
              onClick={() => handleCheck(op)}
              className={`singleOption ${selected && handleSelect(op)}`} // this is to add a class depending on the condition if selected then handleSelect
              key={op}
              disabled={selected}
            >
              {op}
            </button>
          ))}
      </div>
      <div className="controls">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ width: 185 }}
          onClick={() => handleQuit()}
        >
          Quit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: 185 }}
          onClick={handleNext}
        >
          {currentQuestion > 8 ? "Submit" : "Next Question"}{" "}
          {/* if index > 8 which means last question show "Submit" on the button , if not show "Next Question" */}
        </Button>
      </div>
    </div>
  );
};

export default Questions;
