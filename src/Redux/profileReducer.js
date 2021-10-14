const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
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