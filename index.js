require("dotenv").config();
const PORT = process.env.PORT;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
const express = require("express");
const app = express();
const fs = require("fs");
const vote = require("./routes/vote");
const cors = require("cors");
const crypto = require("crypto");

function readUsersFile() {
  const userList = fs.readFileSync(`./data/data.json`);
  const parsedData = JSON.parse(userList);
  return parsedData;
}

function readQuestions() {
  const questions = fs.readFileSync(`./data/questions.json`);
  const parsedQuestions = JSON.parse(questions);
  return parsedQuestions;
}

app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);

app.use(express.json());

app.use("/vote", vote);

app.get("/", (req, res) => {
  const questions = readQuestions();
  let result = questions.map((question) => {
    return {
      question: question.question,
      responses: question.responses,
    };
  });
  res.send(result);
});

app.get("/details", (req, res) => {
  const questions = readQuestions();
  res.send(questions);
});

app.listen(PORT, () => {
  console.log("Server in running on PORT " + PORT);
});

app.post("/", (req, res) => {
  const newUser = {
    id: crypto.randomUUID(),
  };
  const users = readUsersFile();
  users.push(newUser);
  fs.writeFileSync("./data/data.json", JSON.stringify(users));
  res.status(201).json(newUser);
});
