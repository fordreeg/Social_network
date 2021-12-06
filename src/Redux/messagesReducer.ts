import getCurrentDate from "../utils/getCurrentDate";

const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

const initialState = {
    messageInfo: {
        name: 'Vladyslav Herasymenko',
        avatar: 'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg',
    },
    messDialogs: [
        {id: 1, name: 'Oleg Soroka', count: 0, avatar: '#'},
        {id: 2, name: 'Koko Jumba', count: 1, avatar: '#'},
    ] as Array<messDialogsType>,
    messDialog: {
        id: 1,
        name: 'Oleg Soroka',
        messages: [{
            name: 'Oleg Soroka',
            avatar: '#',
            time: '20:38 03.10.21',
            text: 'budeIIIb katky?)',
        }] as Array<messagesType>
    },
};
export type initialStateType = typeof initialState;
type messDialogsType = {
    id: number
    name: string
    count: number
    avatar: string
};
type messagesType = {
    name: string
    avatar: string
    time: string
    text: string
}

const messagesReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            const datePost = getCurrentDate();
            
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
type sendNewMessageACreatorType = {
    type: typeof SEND_NEW_MESSAGE,
    message: string
}
export const sendNewMessageACreator = (message:string):sendNewMessageACreatorType => ({type: SEND_NEW_MESSAGE, message});