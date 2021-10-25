import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import {setProfileAC} from "../../../Redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfileAC(response.data);
            });
    }
    render() {
        return (
            <Profile
                profileFriends={this.props.profileFriends}
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {setProfileAC})(ProfileContainer);