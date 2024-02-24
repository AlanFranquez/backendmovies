import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_URL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <h1 className="mt-3 mb-2 text-center ">
        Explora y adentrate en el mundo de las peliculas
      </h1>
      <div className="subrayado container mb-3"></div>

      <blockquote className="blockquote text-center">
        <p class="mb-3">You talkin' to me?</p>
        <footer className="blockquote-footer">
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
          <div className="carousel-item">
            <img
              src="https://images7.alphacoders.com/134/1343645.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.teenvogue.com/photos/55b27d1c74dfbc51751ef467/16:9/w_1600,c_limit/deleted-movie-scenes.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
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

      <div className="container mt-5">
        <div className="row">
          {data !== null &&
            data.map((da) => (
              <div key={da._id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={da.image}
                    className="card-img-top"
                    style={{ height: "600px", objectFit: "cover" }} // Establecer un tamaño fijo para la imagen
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{da.name}</h5>
                    <p className="card-text">{da.rating}</p>
                  </div>

                  <button>
                    <Link className="link" to={`/movies/${da.name}`}>
                      Ver detalles
                    </Link>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
