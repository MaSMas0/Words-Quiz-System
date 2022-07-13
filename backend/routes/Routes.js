import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import { fetchdata, shuffle } from "../auxFunctions.js";

const router = Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// @desc   Fetch 10 words from TestData.json
// @route  GET /words
// @access Public Route
router.get(
  "/words",
  asyncHandler(async (req, res) => {
    const wordsData = (await fetchdata()).wordList;
    let words = [];
    do {
      const shuffled = shuffle(wordsData); // shuffle the list of words
      words = shuffled.slice(0, 10); // limit the words by 10 words per response
    } while (
      !(
        words.some((e) => e.pos === "adjective") &&
        words.some((e) => e.pos === "adverb") &&
        words.some((e) => e.pos === "noun") &&
        words.some((e) => e.pos === "verb")
      ) // words must have at least one adj one adverb one noun and one verb
    );
    res.json(words);
  })
);

// @desc   getting score from frontend and then response with the rank
// @route  POST /rank
// @access Public Route
router.post(
  "/rank",
  asyncHandler(async (req, res) => {
    const { score } = req.body;
    const scorepercent = score * 10; // as score is the number of corrects so for example 5 corrects * 10 = 50
    const scoreData = (await fetchdata()).scoresList; // fetching scoreslist to compare ranks
    const scoreDataLength = scoreData.length; // getting the length which is 30
    const filteredScore = scoreData.filter((e) => e < scorepercent); // getting scores less than the score achieved by the student
    const filteredScoreLength = filteredScore.length; // getting the number of how many scores below student score
    const Rank = Number(
      ((filteredScoreLength / scoreDataLength) * 100).toFixed(2) // how many scores below student score / allscoreList  %  and to round it to hundredth 26.67
    );
    res.json(Rank); // so when the front end post data of score the backend will respond with Rank
  })
);

export default router;
