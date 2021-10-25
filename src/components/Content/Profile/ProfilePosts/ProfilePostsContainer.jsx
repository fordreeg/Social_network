import {addPostACreator, updateNewPostTextACreator} from "../../../../Redux/profileReducer";
import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextACreator(text))
        },
        addPost: (e, name, avatar) => {
            e.preventDefault();
            let date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                day = date.getDate(),
                month = date.getMonth() + 1,
                year = String(date.getFullYear()).slice(2),
                datePost = `${hours}:${minutes} ${day}.${month}.${year}`;
            dispatch(addPostACreator(name, avatar, datePost));
        },
    }
};

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer;