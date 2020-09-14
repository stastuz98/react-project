import { followAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, startPositionChangeAC }
    from './../../redux/reducer/usersReducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (store) => {
    return {
        users: store.usersPage.users,
        totalUsersCount: store.usersPage.totalUsersCount,
        pageSize: store.usersPage.pageSize,
        currentPage: store.usersPage.currentPage,
        startPosition: store.usersPage.startPosition,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        setUsers: (users, totalUsersCount) => {
            dispatch(setUsersAC(users, totalUsersCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        setStartPositionChange: (startPosition) => {

            dispatch(startPositionChangeAC(startPosition))
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
