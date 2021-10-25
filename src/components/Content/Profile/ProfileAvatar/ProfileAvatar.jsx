import style from "./ProfileAvatar.module.css";

const ProfileAvatar = (props) => {
    if(!props.profile) {
        return 'kek'
    }
    return (
        <div className={style.wrapper}>
            <img className={style.img}
                 src={props.profile.photos.large} alt='avatar'/>
            <button className={style.btn}>Edit</button>
        </div>
    )
}

export default ProfileAvatar;