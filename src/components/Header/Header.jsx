import React from 'react';
import logoReact from './../../logo192.png'
import mystyle from './Header.module.css'

const Header = () => {
    return (
        <header className={mystyle.header}>
            <img src={logoReact} alt='logo' />
        </header>
    );
}

export default Header;
