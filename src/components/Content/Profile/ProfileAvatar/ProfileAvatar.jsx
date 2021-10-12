import s from "./ProfileAvatar.module.css";

const ProfileAvatar = (props) => {
    
    return (
        <div className={s.wrapper}>
            <img className={s.img}
                 src={props.avatar} alt='avatar'/>
            <button className={s.btn}>Edit</button>
        </div>
    )
}

export default ProfileAvatar;