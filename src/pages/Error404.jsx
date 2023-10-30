import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <main className='main'>
            <h1 className="big-title">404</h1>
            <p className="para">Oups! La page que vous demandez n existe pas.</p>
            <NavLink to="/" href="">Retourner sur la page d'accueil</NavLink>
        </main>
    );
};

export default Error404;