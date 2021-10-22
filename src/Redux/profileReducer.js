const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: +1,
                name: action.name,
                avatar: action.avatar,
                time: action.time,
                text: state.newPostText,
                likes: '',
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};
export default profileReducer;

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