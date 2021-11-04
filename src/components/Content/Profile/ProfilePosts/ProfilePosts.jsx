import style from "./ProfilePosts.module.css";
import ProfilePostsItem from "./ProfilePostsItem/ProfilePostsItem";
import React from "react";
import ProfilePostsForm from "./ProfilePostsForm";

const ProfilePosts = ({postData, profile, addPost,...props}) => {
    
    let profilePosts = postData
        .map(elem => {
            return (
                <ProfilePostsItem
                    avatar={elem.avatar}
                    name={elem.name}
                    time={elem.time}
                    text={elem.text}
                    likes={elem.likes}
                    key={elem.id}
                />
            )
        });
    
    return (
        <div>
            <ProfilePostsForm
                profile={profile}
                addPost={addPost}
            />
            <div className={style.wrapper}>
                <h2 className={style.title}>My posts</h2>
                {profilePosts}
            </div>
        </div>
    )
}

export default ProfilePosts;