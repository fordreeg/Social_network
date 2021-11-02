const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

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
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes() + 1,
                day = date.getDate(),
                month = date.getMonth() + 1,
                year = String(date.getFullYear()).slice(2),
                datePost = `${hours}:${minutes} ${day}.${month}.${year}`;
            
            let messageItem = {
                name: state.messageInfo.name,
                avatar: state.messageInfo.avatar,
                time: datePost,
                text: action.message,
            }
            return {
                ...state,
                messDialog:
                    {
                        ...state.messDialog,
                        messages: [...state.messDialog.messages, messageItem]
                    },
            };
        default:
            return state;
    }
};
export default messagesReducer;

export const sendNewMessageACreator = (message) => ({type: SEND_NEW_MESSAGE, message});