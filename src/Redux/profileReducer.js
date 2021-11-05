import ProfileApi from "../Api/ProfileApi";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';

const initialState = {
    profile: null,
    status: '',
    postData: [],
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
                text: action.text,
                likes: '',
            }
            return {
                ...state,
                postData: [ ...state.postData, newPost],
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
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
};
export default profileReducer;
export const addPostACreator = (name, avatar, time, text) => {
    return {
        type: ADD_POST,
        name: name,
        avatar: avatar,
        time: time,
        text: text,
    }
};
export const setProfileAC = (profile) => ({type: SET_PROFILE, profile});
export const setStatusAC = (status) => ({type: SET_STATUS, status});
export const updateStatusAC = (status) => ({type: SET_STATUS, status});
export const savePhotosAC = (photos) => ({type: SAVE_PHOTO, photos});
export const getProfile = (userId) => async (dispatch) => {
    let response = await ProfileApi.getProfileInfo(userId);
    dispatch(setProfileAC(response));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileApi.getProfileStatus(userId);
    dispatch(setStatusAC(response));
};
export const updateStatus = (status) => async (dispatch) =>{
    let response = await ProfileApi.updateProfileStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(updateStatusAC(status));
    }
};
export const savePhotos = (file) => async (dispatch) =>{
    let response = await ProfileApi.savePhotos(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotosAC(response.data.data.photos));
    }
};