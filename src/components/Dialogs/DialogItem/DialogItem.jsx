import React from 'react';
import mystyle from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={mystyle.dialogItem}>
            <div className={mystyle.avatarka}></div>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
