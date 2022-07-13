import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Practice from "./Pages/Practice/Practice";
import Rank from "./Pages/Rank/Rank";
import { useState } from "react";
import axios from "axios";

function App() {
  //global states
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);
  const [rank, setRank] = useState(0);

  // fetch questions from the backend using axios
  const fetchQuestions = async () => {
    const { data } = await axios.get("/words");
    setQuestions(data);
  };
  return (
    //using router and routes  amd route from react-router-dom and passing the props
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
                setScore={setScore}
              />
            }
          />
          <Route
            path="/practice"
            element={
              <Practice
                name={name}
                questions={questions}
                score={score}
                setQuestions={setQuestions}
                setScore={setScore}
                setRank={setRank}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            path="/rank"
            element={
              <Rank
                name={name}
                rank={rank}
                fetchQuestions={fetchQuestions}
                setScore={setScore}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
