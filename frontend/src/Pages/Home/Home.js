import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions, setScore }) => {
  // useNavigate to navigate to different pages
  let navigate = useNavigate();
  // states
  const [error, setError] = useState(false);

  // handlers
  // handle submit form if no name entered the error will appear and if there is name it will fetch questions from backend and navigate to practice page
  const handleSubmit = () => {
    if (!name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions();
      navigate("/practice", { replace: true });
    }
  };

  // to clear the name in the name state so it wouldnt enter with the previous user name and to clear the score state
  useEffect(() => {
    setName();
    setScore(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // to use sessionStorage to save the name incase the student refresh the page during practcing
  useEffect(() => {
    window.sessionStorage.setItem("name", name);
  }, [name]);

  return (
    <div className="content">
      <img src="/quiz_image.tiff" className="banner" alt="Practice_Image" />
      <div className="settings">
        <div className="setting_select">
          {/* if error then display a message stating that name should be provided */}
          {error && <ErrorMessage>Please Fill The Name Field</ErrorMessage>}
          <TextField
            label="Enter Your Name"
            variant="standard"
            style={{ marginBottom: 25 }}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          {/* get the event value target which
            is the name provided by the user and assign to name state using setName */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Practicing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
