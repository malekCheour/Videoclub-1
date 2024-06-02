import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Note from '../Note/Note';
import Commentaires from '../Commentaires/Commentaires';
import './Film.css';

function Film({ isLoggedIn, username }) {
  const { id } = useParams();
  const urlFilm = `https://four1f-tp1-malekcheour.onrender.com/api/films/${id}`;
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetch(urlFilm)
      .then((response) => response.json())
      .then((data) => setFilm(data));
  }, [urlFilm]);

  async function soumettreNote(note) {
    let aNotes;
  
    if (!film.notes) {
      aNotes = [note];
    } else {
      aNotes = [...film.notes, note];
    }
  
    const oOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notes: aNotes })
    };
  
    let putNote = await fetch(urlFilm, oOptions),
        getFilm = await fetch(urlFilm);
  
    Promise.all([putNote, getFilm])
      .then(response => response[1].json())
      .then(data => {
        setFilm(prevData => ({ ...prevData, notes: data.notes }));
      });
  }
  

  const handleAddComment = async (comment) => {
    const newComment = { user: username, commentaire: comment };
    const oOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ commentaires: [...film.commentaires, newComment] }),
    };
    await fetch(urlFilm, oOptions);
    setFilm((prevFilm) => ({ ...prevFilm, commentaires: [...prevFilm.commentaires, newComment] }));
  };

  return (
    <main className="film-main">
      <img className="film-image" src={`/img/${film?.titreVignette}`} alt={film?.titre} />
      <div className="film-details">
        <h2 className="film-title">{film?.titre}</h2>
        <p className="film-info">Réalisateur: {film?.realisation}</p>
        <p className="film-info">Année: {film?.annee}</p>
        <p className="film-description">{film?.description}</p>
        <p className="film-genres">
          {film.genres?.map((genre, index) => (
            <span key={index}>
              {genre}
              {index !== film.genres.length - 1 && ', '}
            </span>
          ))}
        </p>
        <Note notes={film.notes} onSubmitNote={soumettreNote} />
        {isLoggedIn && <CommentForm onAddComment={handleAddComment} />}
      </div>
      <Commentaires commentaires={film.commentaires} />
    </main>
  );
}

const CommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Ajouter un commentaire..."
      ></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Film;
