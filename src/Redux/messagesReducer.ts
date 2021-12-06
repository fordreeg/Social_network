import getCurrentDate from "../utils/getCurrentDate";

const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

type messDialogs = {
    id: null | number
    name: string | null
    count: number | null
    avatar: string | null
}
type messagesType = {
    name: string | null
    avatar: string | null
    time: string | null
    text: string | null
}
const initialState = {
    messageInfo: {
        name: 'Vladyslav Herasymenko' as string | null,
        avatar: 'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg' as string | null,
    },
    messDialogs: [
        { id: 1, name: 'Oleg Soroka', count: 0, avatar: '#'},
        { id: 2, name: 'Koko Jumba', count: 1, avatar: '#'},
    ] as Array<messDialogs>,
    messDialog: {
        id: 1 as number | null,
        name: 'Oleg Soroka' as string | null,
        messages: [{
            name: 'Oleg Soroka',
            avatar: '#',
            time: '20:38 03.10.21',
            text: 'budeIIIb katky?)',
        }] as Array<messagesType>
    },
};

export type initialStateType = typeof initialState;

const messagesReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            const datePost = getCurrentDate();

            let messageItem:messagesType = {
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
                    messages: [...state.messDialog.messages, messageItem],
                },
            };
        default:
            return state;
    }
};
export default messagesReducer;

type sendNewMessageACreatorType = {
    type: typeof SEND_NEW_MESSAGE
    message: string
}
export const sendNewMessageACreator = (message:string):sendNewMessageACreatorType => ({ type: SEND_NEW_MESSAGE, message });
