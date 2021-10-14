const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let messageItem = {
                name: state.messageInfo.name,
                avatar: state.messageInfo.avatar,
                time: action.time,
                text: state.newMessageText,
            }
            state.messDialog.messages.push(messageItem);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
};
export default messagesReducer;

export const sendNewMessageACreator = (time) => {
    return {
        type: SEND_NEW_MESSAGE,
        time: time,
    }
};
export const updateNewMessageTextACreator = (newMessageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText,
    }
};