import style from './ProfileFriends.module.css';

const ProfileFriendsItem = ({id, avatar, name,...props}) => {
    return (
        <div className={style.item}>
            <a href={'/' + id}><img src={avatar} alt="avatar" className={style.item__img}/></a>
            <a href={'/' + id} className={style.item__name}>{name}</a>
        </div>
    );
};

export default ProfileFriendsItem;