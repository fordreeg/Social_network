import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.name}>{props.name}</h2>
            <div className={s.status}>{props.status}</div>
            <ul className={s.list}>
                <li className='divider'/>
                <li className={s.item}><span>Date of Birth:</span>{props.date}</li>
                <li className={s.item}><span>City:</span>{props.city}</li>
                <li className={s.item}><span>Education:</span>{props.education}</li>
                <li className={s.item}><span>Website:</span><a href={props.website}>{props.website}</a></li>
            </ul>
        </div>
    )
}

export default ProfileInfo;