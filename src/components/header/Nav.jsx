import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='navigation'>
            <ul className="navigation__nav">
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className="navigation__nav-link lien">Accueil</li>
                </NavLink>

                <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                    <li className="navigation__nav-link lien">About</li>

                </NavLink>
                {/* <NavLink to="" className="navigation__nav-link"></NavLink> */}
            </ul>
            
        </nav>
    );
};

export default Nav;