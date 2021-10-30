import {connect} from "react-redux";
import React from "react";
import {getProfile} from "../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import WithAuthRedirect from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

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
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => (
    {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        profileFriends: state.profilePage.profileFriends,
    }
);

export default compose(
    withRouter,
    WithAuthRedirect,
    connect(mapStateToProps, {getProfile}))(ProfileContainer);