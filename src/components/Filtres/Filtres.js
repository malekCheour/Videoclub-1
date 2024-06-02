import React from 'react';
import './Filtres.css';

function Filtres({ label, orderBy, orderDirection, onFiltreClick, isActive }) {
    return (
        <li className={`filtreItem ${isActive ? 'active' : ''}`} onClick={() => onFiltreClick(orderBy, orderDirection)}>
            {label}
        </li>
    );
}

export default Filtres;
