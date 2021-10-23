import style from './ProfileFriends.module.css';

const ProfileFriendsItem = (props) => {
    return (
        <div className={style.item}>
            <a href={'/' + props.id}><img src={props.avatar} alt="avatar" className={style.item__img}/></a>
            <a href={'/' + props.id} className={style.item__name}>{props.name}</a>
        </div>
    );
};

export default ProfileFriendsItem;