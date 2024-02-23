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

      <h1 className="mt-3 mb-2 text-center ">
        Explora y adentrate en el mundo de las peliculas
      </h1>

      <blockquote class="blockquote text-center">
        <p class="mb-3">You talkin' to me?</p>
        <footer class="blockquote-footer">
          Robert De Niro in <cite title="Source Title">Taxi Driver</cite>
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

      <div className="container mt-5">
        <p className="text-center">
          La pelicula es el unico recurso el cual se ha intentado privatizar a
          lo largo de los años. Pero todo al final cae por su mismo precio y nos
          permite ver una de las cosas más importantes de nuestra especie. Somos
          iguales en dos y solo dos cosas: En que nos vamos a morir y en que nos
          encantá el cine!
        </p>
      </div>

      <h3 className="text-center mt-5">Explora nuestro Catálogo</h3>
      <div className="subrayado container"></div>

      <div class="overflow-hidden text-center card-group">
        <div class="card align-items-center">
          <div className="prueba"></div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card align-items-center">
          <div className="prueba"></div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card align-items-center">
          <div className="prueba"></div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
