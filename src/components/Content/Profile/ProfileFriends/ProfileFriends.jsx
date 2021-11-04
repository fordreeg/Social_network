import style from './ProfileFriends.module.css'
import ProfileFriendsItem from "./ProfileFriendsItem";
import {NavLink} from "react-router-dom";

const ProfileFriends = ({friends, id, ...props}) => {
    let profileFriends = friends
        .map(elem => {
            return (
                <ProfileFriendsItem
                    name={elem.name}
                    avatar={elem.avatar}
                    id={elem.id}
                    key={elem.id}
                />
            )
        });
    return (
        <div className={style.wrapper}>
            <NavLink to={'/'+id} className={style.head}>
                <div className={style.head__title}>Friends</div>
                <div className={style.head__count}>props.count</div>
            </NavLink>
            <div className={style.body}>
                {profileFriends}
            </div>
        </div>
    );
};

export default ProfileFriends;