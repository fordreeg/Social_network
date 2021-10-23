import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.name}>{props.name}</h2>
            <div className={style.status}>{props.status}</div>
            <ul className={style.list}>
                <li className='divider'/>
                <li className={style.item}><span>Date of Birth:</span>{props.date}</li>
                <li className={style.item}><span>City:</span>{props.city}</li>
                <li className={style.item}><span>Education:</span>{props.education}</li>
                <li className={style.item}><span>Website:</span><a href={props.website}>{props.website}</a></li>
            </ul>
        </div>
    )
}

export default ProfileInfo;