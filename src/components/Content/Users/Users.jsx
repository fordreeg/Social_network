import React from 'react';
import style from './Users.module.css';
import UsersItem from "./UsersItem/UsersItem";
import axios from "axios";
// {
//     id: '1',
//         name: 'Lexa',
//     surname: 'Kiborg',
//     status: 'Ya mamkin terrorist',
//     photo: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_3.png',
//     location: {country: 'Russia', city: 'Rostov'},
//     isFriend: false,
// }
class Users extends React.Component {
    constructor (props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }
    
    render () {
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
                        console.log(u)
                        return (
                            <UsersItem
                                key={u.id}
                                id={u.id}
                                name={u.name}
                                // surname={u.surname}
                                status={u.status}
                                photo={u.photo}
                                isFriend={u.isFriend}
                                // country={u.location.country}
                                // city={u.location.city}
                                addFriend={this.props.addFriend}
                                unfriend={this.props.unfriend}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}
;

export default Users;