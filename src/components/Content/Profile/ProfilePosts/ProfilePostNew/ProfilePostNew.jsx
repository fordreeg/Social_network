import s from "./ProfilePostNew.module.css";
import React from "react";

const ProfilePostNew = (props) => {
    const onAddPost = (e) => {
        props.addPost(e, props.name, props.avatar)
    };
    
    let onUpdateNewPostText = (e) => {
        props.updateNewPostText(e.target.value);
    };
    
    return (
        <form className={s.form} onSubmit={onAddPost}>
            <img className={s.img}
                 src={props.avatar} alt='avatar'/>
            <div className={s.text}>
                <textarea className={s.textarea}
                          required
                          name="textarea"
                          placeholder="What's new?"
                          value={props.newPostText}
                          onChange={onUpdateNewPostText}
                />
                <button className={s.btn} type='submit'>Publish</button>
            </div>
        </form>
    )
}

export default ProfilePostNew;