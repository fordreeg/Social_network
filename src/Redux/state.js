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
    addPost(name, avatar, time) {
        let newPost = {
            id: +1,
            name: name,
            avatar: avatar,
            time: time,
            text: this._state.profilePage.newPostText,
            likes: '',
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this.callSubscriber(this._state);
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this.callSubscriber(this._state);
    },
    sendNewMessage(time) {
        let messageItem = {
            name: this._state.profilePage.profileData.name,
            avatar: this._state.profilePage.profileData.avatar,
            time: time,
            text: this._state.messagesPage.newMessageText,
        }
        this._state.messagesPage.messDialog.messages.push(messageItem);
        this._state.messagesPage.newMessageText = '';
        this.callSubscriber(this._state);
    },
    updateNewMessageText(newMessageText) {
        this._state.messagesPage.newMessageText = `${newMessageText}`;
        this.callSubscriber(this._state);
    },
    callSubscriber() {},
    subscribe(observer) {
        this.callSubscriber = observer;
    },
};
export default store;