import style from './ProfileFriends.module.css'
import ProfileFriendsItem from "./ProfileFriendsItem";

const ProfileFriends = (props) => {
    let profileFriends = props.friends
        .map(elem => {
            return (
                <ProfileFriendsItem
                    name={elem.name}
                    avatar={elem.avatar}
                    id={elem.id}
                />
            )
        });
    return (
        <div className={style.wrapper}>
            <a href="#" className={style.head}>
                <div className={style.head__title}>Friends</div>
                <div className={style.head__count}>{props.count}</div>
            </a>
            <div className={style.body}>
                {profileFriends}
            </div>
        </div>
    );
};

export default ProfileFriends;