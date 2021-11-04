import style from "./ProfileInfo.module.css";
import ProfileInfoStatusWithHook from "./ProfileInfoStatusWithHook";

const ProfileInfo = ({profile, status, updateStatus, ...props}) => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.name}>{profile.fullName}</h2>
            <ProfileInfoStatusWithHook status={status} updateStatus={updateStatus}/>
            <ul className={style.list}>
                <li className='divider'/>
                <li className={style.item}><span>About me:</span>{profile.aboutMe}</li>
                <li className={style.item}><span>Date of Birth:</span>props.date</li>
                <li className={style.item}><span>City:</span>props.city</li>
                <li className={style.item}><span>Education:</span>props.education</li>
                <li className={style.item}><span>Website:</span><a href={profile.contacts.instagram}>{profile.contacts.instagram}</a></li>
            </ul>
        </div>
    )
}

export default ProfileInfo;