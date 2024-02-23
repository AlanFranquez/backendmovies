import React from "react";
import "./App.css";

function Navbar() {
  return (
    <>
      <nav className="bg-transparent container navbar navbar-expand-lg">
        <div className="container-fluid">
          <h1>
            <a className="navbar-brand" href="#">
              MyMovies
            </a>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              {" "}
              {/* Añadiendo ml-auto para alinear a la derecha */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Loguearse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Registrarse
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
