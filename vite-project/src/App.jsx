import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_URL)
      .then((response) => response.json())
      .then((json) => setdata(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <h1 className="text-center ">
        Explora y adentrate en el mundo de las peliculas
      </h1>

      <blockquote class="blockquote text-center">
        <p class="mb-3">You talkin' to me?</p>
        <footer class="blockquote-footer">
          Robert De Niro in<cite title="Source Title">Taxi Driver</cite>
        </footer>
      </blockquote>

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://static01.nyt.com/images/2020/01/24/arts/23momi-review01/23momi-review01-superJumbo-v2.jpg?quality=75&auto=webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images7.alphacoders.com/134/1343645.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets.teenvogue.com/photos/55b27d1c74dfbc51751ef467/16:9/w_1600,c_limit/deleted-movie-scenes.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {data !== null &&
        data.map((da) => {
          return <p key={da._id}>{da.name}</p>;
        })}
    </>
  );
}

export default App;
