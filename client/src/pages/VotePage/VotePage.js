import "./VotePage.scss";
import Question from "../../components/Question/Question";
import axios from "axios";
import { useEffect, useState } from "react";

function VotePage() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    axios
      .get(`https://database-backend-brainstation-70fdd396b787.herokuapp.com/results`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log("error calling axios initially", error);
      });
  }, []);

  if (questions === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vote">
      <h1 className="vote__heading">Questions</h1>
      <form>
        {questions.map((question) => (
          <Question
            key={question.question}
            question={question.question}
            responses={question.responses}
          />
        ))}
      </form>
    </div>
  );
}

export default VotePage;
