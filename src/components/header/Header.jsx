import React from 'react';
import Brand from './Brand';
import Nav from './Nav';

const Header = () => {
    return (
        <header className='header'>
            <Brand />
            <Nav />
        </header>
    );
};

export default Header;