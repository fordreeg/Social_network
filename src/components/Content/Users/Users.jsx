import React from 'react';
import style from './Users.module.css';
import UsersItem from "./UsersItem/UsersItem";
import * as axios from "axios";

class Users extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    
    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize),
            pages = [];
        
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        
        return (
            <div className={style.wrapper}>
                <div className={style.head}>
                    <h2 className={style.title}>Users</h2>
                </div>
                <form action="#" className={style.form}>
                    <input type="search" id="site-search" name="search"
                           placeholder="Type to search..."
                           className={style.input}
                    />
                    <button type='submit' className={style.btn}>Search</button>
                </form>
                <div className={style.userList}>
                    {this.props.users.map(u => {
                        return (
                            <UsersItem
                                key={u.id}
                                id={u.id}
                                name={u.name}
                                // surname={u.surname}
                                status={u.status}
                                photos={u.photos.small}
                                followed={u.followed}
                                // country={u.location.country}
                                // city={u.location.city}
                                addFriend={this.props.addFriend}
                                unfriend={this.props.unfriend}
                            />
                        )
                    })}
                </div>
                <div className={style.pagination}>
                    {
                        pages.map(p => {
                            return (
                                <span
                                    key={p}
                                    onClick={() => {this.onPageChanged(p)}}
                                    className={this.props.currentPage === p ? `${style.paginationItem} ${style.selected}` : style.paginationItem}
                                >
                                    {p}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
;

export default Users;