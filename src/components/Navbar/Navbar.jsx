import React from 'react';
import mystyle from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends'

const Nav = (props) => {
    return (
        <nav className={mystyle.navbar}>
            <div>
                <NavLink to='/profile' activeClassName={mystyle.active}>Профиль</NavLink><br />
                <NavLink to='/dialogs' activeClassName={mystyle.active}>Сообщения</NavLink><br />
                <NavLink to='/news' activeClassName={mystyle.active}>Новости</NavLink><br />
                <NavLink to='/music' activeClassName={mystyle.active}>Музыка</NavLink><br /><br />
                <NavLink to='/settings' activeClassName={mystyle.active}>Настройки</NavLink><br />
                <NavLink to='/users' activeClassName={mystyle.active}>Пользователи</NavLink>
                <NavLink to='/friends' className={mystyle.friends} activeClassName={mystyle.active}>Друзья</NavLink>
            </div>
            <Friends navBar={props.navBar}/>
        </nav>
    );
}

export default Nav;
