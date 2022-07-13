import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Rank.css";

const Rank = ({ name, rank, fetchQuestions, setScore }) => {
  // useNavigate hook in order to navigate through pages
  const navigate = useNavigate();

  // in order if someone want to go to the /rank endpoint without having a name submitted from homepage to go back to home back
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  // to try the practice again it will fetch questions and navigate /practice  and to clear score in the score state
  const handleTryAgain = () => {
    setScore(0);
    fetchQuestions();
    navigate("/practice");
  };
  // to navigate to homepage
  const handleGoToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="result">
      <span className="rank">Final Rank : {rank}</span>{" "}
      {/* getting rank from backend the logic is handled in the backend */}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleGoToHomePage}
      >
        Go to homepage
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleTryAgain}
      >
        Try Again
      </Button>
    </div>
  );
};

export default Rank;
