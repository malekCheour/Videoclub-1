import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListeFilms from './ListeFilms';
import TuileFilm from '../TuileFilm/TuileFilm';


describe('Composant ListeFilms', () => {

    // Objet fictif
    const mockFilm = {
        titre: 'Alien - Le 8Ã¨me passager',
        genres: ['Horreur', 'Science-fiction'],
        description: 'Un vaisseau spatial perÃ§oit une transmission non-identifiÃ©e comme un signal de dÃ©tresse...',
        titreVignette: 'alienle8emepassager.jpg',
        realisation: 'Ridley Scott',
        annee: 1979,
        notes: [3, 4, 5, 2, 1],
        commentaires: [
            { commentaire: 'Commentaire 1', auteur: 'admin' },
            { commentaire: 'Commentaire 2', auteur: 'admin' }
        ]
    };



    test('VÃ©rifie la prÃ©sence du titre', () => {





    });



    test('VÃ©rifie le click sur le titre', () => {





    });



    test('VÃ©rifie la tuile d\'un film', () => {





    });



    test('VÃ©rifie si les clÃ©s sont prÃ©sentes dans la rÃ©ponse', async () => {





    });
});