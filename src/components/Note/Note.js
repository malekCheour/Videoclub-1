import React, { useState } from 'react';
import './Note.css';

const Note = ({ notes, onSubmitNote }) => {
    const [selectedNote, setSelectedNote] = useState(null);

    const handleNoteChange = (e) => {
        setSelectedNote(Number(e.target.value));
    };

    const handleNoteSubmit = () => {
        if (selectedNote) {
            onSubmitNote(selectedNote);
        }
    };

    if (!notes) {
        return (
            <div className="note-container">
                <p>Aucune note disponible</p>
                <div className="note-selection">
                    <label>
                        Choisir une note:
                        <select value={selectedNote || ''} onChange={handleNoteChange}>
                            <option value="" disabled>--Sélectionner La note--</option>
                            {[1, 2, 3, 4, 5].map(note => (
                                <option key={note} value={note}>{note}</option>
                            ))}
                        </select>
                    </label>
                    <button onClick={handleNoteSubmit}>Soumettre</button>
                </div>
            </div>
        );
    }

    if (notes.length === 0) {
        return <p>Aucun vote enregistré</p>;
    }

    let sum = 0;
    for (let i = 0; i < notes.length; i++) {
        sum += notes[i];
    }

    const average = Math.round((sum / notes.length) * 100) / 100;

    return (
        <div className="note-container">
            <p>Moyenne : {average} ({notes.length} {notes.length > 1 ? 'votes' : 'vote'})</p>
            <div className="note-selection">
                <label>
                    Choisir une note:
                    <select value={selectedNote || ''} onChange={handleNoteChange}>
                        <option value="" disabled>--Sélectionner La note--</option>
                        {[1, 2, 3, 4, 5].map(note => (
                            <option key={note} value={note}>{note}</option>
                        ))}
                    </select>
                </label>
                <button onClick={handleNoteSubmit}>Soumettre</button>
            </div>
        </div>
    );
};

export default Note;
