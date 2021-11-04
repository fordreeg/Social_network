import React, {useEffect, useState} from "react";
import style from "./ProfileInfo.module.css";
import {login} from "../../../../Redux/authReducer";

const ProfileInfoStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    console.log('fff')
    
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    
    const activateEditMode = () => {
        setEditMode(true)
    }
    
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }
    
    return (
        <>
            {
                editMode
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