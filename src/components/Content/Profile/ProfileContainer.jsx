import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import {setProfileAC} from "../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfileAC})(WithUrlDataContainerComponent);