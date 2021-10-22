import React from "react";
import {addPostACreator, updateNewPostTextACreator} from "../../../../../Redux/profileReducer";
import ProfilePostNew from "./ProfilePostNew";

const ProfilePostNewContainer = (props) => {
    
    let store = props.store,
        state = store.getState(),
        name = state.profilePage.profileData.name,
        avatar = state.profilePage.profileData.avatar,
        newPostText = state.profilePage.newPostText;
    
    const addPost = (e) => {
        e.preventDefault();
        let date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            day = date.getDate(),
            month = date.getMonth() + 1,
            year = String(date.getFullYear()).slice(2);
        let datePost = `${hours}:${minutes} ${day}.${month}.${year}`;
        store.dispatch(addPostACreator(name, avatar, datePost));
    };
    
    const onUpdateNewPostText = (text) => {
        store.dispatch(updateNewPostTextACreator(text));
    };
    
    return (
        <ProfilePostNew
            onUpdateNewPostText={onUpdateNewPostText}
            addPost={addPost}
            newPostText={newPostText}
            avatar={avatar}
        />
    )
}

export default ProfilePostNewContainer;