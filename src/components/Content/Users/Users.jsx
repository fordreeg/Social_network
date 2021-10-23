import React from 'react';
import style from './Users.module.css';
import UsersItem from "./UsersItem/UsersItem";

const Users = () => {
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
                <UsersItem/>
            </div>
        </div>
    );
};

export default Users;