import {connect} from "react-redux";
import React from "react";
import {getProfile} from "../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        this.props.getProfile(userId)
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

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);