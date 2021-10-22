import s from "./MessagesDialog.module.css";
import MessagesDialogMessage from "./MessagesDialogMessage/MessagesDialogMessage";
import React from "react";

const MessagesDialog = (props) => {
    
    const messagesDialogMessage = props.messages
        .map(elem => {
            return (
                <MessagesDialogMessage
                    avatar={elem.avatar}
                    name={elem.name}
                    text={elem.text}
                    time={elem.time}
                    id={props.id}
                />
            )
        });
    
    const onUpdateNewMessageText = (e) => {
        props.updateNewMessageText(e.target.value)
    };
    
    const onSendNewMessage = (e) => {
        props.sendNewMessage(e);
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