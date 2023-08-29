import { useActionData } from "react-router-dom";
import "./Question.scss";
import { useState } from "react";
import axios from "axios";

function Question({ question, responses }) {
  const [currentQuestion, setCurrentQuestion] = useState();
  const [option, setOption] = useState();
  const [selected, setSelected] = useState(false);
  const handleChange = (e) => {
    setCurrentQuestion(e.target.name);
    setOption(e.target.id);
    setSelected(true);
    const questionResponse = {
      question: e.target.name,
      option: e.target.id,
    };
    axios
      .post("https://database-backend-brainstation-70fdd396b787.herokuapp.com/vote", questionResponse)
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  if (selected === false) {
    return (
      <>
        <h2 className="questions__question">{question}</h2>
        <div className="questions">
          <div className="questions__response">
            <input
              className="questions__input"
              type="radio"
              name={question}
              id={responses[0]}
              onClick={handleChange}
            />
            <label className="questions__label" htmlFor="test">
              {responses[0]}
            </label>
          </div>
          <div className="questions__response">
            <input
              className="questions__input"
              type="radio"
              name={question}
              id={responses[1]}
              onClick={handleChange}
            />
            <label className="questions__label" htmlFor="test">
              {responses[1]}
            </label>
          </div>
          <div className="questions__response">
            <input
              className="questions__input"
              type="radio"
              name={question}
              id={responses[2]}
              onClick={handleChange}
            />
            <label className="questions__label" htmlFor="test">
              {responses[2]}
            </label>
          </div>
          <div className="questions__response">
            <input
              className="questions__input"
              type="radio"
              name={question}
              id={responses[3]}
              onClick={handleChange}
            />
            <label className="questions__label" htmlFor="test">
              {responses[3]}
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default Question;
