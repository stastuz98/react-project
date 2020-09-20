import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props.profile} />
            <MyPostsContainer {...props.store} />
        </div>
    )
}

export default Profile;
