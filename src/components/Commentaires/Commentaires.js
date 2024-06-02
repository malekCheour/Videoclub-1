import React from 'react';
import './Commentaires.css';

const Commentaires = ({ commentaires }) => {
    return (
      <div className="commentaires-container">
        <h3>Avis</h3>
        {commentaires && commentaires.length > 0 ? (
          <ul>
            {commentaires.map((commentaire, index) => (
              <li key={index}>
                <strong>{commentaire.user}</strong>: {commentaire.commentaire}
              </li>  
            ))}
          </ul>
        ) : (
          <p>Aucun commentaire pour le moment.</p>
        )}
      </div>
    );
  };
  

export default Commentaires;