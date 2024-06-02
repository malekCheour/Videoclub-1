import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entete from '../Entete/Entete';
import Accueil from '../Accueil/Accueil';
import ListeFilms from '../ListeFilms/ListeFilms';
import Film from '../Film/Film';
import './App.css';

function App() {
  const [usager, setUsager] = useState({ estLog: false, nom: '' });

  const login = (username) => {
    setUsager({ estLog: true, nom: username });
  };

  const logout = () => {
    setUsager({ estLog: false, nom: '' });
  };

  return (
    <Router>
      <Entete 
        onLogin={login} 
        onLogout={logout} 
        isLoggedIn={usager.estLog} 
        username={usager.nom} 
      />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/liste-films" element={<ListeFilms />} />
        <Route path="/film/:id" element={<Film isLoggedIn={usager.estLog} username={usager.nom} />} />
      </Routes>
    </Router>
  );
}

export default App;
