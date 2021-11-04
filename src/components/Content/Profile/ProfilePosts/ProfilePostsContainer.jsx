import {addPostACreator} from "../../../../Redux/profileReducer";
import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";
import getCurrentDate from "../../../../utils/getCurrentDate";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        profile: state.profilePage.profile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (name, avatar, text) => {
            const datePost = getCurrentDate();
            dispatch(addPostACreator(name, avatar, datePost, text));
        },
    }
};

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer;