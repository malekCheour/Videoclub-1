import React from 'react';
import { Link } from 'react-router-dom';
import "./TuileFilm.css";

function TuileFilm({ data }) {
  return (
    <div className="griditem">
      <Link to={`/film/${data.id}`}>
        <img className="imagetuile" src={`img/${data.titreVignette}`} alt={data.titre} />
        <h2>{data.titre}</h2>
        <p>realisateur: {data.realisation}</p>
        <p>annee: {data.annee}</p>
      </Link>
    </div>
  );
}

export default TuileFilm;
