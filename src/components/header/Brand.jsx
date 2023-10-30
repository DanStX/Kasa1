import React from 'react';
import { NavLink } from 'react-router-dom';

const Brand = () => {
    return (
        <div className="logo">
            {/* les img sont le dossier public */}
            <NavLink to="/">
                
                <img src="./LOGO.png" alt="" className="brand__logo" />
            </NavLink>
        </div>
    );
};

export default Brand;