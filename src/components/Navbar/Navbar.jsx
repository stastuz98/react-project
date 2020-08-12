import React from 'react';
import mystyle from './Navbar.module.css'

const Nav = () => {
    return (
        <nav className={mystyle.navbar}>
            <div>
                <a href='/profile'>Профиль</a><br></br>
                <a href='/dialogs'>Сообщения</a><br></br>
                <a href='/news'>Новости</a><br></br>
                <a href='/music'>Музыка</a><br></br><br></br>
                <a href='/settings'>Настройки</a></div>
        </nav>
    );
}

export default Nav;
