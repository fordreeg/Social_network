import style from './UsersItem.module.css';
import {NavLink} from "react-router-dom";
import userImg from '../../../../assets/img/user.png'

const UsersItem = (props) => {
    console.log(props)
    return (
        <div className={style.item} key={props.id}>
            <div>
                <NavLink to={'/profile/' + props.id}>
                    <img
                        src={props.photos ? props.photos : userImg}
                        alt="avatar"
                        className={style.item__avatar}
                    />
                </NavLink>
            </div>
            <div>
                <NavLink to={'/profile/' + props.id} className={style.item__name}>{props.name} {props.surname}</NavLink>
                <div className={style.item__status}>{props.status ? props.status : 'status will be here'}</div>
                <div className={style.item__location}>{props.country}, {props.city}</div>
            </div>
            <div className={style.wrapBtn}>
                {
                    props.followed
                        ? <button onClick={() => {props.onAddFriend(props.id)}}
                                  className={style.btn}>+ Add Friend</button>
                        : <button onClick={() => {props.onAddFriend(props.id)}}
                                  className={style.btn}>+ Add Friend</button>
                }
            </div>
        </div>
    )
};

export default UsersItem;