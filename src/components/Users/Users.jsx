import React from 'react';
import mystyle from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import * as axios from 'axios';

class Users extends React.Component {
    pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            });
    };

    currentPageChange = (page) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
            });
        this.props.setCurrentPage(page)
    };

    render() {
        let pages = [];
        for (let i = 1; i <= this.pagesCount; i++) {
            pages.push(i);
        };

        return <div>
            <div>{
                pages.map(page => {
                    return <span className={this.props.currentPage === page && mystyle.currentPage}
                        onClick={() => {this.currentPageChange(page)}}>{page}</span>
                })}
            </div>
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
    };
};

export default Users;
