import s from './ProfileFriends.module.css';

const ProfileFriendsItem = (props) => {
    return (
        <div className={s.item}>
            <a href={'/' + props.id}><img src={props.avatar} alt="avatar" className={s.item__img}/></a>
            <a href={'/' + props.id} className={s.item__name}>{props.name}</a>
        </div>
    );
};

export default ProfileFriendsItem;