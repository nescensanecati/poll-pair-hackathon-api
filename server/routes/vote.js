const express = require("express");
const router = express.Router();
const fs = require("fs");

function readQuestions() {
  const questions = fs.readFileSync(`./data/questions.json`);
  const parsedQuestions = JSON.parse(questions);
  return parsedQuestions;
}
router.post("/", (req, res) => {
  const questions = readQuestions();
  let currentQuestion = 0;
  let currentId = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].question === req.body.question) {
      currentQuestion = i;
    }
  }
  for (let i = 0; i < questions[currentQuestion].responses.length; i++) {
    if (questions[currentQuestion].responses[i] === req.body.option) {
      currentId = i;
      break;
    }
  }
  questions[currentQuestion].votes[currentId]++;
  fs.writeFileSync("./data/questions.json", JSON.stringify(questions));
  res.status(201).json("Hi");
});

module.exports = router;
