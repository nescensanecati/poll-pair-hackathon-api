import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";

function DataLoop() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const url = `https://database-backend-brainstation-70fdd396b787.herokuapp.com/results`;

      axios
        .get(url)
        .then((response) => {
          setQuestions(response.data);
        })
        .catch((error) => {
          console.log("error calling axios", error);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (questions === null) {
    return <div>Loading...</div>;
  }

  function handleDataLoop() {
    let result = [];
    for (let index = 0; index < questions.length; index++) {
      let tempQuestion = questions[index];
      let tempResponses = tempQuestion.responses;
      let tempVotes = tempQuestion.votes;
      let tempTitle = tempQuestion.question;
      let tempKey = tempQuestion.responses[index];
      let data = {
        options: {
          maintainAspectRatio: false,
        },
        labels: [
          tempResponses[0],
          tempResponses[1],
          tempResponses[2],
          tempResponses[3],
        ],
        datasets: [
          {
            label: tempTitle,
            data: [tempVotes[0], tempVotes[1], tempVotes[2], tempVotes[3]],
            backgroundColor: ["blue", "red"],
            borderColor: ["white"],
            borderWidth: 1,
          },
        ],
      };
      result.push(
        <div className="results__container" key={tempKey}>
          <Bar data={data} />
        </div>
      );
    }
    return result;
  }

  return <>{handleDataLoop()}</>;
}

export default DataLoop;
