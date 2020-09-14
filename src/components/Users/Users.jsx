import React from 'react';
import mystyle from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                console.log('response.data.totalCount = ', response.data.totalCount)
            })
    }

    currentPageChange = (page) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
            })
        this.props.setCurrentPage(page)
    }

    getPageFive = () => {
        let pages = [];
        let currentPage = this.props.startPosition;
        let count = 4
        if (this.props.totalUsersCount < (currentPage + count) * this.props.pageSize)
            count = Math.ceil(this.props.totalUsersCount / currentPage) - this.props.pageSize
        for (let i = currentPage; i <= currentPage + count; i++) {
            pages.push(i);
        }

        return <span>{
            pages.map(page => {
                return <span className={this.props.currentPage === page && mystyle.currentPage}
                    onClick={() => { this.currentPageChange(page) }}>{<span>{page} </span>}</span>
            })}
        </span>
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let position = this.props.startPosition;

        return <div>
            {<div className={mystyle.pagination}><span
                className={(position === 1) ? mystyle.locked : false}
                onClick={() => {
                    if (position - 5 > 0)
                        this.props.setStartPositionChange(position -= 5)
                }}>&#8592;</span>
                {this.getPageFive(position)}
                <span
                    className={(this.props.totalUsersCount < (position + 4) * this.props.pageSize) ? mystyle.locked : false}
                    onClick={() => {
                        if (position + 5 < pagesCount)
                            this.props.setStartPositionChange(position += 5)
                    }}>&#8594;</span>
            </div>}

            {this.props.users.map(item => {
                return (
                    <div className={mystyle.user}>
                        <div>
                            <div className={mystyle.avatarka}><img src={userPhoto} alt="noPhoto" /></div>
                            <div><button onClick={() => { this.props.follow(item.id) }}>
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
            })
            }</div>
    }
}

export default Users;
