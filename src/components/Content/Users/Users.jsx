import React from 'react';
import style from './Users.module.css';
import UsersItem from "./UsersItem/UsersItem";
import loader from "../../../assets/img/loader.svg";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize),
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
                {props.isFetching && <img className={style.loader} src={loader} alt="loader"/>}
                {props.users.map(u => {
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
                            addFriend={props.addFriend}
                            unfriend={props.unfriend}
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
                                onClick={() => {props.onPageChanged(p)}}
                                className={props.currentPage === p ? `${style.paginationItem} ${style.selected}` : style.paginationItem}
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