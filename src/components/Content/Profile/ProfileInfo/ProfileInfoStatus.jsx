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
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }
    
    
    render () {
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