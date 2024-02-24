import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MovieProfile() {
  const [data, setData] = useState(null);
  const { name } = useParams();
  console.log(import.meta.env.VITE_URL);

  useEffect(() => {
    fetch(import.meta.env.VITE_URL + `/search?name=${name}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json); // Verifica los datos recibidos
        setData(json);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <>
      <div className="container mt-5">
        {data != null &&
          data.map((da) => {
            return (
              <div key={da._id} className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src={da.image}
                    alt=""
                    style={{ maxWidth: "80%", height: "auto" }} // Establecer tamaño máximo y altura automática
                  />
                </div>
                <div className="col-md-6">
                  <p>
                    <b>Sinopsis</b>: {da.descripcion}
                  </p>
                  <p>
                    <b>Rating</b>: {da.rating}
                  </p>
                  <p>
                    <b>Año</b>: {da.year}
                  </p>

                  <br className="mt-2" />
                  <button>
                    <Link to={"/"}>Volver</Link>
                  </button>
                  <button>Agregar</button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default MovieProfile;
