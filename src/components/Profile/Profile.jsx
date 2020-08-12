import React from 'react';
import logoReact from './../../logo192.png'
import mystyle from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={mystyle.profile}>
            <div><img src={logoReact} alt='logo' />+information</div>
            <MyPosts />
        </div>
    );
}

export default Profile;
