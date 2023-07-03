import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error404.css';

function Error404() {
  return (
    <div className="not-found-container">
      <h1>Error 404: Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p>
        Regresa a <Link to="/">Inicio</Link>
      </p>
    </div>
  );
}

export default Error404;
