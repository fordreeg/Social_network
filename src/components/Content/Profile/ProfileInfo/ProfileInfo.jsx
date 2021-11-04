import style from "./ProfileInfo.module.css";
import ProfileInfoStatusWithHook from "./ProfileInfoStatusWithHook";

const ProfileInfo = (props) => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.name}>{props.profile.fullName}</h2>
            <ProfileInfoStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
            <ul className={style.list}>
                <li className='divider'/>
                <li className={style.item}><span>About me:</span>{props.profile.aboutMe}</li>
                <li className={style.item}><span>Date of Birth:</span>props.date</li>
                <li className={style.item}><span>City:</span>props.city</li>
                <li className={style.item}><span>Education:</span>props.education</li>
                <li className={style.item}><span>Website:</span><a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></li>
            </ul>
        </div>
    )
}

export default ProfileInfo;