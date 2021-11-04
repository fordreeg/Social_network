import React from 'react';
import style from './Users.module.css';
import UsersItem from "./UsersItem/UsersItem";
import Preloader from "../../Common/Preloader/Preloader";

const Users = ({totalCount, pageSize, isFetching,
                   users, onAddFriend, onUnFriend,
                   followingInProgress,
                   onPageChanged, currentPage, ...props}) => {
    let pageCount = Math.ceil(totalCount / pageSize),
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
                <button type='submit' className={style.btn} disabled={true}>Search</button>
            </form>
            <div className={style.userList}>
                {isFetching
                    ? <Preloader/>
                    : users.map(u => {
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
                                    onAddFriend={onAddFriend}
                                    onUnFriend={onUnFriend}
                                    followingInProgress={followingInProgress}
                                />
                            )
                        })
                }
            </div>
            <div className={style.pagination}>
                {
                    pages.map(p => {
                        return (
                            <span
                                key={p}
                                onClick={() => {onPageChanged(p)}}
                                className={currentPage === p ? `${style.paginationItem} ${style.selected}` : style.paginationItem}
                            >
                                {p}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users;