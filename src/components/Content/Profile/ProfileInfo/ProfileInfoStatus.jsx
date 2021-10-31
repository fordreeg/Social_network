import React from "react";
import style from "./ProfileInfo.module.css";

class ProfileInfoStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    
    ActivateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    
    DeactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }
    
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        })
    }
    
    
    render () {
        console.log(this.props)
        return (
            <>
                {
                    this.state.editMode
                        ? <input onBlur={this.DeactivateEditMode}
                                 autoFocus={true}
                                 type="text"
                                 value={this.state.status}
                                 onChange={this.onStatusChange}
                        />
                        : <div onClick={this.ActivateEditMode} className={style.status}>{this.props.status || 'Change status'}</div>
                }
            </>
        )
    }
}

export default ProfileInfoStatus;