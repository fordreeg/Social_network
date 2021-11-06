import style from "./ProfileInfo.module.css";
import ProfileInfoStatusWithHook from "./ProfileInfoStatusWithHook";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveNewDataProfile}) => {

    const [editMode, setEditMode] = useState(false);
    
    const onSaveNewData = (values, {setSubmitting, setStatus}) => {
        saveNewDataProfile(values, setStatus).then(result => {
            if(result === true ) {
                setEditMode(false)
            }
            setSubmitting(false);
        })
        
            // .then(
            //     () => {
            //         setSubmitting(false)
            //     }
            // )
    }
    return (
        <div className={style.wrapper}>
            <h2 className={style.name}>{profile.fullName}</h2>
            <ProfileInfoStatusWithHook status={status} updateStatus={updateStatus}/>
            {editMode
                ? <ProfileDataForm
                    profile={profile}
                    onSaveNewData={onSaveNewData}
                    setEditMode={setEditMode}
                />
                : <ProfileData
                    goToEditMode={() => {setEditMode(true)}}
                    profile={profile}
                    isOwner={isOwner}
                />
            }
        </div>
    )
}

const ProfileData = ({profile, goToEditMode, isOwner}) => {
    return (
        <div className={style.list}>
            <div className='divider'/>
            <div className={style.item}>
                {profile.aboutMe && <div><span>About me:</span>{profile.aboutMe}</div>}
            </div>
            <div className={style.item}>
                <span>Open to work:</span>{profile.lookingForAJob === 'true' ? 'yes' : 'no'}
            </div>
            <div className={style.item}>
                {profile.lookingForAJob === 'true' && <div><span>My technical skills:</span>{profile.lookingForAJobDescription}</div>}
            </div>
            <div className={style.item}>
                {profile.contacts.website && <div><span>Website:</span><a href={profile.contacts.website}>{profile.contacts.website}</a></div>}
            </div>
            <div className={style.item}>
                {profile.contacts.github && <div><span>Github:</span><a href={profile.contacts.github}>{profile.contacts.github}</a></div>}
            </div>
            <div className={style.item}>
                {profile.contacts.instagram && <div><span>Instagram:</span><a href={profile.contacts.instagram}>{profile.contacts.instagram}</a></div>}
            </div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
        </div>
    )
}


export default ProfileInfo;