import React from "react";
import {sendNewMessageACreator, updateNewMessageTextACreator} from "../../../../Redux/messagesReducer";
import MessagesDialog from "./MessagesDialog";

const MessagesDialogContainer = (props) => {
    
    let store = props.store,
        state = store.getState(),
        messDialog = state.messagesPage.messDialog,
        messages = messDialog.messages,
        id = messDialog.id,
        name = messDialog.name,
        newMessageText = state.messagesPage.newMessageText;
    
    
    const onUpdateNewMessageText = (text) => {
        store.dispatch(updateNewMessageTextACreator(text))
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
        store.dispatch(sendNewMessageACreator(datePost))
    };

    return (
        <MessagesDialog
            updateNewMessageText={onUpdateNewMessageText}
            sendNewMessage={onSendNewMessage}
            messages={messages}
            id={id}
            name={name}
            newMessageText={newMessageText}
        />
    )
}

export default MessagesDialogContainer;