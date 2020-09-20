import React from 'react';
import mystyle from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let position = props.position;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return <div>
        {<div className={mystyle.pagination}>
            <span className={(position === 1) ? mystyle.locked : false}
                onClick={() => { if (position - 5 > 0) props.setStartPositionChange(position -= 5) }}>
                &#8592;</span>

            {props.getPageFive()}

            <span className={(props.totalUsersCount < (position + 4) * props.pageSize) ? mystyle.locked : false}
                onClick={() => { if (position + 5 < pagesCount) props.setStartPositionChange(position += 5) }}>
                &#8594;</span>
        </div>}

        {props.users.map(item => {
            return (
                <div className={mystyle.user}>
                    <div><NavLink to={'/profile/' + item.id}><div className={mystyle.avatarka}>
                        {item.photos.large != null ? <img src={item.photos.large} /> : <img src={userPhoto} alt="noPhoto" />}
                    </div></NavLink>
                        <div><button onClick={() => { props.follow(item.id) }}>
                            {item.followed ? 'Отписаться' : 'Подписаться'}
                        </button>
                        </div>
                    </div>
                    <div className={mystyle.information}>
                        <div className={mystyle.person}>
                            <div>{item.name}</div>
                            <div>{item.status}</div>
                        </div>
                        <div className={mystyle.location}>
                            <div>{'item.location.country'}</div>
                            <div>{'item.location.city'}</div>
                        </div>
                    </div>
                </div>)
        })}</div>
}

export default Users;
