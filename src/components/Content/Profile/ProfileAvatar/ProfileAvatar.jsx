import style from "./ProfileAvatar.module.css";

const ProfileAvatar = ({photo, isOwner, savePhotos, ...props}) => {
    const onMainPhotosSelected = (e) => {
        if(e.target.files.length) {
            savePhotos(e.target.files[0]);
        }
    };
    
    
    
    return (
        <div className={style.wrapper}>
            <img className={style.img}
                 src={photo} alt='avatar'/>
            {
                isOwner && <input
                    type='file'
                    className={style.btn}
                    placeholder='Edit'
                    onChange={onMainPhotosSelected}
                />
            }
        </div>
    )
}

export default ProfileAvatar;