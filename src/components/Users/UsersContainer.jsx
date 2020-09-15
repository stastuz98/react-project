import React from 'react';
import { followAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC,
    startPositionChangeAC, isFetchingChangeAC } from '../../redux/reducer/usersReducer';
import mystyle from './Users.module.css';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';

class UsersAPIComponent extends React.Component {

    componentDidMount = () => {
        this.props.isFetchingChange();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isFetchingChange();
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    currentPageChange = (page) => {
        this.props.isFetchingChange();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isFetchingChange();
                this.props.setUsers(response.data.items, response.data.totalCount);
            })
        this.props.setCurrentPage(page);
    }

    getPageFive = () => {
        let pages = [];
        let currentPage = this.props.startPosition;
        let count = 4;

        if (this.props.totalUsersCount < (currentPage + count) * this.props.pageSize)
            count = Math.ceil(this.props.totalUsersCount / currentPage) - this.props.pageSize;

        for (let i = currentPage; i <= currentPage + count; i++) {
            pages.push(i);
        }
        return <span>
            {pages.map(page => {
                return <span className={this.props.currentPage === page && mystyle.currentPage}
                    onClick={() => { this.currentPageChange(page) }}>{<span>{page} </span>}</span>
            })}</span>
    }

    render() {
        return <>
            { this.props.isFetching? <Preloader />: null}
            <Users position={this.props.startPosition}
                pageSize={this.props.pageSize}
                getPageFive={this.getPageFive}
                setStartPositionChange={this.props.setStartPositionChange}
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                follow={this.props.follow} /></>
    }
}

let mapStateToProps = (store) => {
    return {
        users: store.usersPage.users,
        totalUsersCount: store.usersPage.totalUsersCount,
        pageSize: store.usersPage.pageSize,
        currentPage: store.usersPage.currentPage,
        startPosition: store.usersPage.startPosition,
        isFetching: store.usersPage.isFetching,
    };
}

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
        },
        isFetchingChange: () => dispatch(isFetchingChangeAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
