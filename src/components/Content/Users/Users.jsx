import React from 'react';
import style from './Users.module.css';
import UsersItem from "./UsersItem/UsersItem";

const Users = (props) => {
    
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: '1',
                    name: 'Lexa',
                    surname: 'Kiborg',
                    status: 'Ya mamkin terrorist',
                    photo: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_3.png',
                    location: {country: 'Russia', city: 'Rostov'},
                    isFriend: false,
                },
                {
                    id: '2',
                    name: 'Terry',
                    surname: 'Brown',
                    status: 'Ya net',
                    photo: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_3.png',
                    location: {country: 'USA', city: 'Boston'},
                    isFriend: false,
                },
                {
                    id: '3',
                    name: 'Roman',
                    surname: 'Ubiica',
                    status: 'A ya da',
                    photo: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_3.png',
                    location: {country: 'Belarus', city: 'Minsk'},
                    isFriend: false,
                },
            ]
        );
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
                {props.users.map(u => {
                    return (
                        <UsersItem
                            key={u.id}
                            id={u.id}
                            name={u.name}
                            surname={u.surname}
                            status={u.status}
                            photo={u.photo}
                            isFriend={u.isFriend}
                            country={u.location.country}
                            city={u.location.city}
                            addFriend={props.addFriend}
                            unfriend={props.unfriend}
                        />
                    )
                })}
                {/*<UsersItemContainer/>*/}
            </div>
        </div>
    );
};

export default Users;