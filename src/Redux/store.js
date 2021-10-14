import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";


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
        },
    },
    _callSubscriber() {},
    
    getState() {return this._state},
    subscribe(observer) {this._callSubscriber = observer;},
    
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    },
};
export default store;
window.state = store;

