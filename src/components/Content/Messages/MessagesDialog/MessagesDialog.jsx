import s from "./MessagesDialog.module.css";
import MessagesDialogMessage from "./MessagesDialogMessage/MessagesDialogMessage";
import React from "react";
import {sendNewMessageACreator, updateNewMessageTextACreator} from "../../../../Redux/state";

const MessagesDialog = (props) => {
    
    let textarea = React.createRef();
    
    const messagesDialogMessage = props.messages
        .map(elem => {
            return (
                <MessagesDialogMessage
                    avatar={elem.avatar}
                    name={elem.name}
                    message={elem.messages}
                    text={elem.text}
                    time={elem.time}
                    id={props.id}
                />
            )
        });
    
    const onUpdateNewMessageText = () => {
        props.dispatch(updateNewMessageTextACreator(textarea.current.value))
    };
    
    const onSendNewMessage = (e) => {
        e.preventDefault();
        let date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes() + 1,
            day = date.getDate(),
            month = date.getMonth() + 1,
            year = String(date.getFullYear()).slice(2);
        let datePost = `${hours}:${minutes} ${day}.${month}.${year}`;
        props.dispatch(sendNewMessageACreator(datePost))
    };

    return (
        <div className={s.wrapper}>
            <div className={s.title}><a href={'/' + props.id}>{props.name}</a></div>
            <div className={s.divider}/>
            <ul className={s.dialog}>
                {messagesDialogMessage}
            </ul>
            <form className={s.form} onSubmit={onSendNewMessage}>
                <div>
                    1
                </div>
                <div>
                    <textarea
                        className={s.textarea}
                        required
                        name="textarea"
                        placeholder="Write a message..."
                        value={props.newMessageText}
                        onChange={onUpdateNewMessageText}
                        ref={textarea}
                    />
                </div>
                <div>
                    <button className={s.btn} type='submit'/>
                </div>
            </form>
        </div>
    )
}

export default MessagesDialog;