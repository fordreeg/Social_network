import {addPostACreator} from "../../../../Redux/profileReducer";
import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        profile: state.profilePage.profile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (name, avatar, text) => {
            let date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                day = date.getDate(),
                month = date.getMonth() + 1,
                year = String(date.getFullYear()).slice(2),
                datePost = `${hours}:${minutes} ${day}.${month}.${year}`;
            dispatch(addPostACreator(name, avatar, datePost, text));
        },
    }
};

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer;