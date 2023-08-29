import "./HomePage.scss";
import axios from "axios";

function HomePage() {
  const handleNewId = () => {
    axios
      .post("https://database-backend-brainstation-70fdd396b787.herokuapp.com/")
      .then()
      .catch((err) => {
        console.log(err);
      });
    alert("User ID has been created");
  };
  return (
    <div className="home">
      <h1 className="home__heading">Poll Brothers</h1>
      <p className="home__paragraph">
        Thank you for taking the time to participate
      </p>
      <div className="home__container">
        <div className="home__started">
          <h2 className="home__started-heading">Welcome Back!</h2>
        </div>
        <form className="home__form">
          <div className="home__form-container">
            <input
              className="home__form-input"
              placeholder="Enter your ID"
            ></input>
          </div>
          <div className="home__button-container">
            <button className="home__button">Login</button>
            <button onClick={handleNewId} className="home__button">
              Generate an ID
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
