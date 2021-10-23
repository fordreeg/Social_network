import style from "./MessagesDialog.module.css";
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
        <div className={style.wrapper}>
            <div className={style.title}><a href={'/' + props.id}>{props.name}</a></div>
            <div className={style.divider}/>
            <ul className={style.dialog}>
                {messagesDialogMessage}
            </ul>
            <form className={style.form} onSubmit={onSendNewMessage}>
                <div>
                    1
                </div>
                <div>
                    <textarea
                        className={style.textarea}
                        required
                        name="textarea"
                        placeholder="Write a message..."
                        value={props.newMessageText}
                        onChange={onUpdateNewMessageText}
                    />
                </div>
                <div>
                    <button className={style.btn} type='submit'/>
                </div>
            </form>
        </div>
    )
}

export default MessagesDialog;