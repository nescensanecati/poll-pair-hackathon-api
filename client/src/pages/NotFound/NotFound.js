import "./NotFound.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function NotFound() {
  const [selectedDogPhoto, setSelectedDogPhoto] = useState(null);

  useEffect(() => {
    const url = `https://dog.ceo/api/breeds/image/random`;

    axios
      .get(url)
      .then((response) => {
        setSelectedDogPhoto(response.data.message);
      })
      .catch((error) => {
        console.log("error calling axios", error);
      });
  }, []);

  if (selectedDogPhoto === null) {
    return <div>Loading...</div>;
  }

  return (
    <div class="notfound">
      <h1 className="notfound__h1">404</h1>
      <p className="notfound__p">Are you lost friend?</p>
      <p>Here is an image of a dog to cheer your day!</p>
      <picture>
        <img alt="" src={selectedDogPhoto} className="videos__image"></img>
      </picture>
    </div>
  );
}

export default NotFound;
