import React from "react";
import style from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {
    state = {
        editMode: false,
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
    }
    
    
    render () {
        return (
            <>
                {
                    this.state.editMode
                        ? <input onBlur={this.DeactivateEditMode} autoFocus={true} type="text" value={this.props.mystatus}/>
                        : <div onClick={this.ActivateEditMode} className={style.status}>{this.props.mystatus}</div>
                }
            </>
        )
    }
}

export default ProfileInfo;