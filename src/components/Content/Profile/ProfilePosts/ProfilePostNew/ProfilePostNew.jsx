import s from "./ProfilePostNew.module.css";
import React from "react";
import {addPostACreator, updateNewPostTextACreator} from "../../../../../Redux/profileReducer";

const ProfilePostNew = (props) => {
    let textarea = React.createRef();
    
    const onAddPost = (e) => {
        e.preventDefault();
        let date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes() + 1,
            day = date.getDate(),
            month = date.getMonth() + 1,
            year = String(date.getFullYear()).slice(2);
        let datePost = `${hours}:${minutes} ${day}.${month}.${year}`;
        props.dispatch(addPostACreator(props.name, props.avatar, datePost));
    };
    
    const onUpdateNewPostText = () => {
        props.dispatch(updateNewPostTextACreator(textarea.current.value));
    };
    
    return (
        <form className={s.form} onSubmit={onAddPost}>
            <img className={s.img}
                 src={props.avatar} alt='avatar'/>
            <div className={s.text}>
                <textarea ref={textarea}
                          className={s.textarea}
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