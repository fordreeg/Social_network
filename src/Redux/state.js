const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';



const store = {
    _state: {
        profilePage: {
            profileData: {
                avatar: 'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg',
                name: 'Vladyslav Herasymenko',
                status: 'lol,kek, cheburek))',
                date: '09.04.1997',
                city: 'Kharkov',
                education: 'NURE',
                website: 'instagram.com',
                friends: '4'
            },
            newPostText: '',
            postData: [
                {
                    id: 1,
                    name: 'Vladyslav Herasymenko',
                    avatar: 'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg',
                    time: '14:25 02.10.21',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque deserunt dicta dolore eos explicabo fuga labore magni molestias numquam obcaecati optio perspiciatis quas quidem quis quod vel, veniam vitae?',
                    likes: '23',
                }
            ],
            profileFriends: [
                {avatar: '#', name: 'Chris', id: '3'},
                {avatar: '#', name: 'Kevin', id: '4'},
                {avatar: '#', name: 'Clark', id: '5'},
                {avatar: '#', name: 'Jeniffer', id: '6'},
            ],
        },
        messagesPage: {
            messDialogs: [
                {id: 1, name: 'Oleg Soroka', count: 0, avatar: '#'},
                {id: 2, name: 'Koko Jumba', count: 1, avatar: '#'},
            ],
            newMessageText: '',
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
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {},
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: +1,
                name: action.name,
                avatar: action.avatar,
                time: action.time,
                text: this._state.profilePage.newPostText,
                likes: '',
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
            
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
            
        } else if (action.type === SEND_NEW_MESSAGE) {
            let messageItem = {
                name: this._state.profilePage.profileData.name,
                avatar: this._state.profilePage.profileData.avatar,
                time: action.time,
                text: this._state.messagesPage.newMessageText,
            }
            this._state.messagesPage.messDialog.messages.push(messageItem);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
            
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    },
};
export default store;
window.state = store;
export const addPostACreator = (name, avatar, time) => {
    return {
        type: ADD_POST,
        name: name,
        avatar: avatar,
        time: time
    }
};
export const updateNewPostTextACreator = (newPostText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText,
    }
};
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