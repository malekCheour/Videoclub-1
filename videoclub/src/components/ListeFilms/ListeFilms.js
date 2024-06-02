// import { useState, useEffect } from "react";
// import TuileFilm from "../TuileFilm/TuileFilm";
// import "./ListeFilms.css";
// import { Link } from "react-router-dom";

// function ListeFilms() {
//   const urlListeFilms = "https://four1f-tp1-malekcheour.onrender.com/api/films";
//   const [urlFiltre, setUrlFiltre] = useState(urlListeFilms);
//   const [listeFilms, setListeFilms] = useState([]);

//   useEffect(() => {
//     fetch(urlFiltre)
//       .then((reponse) => reponse.json())
//       .then((data) => {
//         setListeFilms(data);
//       });
//   }, [urlFiltre]);

//   const tuileFilm = listeFilms.map((film, index) => {
//     return (
//       <Link key={index} to={`/film/${film.id}`}>
//         <TuileFilm data={film} />
//       </Link>
//     );
//   });

//   function filtres(e) {
//     setUrlFiltre(`${urlListeFilms}?tri=realisation&direction=asc`);
//   }

//   return (
//     <main>
//       <ul>
//         <li onClick={filtres}> Réalisateur alphabétique (A-Z)</li>
//       </ul>
//       <div className="gridContainer">{tuileFilm}</div>
//     </main>
//   );
// }

// export default ListeFilms;



    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import TuileFilm from '../TuileFilm/TuileFilm';
    import Filtres from '../Filtres/Filtres';
    import './ListeFilms.css';

    function ListeFilms() {
        const urlListeFilms = "https://four1f-tp1-malekcheour.onrender.com/api/films";
        const [listeFilms, setListeFilms] = useState([]);
        const [filtreParams, setFiltreParams] = useState({ orderBy: 'titre', orderDirection: 'asc' });

        useEffect(() => {
            const fetchListeFilms = () => {
                const { orderBy, orderDirection } = filtreParams;
                const urlFiltre = `${urlListeFilms}?tri=${orderBy}&direction=${orderDirection}`;
                fetch(urlFiltre)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erreur lors de la récupération des films');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setListeFilms(data);
                    })
                    .catch(error => {
                        console.error('Erreur:', error);
                    });
            };

            fetchListeFilms();
        }, [filtreParams]);

        const handleFiltreClick = (orderBy, orderDirection) => {
            setFiltreParams({ orderBy, orderDirection });
        };

        const tuileFilm = listeFilms.map((film, index) => (
            <Link key={index} to={`/film/${film.id}`}>
                <TuileFilm data={film} />
            </Link>
        ));

        return (
            <main className="listeFilmsContainer">
                <ul className="filtresContainer">
                    <Filtres label="Titre alphabétique (A-Z)" orderBy="titre" orderDirection="asc" onFiltreClick={handleFiltreClick} isActive={filtreParams.orderBy === 'titre' && filtreParams.orderDirection === 'asc'} />
                    <Filtres label="Titre alphabétique (Z-A)" orderBy="titre" orderDirection="desc" onFiltreClick={handleFiltreClick} isActive={filtreParams.orderBy === 'titre' && filtreParams.orderDirection === 'desc'} />
                    <Filtres label="Réalisateur alphabétique (A-Z)" orderBy="realisation" orderDirection="asc" onFiltreClick={handleFiltreClick} isActive={filtreParams.orderBy === 'realisation' && filtreParams.orderDirection === 'asc'} />
                    <Filtres label="Réalisateur alphabétique (Z-A)" orderBy="realisation" orderDirection="desc" onFiltreClick={handleFiltreClick} isActive={filtreParams.orderBy === 'realisation' && filtreParams.orderDirection === 'desc'} />
                    <Filtres label="Par année (du plus récent)" orderBy="annee" orderDirection="desc" onFiltreClick={handleFiltreClick} isActive={filtreParams.orderBy === 'annee' && filtreParams.orderDirection === 'desc'} />
                    <Filtres label="Par année (du plus ancien)" orderBy="annee" orderDirection="asc" onFiltreClick={handleFiltreClick} isActive={filtreParams.orderBy === 'annee' && filtreParams.orderDirection === 'asc'} />
                </ul>
                <div className="gridContainer">{tuileFilm}</div>
            </main>
        );
    }

    export default ListeFilms;
