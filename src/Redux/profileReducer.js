import ProfileApi from "../Api/ProfileApi";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

const initialState = {
    profile: null,
    status: '',
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
            return {
                ...state,
                postData: [ ...state.postData, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status
            };
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
export const updateNewPostTextACreator = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText});
export const setProfileAC = (profile) => ({type: SET_PROFILE, profile});
export const setStatusAC = (status) => ({type: SET_STATUS, status});
export const updateStatusAC = (status) => ({type: SET_STATUS, status});
export const getProfile = (userId) => {
    return (dispatch) => {
        ProfileApi.getProfileInfo(userId)
            .then(response => {
                dispatch(setProfileAC(response));
            });
    }
};
export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileApi.getProfileStatus(userId)
            .then(response => {
                dispatch(setStatusAC(response));
            });
    }
};
export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileApi.updateProfileStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(updateStatusAC(status));
                }
            });
    }
};