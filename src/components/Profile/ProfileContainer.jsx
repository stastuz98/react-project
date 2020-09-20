import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setProfileInfo } from './../../redux/reducer/usersReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfileInfo(response.data);
            })
    }

    render() {
        return <Profile {...this.props.store.getState().usersPage} />
    }
}

let mapStateToProps = (store) => {
    return {
        profile: store.usersPage.profile,
    }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect (mapStateToProps, { setProfileInfo })(WithRouterProfileContainer);
