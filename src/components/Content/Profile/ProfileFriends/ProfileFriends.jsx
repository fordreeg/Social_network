import s from './ProfileFriends.module.css'
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
        <div className={s.wrapper}>
            <a href="#" className={s.head}>
                <div className={s.head__title}>Friends</div>
                <div className={s.head__count}>{props.count}</div>
            </a>
            <div className={s.body}>
                {profileFriends}
            </div>
        </div>
    );
};

export default ProfileFriends;