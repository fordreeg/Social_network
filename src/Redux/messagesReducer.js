const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    messageInfo: {
        name: 'Vladyslav Herasymenko',
        avatar: 'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg',
    },
    messDialogs: [
        {id: 1, name: 'Oleg Soroka', count: 0, avatar: '#'},
        {id: 2, name: 'Koko Jumba', count: 1, avatar: '#'},
    ],
    messDialog: {
        id: 1,
        name: 'Oleg Soroka',
        messages: [{
            name: 'Oleg Soroka',
            avatar: '#',
            time: '20:38 03.10.21',
            text: 'budeIIIb katky?)',
        }]
    },
    newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE: {
            let messageItem = {
                name: state.messageInfo.name,
                avatar: state.messageInfo.avatar,
                time: action.time,
                text: state.newMessageText,
            }
            let stateCopy = {...state};
            stateCopy.messDialog = state.messDialog;
            stateCopy.messDialog.messages = state.messDialog.messages;
            stateCopy.messDialog.messages.push(messageItem);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
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