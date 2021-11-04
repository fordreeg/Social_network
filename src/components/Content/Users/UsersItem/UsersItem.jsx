import style from './UsersItem.module.css';
import {NavLink} from "react-router-dom";
import userImg from '../../../../assets/img/user.png'

const UsersItem = ({id, photos, status, name, onUnFriend, followingInProgress, onAddFriend, ...props}) => {
    return (
        <div className={style.item} key={id}>
            <div>
                <NavLink to={'/profile/' + id}>
                    <img
                        src={photos ? photos : userImg}
                        alt="avatar"
                        className={style.item__avatar}
                    />
                </NavLink>
            </div>
            <div>
                <NavLink to={'/profile/' + id} className={style.item__name}>{name} props.surname</NavLink>
                <div className={style.item__status}>{status ? status : 'status will be here'}</div>
                <div className={style.item__location}>props.country, props.city</div>
            </div>
            <div className={style.wrapBtn}>
                {
                    props.followed
                        ? <button onClick={() => {onUnFriend(id)}}
                                  disabled={followingInProgress.some(userId => userId === id)}
                                  className={style.btn}>Unfriend</button>
                        : <button onClick={() => {onAddFriend(id)}}
                                  disabled={followingInProgress.some(userId => userId === id)}
                                  className={style.btn}>+ Add Friend</button>
                }
            </div>
        </div>
    )
};

export default UsersItem;