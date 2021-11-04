import style from "./ProfileAvatar.module.css";

const ProfileAvatar = ({photo, ...props}) => {
    return (
        <div className={style.wrapper}>
            <img className={style.img}
                 src={photo} alt='avatar'/>
            <button className={style.btn}>Edit</button>
        </div>
    )
}

export default ProfileAvatar;