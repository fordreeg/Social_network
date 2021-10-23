import s from "./ProfilePosts.module.css";
import ProfilePostsItem from "./ProfilePostsItem/ProfilePostsItem";
import React from "react";

const ProfilePosts = (props) => {
    
    let profilePosts = props.postData
        .map(elem => {
            return (
                <ProfilePostsItem
                    avatar={elem.avatar}
                    name={elem.name}
                    time={elem.time}
                    text={elem.text}
                    likes={elem.likes}
                />
            )
        });
    
    const onAddPost = (e) => {
        props.addPost(e, props.name, props.avatar)
    };
    
    const onUpdateNewPostText = (e) => {
        props.updateNewPostText(e.target.value);
    };
    return (
        <div>
            <form className={s.new__form} onSubmit={onAddPost}>
                <img className={s.new__img}
                     src={props.avatar} alt='avatar'/>
                <div className={s.new__text}>
                <textarea className={s.new__textarea}
                          required
                          name="textarea"
                          placeholder="What's new?"
                          value={props.newPostText}
                          onChange={onUpdateNewPostText}
                />
                    <button className={s.new__btn} type='submit'>Publish</button>
                </div>
            </form>
            <div className={s.wrapper}>
                <h2 className={s.title}>My posts</h2>
                {profilePosts}
            </div>
        </div>
    )
}

export default ProfilePosts;