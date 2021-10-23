import style from "./ProfileAvatar.module.css";

const ProfileAvatar = (props) => {
    
    return (
        <div className={style.wrapper}>
            <img className={style.img}
                 src={props.avatar} alt='avatar'/>
            <button className={style.btn}>Edit</button>
        </div>
    )
}

export default ProfileAvatar;