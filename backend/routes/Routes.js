import { Router } from "express";
import asyncHandler from "express-async-handler";
import { fetchdata, shuffle } from "../auxFunctions.js";

const router = Router();

// @desc   Fetch 10 words from TestData.json
// @route  GET /words
// @access Public Route
router.get(
  "/words",
  asyncHandler(async (req, res) => {
    const wordsData = (await fetchdata()).wordList;
    let words = [];
    do {
      const shuffled = shuffle(wordsData);
      words = shuffled.slice(0, 10);
    } while (
      !(
        words.some((e) => e.pos === "adjective") &&
        words.some((e) => e.pos === "adverb") &&
        words.some((e) => e.pos === "noun") &&
        words.some((e) => e.pos === "verb")
      )
    );
    res.json(words);
  })
);

// @desc   Fetch rank by score
// @route  GET /rank/:score
// @access Public Route
router.get(
  "/rank/:score",
  asyncHandler(async (req, res) => {
    const { score } = req.params;
    const scoreData = (await fetchdata()).scoresList;
    const scoreDataLength = scoreData.length;
    const filteredScore = scoreData.filter((e) => e < score);
    const filteredScoreLength = filteredScore.length;
    const Rank = Number(
      ((filteredScoreLength / scoreDataLength) * 100).toFixed(2)
    );
    res.json(Rank);
  })
);

export default router;
