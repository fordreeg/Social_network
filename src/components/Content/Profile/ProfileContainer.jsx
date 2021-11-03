import {connect} from "react-redux";
import React from "react";
import {getProfile, getStatus, updateStatus} from "../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import WithAuthRedirect from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => (
    {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        profileFriends: state.profilePage.profileFriends,
        authId: state.auth.userId,
    }
);

export default compose(
    withRouter,
    WithAuthRedirect,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}))
(ProfileContainer);