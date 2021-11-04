import React, {useState} from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfoStatus = (props) => {
    
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    
    const activateEditMode = () => {
        setEditMode(true)
    }
    
    const deactivateEditMode = () => {
        setEditMode(true)
        props.updateStatus(status);
    }
    
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }
    
    return (
        <>
            {
                this.state.editMode
                    ? <input onBlur={deactivateEditMode}
                             autoFocus={true}
                             type="text"
                             value={status}
                             onChange={onStatusChange}
                    />
                    : <div onClick={activateEditMode} className={style.status}>{props.status || 'Change status'}</div>
            }
        </>
    )
}

export default ProfileInfoStatus;