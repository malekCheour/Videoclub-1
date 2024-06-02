import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Entete.css';

function Entete({ onLogin, onLogout, isLoggedIn, username }) {
  const [usager, setUsager] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(usager);
    setUsager('');
  };

  return (
    <header className="entete">
      <h1>VidéoClub</h1>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/liste-films">Liste des Films</NavLink>
      </nav>
      {!isLoggedIn ? (
        <form className='connexion' onSubmit={handleLogin}>
          <input
            type="text"
            value={usager}
            onChange={(e) => setUsager(e.target.value)}
            placeholder="Nom d'utilisateur"
            required
          />
          <button type="submit">Connexion</button>
        </form>
      ) : (
        <div>
          <span>Bonjour, {username}</span>
          <button onClick={onLogout}>Déconnexion</button>
        </div>
      )}
    </header>
  );
}

export default Entete;
