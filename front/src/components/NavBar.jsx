import React from 'react';

const navBar = (props) => {
  return (<div className="">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="divImgLogo">
        <a className="navbar-brand" href="https://www.chicasentecnologia.org/"><img className="imgLogo" src="logo.webp" alt=""></img></a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto listMargin">
          <li className="nav-item">
            <a className="nav-link" href="https://www.chicasentecnologia.org/">Inicio <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Nosotrxs
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/sobre">Sobre</a>
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/prensa">Prensa</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Qué hacemos
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/programando-un-mundo-mejor">Programando un Mundo Mejor</a>
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/clubes">Clubes</a>
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/comunidad">Comunidad</a>
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/investigacion">Investigacion</a>
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/talleres-charlas-y-eventos">Talleres, charlas y eventos</a>
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/campanas">Campañas</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Socios
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/nuestros-socios">Nuestros socios</a>
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/reportes">Reportes</a>
              <a className="dropdown-item" href="https://www.chicasentecnologia.org/involucrate">Involucrarte</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addcandidate">
              Agregar Candidatos
             <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/adminView">
              Admin View
             <span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>);
};

export default navBar;
