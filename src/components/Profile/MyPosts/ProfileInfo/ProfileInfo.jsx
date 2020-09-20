import React from 'react';
import logoReact from './../../../../logo192.png';
import mystyle from './ProfileInfo.module.css';
import Description from './Description';

const ProfileInfo = (props) => {
    
    return (
        <div className={mystyle.profile}>
            <div>{(!props.photos)? <img src={logoReact} />: <img className={mystyle.ava}src={props.photos.large} />}</div>
            <div className={mystyle.status}>
                {`Статус: ${props.aboutMe}`}
                {/*<div>{(!props.contacts)? 'facebook: ': <Description contacts={props.contacts} /> }</div>
            */}</div>
        </div>
    );
}

export default ProfileInfo;
