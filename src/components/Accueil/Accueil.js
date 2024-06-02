import React from 'react';
import './Accueil.css';
import AccueilData from './Accueil.json';

function Accueil() {
  return (
    <main className="accueil-main">
      <h2 className="accueil-heading">Videclub</h2>
      <div>
        {AccueilData.map((paragraphe, index) => (
          <p key={index} className="accueil-paragraph">{paragraphe}</p>
        ))}
      </div>
    </main>
  );
}

export default Accueil;
