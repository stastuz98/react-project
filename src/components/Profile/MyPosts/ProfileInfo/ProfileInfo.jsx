import React from 'react';
import logoReact from './../../../../logo192.png';
import mystyle from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={mystyle.profile}><img src={logoReact} />+information</div>
    );
}

export default ProfileInfo;
