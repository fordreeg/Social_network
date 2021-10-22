import React from "react";
import {addPostACreator, updateNewPostTextACreator} from "../../../../../Redux/profileReducer";
import ProfilePostNew from "./ProfilePostNew";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        avatar: state.profilePage.profileData.avatar,
        name: state.profilePage.profileData.name,
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

const ProfilePostNewContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePostNew);

export default ProfilePostNewContainer;