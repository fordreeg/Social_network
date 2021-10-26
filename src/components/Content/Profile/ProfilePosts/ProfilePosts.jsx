import style from "./ProfilePosts.module.css";
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
                    key={elem.id}
                />
            )
        });
    
    const onAddPost = (e) => {
        props.addPost(e, props.postData.name, props.postData.avatar)
    };
    
    const onUpdateNewPostText = (e) => {
        props.updateNewPostText(e.target.value);
    };
    console.log(props)
    return (
        <div>
            <form className={style.new__form} onSubmit={onAddPost}>
                <img className={style.new__img}
                     src={props.postData.avatar} alt='avatar'/>
                <div className={style.new__text}>
                <textarea className={style.new__textarea}
                          required
                          name="textarea"
                          placeholder="What's new?"
                          value={props.newPostText}
                          onChange={onUpdateNewPostText}
                />
                    <button className={style.new__btn} type='submit'>Publish</button>
                </div>
            </form>
            <div className={style.wrapper}>
                <h2 className={style.title}>My posts</h2>
                {profilePosts}
            </div>
        </div>
    )
}

export default ProfilePosts;