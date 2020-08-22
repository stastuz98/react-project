import React from 'react';
import mystyle from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    return (
        <nav>
            <div className={mystyle.friend}></div>
            <a className={mystyle.friendItem} href='#'>{props.name}</a>
        </nav>
    )
}

const Friends = (props) => {
    let nameOfFriends = props.navBar.map(item => <NavLink to={'/friends/' + item.name}><Friend name={item.name} /></NavLink>)
    return (
        <nav className={mystyle.friends}>
            {nameOfFriends}
        </nav>
    );
}

export default Friends;
